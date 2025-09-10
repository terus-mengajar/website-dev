import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function POST(
  request: Request,
  { params }
) {
  try {
    const { email, mini_game_id } = await request.json();

    // 1. Update jumlah downloaded
    const updateRes = await fetch(
      CLOUDFLARE_D1_URL,
      {
        method: "POST",
        headers: CLOUDFLARE_HEADER,
        body: JSON.stringify({
          sql: `
            UPDATE mini_game
            SET played = played + 1
            WHERE id = ?
          `,
          params: [mini_game_id],
        }),
      }
    );

    const updateData = await updateRes.json();

    // 2. Insert log download
    const insertRes = await fetch(
      CLOUDFLARE_D1_URL,
      {
        method: "POST",
        headers: CLOUDFLARE_HEADER,
        body: JSON.stringify({
          sql: `
            INSERT INTO mini_game_main_log (created_at, email, mini_game_id)
            VALUES (CURRENT_TIMESTAMP, ?, ?)
          `,
          params: [email, mini_game_id],
        }),
      }
    );

    const insertData = await insertRes.json();

    if(!updateData.success){
      console.error("Gagal update:", updateData.errors);
    }
    if(!insertData.success){
      console.error("Gagal insert:", insertData.errors);
    }

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
