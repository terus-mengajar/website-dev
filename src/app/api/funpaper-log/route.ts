import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function GET() {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const email = session.user.email;

  try {
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/d1/database/${process.env.CLOUDFLARE_DATABASE_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sql: `
          SELECT fdl.id, f.slug, CONCAT(f.name,' - ',a.name) name
          FROM funpaper_download_log fdl
          JOIN funpaper f ON f.id=fdl.funpaper_id
          JOIN activity a ON a.id=f.activity_id
          WHERE fdl.email = ? 
          ORDER BY fdl.created_at DESC
          `,
          params: [email],
        }),
      }
    );

    const data = await res.json();
    const logs = data?.result?.[0]?.results ?? [];

    return NextResponse.json(logs);
  } catch (err) {
    console.error("Gagal ambil log:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
