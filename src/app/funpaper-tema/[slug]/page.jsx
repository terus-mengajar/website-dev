// app/funpaper-harian/[slug]/page.tsx
import { File } from "lucide-react";
import Aktivitas from "./Aktivitas";
import Image from "next/image";
import { redirect } from "next/navigation";
// import ProdukTerkait from "./ProdukTerkait";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/funpaper-tema/${slug}`,
    {
      cache: "no-store",
    }
  );

  const funpaper = await res.json();

  // Use SEO fields if available, fallback to basic info
  const rawTitle = funpaper.seo_title || funpaper.name_on_website;
  const title = rawTitle.replace(/\s*\|\s*Terus Mengajar\s*$/i, "");
  const description = funpaper.short_description || funpaper.description?.slice(0, 160) || `Paket tema ${funpaper.name_on_website} untuk anak usia ${funpaper.age} tahun.`;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://terusmengajar.id";
  const canonicalUrl = `${baseUrl}/funpaper-tema/${slug}`;

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

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://terusmengajar.id";
  const canonicalUrl = `${baseUrl}/funpaper-tema/${slug}`;

  // LearningResource + BreadcrumbList + FAQPage JSON-LD via @graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LearningResource",
        name: funpaper.name_on_website,
        description:
          funpaper.short_description ||
          funpaper.description?.slice(0, 160) ||
          `Paket tema ${funpaper.name_on_website} untuk anak usia ${funpaper.age} tahun.`,
        image: funpaper.mockup_url,
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
        educationalLevel: `Anak usia ${funpaper.age || "2-6"} tahun`,
        educationalUse: "Practice",
        learningResourceType: "Worksheet",
        inLanguage: "Indonesian",
        isAccessibleForFree: false,
        datePublished: funpaper.created_at || new Date().toISOString(),
        dateModified: funpaper.updated_at || new Date().toISOString(),
        url: canonicalUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: "https://terusmengajar.id",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Funpaper Tema",
            item: "https://terusmengajar.id/funpaper-tema",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: funpaper.name_on_website,
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Apa isi paket tema ${funpaper.name_on_website}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `<p><strong>${funpaper.name_on_website}</strong> adalah paket worksheet tematik dari Terus Mengajar yang terdiri dari ${funpaper.total_pages || "beberapa"} lembar soal dengan tema terintegrasi untuk anak usia ${funpaper.age || "dini"} tahun.</p>`,
            },
          },
          {
            "@type": "Question",
            name: "Bagaimana cara membeli paket tema ini?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `<p>Klik tombol "Beli" di halaman ini, lalu ikuti proses pembayaran melalui Mayar. Setelah pembayaran berhasil, worksheet akan tersedia untuk diunduh.</p>`,
            },
          },
          {
            "@type": "Question",
            name: `Untuk usia berapa paket tema ${funpaper.name_on_website}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `<p>Paket tema ini dirancang untuk anak usia ${funpaper.age || "2-6"} tahun. Materi disusun sesuai tahap perkembangan anak usia dini.</p>`,
            },
          },
          {
            "@type": "Question",
            name: "Apakah worksheet bisa dicetak berkali-kali?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `<p>Ya, setelah membeli paket tema, Anda bisa mengunduh dan mencetak worksheet berkali-kali untuk keperluan belajar anak di rumah.</p>`,
            },
          },
          {
            "@type": "Question",
            name: "Apa kelebihan Funpaper Tema dibanding worksheet biasa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `<p>Funpaper Tema menyajikan materi pembelajaran dalam satu topik yang terintegrasi, sehingga anak belajar secara menyeluruh dan lebih bermakna. Setiap lembar saling berkaitan dengan tema yang sama.</p>`,
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="w-full mt-[68px]">
      {/* JSON-LD Structured Data: LearningResource + BreadcrumbList + FAQPage */}
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
              {funpaper.mockup_url && (
                <Image
                  src={funpaper.mockup_url}
                  width={800}
                  height={450}
                  alt="Funpaper Tema"
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

              <Aktivitas slug={slug} id={funpaper.id} />
            </div>

            {/* Sidebar Beli untuk desktop */}
            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-4">
                {funpaper.price && "Rp. " + funpaper.price.toLocaleString("id-ID")}
              </h3>

              <p className="text-gray-700 text-sm mb-4 font-medium">Silahkan lihat <a href="/syarat-dan-ketentuan" target="_blank" className="text-pink underline">Syarat & Ketentuan</a> sebelum klik tombol beli</p>

              <div className="flex gap-3 mb-5">
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
