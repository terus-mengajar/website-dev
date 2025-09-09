import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function POST(req) {
  // console.log("🔥 /api/users dipanggil");

  const { email } = await req.json();
  // console.log("Email yang diterima:", email);

  try {
    const response = await fetch(
      CLOUDFLARE_D1_URL,
      {
        method: "POST",
        headers: CLOUDFLARE_HEADER,
        body: JSON.stringify({
          sql: `
          INSERT INTO user (created_at, email)
          SELECT CURRENT_TIMESTAMP, ?
          WHERE NOT EXISTS (SELECT 1 FROM user WHERE email = ?)
        `,
          params: [email, email],
        }),
      }
    );

    const data = await response.json();
    // console.log("Hasil query:", JSON.stringify(data, null, 2));
    return Response.json(data);
  } catch (err) {
    // console.error("Error di API /api/users:", err);
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
