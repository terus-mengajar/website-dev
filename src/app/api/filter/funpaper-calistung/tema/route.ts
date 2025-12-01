import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function GET() {

  try {
    let sql = `
      SELECT DISTINCT theme_calistung.id value, theme_calistung.name label
      FROM funpaper_calistung
      JOIN theme_calistung ON funpaper_calistung.theme_calistung_id = theme_calistung.id
      ORDER BY theme_calistung.name ASC
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
