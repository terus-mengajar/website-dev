import { NextResponse } from "next/server";
import { CLOUDFLARE_D1_URL, CLOUDFLARE_HEADER } from "@/lib/cloudflare";

export async function GET() {
  try {
    // Jalankan semua query paralel agar cepat
    const [totalDownloadRes, totalUserRes, topFunpaperRes, lowFunpaperRes, topUserRes] =
      await Promise.all([
        fetch(CLOUDFLARE_D1_URL, {
          method: "POST",
          headers: CLOUDFLARE_HEADER,
          body: JSON.stringify({
            sql: "SELECT SUM(downloaded) download FROM funpaper",
          }),
        }),
        fetch(CLOUDFLARE_D1_URL, {
          method: "POST",
          headers: CLOUDFLARE_HEADER,
          body: JSON.stringify({
            sql: "SELECT COUNT(*) AS jumlah FROM user",
          }),
        }),
        fetch(CLOUDFLARE_D1_URL, {
          method: "POST",
          headers: CLOUDFLARE_HEADER,
          body: JSON.stringify({
            sql: `
                SELECT name, downloaded
                FROM funpaper
                ORDER BY downloaded DESC
                LIMIT 10;
            `,
          }),
        }),
        fetch(CLOUDFLARE_D1_URL, {
          method: "POST",
          headers: CLOUDFLARE_HEADER,
          body: JSON.stringify({
            sql: `
                SELECT name
                FROM funpaper
                WHERE downloaded=0 AND name IS NOT NULL
                AND funpaper_type_id=1
                ORDER BY name DESC;
            `,
          }),
        }),
        fetch(CLOUDFLARE_D1_URL, {
          method: "POST",
          headers: CLOUDFLARE_HEADER,
          body: JSON.stringify({
            sql: `
                SELECT email, COUNT(*) AS total_download
                FROM funpaper_download_log
                WHERE email IS NOT NULL AND email != ''
                GROUP BY email
                ORDER BY total_download DESC
                LIMIT 10;
            `,
          }),
        }),
      ]);


    // Parse hasil semua request
    const [totalDownload, totalUser, topFunpaper, lowFunpaper, topUser] = await Promise.all([
      totalDownloadRes.json(),
      totalUserRes.json(),
      topFunpaperRes.json(),
      lowFunpaperRes.json(),
      topUserRes.json(),
    ]);

    // Cek error masing-masing
    if (!totalDownload.success) console.log(totalDownload.errors);
    if (!totalUser.success) console.log(totalUser.errors);
    if (!topFunpaper.success) console.log(topFunpaper.errors);
    if (!lowFunpaper.success) console.log(lowFunpaper.errors);
    if (!topUser.success) console.log(topUser.errors);

    // Ambil hasil
    const totalDownloadValue =
      totalDownload?.result?.[0]?.results?.[0]?.download ?? 0;
    const totalUserValue = totalUser?.result?.[0]?.results?.[0]?.jumlah ?? 0;
    const topFunpaperData = topFunpaper?.result?.[0]?.results ?? [];
    const lowFunpaperData = lowFunpaper?.result?.[0]?.results ?? [];
    const topUserData = topUser?.result?.[0]?.results ?? [];

    return NextResponse.json({
      success: true,
      data: {
        totalDownload: totalDownloadValue,
        totalUser: totalUserValue,
        topFunpapers: topFunpaperData,
        lowFunpapers: lowFunpaperData,
        topUsers: topUserData,
      },
    });
  } catch (err) {
    console.error("Gagal ambil data dashboard:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
