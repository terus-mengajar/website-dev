import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function POST(
  request: Request
) {
  try {
    const { email, funpaper_id } = await request.json();

    // 1. Update jumlah downloaded
    const updateRes = await fetch(
      CLOUDFLARE_D1_URL,
      {
        method: "POST",
        headers: CLOUDFLARE_HEADER,
        body: JSON.stringify({
          sql: `
            UPDATE funpaper
            SET downloaded = downloaded + 1
            WHERE id = ?
          `,
          params: [funpaper_id],
        }),
      }
    );

    const updateData = await updateRes.json();

    // 2. Insert log download
    const insertRes = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/d1/database/${process.env.CLOUDFLARE_DATABASE_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sql: `
            INSERT INTO funpaper_download_log (created_at, email, funpaper_id)
            VALUES (CURRENT_TIMESTAMP, ?, ?)
          `,
          params: [email, funpaper_id],
        }),
      }
    );

    const insertData = await insertRes.json();

    return NextResponse.json({
      success: true,
      update: updateData,
      insert: insertData,
    });
  } catch (err) {
    console.error("Gagal update & insert:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
