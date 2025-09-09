import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function GET(
  request: Request,
  { params }
) {
  try {
    const { slug } = await params;

    const res = await fetch(
      CLOUDFLARE_D1_URL,
      {
        method: "POST", // tetap POST untuk Cloudflare D1
        headers: CLOUDFLARE_HEADER,
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
