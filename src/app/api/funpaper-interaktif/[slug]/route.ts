import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";
import { FUNPAPER_SINGLE_PAGE } from "@/lib/funpaper_type";

export async function GET(request: Request, { params }) {
  try {
    const { slug } = await params;
    const { searchParams } = new URL(request.url);
    const tipe = searchParams.get("tipe");
    // console.log("tipe:", tipe);

    // Tentukan SQL berdasarkan tipe
    let sql = "";
    if (tipe === "funpaper-calistung") {
      sql = `
        SELECT funpaper_calistung.*, CONCAT(funpaper_calistung.name, ' - ', theme_calistung.name) AS name
        FROM funpaper_calistung
        JOIN theme_calistung ON funpaper_calistung.theme_calistung_id = theme_calistung.id
        WHERE funpaper_calistung.slug = ?
        LIMIT 1
      `;
    } else if (tipe === "funpaper-coding") {
      sql = `
        SELECT *, '5 - 7' AS age
        FROM funpaper_coding
        WHERE slug = ?
        LIMIT 1
      `;
    } else if (tipe === "funpaper-harian") {
      sql = `
        SELECT funpaper.*, CONCAT(funpaper.name, ' - ', activity.name) AS name, age.short_name AS age
        FROM funpaper
        JOIN activity ON funpaper.activity_id = activity.id
        JOIN age ON age.id=funpaper.age_id
        WHERE funpaper_type_id = ${FUNPAPER_SINGLE_PAGE}
        AND funpaper.slug = ?
        LIMIT 1
      `;
    } else {
      return NextResponse.json({ error: "Tipe tidak valid" }, { status: 404 });
    }

    const res = await fetch(CLOUDFLARE_D1_URL, {
      method: "POST",
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({ sql, params: [slug] }),
    });

    const data = await res.json();
    // console.log(data)
    if (!data.success) console.log(data.errors);

    const funpaper = data?.result?.[0]?.results?.[0] ?? null;

    if (!funpaper) {
      return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }

    return NextResponse.json(funpaper);
  } catch (err) {
    console.error("Gagal ambil detail funpaper:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
