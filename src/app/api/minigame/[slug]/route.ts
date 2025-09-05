import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }
) {
  try {
    const { slug } = await params;

    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/d1/database/${process.env.CLOUDFLARE_DATABASE_ID}/query`,
      {
        method: "POST", // tetap POST untuk Cloudflare D1
        headers: {
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sql: `
            SELECT mini_game.*, age.short_name as age 
            FROM mini_game
            JOIN age ON age.id=mini_game.age_id
            WHERE mini_game.slug = ?
            LIMIT 1
          `,
          params: [slug],
        }),
      }
    );

    const data = await res.json();
    const game = data?.result?.[0]?.results?.[0] ?? null;

    if (!game) {
      return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }

    return NextResponse.json(game);
  } catch (err) {
    console.error("Gagal ambil detail game:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
