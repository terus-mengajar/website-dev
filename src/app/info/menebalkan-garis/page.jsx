"use client";

import Image from "next/image";
import Link from "next/link";
import { MENEBALKAN_GARIS } from "@/lib/constants";

export default function page() {

  return (
    <main className="text-gray-800">
<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cara Menggunakan Worksheet Menebalkan Garis Bersama Anak",
  "description": "Panduan menggunakan worksheet menebalkan garis untuk melatih motorik halus dan kontrol pensil anak.",
  "image": "/images/assets/menebalkan-garis.png",
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
      "text": "Pilih worksheet menebalkan garis dengan pola yang menarik, lalu cetak.",
      "image": "/images/assets/menebalkan-garis.png"
    },
    {
      "position": 2,
      "name": "Pegang pensil dengan benar",
      "text": "Ajar anak cara memegang pensil tripod grip yang benar.",
      "image": "/images/assets/menebalkan-garis.png"
    },
    {
      "position": 3,
      "name": "Tebalkan garis putus-putus",
      "text": "Ajak anak mengikuti garis putus-putus dan menebalkannya dengan pensil atau crayon.",
      "image": "/images/assets/menebalkan-garis.png"
    },
    {
      "position": 4,
      "name": "Jaga di dalam garis",
      "text": "Ajak anak untuk tetap di dalam garis batas agar hasilnya rapi.",
      "image": "/images/assets/menebalkan-garis.png"
    },
    {
      "position": 5,
      "name": "Latih kedua tangan",
      "text": "Gunakan worksheet yang mengharuskan anak berganti tangan untuk melatih koordinasi.",
      "image": "/images/assets/menebalkan-garis.png"
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
                src="/images/assets/menebalkan-garis.png"
                width={400}
                height={400}
                alt="Calistung"
                className="mx-auto w-30"
                unoptimized
              />
            </div>
            <div className="text-center md:text-left space-y-10">
              <h2 className="font-bold leading-tight text-3xl lg:text-4xl text-left text-coklat">
                Menebalkan Garis
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section id="kenalin-worksheet" className="py-24 px-4 bg-[#FCFBF8]">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold leading8 md:leading-12 mb-4 text-coklat-muda max-w-3xl mx-auto">
              Belajar Menulis Sambil Menebalkan Garis
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">Selain melatih motorik halus sebagai dasar kemampuan menulis. Aktivitas ini juga membantu anak belajar angka, melatih fokus, sabar, dan percaya diri.</p>
            <Link className="inline-block" href="https://www.tiktok.com/@terusmengajar.id/video/7378036741904583954?_r=1&_t=ZS-944e1uqfQUa" target="_blank">
              <Image
                src="/images/info/tiktok/menebalkan-garis.webp"
                width={400}
                height={400}
                alt="Calistung"
                className="mx-auto w-60 rounded-lg"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[url(/images/home/rekomendasi/bg-menebalkan-garis.png)] bg-cover bg-no-repeat bg-center  min-h-[200px] md:min-h-[280px] flex flex-col justify-center">
        <div className="container">
          <h2 className="text-coklat text-xl md:text-2xl font-bold text-center mb-8 max-w-2xl mx-auto">
            Lihat rekomendasi aktivitas menebalkan garis lainnya
          </h2>

          <div className="flex justify-center">
            <Link href={`/funpaper-harian?aktivitas=${MENEBALKAN_GARIS}`} className="tombol-coklat">
              Selengkapnya
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
