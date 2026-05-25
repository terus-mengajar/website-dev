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
      FROM mini_game_main_log mgml
      JOIN mini_game mg ON mg.id = mgml.mini_game_id
      WHERE mgml.email = ?
      GROUP BY mg.id
    `;

    const dataSql = `
      SELECT mgml.id, mg.slug, mg.name
      ${baseSql}
      ORDER BY MAX(mgml.created_at) DESC
      LIMIT ? OFFSET ?
    `;

    const countSql = `SELECT COUNT(*) AS total FROM (SELECT mg.id ${baseSql})`;

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
