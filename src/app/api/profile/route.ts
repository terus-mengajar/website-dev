import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    // query ke D1
    const res = await fetch(
      CLOUDFLARE_D1_URL,
      {
        method: "POST",
        headers: CLOUDFLARE_HEADER,
        body: JSON.stringify({
          sql: `UPDATE user SET name = ? WHERE email = ?`,
          params: [name, email],
        }),
      }
    );

    const data = await res.json();

    if (!data.success) {
      return NextResponse.json({ error: "Gagal update profil" }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error update profile:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
