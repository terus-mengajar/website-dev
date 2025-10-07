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
            SELECT funpaper_calistung.*, theme_calistung.name theme
            FROM funpaper_calistung
            JOIN theme_calistung ON funpaper_calistung.theme_calistung_id = theme_calistung.id
            WHERE funpaper_calistung.slug = ?
            LIMIT 1
          `,
          params: [slug],
        }),
      }
    );

    const data = await res.json();
    console.log(data)
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
