"use client";

// app/components/FunpaperTema.tsx
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="text-gray-800 -mt-[68px]">
<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cara Melakukan Aktivitas Calistung di Rumah",
  "description": "Panduan melakukan aktivitas calistung membaca, menulis, dan berhitung bersama anak di rumah.",
  "image": "/images/assets/calistung.png",
  "totalTime": "PT15M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "IDR",
    "value": "0"
  },
  "step": [
    {
      "position": 1,
      "name": "Pilih worksheet sesuai tema",
      "text": "Pilih worksheet calistung yang sesuai dengan kemampuan dan minat anak saat ini.",
      "image": "/images/assets/calistung.png"
    },
    {
      "position": 2,
      "name": "Cetak dan siapkan alat",
      "text": "Cetak worksheet di kertas A4. Sediakan pensil, penghapus, dan rautan.",
      "image": "/images/assets/calistung.png"
    },
    {
      "position": 3,
      "name": "Jelaskan konsep",
      "text": "Jelaskan konsep yang akan dipelajari dengan bahasa sederhana dan contoh konkret.",
      "image": "/images/assets/calistung.png"
    },
    {
      "position": 4,
      "name": "Bimbing mengerjakan",
      "text": "Dampingi anak mengerjakan worksheet. Beri petunjuk jika anak kesulitan.",
      "image": "/images/assets/calistung.png"
    },
    {
      "position": 5,
      "name": "Evaluasi dan ulangi",
      "text": "Periksa hasil kerja anak. Ulangi konsep yang belum dikuasai dengan worksheet berbeda.",
      "image": "/images/assets/calistung.png"
    }
  ]
}) }}
      />
      <style jsx>
        {`
          .text-biru {
            color: #0055a0;
          }

          .text-hijau {
            color: #167590;
          }
        `}
      </style>

      {/* Hero */}
      <section className="pt-20 pb-26 px-8 text-center bg-[url(/images/bg/bg-aktivitas-calistung-1.webp)] bg-cover bg-center bg-no-repeat overflow-hidden min-h-[800px]">
        <div className="container px-4 relative">
          <div
            className="mt-24 space-y-60 sm:space-y-80"
          >
            <div className="space-y-10">
              <h1 className="text-3xl md:text-5xl text-coklat font-bold leading-tight mb-6">
                30 Rekomendasi Aktivitas untuk Persiapan Belajar Calistung Anak Usia Dini
              </h1>
              <p className="text-lg md:text-xl font-medium mb-0">
                Sebelum belajar membaca, menulis dan berhitung, anak perlu siap secara fisik dan mental. Kemampuan memegang pensil, duduk fokus, mengontrol gerakan tangan, hingga mengatur napas saat berbicara adalah fondasi penting sebelum belajar calistung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="kenalin-worksheet" className="py-24 px-4 bg-[#fdf8f2]">
        <div className="container space-y-14">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold leading8 md:leading-12 mb-8 mx-auto max-w-180">
              <span className="text-coklat">Apa Saja Aktivitas</span> yang Mendukung Kesiapan Belajar Calistung?
            </h2>
          </div>
          <div className="mx-auto justify-center text-sm">
            <table className="rounded-xl overflow-hidden shadow-lg mx-auto max-w-160">
              <thead className="bg-[#F5E4D0]">
                <tr>
                  <td className="px-5 py-3">Area Stimulasi</td>
                  <td className="px-5 py-3">Rekomendasi Aktivitas</td>
                </tr>
              </thead>
              <tbody className="bg-[#FCF9F4]">
            {[
              {
                area: "Motorik halus",
                rekom: "Menjepit, meremas, meronce, merobek",
              },
              {
                area: "Motorik kasar",
                rekom: "Melompat, merayap, berlari, menendang",
              },
              {
                area: "Fokus & konsentrasi",
                rekom: "Belajar mewarnai, mengayak tepung, mengaduk.",
              },
              {
                area: "Oromotor (Persiapan bicara & membaca)",
                rekom: "Meniup gelembung, meniup bola plastik, bermain cacing-cacingan",
              },
            ].map((item, idx) => (
              <tr key={idx} className={`${idx % 2 === 0 ? "bg-[#FEFDF9]" : "bg-[#FCF9F4]"}`}>
                <td className="px-5 py-3">{item.area}</td>
                <td className="px-5 py-3">{item.rekom}</td>
              </tr>
            ))}
            </tbody>
            </table>
          </div>

          <p className="text-center mb-4">Semua aktivitas dirancang sederhana, bisa dilakukan di rumah, tanpa alat mahal.</p>
        </div>
      </section>

      <section className="py-24 px-6 bg-[url(/images/bg/bg-aktivitas-calistung-2.webp)] bg-cover bg-center bg-no-repeat">
        <div className="container">
          <h2 className="text-coklat text-xl sm:text-4xl font-bold text-center mb-12">
            Bingung harus mulai dari mana?
          </h2>

          <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center justify-center mb-16">
            <div className="basis-1/4">
              <Image
                src="/images/info/aktivitas-calistung/image-1.webp"
                width={700}
                height={700}
                alt="Funpaper Tema Campur"
                className="mx-auto w-80 md:w-100"
                unoptimized
              />
            </div>
            <div className="basis-3/4">
              <p className="mb-8">
                Aktivitas Calistung dari Terus Mengajar hadir sebagai panduan terstruktur untuk membantu Ayah Bunda mendampingi anak dengan tepat. 
              </p>

              <p className="">
                Mulai dari rekomendasi aktivitas, daftar alat dan bahan, hingga indikator capaian perkembangan anak, semuanya sudah tersusun rapi dalam satu panduan.
              </p>

            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="text-coklat text-2xl font-bold">
              <p className="mb-8">Lakukan secara konsisten setiap hari</p>
              <p>Karena kesiapan belajar bukan soal cepat, tapi soal fondasi yang kuat</p>
            </div>
            <div>
              <div className="text-center bg-gradient-to-b from-white to-[#ffffff79] border-white border-1 shadow-lg rounded-lg p-4 w-32">
                <p className="text-[#BE7D5A] font-bold text-2xl">10-15</p>
                <p className="text-sm">Menit Perhari</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-[#fefdf9]">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center justify-center">
            <div className="basis-1/2">
              <Image
                src="/images/info/aktivitas-calistung/image-2.webp"
                width={700}
                height={700}
                alt="Funpaper Tema Campur"
                className="mx-auto w-80 md:w-100"
                unoptimized
              />
            </div>
            <div className="basis-1/2 text-center md:text-left">
              <h2 className="font-bold text-xl leading-tight sm:text-3xl lg:text-4xl text-center md:text-left mb-12">
                Yuk, bantu anak siap belajar dengan bahagia dan percaya diri
              </h2>

              <Link href="/calistung" className="tombol-pink text-lg!">
                Mulai Aktivitas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[url(/images/bg/bg-aktivitas-calistung-2.webp)] bg-cover md:bg-position-[center_top_-100px] bg-no-repeat  min-h-[200px] md:min-h-[280px] flex flex-col justify-center">
        <div className="container">
          <h2 className="text-coklat text-2xl md:text-4xl font-bold text-center leading-tight md:leading-14">
            Berakit-rakit ke hulu, berenang-renang ke tepian<br />Kuatkan fondasi dahulu, siap calistung kemudian
          </h2>
        </div>
      </section>
    </main>
  );
}
