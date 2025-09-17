import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function GET() {
  try {
    const sql = `
        SELECT 
            t.id   AS theme_value,
            t.name AS theme_label,
            a.id   AS activity_value,
            a.name AS activity_label
        FROM funpaper f
        JOIN theme t     ON f.theme_id = t.id
        JOIN activity a  ON f.activity_id = a.id
        WHERE f.funpaper_type_id = 1
        ORDER BY t.name ASC, a.name ASC
    `;

    const res = await fetch(CLOUDFLARE_D1_URL, {
      method: "POST",
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({ sql }),
    });

    const data = await res.json();
    const logs = data?.result?.[0]?.results ?? [];

    // Group by theme
    let filter_kategori: any[] = [];
    logs.forEach((row: any) => {
      let theme = filter_kategori.find((t) => t.value === row.theme_value);
      if (!theme) {
        theme = { value: row.theme_value, label: row.theme_label, activities: [] };
        filter_kategori.push(theme);
      }

      // push activity unik
      if (!theme.activities.some((a: any) => a.value === row.activity_value)) {
        theme.activities.push({
          value: row.activity_value,
          label: row.activity_label,
        });
      }
    });

    return NextResponse.json(filter_kategori);
  } catch (err) {
    console.error("Gagal ambil data:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
