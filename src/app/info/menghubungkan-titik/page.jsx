"use client";

import Image from "next/image";
import Link from "next/link";

export default function page() {

  return (
    <main className="text-gray-800">
<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cara Menggunakan Worksheet Menghubungkan Titik Bersama Anak",
  "description": "Panduan menggunakan worksheet menghubungkan titik untuk melatih motorik halus dan pengenalan angka/huruf anak.",
  "image": "/images/assets/menghubungkan-titik.png",
  "totalTime": "PT15M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "IDR",
    "value": "0"
  },
  "step": [
    {
      "position": 1,
      "name": "Cetak worksheet",
      "text": "Pilih worksheet menghubungkan titik sesuai tema yang disukai anak, lalu cetak.",
      "image": "/images/assets/menghubungkan-titik.png"
    },
    {
      "position": 2,
      "name": "Kenali urutan angka",
      "text": "Ajak anak melihat urutan angka atau huruf yang harus diikuti.",
      "image": "/images/assets/menghubungkan-titik.png"
    },
    {
      "position": 3,
      "name": "Hubungkan titik per titik",
      "text": "Pandu anak menghubungkan titik 1 ke 2, 2 ke 3, dan seterusnya menggunakan pensil.",
      "image": "/images/assets/menghubungkan-titik.png"
    },
    {
      "position": 4,
      "name": "Sebutkan hasilnya",
      "text": "Setelah selesai, ajak anak menebak gambar apa yang terbentuk.",
      "image": "/images/assets/menghubungkan-titik.png"
    },
    {
      "position": 5,
      "name": "Warnai gambar",
      "text": "Ajak anak mewarnai gambar yang terbentuk setelah menghubungkan semua titik.",
      "image": "/images/assets/menghubungkan-titik.png"
    }
  ]
}) }}
      />
        <style>{`
            .text-coklat {
                color: #6B3636;
            }
            .text-coklat-muda {
                color: #9C6224;
            }
        `}</style>

      <section className="pt-28 pb-12 px-8 bg-[#FBF6F2] relative overflow-hidden">
        <div className="hidden sm:block absolute -bottom-10 -left-16 opacity-30 pointer-events-none rotate-30 -translate-x-60 translate-y-35">
          <img
            src="/images/shapes/logo-tm-cream.avif"
            alt=""
            className="w-105 h-105 object-contain"
          />
        </div>
        <div className="absolute -bottom-26 -right-14 opacity-30 pointer-events-none rotate-30 translate-x-15 sm:translate-x-35 translate-y-10 sm:translate-y-40">
          <img
            src="/images/shapes/logo-tm-cream.avif"
            alt=""
            className="w-60 sm:w-110 h:60 sm:h-110 object-contain"
          />
        </div>

        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center">
            <div className="">
              <Image
                src="/images/assets/menghubungkan-titik.png"
                width={400}
                height={400}
                alt="Calistung"
                className="mx-auto w-30"
                unoptimized
              />
            </div>
            <div className="text-center md:text-left space-y-10">
              <h2 className="font-bold leading-tight text-3xl lg:text-4xl text-left text-coklat">
                Menghubungkan Titik
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section id="kenalin-worksheet" className="py-24 px-4 bg-[#FCFBF8]">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold leading8 md:leading-12 mb-4 text-coklat-muda max-w-3xl mx-auto">
              Belajar Angka Lewat Aktivitas Menghubungkan Titik
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">Aktivitas ini memberikan stimulasi kognitif kepada anak saat memperhatikan urutan angka dan mengidentifikasi gambar yang muncul. Selain itu, aktivitas ini juga meningkatkan koordinasi mata-tangan, kontrol alat tulis dan ketepatan gerakan yang menjadi dasar penting untuk kemampuan menulis dan aktivitas sehari-hari lainnya.</p>
            <Link className="inline-block" href="https://www.tiktok.com/@terusmengajar.id/video/7461934011489783047?lang=id-ID" target="_blank">
              <Image
                src="/images/info/tiktok/menghubungkan-titik.webp"
                width={400}
                height={400}
                alt="Calistung"
                className="mx-auto w-60 rounded-lg"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[url(/images/home/rekomendasi/bg-menghubungkan-titik.png)] bg-cover bg-no-repeat bg-center  min-h-[200px] md:min-h-[280px] flex flex-col justify-center">
        <div className="container">
          <h2 className="text-[#3963AF] text-xl md:text-2xl font-bold text-center mb-8 max-w-2xl mx-auto">
            Agar anak lebih mudah paham, aktivitas menghubungkan titik bisa dikenalkan melalui tema dunia nyata yang ada di Funpaper Tema.
          </h2>

          <div className="flex justify-center">
            <Link href="/funpaper-tema" className="tombol-biru">
              Selengkapnya
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
