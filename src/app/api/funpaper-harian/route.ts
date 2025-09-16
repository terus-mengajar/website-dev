import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const nama = searchParams.get("nama");
    const limit = searchParams.get("limit");
    const activity_id = searchParams.get("activity_id");
    const theme_id = searchParams.get("theme_id");
    const kategori = searchParams.get("kategori");
    const usia = searchParams.get("usia");

    let sql = `
      SELECT funpaper.*, activity.name AS activity
      FROM funpaper
      JOIN activity ON funpaper.activity_id = activity.id
      WHERE funpaper_type_id = 1
    `;

    let params = [];

    if (nama) {
      sql += ` AND LOWER(funpaper.name || ' - ' || activity.name) LIKE LOWER(TRIM(?)) `;
      params.push(`%${nama}%`);
    }
    if (activity_id) {
      sql += ` AND funpaper.activity_id=? `;
      params.push(Number(activity_id));
    }
    if (theme_id) {
      sql += ` AND funpaper.theme_id=? `;
      params.push(Number(theme_id));
    }

    // filter aktivitas (multi pasangan theme_id & activity_id)
    if (kategori) {
      const kategoriArr = kategori.split(","); // ["2_5","3_6"]
      const kondisiKategori: string[] = [];

      kategoriArr.forEach((item) => {
        const [theme_id, activity_id] = item.split("_").map(Number);
        if (!isNaN(theme_id) && !isNaN(activity_id)) {
          kondisiKategori.push(
            "(funpaper.theme_id=? AND funpaper.activity_id=?)"
          );
          params.push(theme_id, activity_id);
        }
      });

      if (kondisiKategori.length) {
        sql += " AND (" + kondisiKategori.join(" OR ") + ")";
      }
    }

    // filter usia
    if (usia) {
      const usiaArr = usia
        .split(",")
        .map(Number)
        .filter((n) => !isNaN(n));
      if (usiaArr.length) {
        const placeholders = usiaArr.map(() => "?").join(",");
        sql += ` AND funpaper.age_id IN (${placeholders}) `;
        params.push(...usiaArr);
      }
    }

    sql += ` ORDER BY funpaper.downloaded DESC `;

    if (limit) {
      sql += ` LIMIT ? `;
      params.push(Number(limit));
    }

    const res = await fetch(CLOUDFLARE_D1_URL, {
      method: "POST",
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({ sql, params }),
    });

    const data = await res.json();
    const logs = data?.result?.[0]?.results ?? [];

    return NextResponse.json(logs);
  } catch (err) {
    console.error("Gagal ambil data:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
