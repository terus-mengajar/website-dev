"use client";

// app/components/FunpaperTema.tsx
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="text-gray-800 -mt-[68px]">
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
      <section className="py-20 px-8 text-center bg-[url(/images/bg/bg-funpaper-coding-1.webp)] bg-cover bg-no-repeat h-[2600px] sm:h-[2300px] lg:h-[2100px] overflow-hidden">
        <div className="container px-4 relative">
          <div
            className="mt-24 transition-transform duration-75 space-y-60 sm:space-y-80"
            style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          >
            <div className="space-y-10">
              <h1 className="text-3xl md:text-5xl text-white font-bold leading-tight mb-6">
               Belajar Coding Dengan Funpaper Coding
              </h1>
              <Image
                src="/images/info/funpaper-coding/image-1.webp"
                alt="minigame"
                width={300}
                height={200}
                className="mx-auto mb-0"
                unoptimized
              />
            </div>

            <div className="text-center space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-8 text-white">
                Belajar coding untuk anak bukan mengajarkan anak menulis kode atau pakai komputer, tapi melatih cara berpikir:
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                {[
                  "Terstruktur",
                  "Memahami Urutan",
                  "Melihat Hubungan Sebab Akibat",
                  "Mengenali Pola",
                  "Memecahkan Masalah Sederhana",
                  "Mengambil Keputusan",
                ].map((item, idx) => (
                  <div key={idx} className="border-1 border-white bg-white/40 rounded-xl py-4 sm:py-6 px-4">
                    <p className="text-md">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-8 text-white">
                Dan semua itu bisa dilatih tanpa layar dengan beberapa rekomendasi aktivitas seperti:
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
                {[
                  {
                    image: "/images/info/funpaper-coding/image-8.png",
                    text: "Menyusun balok sesuai urutan",
                  },
                  {
                    image: "/images/info/funpaper-coding/image-9.png",
                    text: "Bermain peran dengan instruksi langkah demi langkah",
                  },
                  {
                    image: "/images/info/funpaper-coding/image-10.png",
                    text: "Permainan maze (labirin)",
                  },
                  {
                    image: "/images/info/funpaper-coding/image-11.png",
                    text: "Permainan arah dan kode sederhana",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="border-1 border-white bg-white/40 rounded-xl py-4 sm:py-6 px-4">
                    <Image
                      src={item.image}
                      alt={item.text}
                      width={200}
                      height={200}
                      className="w-14 mx-auto mb-2"
                      unoptimized
                    />
                    <p className="text-sm">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-8 text-white">
                Dan semua itu bisa dilatih tanpa layar dengan beberapa rekomendasi aktivitas seperti:
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                {[
                  "Anak mau mencoba",
                  "Anak mau memperbaiki kesalahan",
                  "Anak mau berpikir ulang",
                  "Anak berani menemukan solusi",
                ].map((item, idx) => (
                  <div key={idx} className="border-1 border-white bg-white/40 rounded-xl py-4 sm:py-6 px-4">
                    <p className="text-md">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kenalin-worksheet" className="py-24 px-4 bg-[#fdf8f2]">
        <div className="container space-y-14">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold leading8 md:leading-12 mb-8">
              Dan Disinilah <span className="text-biru">Funpaper Coding</span> Hadir Untuk Mendampingi
            </h2>
          </div>

          <p className="text-center mb-4">Funpaper Coding adalah lembar kerja berbasis permainan yang dirancang untuk melatih kemampuan berpikir logis, kritis, dan sistematis pada anak usia dini. Anak belajar melalui permainan kode sederhana, arah, pola, dan tantangan pemecahan masalah yang sesuai dengan tahap perkembangannya.</p>
        </div>
      </section>

      <section id="list-funpaper-tema" className="py-22 px-4 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            Melalui aktivitas seperti:
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mb-4">  
            {[
              {
                img: "/images/info/funpaper-coding/image-2.webp",
                text: "Mengikuti instruksi langkah demi langkah",
              },
              {
                img: "/images/info/funpaper-coding/image-3.webp",
                text: "Menentukan arah (kanan–kiri, maju–mundur)",
              },
              {
                img: "/images/info/funpaper-coding/image-4.webp",
                text: "Menyusun urutan yang benar",
              },
              {
                img: "/images/info/funpaper-coding/image-5.webp",
                text: "Mencari jalur pada permainan",
              },
              {
                img: "/images/info/funpaper-coding/image-6.webp",
                text: "Menemukan kesalahan dan memperbaikinya",
              },
            ].map((tema, idx) => (
              <div
                key={idx}
                className="px-4 py-2 sm:py-6 flex flex-col items-center justify-center bg-[#fbf6f2] rounded-xl w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)]"
              >
                <Image
                  src={tema.img}
                  alt={tema.text}
                  width={200}
                  height={120}
                  className="rounded-lg mb-0"
                  unoptimized
                />
                <p className="mt-3 font-medium text-xs sm:text-sm md:text-md">{tema.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[url(/images/bg/bg-funpaper-coding-2.webp)] bg-cover bg-center bg-no-repeat">
        <div className="container">
          <h2 className="text-white text-xl sm:text-4xl font-bold text-center mb-12">
            Dengan Funpaper Interaktif anak tidak hanya melihat layar, tetapi...
          </h2>

          <div className="border-2 border-white bg-white/40 rounded-xl py-8 px-8 mb-28 max-w-240 mx-auto shadow-md">
            <div className="text-white">
              <p className="flex flex-row gap-2 mb-2">
                <span>
                  <CircleCheck size={16} className="mt-1" />
                </span>
                Setiap aktivitas membantu anak memahami bahwa:
              </p>
              <p className="flex flex-row gap-2 mb-2">
                <span>
                  <CircleCheck size={16} className="mt-1" />
                </span>
                Setiap masalah punya solusi
              </p>
              <p className="flex flex-row gap-2 mb-2">
                <span>
                  <CircleCheck size={16} className="mt-1" />
                </span>
                Kesalahan adalah bagian dari proses belajar
              </p>
            </div>
          </div>

          <p className="text-white">Jika Ayah Bunda ingin mempersiapkan anak menghadapi dunia yang terus berubah, ajak mereka belajar coding dari sekarang. Jadikan Funpaper Coding sebagai teman terbaik untuk memberikan pembelajaran coding yang interaktif dan menyenangkan.</p>
        </div>
      </section>

      <section className="py-20 px-8 bg-[#fefdf9]">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center justify-center">
            <div className="basis-1/2">
              <Image
                src="/images/info/funpaper-coding/image-7.webp"
                width={700}
                height={700}
                alt="Funpaper Tema Campur"
                className="mx-auto w-60 md:w-80"
                unoptimized
              />
            </div>
            <div className="basis-1/2 text-center md:text-left">
              <h2 className="font-bold text-xl leading-tight sm:text-2xl lg:text-3xl text-center md:text-left mb-8">
                Saatnya asah keterampilan berpikir anak dengan Funpaper Coding
              </h2>
              <Link href="/funpaper-coding" className="tombol-pink text-lg!">
                Coba Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[url(/images/bg/bg-funpaper-coding-2.webp)] bg-cover bg-center bg-no-repeat  min-h-[200px] md:min-h-[280px] flex flex-col justify-center">
        <div className="container">
          <h2 className="text-white text-2xl md:text-4xl font-bold text-center leading-10 md:leading-14">
            Latih Cara Berpikir - Tumbuhkan Percaya Diri
          </h2>
        </div>
      </section>
    </main>
  );
}
