import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";
import { auth } from "@/lib/auth";
import crypto from "crypto";

export async function GET(request: Request) {
  try {
    const session = await auth();
    const email = session?.user?.email;

    // Ambil sso dari DB
    const res = await fetch(CLOUDFLARE_D1_URL, {
      method: "POST",
      headers: CLOUDFLARE_HEADER,
      body: JSON.stringify({
        sql: `
          SELECT sso_token, sso_expired_at
          FROM user
          WHERE email = ?
          LIMIT 1
        `,
        params: [email],
      }),
    });

    const data = await res.json();
    const user = data?.result?.[0]?.results?.[0] ?? null;
    let sso_token = user.sso_token;
    let sso_expired_at = user.sso_expired_at;

    const now = Date.now();

    if (!sso_token || sso_expired_at < now) {
      sso_token = crypto.randomBytes(32).toString("hex");
      sso_expired_at = now + 60 * 60 * 1000; //60menit

      const updateRes = await fetch(CLOUDFLARE_D1_URL, {
        method: "POST",
        headers: CLOUDFLARE_HEADER,
        body: JSON.stringify({
          sql: `
                UPDATE user
                SET sso_token = ?, sso_expired_at = ?
                WHERE email = ?
            `,
          params: [sso_token, sso_expired_at, email],
        }),
      });

      const updateData = await updateRes.json();
    }

    return NextResponse.json({
      success: true,
      sso_token: sso_token,
      sso_expired_at: sso_expired_at,
    });
  } catch (err) {
    console.error("Gagal update & insert:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
