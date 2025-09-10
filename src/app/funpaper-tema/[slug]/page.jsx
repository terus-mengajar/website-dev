// app/funpaper-harian/[slug]/page.tsx
import { File } from 'lucide-react';
import Aktivitas from "./Aktivitas";
// import ProdukTerkait from "./ProdukTerkait";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/funpaper-tema/${slug}`,
    {
      cache: "no-store", // biar ga cache kalau datanya dinamis
    }
  );
  const funpaper = await res.json();

  return {
    title: funpaper.name_on_website,
    // description: funpaper.description",
  };
}

export default async function FunpaperTemaPage({ params }) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/funpaper-tema/${slug}`,
    {
      cache: "no-store", // biar ga cache kalau datanya dinamis
    }
  );
  const funpaper = await res.json();

  return (
    <div className="w-full mt-[68px]">
      {/* Section 1 */}
      <section className="py-12 bg-[#fcfbf8]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            {/* Card Funpaper Preview */}
            <div className="w-full max-w-lg">
              <img
                src={funpaper.mockup_url}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-14 items-start">
            {/* Sidebar Gratis untuk HP */}
            {/* <div className="flex md:hidden flex-col">
              <h3 className="text-3xl font-bold mb-2">Gratis</h3>
              <button className="tombol-pink py-2!">
                Mainkan Sekarang
              </button>
            </div> */}

            {/* Info funpaper */}
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-4xl text-center md:text-left font-bold text-[#ef9e00] mb-12">
                {funpaper.name_on_website}
              </h2>
              <div className="flex mb-10 items-center">
                <div className="flex-1 text-center border-l border-[#cbaf78] py-2 px-6">
                  <p className="text-[#f77] text-xl sm:text-5xl md:text-3xl lg:text-5xl font-bold mb-1">
                    {funpaper.age}
                  </p>
                  <p className="text-gray-600 text-xs lg:text-sm">Tahun</p>
                </div>
                <div className="flex-1 text-center border-x border-[#cbaf78] py-2 px-6">
                  <p className="text-[#6296b2] text-xl sm:text-5xl md:text-3xl lg:text-5xl font-bold mb-1">
                    {funpaper.total_pages}
                  </p>
                  <p className="text-gray-600 text-xs lg:text-sm">
                    Lembar Soal
                  </p>
                </div>
                <div className="flex-1 text-center border-r border-[#cbaf78] py-2 px-6">
                  <p className="text-[#9ec288] text-xl sm:text-5xl md:text-3xl lg:text-5xl font-bold mb-1">
                    A4
                  </p>
                  <p className="text-gray-600 text-xs lg:text-sm">Paper</p>
                </div>
              </div>
              <div className="text-gray-700">
                {funpaper.description.split("\n").map((line, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-3">
                    {line}
                  </p>
                ))}
              </div>

              <Aktivitas slug={slug} id={funpaper.id} />
            </div>

            {/* Sidebar Beli untuk desktop */}
            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-4">{'Rp. '+funpaper.price.toLocaleString('id-ID')}</h3>

              <div className="flex gap-3 mb-8">
                <button
                  type="button"
                  className="px-2 py-1 rounded-lg border flex items-center text-xs font-medium gap-2 text-red-600 border-red-500"
                >
                  <File /> Versi PDF
                </button>

              </div>

              <a
                target="_blank"
                href={funpaper.mayar_url}
                className="tombol-pink py-2! text-center px-22! w-full! block sm:w-auto!" 
              >
                Beli
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
