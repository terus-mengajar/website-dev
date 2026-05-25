import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";
import { FUNPAPER_TEMA_BUNDLE } from "@/lib/funpaper_type";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = searchParams.get("limit");
    const offset = searchParams.get("offset");
    // const activity_id = searchParams.get("activity_id");
    // const theme_id = searchParams.get("theme_id");
    const usia = searchParams.get("usia");

    let baseSql = `
      FROM funpaper_bundle
      WHERE funpaper_type_id = ${FUNPAPER_TEMA_BUNDLE}
      AND slug IS NOT NULL
    `;

    let params = [];

    // filter usia
    if (usia) {
      const usiaArr = usia
        .split(",")
        .map(Number)
        .filter((n) => !isNaN(n));
      if (usiaArr.length) {
        const placeholders = usiaArr.map(() => "?").join(",");
        baseSql += ` AND age_id IN (${placeholders}) `;
        params.push(...usiaArr);
      }
    }

    // if (activity_id) {
    //   sql += ` AND activity_id=${Number(activity_id)}`;
    // }
    // if (theme_id) {
    //   sql += ` AND theme_id=${Number(theme_id)}`;
    // }

    // sql += ` ORDER BY downloaded DESC`;

    const countSql = `SELECT COUNT(*) AS total` + baseSql;

    let dataSql = `SELECT *` + baseSql;
    dataSql += ` ORDER BY name_on_website ASC`;

    if (limit) {
      dataSql += ` LIMIT ${Number(limit)}`;
    }
    if (offset) {
      dataSql += ` OFFSET ${Number(offset)}`;
    }

    // console.log("dataSql:", dataSql);
    // console.log("countSql:", countSql);

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
