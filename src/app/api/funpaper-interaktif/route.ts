import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";
// import {
//   FUNPAPER_HARIAN,
//   FUNPAPER_CALISTUNG,
//   FUNPAPER_CODING,
// } from "@/lib/constants";
import { FUNPAPER_SINGLE_PAGE } from "@/lib/funpaper_type";
// import { FUNPAPER_TEMA_BUNDLE } from "@/lib/funpaper_type";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const tema = searchParams.get("tema");
    // console.log(tema);
    // harian-7,harian-2

    // UBAH tema jadi ARRAY
    // const temaArr =
    //   tema
    //     ?.split(",")
    //     .map(Number)
    //     .filter((n) => !isNaN(n)) ?? [];

    // BUNGKUS SEMUA TEMA PAKAI PETIK
    let temaWithQuotes = tema
      ? tema
          .split(",")
          .map((t: string) => `"${t.trim()}"`) //bungkus pakai ""
          .join(",")
      : "";

    // TEMA => calistung-id, coding-id, harian-id

    let itemsCalistung = [];
    let itemsCoding = [];
    let itemsHarian = [];

    // 1. Fetch Funpaper Calistung
    // if (temaArr.length === 0) {
    let queryFilterCalistung = tema
      ? `AND ('calistung-' || activity.id) IN (${temaWithQuotes})`
      : "";
    let queryFilterCoding = tema
      ? `AND ('coding-' || activity.id) IN (${temaWithQuotes})`
      : "";
    let queryFilterHarian = tema
      ? `AND ('harian-' || activity.id) IN (${temaWithQuotes})`
      : "";

    const sqlCalistung = `
        SELECT funpaper_calistung.downloaded, funpaper_calistung.played, funpaper_calistung.slug, funpaper_calistung.updated_at, funpaper_calistung.image_url, funpaper_calistung.interactive_image_url, CONCAT(funpaper_calistung.name, ' - ', theme_calistung.name) AS name, 'funpaper-calistung' AS tipe
        FROM funpaper_calistung
        LEFT JOIN theme_calistung ON funpaper_calistung.theme_calistung_id = theme_calistung.id
        JOIN activity_calistung activity ON funpaper_calistung.activity_calistung_id = activity.id
        WHERE funpaper_calistung.interactive=1
        ${queryFilterCalistung}
        ORDER BY updated_at DESC
      `;

    const resCalistung = await fetch(CLOUDFLARE_D1_URL, {
      method: "POST",
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({ sql: sqlCalistung, params: [] }),
    });
    const dataCalistung = await resCalistung.json();
    itemsCalistung = (dataCalistung?.result?.[0]?.results ?? []).map(
      (item: any) => ({
        ...item,
        category: "calistung",
        link_detail: `funpaper-calistung/${item.slug}`,
      }),
    );
    // }

    // 2. Fetch Funpaper Coding
    // if (temaArr.length === 0) {
    const sqlCoding = `
        SELECT funpaper_coding.downloaded, funpaper_coding.played, funpaper_coding.slug, funpaper_coding.updated_at, funpaper_coding.image_url, funpaper_coding.interactive_image_url, CONCAT(funpaper_coding.name, ' - ', theme_coding.name) AS name, 'funpaper-coding' AS tipe
        FROM funpaper_coding
        JOIN activity ON funpaper_coding.activity_id = activity.id
        JOIN theme_coding ON theme_coding.id = funpaper_coding.theme_coding_id
        WHERE interactive=1
        ${queryFilterCoding}
        ORDER BY updated_at DESC
      `;

    // console.log(sqlCalistung);
    const resCoding = await fetch(CLOUDFLARE_D1_URL, {
      method: "POST",
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({ sql: sqlCoding, params: [] }),
    });
    const dataCoding = await resCoding.json();
    itemsCoding = (dataCoding?.result?.[0]?.results ?? []).map((item: any) => ({
      ...item,
      category: "coding",
      link_detail: `funpaper-coding/${item.slug}`,
    }));
    // }

    // 3. Fetch Funpaper Harian
    // if (temaArr.length === 0) {
    const sqlHarian = `
        SELECT funpaper.downloaded, funpaper.played, funpaper.slug, funpaper.updated_at, funpaper.image_url, funpaper.interactive_image_url, CONCAT(funpaper.name, ' - ', activity.name) AS name, 'funpaper-harian' as tipe
        FROM funpaper
        JOIN activity ON funpaper.activity_id = activity.id
        WHERE funpaper_type_id = ${FUNPAPER_SINGLE_PAGE}
        AND interactive=1
        ${queryFilterHarian}
        ORDER BY updated_at DESC
      `;
    const resHarian = await fetch(CLOUDFLARE_D1_URL, {
      method: "POST",
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({ sql: sqlHarian, params: [] }),
    });
    const dataHarian = await resHarian.json();
    itemsHarian = (dataHarian?.result?.[0]?.results ?? []).map((item: any) => ({
      ...item,
      category: "harian",
      link_detail: `funpaper-harian/${item.slug}`,
    }));
    // }

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
