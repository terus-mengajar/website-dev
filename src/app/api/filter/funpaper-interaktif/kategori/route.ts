import { NextResponse } from "next/server";
// import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function GET() {
  try {
    const logs = [
      { value: 1, label: "Funpaper Harian" },
      { value: 2, label: "Funpaper Calistung" },
      { value: 3, label: "Funpaper Coding" },
    ];

    return NextResponse.json(logs);
  } catch (err) {
    console.error("Gagal ambil data:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
