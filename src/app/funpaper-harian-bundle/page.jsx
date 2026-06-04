import FunpaperClient from "./FunpaperClient";

export const metadata = {
  title: "Funpaper Harian Bundle",
  description:
    "Dapatkan 15 lembar kerja gratis dalam setiap bundle Funpaper Harian. Worksheet bermain sambil belajar untuk anak TK dan PAUD. Download gratis!",
  alternates: {
    canonical: "https://terusmengajar.id/funpaper-harian-bundle",
  },
  openGraph: {
    title: "Funpaper Harian Bundle - Download Worksheet Gratis",
    description:
      "Dapatkan 15 lembar kerja gratis dalam setiap bundle Funpaper Harian. Worksheet bermain sambil belajar untuk anak TK dan PAUD.",
    url: "https://terusmengajar.id/funpaper-harian-bundle",
    images: [{ url: "/images/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funpaper Harian Bundle - Download Worksheet Gratis",
    description:
      "Dapatkan 15 lembar kerja gratis dalam setiap bundle Funpaper Harian. Worksheet bermain sambil belajar untuk anak TK dan PAUD.",
    images: ["/images/og.png"],
  },
};

export default async function Page() {
  return (
    <main className="bg-[#fcfbf8] text-sm mt-[68px] pt-[40px] pb-[80px]">
      <section className="mb-14">
        <div className="container">
          <p className="mb-4 text-sm">
            Home &gt; <b>Funpaper Tema</b>
          </p>

          <div className="card-header">
            <img src="/images/funpaper/bundle/bundle-1.avif" className="w-32" alt="" />
            <div className="flex flex-col gap-3 py-4">
              <p className="font-bold">Free Funpaper Harian Bundle</p>
              <p>
               Semua bisa download secara gratis!<br />
               Dapatkan 15 Lembar Kerja Gratis dalam tiap bundle
              </p>
            </div>
          </div>
        </div>
      </section>

      <FunpaperClient />
    </main>
  );
}
