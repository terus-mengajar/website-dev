import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";
import { FUNPAPER_SINGLE_PAGE } from "@/lib/funpaper_type";
// import { FUNPAPER_TEMA_BUNDLE } from "@/lib/funpaper_type";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    // const limit = searchParams.get("limit");

    // 1. Fetch Funpaper Calistung
    const sqlCalistung = `
      SELECT funpaper_calistung.downloaded, funpaper_calistung.played, funpaper_calistung.slug, funpaper_calistung.updated_at, funpaper_calistung.image_url, CONCAT(funpaper_calistung.name, ' - ', theme_calistung.name) AS name, 'funpaper-calistung' AS tipe
      FROM funpaper_calistung
      LEFT JOIN theme_calistung ON funpaper_calistung.theme_calistung_id = theme_calistung.id
      WHERE interactive=1
      ORDER BY updated_at DESC
    `;
    const resCalistung = await fetch(CLOUDFLARE_D1_URL, {
      method: "POST",
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({ sql: sqlCalistung, params: [] }),
    });
    const dataCalistung = await resCalistung.json();
    const itemsCalistung = (dataCalistung?.result?.[0]?.results ?? []).map(
      (item: any) => ({
        ...item,
        category: "calistung",
        link_detail: `funpaper-calistung/${item.slug}`,
      }),
    );

    // 2. Fetch Funpaper Coding
    const sqlCoding = `
      SELECT funpaper_coding.downloaded, funpaper_coding.played, funpaper_coding.slug, funpaper_coding.updated_at, funpaper_coding.image_url, funpaper_coding.name, 'funpaper-coding' AS tipe
      FROM funpaper_coding
      WHERE interactive=1
      ORDER BY updated_at DESC
    `;
    const resCoding = await fetch(CLOUDFLARE_D1_URL, {
      method: "POST",
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({ sql: sqlCoding, params: [] }),
    });
    const dataCoding = await resCoding.json();
    const itemsCoding = (dataCoding?.result?.[0]?.results ?? []).map(
      (item: any) => ({
        ...item,
        category: "coding",
        link_detail: `funpaper-coding/${item.slug}`,
      }),
    );

    // 3. Fetch Funpaper Harian
    const sqlHarian = `
      SELECT funpaper.downloaded, funpaper.played, funpaper.slug, funpaper.updated_at, funpaper.image_url, CONCAT(funpaper.name, ' - ', activity.name) AS name, 'funpaper-harian' as tipe
      FROM funpaper
      JOIN activity ON funpaper.activity_id = activity.id
      WHERE funpaper_type_id = ${FUNPAPER_SINGLE_PAGE}
      AND interactive=1
      ORDER BY updated_at DESC
    `;
    const resHarian = await fetch(CLOUDFLARE_D1_URL, {
      method: "POST",
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({ sql: sqlHarian, params: [] }),
    });
    const dataHarian = await resHarian.json();
    const itemsHarian = (dataHarian?.result?.[0]?.results ?? []).map(
      (item: any) => ({
        ...item,
        category: "harian",
        link_detail: `funpaper-harian/${item.slug}`,
      }),
    );

    // Combine all
    const allItems = [...itemsCalistung, ...itemsCoding, ...itemsHarian];

    return NextResponse.json(allItems);
  } catch (err) {
    console.error("Gagal ambil data:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
