import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function GET(
  request: Request,
  { params }
) {
  try {
    const { slug } = await params;

    const res = await fetch(
      CLOUDFLARE_D1_URL,
      {
        method: "POST", // tetap POST untuk Cloudflare D1
        headers: CLOUDFLARE_HEADER,
        body: JSON.stringify({
          sql: `
            SELECT funpaper.*, age.short_name as age, activity.name as activity, theme.name as theme 
            FROM funpaper
            JOIN age ON age.id=funpaper.age_id
            JOIN activity ON activity.id=funpaper.activity_id
            JOIN theme ON theme.id=funpaper.theme_id
            WHERE funpaper.slug = ?
            LIMIT 1
          `,
          params: [slug],
        }),
      }
    );

    const data = await res.json();
    if(!data.success)
      console.log(data.errors);

    const funpaper = data?.result?.[0]?.results?.[0] ?? null;

    if (!funpaper) {
      return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }

    return NextResponse.json(funpaper);
  } catch (err) {
    console.error("Gagal ambil detail funpaper:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
