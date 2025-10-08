import FunpaperClient from "./FunpaperClient";

export const metadata = {
  title: "Funpaper Harian",
  //   description:
  //     "Temukan berbagai macam jenis kegiatan untuk anak seperti mengenal angka, huruf, mewarnai, gunting tempel, dan masih banyak yang lainnya"
};

export default async function Page({ searchParams }) {
  const params = await searchParams;

  return (
    <main className="bg-[#fcfbf8] text-sm mt-[68px] pt-[40px] pb-[80px]">
      <section className="mb-14">
        <div className="container">
          <p className="mb-4 text-sm">
            Home &gt; <b>Funpaper Harian</b>
          </p>

          <div className="card-header bg-[#BDF2B2]! bg-[url(/images/shapes/logo-tm-green-cropped.png)]!">
            <img src="/images/assets/funpaper.avif" className="w-32" alt="" />
            <div className="flex flex-col gap-3 py-4">
              <p className="font-bold">Funpaper Harian</p>
              <p>
                Semua bisa diunduh secara gratis!
                <br />
                Manfaatkan filter untuk lebih mudah menemukan funpaper sesuai keinginan
              </p>
            </div>
          </div>
        </div>
      </section>

      <FunpaperClient params={params} />
    </main>
  );
}
