import FunpaperClient from "./FunpaperClient";

export const metadata = {
  title: "Funpaper Calistung - Download Worksheet Calistung",
  description:
    "Download worksheet Calistung (Baca-Tulis-Hitung) gratis untuk anak TK dan PAUD! Aktivitas belajar membaca, menulis, dan berhitung dengan cara bermain yang menyenangkan.",
  openGraph: {
    title: "Funpaper Calistung - Download Worksheet Calistung | Terus Mengajar",
    description:
      "Download worksheet Calistung gratis untuk anak TK dan PAUD! Belajar membaca, menulis, dan berhitung sambil bermain.",
    url: "https://terusmengajar.id/funpaper-calistung",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default async function Page({ searchParams }) {
  const params = await searchParams;

  return (
    <main className="bg-[#fcfbf8] text-sm mt-[68px] pt-[40px]">
      <section className="mb-14">
        <div className="container">
          <p className="mb-4 text-sm">
            Home &gt; <b>Funpaper Calistung</b>
          </p>

          <div className="card-header bg-[#ECDCFB]! bg-[url(/images/shapes/logo-tm-purple-cropped.png)]!">
            <img src="/images/assets/funpaper.avif" className="w-32" alt="" />
            <div className="flex flex-col gap-3 py-4">
              <p className="font-bold">Funpaper Calistung</p>
              <p>
                Lembar kerja yang fokus kepada membaca, menulis dan berhitung.
                Aktivitasnya ringan, menyenangkan, dan sesuai dengan tahap
                perkembangan anak.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FunpaperClient params={params} />
    </main>
  );
}
