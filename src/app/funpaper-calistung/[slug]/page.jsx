import Link from "next/link";
import DownloadButton from "./DownloadButton";
import ProdukTerkait from "./ProdukTerkait";
import Image from "next/image";
import { CLOUDFLARE_R2_WEBSITE_ASSETS_URL } from "@/lib/cloudflare";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/funpaper-calistung/${slug}`,
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

export default async function FunpaperPage({ params }) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/funpaper-calistung/${slug}`,
    {
      cache: "no-store", // biar ga cache kalau datanya dinamis
    }
  );

  if (res.status == 404) {
    redirect("/funpaper-calistung");
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
                <Image
                  src={
                    CLOUDFLARE_R2_WEBSITE_ASSETS_URL +
                    "/funpaper-calistung/" +
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
                {funpaper.name + " - " + funpaper.theme}
              </h2>
              <div className="flex mb-10 items-center">
                {/* <div className="flex-1 text-center border-l border-[#cbaf78] py-2 px-6">
                  <p className="text-[#f77] text-xl sm:text-5xl md:text-3xl lg:text-5xl font-bold mb-1">
                    {funpaper.age}
                  </p>
                  <p className="text-gray-600 text-xs lg:text-sm">Tahun</p>
                </div> */}
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
                    A4
                  </p>
                  <p className="text-gray-600 text-xs lg:text-sm">Paper</p>
                </div>
              </div>
            </div>

            {/* Sidebar Gratis untuk desktop */}
            <DownloadButton
              id={funpaper.id}
              slug={slug}
              link={funpaper.link}
            />
          </div>
        </div>
      </section>

      {/* Produk Terkait */}
      <ProdukTerkait
        themeCalistungId={funpaper.theme_calistung_id}
      />
    </div>
  );
}
