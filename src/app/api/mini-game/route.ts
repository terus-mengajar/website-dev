import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = searchParams.get("limit");
    const offset = searchParams.get("offset");
    const page = Number(searchParams.get("page") ?? 1);
    const perPage = Number(searchParams.get("perPage") ?? 12);
    const sort = searchParams.get("sort") ?? "populer";

    // Sorting
    let orderBy = "ORDER BY played DESC";
    switch (sort) {
      case "baru":
        orderBy = "ORDER BY updated_at DESC";
        break;
      case "lama":
        orderBy = "ORDER BY updated_at ASC";
        break;
      case "az":
        orderBy = "ORDER BY name ASC";
        break;
      case "za":
        orderBy = "ORDER BY name DESC";
        break;
      case "populer":
      default:
        orderBy = "ORDER BY played DESC";
        break;
    }

    const countSql = `SELECT COUNT(*) AS total FROM mini_game`;

    // Gunakan limit eksplisit (widget) ATAU server-side pagination
    let dataSql = `SELECT * FROM mini_game ${orderBy}`;
    const params: number[] = [];

    if (limit) {
      dataSql += ` LIMIT ${Number(limit)}`;
      if (offset) {
        dataSql += ` OFFSET ${Number(offset)}`;
      }
    } else {
      const pageOffset = (page - 1) * perPage;
      dataSql += ` LIMIT ${perPage} OFFSET ${pageOffset}`;
    }

    // Fetch data & count secara paralel
    const [res, countRes] = await Promise.all([
      fetch(CLOUDFLARE_D1_URL, {
        method: "POST",
        headers: CLOUDFLARE_HEADER,
        body: JSON.stringify({ sql: dataSql }),
      }),
      fetch(CLOUDFLARE_D1_URL, {
        method: "POST",
        headers: CLOUDFLARE_HEADER,
        body: JSON.stringify({ sql: countSql }),
      }),
    ]);

    const [data, countData] = await Promise.all([res.json(), countRes.json()]);

    const logs = data?.result?.[0]?.results ?? [];
    const total = countData?.result?.[0]?.results?.[0]?.total ?? 0;

    if (!data.success) console.log("Data error:", data.errors);
    if (!countData.success) console.log("Count error:", countData.errors);

    return NextResponse.json({ data: logs, total });
  } catch (err) {
    console.error("Gagal ambil data:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
