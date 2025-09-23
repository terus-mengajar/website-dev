"use client";

// app/components/FunpaperTema.tsx
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FunpaperTema() {
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
      <section className="py-20 px-8 text-center bg-[url(/images/bg/bg-minigame-1.avif)] bg-cover bg-no-repeat h-[1750px] sm:h-[1700px] overflow-hidden">
        <div className="container px-4 relative">
          <div
            className="mt-24 transition-transform duration-75 space-y-60 sm:space-y-80"
            style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          >
            <div className="space-y-10">
              <h1 className="text-3xl md:text-5xl text-biru font-bold leading-tight mb-6">
                Game Edukasi - Mainkan Online Gratis!
              </h1>
              <p className="text-lg md:text-xl font-medium mb-0">
                Terus Mengajar menghadirkan Mini Games edukatif GRATIS untuk
                anak usia 4–8 tahun, yang bikin screen time jadi lebih bermakna
              </p>
              <Image
                src="/images/minigame/minigame-1.avif"
                alt="minigame"
                width={300}
                height={200}
                className="mx-auto mb-0"
              />
              <Link href="/mini-game" className="tombol-biru-tua">
                Mainkan Sekarang
              </Link>
            </div>

            <div className="text-center space-y-5">
              <h2 className="text-2xl sm:text-4xl font-bold leading-tight mb-4 text-biru">
                Anak terlalu sering main gadget tanpa arah? Atau...
              </h2>

              <div className="border-2 border-white bg-white/40 rounded-xl py-4 sm:py-6 px-4">
                <p className="text-md">
                  Bingung cari aktivitas yang bikin anak betah belajar?
                </p>
              </div>
              <div className="border-2 border-white bg-white/40 rounded-xl py-4 sm:py-6 px-4">
                <p className="text-md">
                  Ingin screen time anak jadi lebih terarah dan penuh manfaat?
                </p>
              </div>
              <div className="border-2 border-white bg-white/40 rounded-xl py-4 sm:py-6 px-4">
                <p className="text-md">
                  Mau cari media belajar yang bisa dipakai di rumah dan kelas?
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap4 lg:gap-14">
              <Image
                src="/images/minigame/minigame-2.avif"
                width={350}
                height={200}
                alt="minigame"
                className="mx-auto"
              />
              <h2 className="text-biru leading-tight text-2xl sm:text-4xl font-bold text-center lg:text-left mx-auto">
                Tenang, kamu gak sendirian. Banyak orang tua dan guru merasakan
                hal yang sama.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section id="kenalin-worksheet" className="py-24 px-4 bg-[#fdf8f2]">
        <div className="container space-y-14">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold leading8 md:leading-12 mb-8">
              <span className="text-biru">Minigames</span> Edukatif Solusinya!
            </h2>
          </div>
          <div className="flex flex-row flex-wrap gap-6  mx-auto justify-center text-sm">
            {[
              {
                img: "/images/assets/free.avif",
                text: "Gratis",
              },
              {
                img: "/images/assets/ads-coret.avif",
                text: "Tanpa Iklan",
              },
              {
                img: "/images/assets/laptop-hp.avif",
                text: "Bisa dimainkan di HP, tablet, laptop atau PC",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center flex flex-col gap-1 bg-[#fefdf9] rounded-2xl py-6 px-8 w-60"
              >
                <Image
                  src={item.img}
                  alt={item.text}
                  width={40}
                  height={40}
                  className="mx-auto"
                />
                <p className="mt-2">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center mb-4">Dirancang dengan pendekatan edukatif, visual ramah anak, dan gameplay sederhana agar anak bisa belajar mandiri sambil bermain.</p>
        </div>
      </section>

      {/* Tema List */}
      <section id="list-funpaper-tema" className="py-22 px-4 bg-[#fefdf9]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            Apa saja yang bisa dimainkan anak?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-4">
            {[
              {
                img: "/images/minigame/minigame-3.avif",
                text: "Belajar Berhitung",
              },
              {
                img: "/images/minigame/minigame-4.avif",
                text: "Benar atau Salah",
              },
              {
                img: "/images/minigame/minigame-5.avif",
                text: "Tebak Kata",
              },
              {
                img: "/images/minigame/minigame-6.avif",
                text: "Labirin Petualangan",
              },
              {
                img: "/images/minigame/minigame-7.avif",
                text: "Menembak Balon",
              },
              {
                img: "/images/minigame/minigame-8.avif",
                text: "Dan Lain Lain",
              },
            ].map((tema, idx) => (
              <div
                key={idx}
                className="px-4 py-2 sm:py-6 flex flex-col items-center justify-center bg-[#fbf6f2] rounded-xl"
              >
                <Image
                  src={tema.img}
                  alt={tema.text}
                  width={200}
                  height={120}
                  className="rounded-lg mb-0"
                />
                <p className="mt-3 font-medium text-sm md:text-md">{tema.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[url(/images/bg/bg-minigame-2.avif)] bg-cover bg-no-repeat">
        <div className="container">
          <h2 className="text-hijau text-xl sm:text-4xl font-bold text-center mb-12">
            Cocok Untuk Siapa?
          </h2>

          <div className="mb-18 flex flex-row flex-wrap justify-center gap-8">
            {[
              {
                img: "/images/assets/orang-tua.avif",
                text: "Orang Tua",
              },
              {
                img: "/images/assets/sekolah-2.avif",
                text: "Guru PAUD & SD Tingkat Awal",
              },
              {
                img: "/images/assets/tas.avif",
                text: "Tenaga Pendidik & Pengasuh Anak",
              },
            ].map((solusi, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-6 border-2 border-white bg-white/40 rounded-xl py-4 sm:py-8 px-4 w-full sm:w-50 shadow-md"
              >
                <div className="w-[44px] h-[44px]">
                  <Image
                    src={solusi.img}
                    width={44}
                    height={44}
                    alt="solusi"
                    className="h-auto"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm">{solusi.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-hijau text-xl sm:text-4xl font-bold text-center mb-12">
            Kenapa orang tua & guru wajib coba?
          </h2>

          <div className="flex flex-col md:flex-row gap-6 border-2 border-white bg-white/40 rounded-xl py-8 px-8 mb-28 max-w-240 mx-auto shadow-md">
            <div className="w-[40px] h-[40px]">
              <Image
                src="/images/assets/tanda-tanya-2.png"
                width={40}
                height={40}
                alt="tanda tanya"
                className="h-auto"
              />
            </div>
            <div className="">
              <p className="flex flex-row gap-2 mb-2">
                <span>
                  <CircleCheck size={16} className="mt-1" />
                </span>
                Gadget tetap digunakan, tapi jadi media belajar yang bermakna
              </p>
              <p className="flex flex-row gap-2 mb-2">
                <span>
                  <CircleCheck size={16} className="mt-1" />
                </span>
                Asah kemampuan kognitif anak
              </p>
              <p className="flex flex-row gap-2 mb-2">
                <span>
                  <CircleCheck size={16} className="mt-1" />
                </span>
                Anak menikmati proses belajar karena bentuknya seperti bermain
              </p>
              <p className="flex flex-row gap-2 mb-2">
                <span>
                  <CircleCheck size={16} className="mt-1" />
                </span>
                Guru bisa gunakan di kelas untuk pembelajaran tematik & interaktif
              </p>
              <p className="flex flex-row gap-2 mb-2">
                <span>
                  <CircleCheck size={16} className="mt-1" />
                </span>
                Orang tua bisa dampingi & diskusi bersama anak setelah bermain
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-[#fefdf9]">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center justify-center">
            <div className="">
              <Image
                src="/images/minigame/minigame-9.avif"
                width={700}
                height={700}
                alt="Funpaper Tema Campur"
                className="mx-auto w-60 md:w-80"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-bold text-xl leading-tight sm:text-3xl lg:text-4xl mb-8 text-center md:text-left">
                Yuk Mainkan<br />Sekarang!
              </h2>

              <Link href="/mini-game" className="tombol-pink">
                Mainkan Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[url(/images/bg/bg-minigame-1.avif)] bg-cover md:bg-position-[center_top_-100px] bg-no-repeat  min-h-[200px] md:min-h-[280px] flex flex-col justify-center">
        <div className="container">
          <h2 className="text-biru text-2xl md:text-4xl font-bold text-center leading-tight">
            Saatnya jadikan gadget sebagai sarana untuk kembangkan minat belajar dan keterampilan si kecil
          </h2>
        </div>
      </section>
    </main>
  );
}
