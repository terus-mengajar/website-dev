import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";
import { FUNPAPER_SINGLE_PAGE } from "@/lib/funpaper_type";
import { auth } from "@/lib/auth";
import { ApiClient, requests } from "recombee-api-client";

// const RECOMBEE_API_URL = `https://${process.env.RECOMBEE_DB_ID}.recombee.com/api/v1.4`;
// const RECOMBEE_TOKEN = process.env.RECOMBEE_PRIVATE_TOKEN;

const client = new ApiClient(
  process.env.RECOMBEE_DB_ID!,
  process.env.RECOMBEE_PRIVATE_TOKEN!,
  { region: "ap-se" }
);

// ambil rekomendasi dari recombee
async function getRecombeeRecommendations(userId: string, limit: number = 10) {
  try {
    const res = await fetch(
      `${RECOMBEE_API_URL}/recommendations/users/${encodeURIComponent(
        userId
      )}/items/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(RECOMBEE_TOKEN + ":").toString(
            "base64"
          )}`,
        },
        // body: JSON.stringify({ count: limit }),
      }
    );

    if (!res.ok) throw new Error("Recombee API error");
    const data = await res.json();
    return data.recomms?.map((r: any) => r.id) || [];
  } catch (err) {
    console.error("Recombee failed:", err);
    return [];
  }
}

export async function GET(req: Request) {
  const session = await auth();
  const userId = session?.user?.email;

  try {
    const { searchParams } = new URL(req.url);
    const nama = searchParams.get("nama");
    const limit = searchParams.get("limit");
    const activity_id = searchParams.get("activity_id");
    const theme_id = searchParams.get("theme_id");
    const kategori = searchParams.get("kategori");
    const usia = searchParams.get("usia");
    const random = searchParams.get("random");

    let sql = `
      SELECT funpaper.*, activity.name AS activity
      FROM funpaper
      JOIN activity ON funpaper.activity_id = activity.id
      WHERE funpaper_type_id = ${FUNPAPER_SINGLE_PAGE}
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

    if (random == "1") {
      sql += ` ORDER BY RANDOM() `;
    } else {
      sql += ` ORDER BY funpaper.downloaded DESC `;
    }

    if (limit) {
      sql += ` LIMIT ? `;
      params.push(Number(limit));
    }

    // AMBIL DATA DARI D1
    const res = await fetch(CLOUDFLARE_D1_URL, {
      method: "POST",
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({ sql, params }),
    });

    const data = await res.json();
    const logs = data?.result?.[0]?.results ?? [];

    if (data.errors) {
      console.log(data.errors);
    }

    let sortedItems = [];

    // AMBIL REKOMENDASI DARI RECOMBEE
    if (userId) {
      const recombeeRes = await client.send(
        new requests.RecommendItemsToUser(userId, 1000, {
          cascadeCreate: true, // otomatis buat user kalau belum ada
        })
      );

      // CONVERT KE NUMBER
      console.log(recombeeRes.recomms.length);
      const recombeeIds = recombeeRes.recomms.map((r) => Number(r.id));

      // urutkan sesuai rekomendasi, item tak direkomendasi di bawah
      sortedItems = logs.sort((a, b) => {
        const ia = recombeeIds.indexOf(Number(a.id));
        const ib = recombeeIds.indexOf(Number(b.id));
        return (ia === -1 ? Infinity : ia) - (ib === -1 ? Infinity : ib);
      });
    }else{
      sortedItems = logs;
    }

    // ✅ TAMBAHKAN URUTAN_REKOMENDASI
    sortedItems = sortedItems.map((item, index) => ({
      ...item,
      urutan_rekomendasi: index + 1,
    }));

    return NextResponse.json(sortedItems);
  } catch (err) {
    console.error("Gagal ambil data:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
