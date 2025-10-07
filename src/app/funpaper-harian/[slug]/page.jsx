// app/funpaper-harian/[slug]/page.tsx
import Link from "next/link";
import DownloadButton from "./DownloadButton";
import ProdukTerkait from "./ProdukTerkait";
import Image from "next/image";
import { CLOUDFLARE_R2_WEBSITE_ASSETS_URL } from "@/lib/cloudflare";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/funpaper-harian/${slug}`,
    {
      cache: "no-store", // biar ga cache kalau datanya dinamis
    }
  );

  const funpaper = await res.json();

  return {
    title: funpaper.name + " - " + funpaper.activity,
    // description: funpaper.description",
  };
}

export default async function FunpaperHarianPage({ params }) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/funpaper-harian/${slug}`,
    {
      cache: "no-store", // biar ga cache kalau datanya dinamis
    }
  );

  if (res.status == 404) {
    redirect("/funpaper-harian");
  }

  const funpaper = await res.json();

  return (
    <div className="w-full mt-[68px]">
      {/* Section 1 */}
      <section className="py-12 bg-[#fcfbf8]">
        <div className="container">
          <div className="flex justify-center">
            {/* Card Funpaper Preview */}
            <div className="w-full max-w-lg">
              {funpaper.slug && (
                <img
                  src={
                    CLOUDFLARE_R2_WEBSITE_ASSETS_URL +
                    "/funpaper-harian/" +
                    funpaper.slug +
                    ".jpg"
                  }
                  height={461}
                  width={328}
                  alt={funpaper.name}
                  className="mx-auto"
                />
              )}
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
                {funpaper.name + " - " + funpaper.activity}
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
                    1
                  </p>
                  <p className="text-gray-600 text-xs lg:text-sm">
                    Lembar Soal
                  </p>
                </div>
                <div className="flex-1 text-center border-r border-[#cbaf78] py-2 px-6">
                  <p className="text-[#9ec288] text-xl sm:text-5xl md:text-3xl lg:text-5xl font-bold mb-1">
                    A4/A5
                  </p>
                  <p className="text-gray-600 text-xs lg:text-sm">Paper</p>
                </div>
              </div>
              <div className="">
                <h3 className="text-lg font-bold mb-4">Kategori</h3>
                <div className="flex flex-row gap-2">
                  <Link
                    href={`/funpaper-harian?tema=${funpaper.theme_id}`}
                    className="py-4 px-4 md:px-8 bg-[#fcfbf8] rounded-lg flex-1"
                  >
                    <p className="text-xs font-semibold mb-2">Tema</p>
                    <div className="flex flex-row gap-4 items-center">
                      <p className="text-xs md:text-lg font-semibold">
                        {funpaper.theme}
                      </p>
                      <img
                        src="https://cdn.prod.website-files.com/644f4d0f9964649ed2f9f0a2/64ed60015ee7db085feed091_Icon%20Tema%20-%20Mengenal%20Huruf.svg"
                        className="w-8"
                        alt="Logo"
                      />
                    </div>
                  </Link>

                  <Link
                    href={`/funpaper-harian?aktivitas=${funpaper.activity_id}`}
                    className="py-4 px-4 md:px-8 bg-[#fcfbf8] rounded-lg flex-1"
                  >
                    <p className="text-xs font-semibold mb-2">Aktivitas</p>
                    <div className="flex flex-row gap-4 items-center">
                      <p className="text-xs md:text-lg font-semibold">
                        {funpaper.activity}
                      </p>
                      <img
                        src="https://cdn.prod.website-files.com/644f4d0f9964649ed2f9f0a2/64ed60015ee7db085feed091_Icon%20Tema%20-%20Mengenal%20Huruf.svg"
                        className="w-8"
                        alt="Logo"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar Gratis untuk desktop */}
            <DownloadButton
              id={funpaper.id}
              slug={slug}
              linkA4={funpaper.link_a4}
              linkA5={funpaper.link_a5}
            />
          </div>
        </div>
      </section>

      {/* Produk Terkait */}
      <ProdukTerkait
        activityId={funpaper.activity_id}
        themeId={funpaper.theme_id}
      />
    </div>
  );
}
