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
      cache: "no-store",
    },
  );

  const funpaper = await res.json();

  // Use SEO fields if available, fallback to basic info
  const rawTitle = funpaper.seo_title || `${funpaper.name} - ${funpaper.activity}`;
  const title = rawTitle.replace(/\s*\|\s*Terus Mengajar\s*$/i, "");
  const description =
    funpaper.short_description ||
    `Lembar kerja calistung ${funpaper.name} dengan tema ${funpaper.activity}.`;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://terusmengajar.id";
  const canonicalUrl = `${baseUrl}/funpaper-calistung/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
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

export default async function FunpaperPage({ params }) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/funpaper-calistung/${slug}`,
    {
      cache: "no-store", // biar ga cache kalau datanya dinamis
    },
  );

  if (res.status == 404) {
    redirect("/funpaper-calistung");
  }

  const funpaper = await res.json();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://terusmengajar.id";
  const canonicalUrl = `${baseUrl}/funpaper-calistung/${slug}`;

  // LearningResource + FAQPage JSON-LD via @graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LearningResource",
        name: funpaper.name,
        description:
          funpaper.short_description ||
          `Lembar kerja calistung ${funpaper.name} dengan tema ${funpaper.activity}.`,
        image: funpaper.image_url,
        author: {
          "@type": "Organization",
          name: "Terus Mengajar",
          url: "https://terusmengajar.id",
        },
        publisher: {
          "@type": "Organization",
          name: "Terus Mengajar",
          url: "https://terusmengajar.id",
        },
        educationalLevel: "TK / PAUD",
        educationalUse: "Practice",
        learningResourceType: "Worksheet",
        inLanguage: "Indonesian",
        isAccessibleForFree: true,
        datePublished: funpaper.created_at || new Date().toISOString(),
        dateModified: funpaper.updated_at || new Date().toISOString(),
        url: canonicalUrl,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Apa itu worksheet ${funpaper.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `<p>Worksheet <strong>${funpaper.name}</strong> adalah lembar kerja calistung gratis dari Terus Mengajar yang dirancang untuk membantu anak belajar ${funpaper.activity || "konsep dasar"} dengan cara menyenangkan.</p>`,
            },
          },
          {
            "@type": "Question",
            name: `Untuk usia berapa worksheet ${funpaper.name} ini?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `<p>Worksheet ini cocok untuk anak usia dini, khususnya TK dan PAUD. Usia yang direkomendasikan dapat disesuaikan dengan kemampuan anak.</p>`,
            },
          },
          {
            "@type": "Question",
            name: "Apakah worksheet ini bisa diunduh gratis?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `<p>Ya, worksheet <strong>${funpaper.name}</strong> bisa diunduh secara gratis di Terus Mengajar. Cukup klik tombol download dan worksheet siap dicetak.</p>`,
            },
          },
          {
            "@type": "Question",
            name: "Bagaimana cara menggunakan worksheet ini?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `<p>Cetak worksheet di kertas A4, kemudian pandu anak untuk mengerjakannya sesuai petunjuk. Aktivitas ini bisa dilakukan bersama orang tua di rumah.</p>`,
            },
          },
          {
            "@type": "Question",
            name: "Apa manfaat worksheet calistung untuk anak?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `<p>Worksheet calistung membantu anak mengasah kemampuan membaca, menulis, dan berhitung sejak dini. Metode bermain sambil belajar membuat anak lebih termotivasi dan senang belajar.</p>`,
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="w-full mt-[68px]">
      {/* JSON-LD Structured Data: LearningResource + FAQPage */}
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
                <Image
                  src={funpaper.image_url}
                  height={461}
                  width={328}
                  alt={funpaper.name}
                  className="mx-auto"
                  unoptimized
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

              {/* SEO Description Section */}
              {funpaper.medium_description && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-4">
                    Tentang {funpaper.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {funpaper.medium_description}
                  </p>
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
              link={funpaper.link}
              interactive={funpaper.interactive}
            />
          </div>
        </div>
      </section>

      {/* Produk Terkait */}
      <ProdukTerkait themeCalistungId={funpaper.theme_calistung_id} />
    </div>
  );
}
