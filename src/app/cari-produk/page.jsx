import SidebarMedsos from "@/components/common/SidebarMedsos";
import FunpaperHarianList from "./FunpaperHarianList";

export const metadata = {
  title: "Funpaper Harian",
  //   description:
  //     "Temukan berbagai macam jenis kegiatan untuk anak seperti mengenal angka, huruf, mewarnai, gunting tempel, dan masih banyak yang lainnya"
};

export default async function Page({ searchParams }) {
  const q = searchParams.q || ""; // ambil isi query ?q=...

  return (
    <main className="bg-[#fcfbf8] text-sm pt-[40px] pb-[80px] px-[20px]">
      <section className="mb-14">
        <div className="container">

          <div className="flex flex-col lg:flex-row gap-2 lg:gap-16 px-12 py-4 bg-[#fbf6f2] bg-[url(/images/shapes/logo-tm-cream-cropped-30.avif)] bg-cover lg:bg-contain bg-no-repeat bg-right rounded-lg items-center">
            <img src="/images/assets/funpaper.avif" className="w-32" alt="" />
            <div className="flex flex-col gap-3 py-4">
              <p className="font-bold">Funpaper</p>
              <p>
                Cari produk.
                <br />
                Manfaatkan filter untuk lebih mudah menemukan funpaper sesuai keinginan
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="order-2 lg:order-1 w-full lg:w-auto">
              <SidebarMedsos />
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <p className="text-xs mb-4">Menampilkan hasil pencarian <b>"{q}"</b></p>
              <FunpaperHarianList />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
