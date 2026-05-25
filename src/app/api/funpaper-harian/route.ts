export const maxDuration = 60;

import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";
import { FUNPAPER_SINGLE_PAGE } from "@/lib/funpaper_type";
import { auth } from "@/lib/auth";
import { ApiClient, requests } from "recombee-api-client";

const client = new ApiClient(
  process.env.RECOMBEE_DB_ID!,
  process.env.RECOMBEE_PRIVATE_TOKEN!,
  { region: "ap-se" },
);

export async function GET(req: Request) {
  const session = await auth();
  const userId = session?.user?.email;

  try {
    const { searchParams } = new URL(req.url);
    const nama = searchParams.get("nama");
    let limit = searchParams.get("limit");
    const offset = searchParams.get("offset");
    const activity_id = searchParams.get("activity_id");
    const theme_id = searchParams.get("theme_id");
    const kategori = searchParams.get("kategori");
    const usia = searchParams.get("usia");
    const random = searchParams.get("random");
    const page = Number(searchParams.get("page") ?? 1);
    const perPage = Number(searchParams.get("perPage") ?? 18);
    const sort = searchParams.get("sort") ?? "rekomendasi";

    // AMBIL REKOMENDASI DARI RECOMBEE
    let recombeeIds = [];
    if (userId) {
      const limitRecombee =
        !isNaN(Number(limit)) && Number(limit) > 0
          ? Math.min(Number(limit), 100)
          : 100;

      let recombeeRes;

      try {
        if (!nama) {
          recombeeRes = await client.send(
            new requests.RecommendItemsToUser(userId, limitRecombee, {
              cascadeCreate: true, // otomatis buat user kalau belum ada
            }),
          );
        } else {
          recombeeRes = await client.send(
            new requests.SearchItems(userId, nama, 100, {
              cascadeCreate: true,
              scenario: "produk_search",
              returnProperties: true,
            }),
          );
        }
      } catch (error) {
        console.error("Recombee error:", error.message || error);
        recombeeRes = { recomms: [] }; // fallback supaya web tidak error
      }

      // CONVERT KE NUMBER
      recombeeIds = recombeeRes.recomms.map((r) => Number(r.id));
    }

    // Flag: gunakan filter IN (recombeeIds) jika:
    // - user login + ada recombeeIds + (widget pakai limit ATAU search pakai nama)
    const useRecombeeFilter =
      userId && recombeeIds.length > 0 && (!!limit || !!nama);

    let baseSql = `
      FROM funpaper
      JOIN activity ON funpaper.activity_id = activity.id
      JOIN theme ON funpaper.theme_id = theme.id
      JOIN age ON funpaper.age_id = age.id
      WHERE funpaper_type_id = ${FUNPAPER_SINGLE_PAGE}
    `;

    let params = [];

    if (nama && !userId) {
      baseSql += ` AND LOWER(funpaper.name || ' - ' || activity.name) LIKE LOWER(TRIM(?)) `;
      params.push(`%${nama}%`);
    }
    if (activity_id) {
      baseSql += ` AND funpaper.activity_id=? `;
      params.push(Number(activity_id));
    }
    if (theme_id) {
      baseSql += ` AND funpaper.theme_id=? `;
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
            "(funpaper.theme_id=? AND funpaper.activity_id=?)",
          );
          params.push(theme_id, activity_id);
        }
      });

      if (kondisiKategori.length) {
        baseSql += " AND (" + kondisiKategori.join(" OR ") + ")";
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
        baseSql += ` AND funpaper.age_id IN (${placeholders}) `;
        params.push(...usiaArr);
      }
    }

    // JIKA WIDGET/SEARCH + USER LOGIN, FILTER PAKAI RECOMBEE ID
    // ⚠️ Embed ID langsung ke SQL (bukan `?`) untuk hindari "too many SQL variables"
    // Aman karena recombeeIds adalah integer dari Recombee API, bukan input user
    if (useRecombeeFilter) {
      const idList = recombeeIds
        .map((id) => Number(id))
        .filter((id) => !isNaN(id) && id > 0)
        .join(", ");
      if (idList) {
        baseSql += ` AND funpaper.id IN (${idList}) `;
      }
    }

    // Snapshot params untuk countSql (sebelum LIMIT/OFFSET ditambahkan)
    const countParams = [...params];

    // ─── COUNT SQL (untuk total, tanpa LIMIT/OFFSET) ───────────────────────
    const countSql = `SELECT COUNT(*) AS total` + baseSql;

    // ─── DATA SQL ─────────────────────────────────────────────────────────
    let dataSql =
      `SELECT funpaper.*, activity.name AS activity, theme.name theme, age.range age` +
      baseSql;

    // Sorting server-side
    if (random == "1") {
      dataSql += ` ORDER BY RANDOM() `;
    } else if (useRecombeeFilter) {
      // urutan recombee dihandle di bawah setelah fetch, skip ORDER BY
      dataSql += ``;
    } else {
      switch (sort) {
        case "populer":
          dataSql += ` ORDER BY funpaper.downloaded DESC `;
          break;
        case "baru":
          dataSql += ` ORDER BY funpaper.updated_at DESC `;
          break;
        case "lama":
          dataSql += ` ORDER BY funpaper.updated_at ASC `;
          break;
        case "az":
          dataSql += ` ORDER BY funpaper.name ASC `;
          break;
        case "za":
          dataSql += ` ORDER BY funpaper.name DESC `;
          break;
        case "rekomendasi":
        default:
          dataSql += ` ORDER BY funpaper.downloaded DESC `;
          break;
      }
    }

    // Gunakan limit eksplisit (widget) ATAU pagination
    if (limit) {
      dataSql += ` LIMIT ? `;
      params.push(Number(limit));
      if (offset) {
        dataSql += ` OFFSET ? `;
        params.push(Number(offset));
      }
    } else {
      // Server-side pagination
      const pageOffset = (page - 1) * perPage;
      dataSql += ` LIMIT ? OFFSET ? `;
      params.push(perPage, pageOffset);
    }

    // console.log(dataSql);
    // console.log(params);

    // AMBIL DATA & COUNT DARI D1 SECARA PARALEL
    const [res, countRes] = await Promise.all([
      fetch(CLOUDFLARE_D1_URL, {
        method: "POST",
        headers: CLOUDFLARE_HEADER,
        body: JSON.stringify({ sql: dataSql, params }),
      }),
      fetch(CLOUDFLARE_D1_URL, {
        method: "POST",
        headers: CLOUDFLARE_HEADER,
        body: JSON.stringify({ sql: countSql, params: countParams }),
      }),
    ]);

    const [data, countData] = await Promise.all([res.json(), countRes.json()]);

    const logs = data?.result?.[0]?.results ?? [];
    const total = countData?.result?.[0]?.results?.[0]?.total ?? 0;

    if (data.errors) console.log(data.errors);
    if (countData.errors) console.log(countData.errors);

    let sortedItems = [];

    if (useRecombeeFilter) {
      // urutkan sesuai rekomendasi Recombee, item tak direkomendasikan di bawah
      sortedItems = logs.sort((a, b) => {
        const ia = recombeeIds.indexOf(Number(a.id));
        const ib = recombeeIds.indexOf(Number(b.id));
        return (ia === -1 ? Infinity : ia) - (ib === -1 ? Infinity : ib);
      });
    } else {
      sortedItems = logs;
    }

    // ✅ TAMBAHKAN URUTAN_REKOMENDASI
    sortedItems = sortedItems.map((item, index) => ({
      ...item,
      urutan_rekomendasi: (page - 1) * perPage + index + 1,
    }));

    return NextResponse.json({ data: sortedItems, total });
  } catch (err) {
    console.error("Gagal ambil data:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
