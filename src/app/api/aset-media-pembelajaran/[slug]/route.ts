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
            SELECT *
            FROM learning_media_assets
            WHERE slug = ?
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
    console.error("Gagal ambil detail:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
