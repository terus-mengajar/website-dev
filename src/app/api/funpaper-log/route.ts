import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function GET() {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const email = session.user.email;

  try {
    const res = await fetch(
      CLOUDFLARE_D1_URL,
      {
        method: "POST",
        headers: CLOUDFLARE_HEADER,
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
