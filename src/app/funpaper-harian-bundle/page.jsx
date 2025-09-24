import FunpaperClient from "./FunpaperClient";

export const metadata = {
  title: "Funpaper Harian Bundle",
  //   description:
  //     "Temukan berbagai macam jenis kegiatan untuk anak seperti mengenal angka, huruf, mewarnai, gunting tempel, dan masih banyak yang lainnya"
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
