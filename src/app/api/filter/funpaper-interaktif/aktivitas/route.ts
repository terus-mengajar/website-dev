import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function GET() {
  try {
    // const logs = [
    //   { value: 1, label: "Funpaper Harian" },
    //   { value: 2, label: "Funpaper Calistung" },
    //   { value: 3, label: "Funpaper Coding" },
    // ];

    // return NextResponse.json(logs);
    let aktivitasFunpaperCalistung = [];
    let aktivitasFunpaperCoding = [];
    let aktivitasFunpaperHarian = [];

    // FUNPAPER CALISTUNG
    let sqlCalistung = `
      SELECT DISTINCT 'calistung-' || activity_calistung.id value, activity_calistung.name label
      FROM funpaper_calistung
      JOIN activity_calistung ON funpaper_calistung.activity_calistung_id = activity_calistung.id
      WHERE funpaper_calistung.interactive = 1
      GROUP BY activity_calistung.id
      ORDER BY activity_calistung.name ASC
    `;

    const resCalistung = await fetch(CLOUDFLARE_D1_URL, {
      method: "POST",
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({ sql: sqlCalistung, params: [] }),
    });

    const dataCalistung = await resCalistung.json();
    aktivitasFunpaperCalistung = dataCalistung?.result?.[0]?.results ?? [];

    // FUNPAPER HARIAN
    let sqlHarian = `
      SELECT DISTINCT 'harian-' || activity.id value, activity.name label
      FROM funpaper
      JOIN activity ON funpaper.activity_id = activity.id
      WHERE funpaper.interactive = 1
      GROUP BY activity.id
      ORDER BY activity.name ASC
    `;

    const resHarian = await fetch(CLOUDFLARE_D1_URL, {
      method: "POST",
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({ sql: sqlHarian, params: [] }),
    });

    const dataHarian = await resHarian.json();
    aktivitasFunpaperHarian = dataHarian?.result?.[0]?.results ?? [];

    // FUNPAPER CODING
    let sqlCoding = `
      SELECT DISTINCT 'coding-' || activity.id value, activity.name label
      FROM funpaper_coding
      JOIN activity ON funpaper_coding.activity_id = activity.id
      WHERE funpaper_coding.interactive = 1
      GROUP BY activity.id
      ORDER BY activity.name ASC
    `;

    const resCoding = await fetch(CLOUDFLARE_D1_URL, {
      method: "POST",
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({ sql: sqlCoding, params: [] }),
    });

    const dataCoding = await resCoding.json();
    aktivitasFunpaperCoding = dataCoding?.result?.[0]?.results ?? [];

    // Combine all and sort alphabetically by label
    const allItems = [
      ...aktivitasFunpaperCalistung,
      ...aktivitasFunpaperCoding,
      ...aktivitasFunpaperHarian,
    ].sort((a, b) => (a.label || "").localeCompare(b.label || ""));

    return NextResponse.json(allItems);
  } catch (err) {
    console.error("Gagal ambil data:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
