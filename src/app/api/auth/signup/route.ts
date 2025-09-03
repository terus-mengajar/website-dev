export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    // hash password di server API
    const bcrypt = (await import("bcryptjs")).default;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    // insert user kalau belum ada
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/d1/database/${process.env.CLOUDFLARE_DATABASE_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sql: `
            INSERT INTO user (created_at, email, password_hash)
            VALUES (CURRENT_TIMESTAMP, ?, ?)
            ON CONFLICT(email) DO UPDATE
            SET password_hash = excluded.password_hash,
                created_at = CURRENT_TIMESTAMP
            WHERE user.password_hash IS NULL
        `,
          params: [email, hashed],
        }),
      }
    );

    const data = await response.json();
    const rowsWritten = data.result[0].meta.rows_written; //0=read, 1=update, 2=insert
    // console.log("Last Row ID:", lastRowId);
    // console.log("data response route", JSON.stringify(data, null, 2));

    // cek apakah ada yang pakai
    if (rowsWritten == 0) {
      return Response.json({ error: "Email sudah terpakai" }, { status: 400 });
    }

    return Response.json({ success: true });
  } catch (err: any) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
