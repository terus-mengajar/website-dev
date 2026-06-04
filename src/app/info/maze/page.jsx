"use client";

import Image from "next/image";
import Link from "next/link";
import { MAZE } from "@/lib/constants";

export default function page() {

  return (
    <main className="text-gray-800">
<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cara Menggunakan Worksheet Maze Bersama Anak",
  "description": "Panduan menggunakan worksheet maze untuk melatih fokus, ketelitian, dan pemecahan masalah anak.",
  "image": "/images/assets/maze.png",
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
      "text": "Pilih worksheet maze sesuai tingkat kesulitan anak, lalu cetak.",
      "image": "/images/assets/maze.png"
    },
    {
      "position": 2,
      "name": "Jelaskan aturan",
      "text": "Jelaskan bahwa anak harus menemukan jalan dari titik awal ke titik akhir tanpa menabrak dinding.",
      "image": "/images/assets/maze.png"
    },
    {
      "position": 3,
      "name": "Gunakan jari dulu",
      "text": "Ajak anak menelusuri maze dengan jari terlebih dahulu sebelum menggunakan pensil.",
      "image": "/images/assets/maze.png"
    },
    {
      "position": 4,
      "name": "Garis dengan pensil",
      "text": "Setelah menemukan jalan, ajak anak menggambar garis dengan pensil.",
      "image": "/images/assets/maze.png"
    },
    {
      "position": 5,
      "name": "Tambah tantangan",
      "text": "Beri waktu tertentu atau tantangan tidak melihat maze sebelum mulai.",
      "image": "/images/assets/maze.png"
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
                src="/images/assets/maze.png"
                width={400}
                height={400}
                alt="Calistung"
                className="mx-auto w-30"
                unoptimized
              />
            </div>
            <div className="text-center md:text-left space-y-10">
              <h2 className="font-bold leading-tight text-3xl lg:text-4xl text-left text-coklat">
                Maze
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section id="kenalin-worksheet" className="py-24 px-4 bg-[#FCFBF8]">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold leading8 md:leading-12 mb-4 text-coklat-muda max-w-3xl mx-auto">
              Serunya Bermain Maze Sambil Belajar
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">Aktivitas maze membantu anak melatih motorik halus, fokus, dan kesabaran lewat permainan yang menyenangkan.</p>
            <Link className="inline-block" href="https://www.tiktok.com/@terusmengajar.id/video/7540246889061485842?lang=id-ID" target="_blank">
              <Image
                src="/images/info/tiktok/maze.webp"
                width={400}
                height={400}
                alt="Calistung"
                className="mx-auto w-60 rounded-lg"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[url(/images/home/rekomendasi/bg-maze.png)] bg-cover bg-no-repeat bg-center  min-h-[200px] md:min-h-[280px] flex flex-col justify-center">
        <div className="container">
          <h2 className="text-[#157269] text-xl md:text-2xl font-bold text-center mb-8 max-w-2xl mx-auto">
            Kabar baiknya, Funpaper Harian punya banyak aktivitas maze yang bisa dimainkan
          </h2>

          <div className="flex justify-center">
            <Link href={`/funpaper-harian?aktivitas=${MAZE}`} className="tombol-hijau bg-[#268E4E]! hover:bg-[#268E4E]!">
              Coba Sekarang
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
