import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function GET() {

  try {
    const res = await fetch(
      CLOUDFLARE_D1_URL,
      {
        method: "POST",
        headers: CLOUDFLARE_HEADER,
        body: JSON.stringify({
          sql: `
          SELECT * 
          FROM learning_media_assets
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
