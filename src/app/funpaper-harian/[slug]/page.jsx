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
      cache: "no-store",
    },
  );

  const funpaper = await res.json();

  // Use SEO fields if available, fallback to basic info
  const title = funpaper.seo_title || `${funpaper.name} - ${funpaper.activity}`;
  const description = funpaper.short_description || `Lembar kerja ${funpaper.name} untuk anak usia ${funpaper.age} tahun. Aktivitas ${funpaper.activity} dengan tema ${funpaper.theme}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: funpaper.image_url ? [funpaper.image_url] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: funpaper.image_url ? [funpaper.image_url] : [],
    },
  };
}

export default async function FunpaperHarianPage({ params }) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/funpaper-harian/${slug}`,
    {
      cache: "no-store", // biar ga cache kalau datanya dinamis
    },
  );

  if (res.status == 404) {
    redirect("/funpaper-harian");
  }

  const funpaper = await res.json();

  // Generate JSON-LD structured data for SEO
  const jsonLd = funpaper.schema_json
    ? JSON.parse(funpaper.schema_json)
    : {
        "@context": "https://schema.org",
        "@type": "EducationalResource",
        name: funpaper.name,
        description: funpaper.short_description || `Lembar kerja ${funpaper.name} untuk anak usia ${funpaper.age} tahun`,
        image: funpaper.image_url,
        educationalLevel: `Anak usia ${funpaper.age} tahun`,
        learningResourceType: "Worksheet",
        isAccessibleForFree: true,
      };

  return (
    <div className="w-full mt-[68px]">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Section 1 */}
      <section className="py-12 bg-[#fcfbf8]">
        <div className="container">
          <div className="flex justify-center">
            {/* Card Funpaper Preview */}
            <div className="w-full max-w-lg">
              {funpaper.slug && (
                <img
                  // src={
                  //   CLOUDFLARE_R2_WEBSITE_ASSETS_URL +
                  //   "/funpaper-harian/" +
                  //   funpaper.slug +
                  //   ".jpg"
                  // }
                  src={funpaper.image_url}
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
              interactive={funpaper.interactive}
            />
          </div>
        </div>
      </section>

      {/* SEO Description Section */}
      {funpaper.medium_description && (
        <section className="py-12 bg-[#fcfbf8]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-[#ef9e00] mb-6">
                Tentang {funpaper.name}
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {funpaper.medium_description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Focus Keyword Section */}
      {funpaper.focus_keyword && (
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-500">Tagar:</span>
              <span className="px-3 py-1 bg-[#fcfbf8] text-sm text-gray-600 rounded-full">
                #{funpaper.focus_keyword.replace(/\s+/g, "").toLowerCase()}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Produk Terkait */}
      <ProdukTerkait
        activityId={funpaper.activity_id}
        themeId={funpaper.theme_id}
        funpaperId={funpaper.id}
        slug={funpaper.slug}
      />
    </div>
  );
}
