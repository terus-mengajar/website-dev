// import { client, rqs } from "@/lib/recombee";

// export async function GET(req) {
//   // contoh add item (funpaper)
//   //   await client.send(new rqs.AddItem("funpaper-123"));

//   // set properties (judul, kategori, dll)
//   //   await client.send(new rqs.SetItemValues("funpaper-123", {
//   //     title: "Funpaper Matematika Dasar",
//   //     category: "Matematika",
//   //     difficulty: "Beginner"
//   //   }, { cascadeCreate: true }));

//   // contoh add user
//   try {
//     await client.send(new rqs.AddUser("user-456"));
//     return Response.json({ ok: true });
//   } catch (error) {
//     console.error(error);
//     return Response.json({ ok: false, error: error.message }, { status: 500 });
//   }
// }
