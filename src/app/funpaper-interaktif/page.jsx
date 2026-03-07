import FunpaperClient from "./FunpaperClient";

export const metadata = {
  title: "Funpaper Interaktif - Worksheet Online untuk Anak",
  description:
    "Worksheet interaktif online untuk anak TK dan PAUD! Lembar kerja yang bisa digunakan langsung secara online. Aktivitas belajar yang lebih hidup, interaktif dan menyenangkan.",
  openGraph: {
    title: "Funpaper Interaktif - Worksheet Online | Terus Mengajar",
    description:
      "Worksheet interaktif online untuk anak TK dan PAUD! Aktivitas belajar interaktif dan menyenangkan.",
    url: "https://terusmengajar.id/funpaper-interaktif",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default async function Page({ searchParams }) {
  const params = await searchParams;

  return (
    <main className="bg-[#fcfbf8] text-sm mt-[68px] pt-[40px] pb-[80px]">
      <section className="mb-14">
        <div className="container">
          <p className="mb-4 text-sm">
            Home &gt; <b>Funpaper Interaktif</b>
          </p>

          <div className="card-header bg-[#FFDEF3]! bg-[url(/images/shapes/logo-tm-purple2-cropped.png)]!">
            <img src="/images/assets/funpaper.avif" className="w-32" alt="" />
            <div className="flex flex-col gap-3 py-4">
              <p className="font-bold">Funpaper Interaktif</p>
              <p>
                Lembar kerja yang bisa digunakan langsung secara online.
                Menghadirkan aktivitas belajar yang lebih hidup, interaktif dan
                menyenangkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FunpaperClient params={params} />
    </main>
  );
}
