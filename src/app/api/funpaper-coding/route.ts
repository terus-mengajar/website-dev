import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";
// import { FUNPAPER_TEMA_BUNDLE } from "@/lib/funpaper_type";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = searchParams.get("limit");
    // const tema = searchParams.get("tema");

    // console.log(tema);

    let sql = `
      SELECT funpaper_coding.*
      FROM funpaper_coding
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

    // if (tema) {
    //   const temaArr = tema
    //     .split(",")
    //     .map(Number)
    //     .filter((n) => !isNaN(n));
    //   if (temaArr.length) {
    //     const placeholders = temaArr.map(() => "?").join(",");
    //     sql += ` AND funpaper_calistung.theme_calistung_id IN (${placeholders}) `;
    //     params.push(...temaArr);
    //   }
    // }
    sql += ` ORDER BY downloaded DESC`;

    if (limit) {
      sql += ` LIMIT ${Number(limit)}`;
    }

    // sql += ` ORDER BY name ASC `;
    // console.log(sql);
    // console.log(params);

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
      { status: 500 },
    );
  }
}
