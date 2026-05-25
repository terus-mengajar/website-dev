import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";
// import { FUNPAPER_TEMA_BUNDLE } from "@/lib/funpaper_type";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = searchParams.get("limit");
    const offset = searchParams.get("offset");
    const tema = searchParams.get("tema");
    const activity = searchParams.get("activity");

    // console.log(tema);

    let baseSql = `
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
    // if (theme_id) {
    //   sql += ` AND theme_calistung_id=${Number(theme_id)}`;
    // }

    if (tema) {
      const temaArr = tema
        .split(",")
        .map(Number)
        .filter((n) => !isNaN(n));
      if (temaArr.length) {
        const placeholders = temaArr.map(() => "?").join(",");
        baseSql += ` AND funpaper_calistung.theme_calistung_id IN (${placeholders}) `;
        params.push(...temaArr);
      }
    }

    const countSql = `SELECT COUNT(*) AS total` + baseSql;

    let dataSql =
      `SELECT funpaper_calistung.*, theme_calistung.name AS theme` + baseSql;
    dataSql += ` ORDER BY downloaded DESC`;

    if (limit) {
      dataSql += ` LIMIT ${Number(limit)}`;
    }
    if (offset) {
      dataSql += ` OFFSET ${Number(offset)}`;
    }

    // sql += ` ORDER BY name ASC `;
    // console.log("dataSql:", dataSql);
    // console.log("countSql:", countSql);
    // console.log(params);

    const [res, countRes] = await Promise.all([
      fetch(CLOUDFLARE_D1_URL, {
        method: "POST",
        headers: CLOUDFLARE_HEADER,
        body: JSON.stringify({ sql: dataSql, params }),
      }),
      fetch(CLOUDFLARE_D1_URL, {
        method: "POST",
        headers: CLOUDFLARE_HEADER,
        body: JSON.stringify({ sql: countSql, params }),
      }),
    ]);

    const [data, countData] = await Promise.all([res.json(), countRes.json()]);

    const logs = data?.result?.[0]?.results ?? [];
    const total = countData?.result?.[0]?.results?.[0]?.total ?? 0;

    if (!data.success) console.log("Data error:", data.errors);
    if (!countData.success) console.log("Count error:", countData.errors);

    return NextResponse.json({
      data: logs,
      total: total,
    });
  } catch (err) {
    console.error("Gagal ambil data:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
