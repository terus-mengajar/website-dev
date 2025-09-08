import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = await params;

    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/d1/database/${process.env.CLOUDFLARE_DATABASE_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sql: `
            UPDATE mini_game
            SET played = played + 1
            WHERE slug = ?
          `,
          params: [slug],
        }),
      }
    );

    const data = await res.json();

    return NextResponse.json({ success: true, result: data });
  } catch (err) {
    console.error("Gagal update played:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
