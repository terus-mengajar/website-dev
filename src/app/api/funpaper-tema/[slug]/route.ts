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
            SELECT funpaper_bundle.*, age.short_name as age
            FROM funpaper_bundle
            JOIN age ON age.id=funpaper_bundle.age_id
            WHERE funpaper_bundle.slug = ?
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
