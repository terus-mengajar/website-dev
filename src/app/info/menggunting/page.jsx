"use client";

// app/components/FunpaperTema.tsx
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MENGGUNTING } from "@/lib/constants";

export default function page() {

  return (
    <main className="text-gray-800">
<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cara Menggunakan Worksheet Menggunting Bersama Anak",
  "description": "Panduan menggunakan worksheet menggunting untuk melatih motorik halus, koordinasi mata-tangan, dan fokus anak.",
  "image": "/images/assets/menggunting.png",
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
      "text": "Pilih worksheet menggunting sesuai tingkat kesulitan anak, lalu cetak.",
      "image": "/images/assets/menggunting.png"
    },
    {
      "position": 2,
      "name": "Siapkan gunting",
      "text": "Berikan gunting tumpul khusus anak yang aman digunakan.",
      "image": "/images/assets/menggunting.png"
    },
    {
      "position": 3,
      "name": "Peragakan cara menggunting",
      "text": "Tunjukkan cara memegang gunting dan menggunting mengikuti garis putus-putus.",
      "image": "/images/assets/menggunting.png"
    },
    {
      "position": 4,
      "name": "Bimbing anak menggunting",
      "text": "Bantu anak memegang kertas dengan satu tangan dan menggunting dengan tangan lain.",
      "image": "/images/assets/menggunting.png"
    },
    {
      "position": 5,
      "name": "Tempel hasil guntingan",
      "text": "Ajak anak menempel hasil guntingan di kertas lain untuk melatih kreativitas.",
      "image": "/images/assets/menggunting.png"
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
                src="/images/assets/menggunting.png"
                width={400}
                height={400}
                alt="Calistung"
                className="mx-auto w-30"
                unoptimized
              />
            </div>
            <div className="text-center md:text-left space-y-10">
              <h2 className="font-bold leading-tight text-3xl lg:text-4xl text-left text-coklat">
                Menggunting
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section id="kenalin-worksheet" className="py-24 px-4 bg-[#FCFBF8]">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold leading8 md:leading-12 mb-4 text-coklat-muda max-w-3xl mx-auto">
              Jadi Lebih Mudah Belajar Menulis Lewat Aktivitas Menggunting
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">Latihan motorik halus yang seru untuk melatih otot tangan anak, meningkatkan fokus, dan menyiapkan kemampuan menulis sejak dini.</p>
            <Link className="inline-block" href="https://www.tiktok.com/@terusmengajar.id/video/7455997370682101000?lang=id-ID" target="_blank">
              <Image
                src="/images/info/tiktok/menggunting.webp"
                width={400}
                height={400}
                alt="Calistung"
                className="mx-auto w-60 rounded-lg"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[url(/images/home/rekomendasi/bg-menggunting.png)] bg-cover bg-no-repeat bg-center  min-h-[200px] md:min-h-[280px] flex flex-col justify-center">
        <div className="container">
          <h2 className="text-coklat text-xl md:text-2xl font-bold text-center mb-8 max-w-2xl mx-auto">
            Mulai aktivitas menggunting bertahap sesuai usia anak dengan Funpaper Harian.
          </h2>

          <div className="flex justify-center">
            <Link href={`/funpaper-harian?aktivitas=${MENGGUNTING}`} className="tombol-coklat">
              Coba Sekarang
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
