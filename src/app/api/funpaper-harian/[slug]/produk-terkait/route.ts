import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";
import { FUNPAPER_SINGLE_PAGE } from "@/lib/funpaper_type";
import { auth } from "@/lib/auth";
import { ApiClient, requests } from "recombee-api-client";

const client = new ApiClient(
  process.env.RECOMBEE_DB_ID!,
  process.env.RECOMBEE_PRIVATE_TOKEN!,
  { region: "ap-se" }
);

export async function GET(req: Request) {
  const session = await auth();
  const userId = session?.user?.email;

  try {
    const { searchParams } = new URL(req.url);
    const limit = searchParams.get("limit");
    const activity_id = searchParams.get("activity_id");
    const theme_id = searchParams.get("theme_id");
    const funpaper_id = searchParams.get("funpaper_id");

    // AMBIL REKOMENDASI DARI RECOMBEE
    let recombeeIds = [];
    if (userId) {
      const limitRecombee = !isNaN(Number(limit)) && Number(limit) > 0 ? Number(limit) : 4

      const recombeeRes = await client.send(
        new requests.RecommendItemsToItem(funpaper_id, userId, limitRecombee, {
          cascadeCreate: true, // otomatis buat user kalau belum ada
          scenario: 'related-products'
        })
      );

      // CONVERT KE NUMBER
      recombeeIds = recombeeRes.recomms.map((r) => Number(r.id));
    }

    let sql = `
      SELECT funpaper.*, activity.name AS activity
      FROM funpaper
      JOIN activity ON funpaper.activity_id = activity.id
      WHERE funpaper_type_id = ${FUNPAPER_SINGLE_PAGE}
    `;

    let params = [];

    if(!recombeeIds){
        if (activity_id) {
        sql += ` AND funpaper.activity_id=? `;
        params.push(Number(activity_id));
        }
        if (theme_id) {
        sql += ` AND funpaper.theme_id=? `;
        params.push(Number(theme_id));
        }
    }

    // JIKA PAKAI LIMIT, GUNAKAN RECOMBEE REKOM ID
    if (userId && recombeeIds) {
      sql += ` AND funpaper.id IN (${recombeeIds.map(() => "?").join(", ")}) `;
      params.push(...recombeeIds);
    }

    if (!userId || !recombeeIds) {
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

    // let sortedItems = [];

    // if (userId) {
    //   // urutkan sesuai rekomendasi, item tak direkomendasi di bawah
    //   sortedItems = logs.sort((a, b) => {
    //     const ia = recombeeIds.indexOf(Number(a.id));
    //     const ib = recombeeIds.indexOf(Number(b.id));
    //     return (ia === -1 ? Infinity : ia) - (ib === -1 ? Infinity : ib);
    //   });
    // } else {
    //   sortedItems = logs;
    // }

    // // ✅ TAMBAHKAN URUTAN_REKOMENDASI
    // sortedItems = sortedItems.map((item, index) => ({
    //   ...item,
    //   urutan_rekomendasi: index + 1,
    // }));

    return NextResponse.json(logs);
  } catch (err) {
    console.error("Gagal ambil data:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
