import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function GET(req: Request, { params }) {
  try {
    // const { searchParams } = new URL(req.url);
    const { slug } = await params;

    const res = await fetch(CLOUDFLARE_D1_URL, {
      method: "POST",
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({
        sql: `
            SELECT DISTINCT 
              activity.name, 
              MIN(funpaper.image_url) AS image_url,
              MIN(funpaper.thumbnail_url) AS thumbnail_url,
              MIN(funpaper.id) AS funpaper_id
            FROM funpaper_bundle_detail fbd
            JOIN funpaper_bundle ON funpaper_bundle.id=fbd.funpaper_bundle_id
            JOIN funpaper ON funpaper.id=fbd.funpaper_id
            JOIN activity ON activity.id=funpaper.activity_id
            WHERE funpaper_bundle.slug = ?
            GROUP BY activity.name
            HAVING MIN(funpaper.image_url) IS NOT NULL
            ORDER BY MIN(activity.name) ASC
        `,
        params: [slug],
      }),
    });

    const data = await res.json();
    const logs = data?.result?.[0]?.results ?? [];
    if (!data.success) console.log(data.errors);

    return NextResponse.json(logs);
  } catch (err) {
    console.error("Gagal ambil data:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
