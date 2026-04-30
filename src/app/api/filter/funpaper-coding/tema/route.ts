import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function GET() {
  try {
    let sql = `
      SELECT DISTINCT theme_coding.id value, theme_coding.name label
      FROM funpaper_coding
      JOIN theme_coding ON funpaper_coding.theme_coding_id = theme_coding.id
      ORDER BY theme_coding.name ASC
    `;

    const res = await fetch(CLOUDFLARE_D1_URL, {
      method: "POST",
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({ sql }),
    });

    const data = await res.json();
    const logs = data?.result?.[0]?.results ?? [];

    return NextResponse.json(logs);
  } catch (err) {
    console.error("Gagal ambil data:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
