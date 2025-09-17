import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function GET() {

  try {
    let sql = `
      SELECT DISTINCT age.id value, age.range label
      FROM funpaper
      JOIN age ON funpaper.age_id = age.id
      WHERE funpaper.funpaper_type_id = 1
      ORDER BY age.range ASC
    `;

    const res = await fetch(
      CLOUDFLARE_D1_URL,
      {
        method: "POST",
        headers: CLOUDFLARE_HEADER,
        body: JSON.stringify({ sql }),
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
