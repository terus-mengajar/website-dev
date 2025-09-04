import { NextResponse } from "next/server";

export async function GET() {

  try {
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
          SELECT * 
          FROM mini_game
          ORDER BY jumlah_main DESC
          `,
        }),
      }
    );

    const data = await res.json();
    const logs = data?.result?.[0]?.results ?? [];

    return NextResponse.json(logs);
  } catch (err) {
    console.error("Gagal ambil data:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
