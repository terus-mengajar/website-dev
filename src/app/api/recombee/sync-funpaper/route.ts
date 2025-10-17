import { NextResponse } from "next/server";
import { ApiClient, requests } from "recombee-api-client";

const DB_ID = process.env.RECOMBEE_DB_ID!;
const PRIVATE_TOKEN = process.env.RECOMBEE_PRIVATE_TOKEN!;
const REGION = process.env.RECOMBEE_REGION || "ap-se";

const client = new ApiClient(DB_ID, PRIVATE_TOKEN, { region: REGION });

export async function GET() {
  return NextResponse.json(
      { error: "Sync dimatikan", details: "" },
      { status: 500 }
  );
  
  try {
    // 1️⃣ Ambil data funpaper dari endpoint internal kamu
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://terusmengajar.id";
    const res = await fetch(`${baseUrl}/api/funpaper-harian`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Gagal mengambil data funpaper");
    }

    const funpapers = await res.json();

    // 2️⃣ (opsional) daftar property ke Recombee sekali saja
    // await client.send(new requests.AddItemProperty("name", "string"));
    // await client.send(new requests.AddItemProperty("slug", "string"));
    // await client.send(new requests.AddItemProperty("activity", "string"));
    // await client.send(new requests.AddItemProperty("activity_id", "string"));
    // await client.send(new requests.AddItemProperty("theme_id", "string"));
    // await client.send(new requests.AddItemProperty("age_id", "string"));

    // 3️⃣ Kirim data ke Recombee
    const results = [];
    for (const fp of funpapers) {
      const result = await client.send(
        new requests.SetItemValues(
          fp.id,
          {
            name: fp.name,
            slug: fp.slug,
            activity: fp.activity,
            activity_id: fp.activity_id,
            theme_id: fp.theme_id,
            age_id: fp.age_id,
          },
          { cascadeCreate: true }
        )
      );
      results.push(result);
    }

    return NextResponse.json({
      status: "ok",
      synced: results.length,
    });
  } catch (err) {
    console.error("Recombee sync error:", err);
    return NextResponse.json(
      { error: "Failed to sync funpapers", details: String(err) },
      { status: 500 }
    );
  }
}
