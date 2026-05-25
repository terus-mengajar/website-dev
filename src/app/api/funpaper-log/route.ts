import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function GET(req: Request) {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const email = session.user.email;
  const { searchParams } = new URL(req.url);
  const page = Math.max(1, Number(searchParams.get("page") ?? 1));
  const perPage = Math.max(1, Number(searchParams.get("perPage") ?? 10));
  const offset = (page - 1) * perPage;

  try {
    const baseSql = `
      FROM funpaper_download_log fdl
      JOIN funpaper f ON f.id = fdl.funpaper_id
      JOIN activity a ON a.id = f.activity_id
      WHERE fdl.email = ?
      GROUP BY f.id
    `;

    const dataSql = `
      SELECT fdl.id, f.slug, CONCAT(f.name, ' - ', a.name) name
      ${baseSql}
      ORDER BY MAX(fdl.created_at) DESC
      LIMIT ? OFFSET ?
    `;

    const countSql = `SELECT COUNT(*) AS total FROM (SELECT f.id ${baseSql})`;

    const [res, countRes] = await Promise.all([
      fetch(CLOUDFLARE_D1_URL, {
        method: "POST",
        headers: CLOUDFLARE_HEADER,
        body: JSON.stringify({ sql: dataSql, params: [email, perPage, offset] }),
      }),
      fetch(CLOUDFLARE_D1_URL, {
        method: "POST",
        headers: CLOUDFLARE_HEADER,
        body: JSON.stringify({ sql: countSql, params: [email] }),
      }),
    ]);

    const [data, countData] = await Promise.all([res.json(), countRes.json()]);

    const logs = data?.result?.[0]?.results ?? [];
    const total = countData?.result?.[0]?.results?.[0]?.total ?? 0;

    if (data.errors) console.log(data.errors);
    if (countData.errors) console.log(countData.errors);

    return NextResponse.json({ data: logs, total });
  } catch (err) {
    console.error("Gagal ambil log:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
