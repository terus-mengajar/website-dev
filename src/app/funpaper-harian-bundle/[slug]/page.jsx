// app/funpaper-harian/[slug]/page.tsx
import { File } from "lucide-react";
import Image from "next/image";
import DownloadButton from "./DownloadButton";
import ProdukTerkait from "./ProdukTerkait";
import { redirect } from "next/navigation";
// import ProdukTerkait from "./ProdukTerkait";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/funpaper-harian-bundle/${slug}`,
    {
      cache: "no-store",
    }
  );

  const funpaper = await res.json();

  // Use SEO fields if available, fallback to basic info
  const title = funpaper.seo_title || funpaper.name_on_website;
  const description = funpaper.short_description || funpaper.description?.slice(0, 160) || `Paket bundle ${funpaper.name_on_website} untuk anak.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: funpaper.mockup_url ? [funpaper.mockup_url] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: funpaper.mockup_url ? [funpaper.mockup_url] : [],
    },
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

  if (res.status == 404) {
    redirect("/funpaper-tema");
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

                <Image
                  src={
                    funpaper.mockup_url ||
                    "/images/funpaper/bundle/bundle-1.avif"
                  }
                  width={800}
                  height={450}
                  alt="Funpaper Bundle"
                  className="mx-auto"
                  unoptimized
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

              {/* SEO Description - prefer medium_description over description */}
              {(funpaper.medium_description || funpaper.description) && (
                <div className="text-gray-700 mb-6">
                  {(funpaper.medium_description || funpaper.description).split("\n").map((line, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed mb-3">
                      {line}
                    </p>
                  ))}
                </div>
              )}

              {/* Focus Keyword Tag */}
              {funpaper.focus_keyword && (
                <div className="flex flex-wrap gap-2 items-center mb-6">
                  <span className="text-sm text-gray-500">Tagar:</span>
                  <span className="px-3 py-1 bg-[#fcfbf8] text-sm text-gray-600 rounded-full">
                    #{funpaper.focus_keyword.replace(/\s+/g, "").toLowerCase()}
                  </span>
                </div>
              )}
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
