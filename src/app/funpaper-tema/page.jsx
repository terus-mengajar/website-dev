import SidebarMedsos from "@/components/common/SidebarMedsos";
import FunpaperTemaList from "./FunpaperTemaList";

export const metadata = {
  title: "Funpaper Tema",
  //   description:
  //     "Temukan berbagai macam jenis kegiatan untuk anak seperti mengenal angka, huruf, mewarnai, gunting tempel, dan masih banyak yang lainnya"
};

export default async function Page() {
  return (
    <main className="bg-[#fcfbf8] text-sm mt-[68px] pt-[40px] pb-[80px] px-[20px]">
      <section className="mb-14">
        <div className="container">
          <p className="mb-4 text-sm">
            Home &gt; <b>Funpaper Tema</b>
          </p>

          <div className="flex flex-col lg:flex-row gap-2 lg:gap-16 px-12 py-4 bg-[#fbf6f2] bg-[url(/images/shapes/logo-tm-cream-cropped-30.avif)] bg-cover lg:bg-contain bg-no-repeat bg-right rounded-lg items-center">
            <img src="/images/assets/funpaper.avif" className="w-32" alt="" />
            <div className="flex flex-col gap-3 py-4">
              <p className="font-bold">Funpaper Tema</p>
              <p>
                Kenalin! worksheet tematik siap pakai untuk anak usia 2-6 tahun. Kumpulan lembar kerja (worksheet) bertema dan berstruktur untuk anak usia dini
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
              <FunpaperTemaList />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
