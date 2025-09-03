import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    // query ke D1
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/d1/database/${process.env.CLOUDFLARE_DATABASE_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
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
