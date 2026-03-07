import FunpaperClient from "./FunpaperClient";

export const metadata = {
  title: "Funpaper Coding - Download Worksheet Coding untuk Anak",
  description:
    "Download worksheet coding gratis untuk anak TK dan PAUD! Melatih cara berpikir logis, kritis, dan sistematis melalui permainan kode, arah dan pemecahan masalah sederhana.",
  openGraph: {
    title: "Funpaper Coding - Download Worksheet Coding | Terus Mengajar",
    description:
      "Download worksheet coding gratis untuk anak TK dan PAUD! Melatih cara berpikir logis dan sistematis.",
    url: "https://terusmengajar.id/funpaper-coding",
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
            Home &gt; <b>Funpaper Coding</b>
          </p>

          <div className="card-header bg-[#FBF7D9]! bg-[url(/images/shapes/logo-tm-yellow-cropped.png)]!">
            <img src="/images/assets/funpaper.avif" className="w-32" alt="" />
            <div className="flex flex-col gap-3 py-4">
              <p className="font-bold">Funpaper Coding</p>
              <p>
                Lembar kerja yang melatih cara berpikir logis, kritis, dan
                sistematis melalui permainan kode, arah dan pemecahan masalah
                sederhana.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FunpaperClient params={params} />
    </main>
  );
}
