import { NextResponse } from "next/server";
import { ApiClient, requests } from "recombee-api-client";

const client = new ApiClient(
  process.env.RECOMBEE_DB_ID!,
  process.env.RECOMBEE_PRIVATE_TOKEN!,
  { region: "ap-se" }
);

// daftar userId yang mau dihapus
const users = [];

export async function GET(req: Request) {
  return NextResponse.json(
    { error: "Delete user dimatikan", details: "" },
    { status: 500 }
  );

  // hapus semua user satu per satu
  try {
    for (const userId of users) {
      try {
        await client.send(new requests.DeleteUser(userId));
        console.log(`✅ Deleted user: ${userId}`);
      } catch (err) {
        console.error(`❌ Failed to delete ${userId}:`, err.message);
      }
    }

    return NextResponse.json("success");
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
