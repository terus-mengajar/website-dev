import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";
// import { FUNPAPER_TEMA_BUNDLE } from "@/lib/funpaper_type";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = searchParams.get("limit");
    // const activity_id = searchParams.get("activity_id");
    const theme_calistung_id = searchParams.get("theme_calistung_id");
    // const usia = searchParams.get("usia");

    let sql = `
      SELECT funpaper_calistung.*, theme_calistung.name AS theme
      FROM funpaper_calistung
      JOIN theme_calistung ON funpaper_calistung.theme_calistung_id = theme_calistung.id
    `;

    let params = [];

    // filter usia
    // if (usia) {
    //   const usiaArr = usia
    //     .split(",")
    //     .map(Number)
    //     .filter((n) => !isNaN(n));
    //   if (usiaArr.length) {
    //     const placeholders = usiaArr.map(() => "?").join(",");
    //     sql += ` AND age_id IN (${placeholders}) `;
    //     params.push(...usiaArr);
    //   }
    // }

    // if (activity_id) {
    //   sql += ` AND activity_id=${Number(activity_id)}`;
    // }
    if (theme_calistung_id) {
      sql += ` AND theme_calistung_id=${Number(theme_calistung_id)}`;
    }

    sql += ` ORDER BY downloaded DESC`;

    if (limit) {
      sql += ` LIMIT ${Number(limit)}`;
    }

    // sql += ` ORDER BY name ASC `;

    const res = await fetch(CLOUDFLARE_D1_URL, {
      method: "POST",
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({ sql, params }),
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
