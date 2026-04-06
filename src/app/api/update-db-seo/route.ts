import { NextResponse } from "next/server";
import {
  CLOUDFLARE_D1_URL,
  CLOUDFLARE_D1_SEO_URL,
  CLOUDFLARE_HEADER,
} from "@/lib/cloudflare";

export async function GET(req: Request) {
  //   try {
  //     let sql = `SELECT id, seo_title, short_description, medium_description, long_description, focus_keyword, schema_json FROM funpaper ORDER BY id ASC`;

  //     const res = await fetch(CLOUDFLARE_D1_SEO_URL, {
  //       method: "POST",
  //       headers: CLOUDFLARE_HEADER,
  //       body: JSON.stringify({ sql }),
  //     });

  //     const data = await res.json();
  //     const logs = data?.result?.[0]?.results ?? [];

  //     if (!data.success) {
  //       console.error("Gagal ambil data sumber:", data.errors);
  //       return NextResponse.json(
  //         { error: "Gagal ambil data sumber" },
  //         { status: 500 },
  //       );
  //     }

  //     // Fungsi helper untuk membersihkan string dari petik satu
  //     const esc = (text) => {
  //       if (!text) return "";
  //       // Mengubah satu petik (') menjadi dua petik ('') agar aman di SQLite
  //       return String(text).replaceAll("'", "''");
  //     };

  //     for (const log of logs) {
  //       // Gunakan fungsi esc() untuk SETIAP kolom yang bertipe string/text
  //       const sqlQuery = `
  //         UPDATE funpaper SET
  //         seo_title = '${esc(log.seo_title)}',
  //         short_description = '${esc(log.short_description)}',
  //         medium_description = '${esc(log.medium_description)}',
  //         long_description = '${esc(log.long_description)}',
  //         focus_keyword = '${esc(log.focus_keyword)}',
  //         schema_json = '${esc(log.schema_json)}'
  //         WHERE id = ${log.id}
  //     `;

  //       const res = await fetch(CLOUDFLARE_D1_URL, {
  //         method: "POST",
  //         headers: CLOUDFLARE_HEADER,
  //         body: JSON.stringify({ sql: sqlQuery }),
  //       });

  //       const resultData = await res.json();
  //       if (!resultData.success) {
  //         console.log(`Error di ID ${log.id}:`, resultData.errors);
  //         // Tambahkan log sqlQuery jika ingin debug baris mana yang error
  //         // console.log("SQL yang gagal:", sqlQuery);
  //       } else {
  //         console.log(`ID ${log.id} berhasil diupdate`);
  //       }
  //     }

  //     return NextResponse.json({
  //       message: `Selesai memproses ${logs.length} data`,
  //     });
  //   } catch (err) {
  //     console.error("Gagal sistem:", err);
  //     return NextResponse.json(
  //       { error: "Internal server error" },
  //       { status: 500 },
  //     );
  //   }

  return NextResponse.json({ error: "Nothing here" }, { status: 500 });
}
