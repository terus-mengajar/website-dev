// /src/app/api/recombee/add-view/route.ts
import { NextResponse } from "next/server";
import { ApiClient, requests } from "recombee-api-client";

const client = new ApiClient(
  process.env.RECOMBEE_DB_ID!,
  process.env.RECOMBEE_PRIVATE_TOKEN!,
  { region: "ap-se" }
);

export async function POST(req: Request) {
  try {
    const { funpaperId, userId } = await req.json();
    if (!funpaperId || !userId) return NextResponse.json({ error: "Missing data" }, { status: 400 });

    // const funpaper = await getFunpaperBySlug(slug);
    // if (!funpaper) return NextResponse.json({ error: "Funpaper not found" }, { status: 404 });

    await client.send(
      new requests.AddDetailView(userId, funpaperId.toString(), { cascadeCreate: true })
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Recombee AddView error", err);
    return NextResponse.json({ error: "Failed to add view" }, { status: 500 });
  }
}
