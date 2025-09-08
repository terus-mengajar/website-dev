import { NextResponse } from "next/server";

export async function GET(
  req: Request
) {

  try {
    // const { searchParams } = new URL(req.url);
    // const limit = searchParams.get("limit");
    // const activity_id = searchParams.get("activity_id");
    // const theme_id = searchParams.get("theme_id");

    let sql = `
      SELECT * 
      FROM funpaper_bundle
      WHERE funpaper_type_id = 5
      AND slug IS NOT NULL
    `;

    // if (activity_id) {
    //   sql += ` AND activity_id=${Number(activity_id)}`;
    // }
    // if (theme_id) {
    //   sql += ` AND theme_id=${Number(theme_id)}`;
    // }

    // sql += ` ORDER BY downloaded DESC`;

    // if (limit) {
    //   sql += ` LIMIT ${Number(limit)}`;
    // }

    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/d1/database/${process.env.CLOUDFLARE_DATABASE_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sql }),
      }
    );

    const data = await res.json();
    const logs = data?.result?.[0]?.results ?? [];
    if(data.errors)
      console.log(data.errors);

    return NextResponse.json(logs);
  } catch (err) {
    console.error("Gagal ambil data:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
