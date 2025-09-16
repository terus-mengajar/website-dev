import SidebarMedsos from "@/components/common/SidebarMedsos";
import FunpaperHarianList from "./FunpaperHarianList";
import Filter from "@/components/common/Filter";

export const metadata = {
  title: "Funpaper Harian",
  //   description:
  //     "Temukan berbagai macam jenis kegiatan untuk anak seperti mengenal angka, huruf, mewarnai, gunting tempel, dan masih banyak yang lainnya"
};

export default async function Page({ searchParams }) {
  const sParams = await searchParams; // ambil isi query ?nama=...
  const nama = sParams.nama || ""; // ambil isi query ?nama=...

  return (
    <main className="bg-[#fcfbf8] text-sm mt-[68px] pt-[40px] pb-[80px] px-[20px]">
      <section className="mb-14">
        <div className="container">

          <div className="card-header">
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
              <Filter sidebar={true} />
              <SidebarMedsos />
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <p className="text-xs mb-4">Menampilkan hasil pencarian <b>"{nama}"</b></p>
              <FunpaperHarianList nama={nama} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
