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

      {/* Hero */}
      <section className="py-20 px-8 text-center bg-[url(/images/bg/bg-tema-1.avif)] bg-cover bg-no-repeat h-[1700px] sm:h-[1800px] overflow-hidden">
        <div className="container px-4 relative">
          <div
            className="mt-24 transition-transform duration-75 space-y-60 sm:space-y-80"
            style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          >
            <div className="text-[#0a7473]">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Bingung Mau Ajak Anak <br /> Main Apa Hari Ini, Bun?
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Faktanya, aktivitas edukatif penting banget untuk tumbuh kembang
                anak
              </p>
              <a href="#kenalin-worksheet" className="tombol-hijau">
                Yuk Cari Tahu Sekarang
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-3xl sm:text-5xl font-bold leading-10 sm:leading-16 mb-4 text-[#0a7473]">
                  Kadang kita
                  <br />
                  kehabisan
                  <br />
                  ide, atau...
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    img: "/images/assets/jam-2.avif",
                    text: "Waktu terbatas",
                  },
                  {
                    img: "/images/assets/gear.avif",
                    text: "Persiapan ribet",
                  },
                  {
                    img: "/images/assets/baterai.avif",
                    text: "Anak cepat bosan",
                  },
                  {
                    img: "/images/assets/tanda-tanya.avif",
                    text: "Bingung harus mulai dari mana",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="text-center flex flex-col gap-1 justify-center border-2 border-white bg-white/20 rounded-xl py-8 px-8 shadow-md"
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
            </div>

            <div className="text-[#0a7473] text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Tenang, Bunda nggak sendiri
              </h2>
              <Image
                src="/images/funpaper/tema/funpaper-tema-lain-lain.avif"
                height={400}
                width={400}
                alt="funpaper-tema-lain-lain"
                className="mb-8 mx-auto w-[200px] md:w-[400px] h-auto"
              />
              <p className="font-bold text-xl md:text-3xl">
                Kami bantu Bunda menyiapkan aktivitas belajar yang seru,
                praktis, dan sesuai usia si kecil!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="kenalin-worksheet" className="py-20 px-4 bg-[#fdf8f2]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-bold leading8 md:leading-12 mb-4">
                <span className="text-[#1085ad]">Kenalin!</span> Worksheet
                <br />
                Tematik Siap Pakai
                <br />
                untuk Anak Usia
                <br />
                2–6 Tahun
              </h2>
              <p>
                Kumpulan lembar kerja (worksheet) <b>bertema dan terstruktur</b>{" "}
                untuk anak usia dini.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  img: "/images/assets/printer-download.avif",
                  text: "Cukup Download dan Print",
                },
                {
                  img: "/images/assets/susunan.avif",
                  text: "Disusun berdasarkan tema dan usia",
                },
                {
                  img: "/images/assets/paint.avif",
                  text: "Visual lucu dan penuh warna",
                },
                {
                  img: "/images/assets/joystick.avif",
                  text: "Bisa langsung dimainkan bareng anak",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-center flex flex-col gap-1 justify-center bg-[#fefdf9] rounded-2xl py-6 px-8"
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
          </div>
        </div>
      </section>

      {/* Tema List */}
      <section id="list-funpaper-tema" className="py-20 px-4 bg-[#fefdf9]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            Ada 31 Tema Seru yang Dekat dengan Dunia Anak
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                img: "/images/funpaper/tema/funpaper-tema-diri-sendiri.avif",
                text: "Tema Diri Sendiri",
              },
              {
                img: "/images/funpaper/tema/funpaper-tema-lingkungan.avif",
                text: "Tema Lingkungan",
              },
              {
                img: "/images/funpaper/tema/funpaper-tema-rekreasi.avif",
                text: "Tema Rekreasi",
              },
              {
                img: "/images/funpaper/tema/funpaper-tema-profesi.avif",
                text: "Tema Profesi",
              },
              {
                img: "/images/funpaper/tema/funpaper-tema-kendaraan.avif",
                text: "Tema Kendaraan",
              },
              {
                img: "/images/funpaper/tema/funpaper-tema-lain-lain.avif",
                text: "Dan Lain Lain",
              },
            ].map((tema, idx) => (
              <div
                key={idx}
                className="px-4 py-10 flex flex-col items-center justify-center bg-[#fbf6f2] rounded-xl"
              >
                <Image
                  src={tema.img}
                  alt={tema.text}
                  width={120}
                  height={90}
                  className="rounded-lg"
                />
                <p className="mt-3 font-semibold">{tema.text}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 text-2xl font-bold mb-10">
            Aktivitasnya disesuaikan dengan 3 kelompok usia:
          </h3>

          <div className="flex flex-row justify-center">
            <div className="px-8 md:px-12 py-4 text-center">
              <Image
                src="/images/assets/mainan-kayu.avif"
                alt="Mainan Kayu"
                width={120}
                height={120}
              />
              <p className="text-pink text-xl sm:text-4xl font-bold mb-2">
                2-4
              </p>
              <p className="text-xs">Tahun</p>
            </div>

            <div className="px-8 md:px-12 py-4 text-center border-l border-r border-[#cbaf78]">
              <Image
                src="/images/assets/alat-gambar.avif"
                alt="Mainan Kayu"
                width={120}
                height={120}
              />
              <p className="text-biru text-xl sm:text-4xl font-bold mb-2">
                4-5
              </p>
              <p className="text-xs">Tahun</p>
            </div>

            <div className="px-8 md:px-12 py-4 text-center">
              <Image
                src="/images/assets/puzzle.avif"
                alt="Mainan Kayu"
                width={120}
                height={120}
              />
              <p className="text-hijau text-xl sm:text-4xl font-bold mb-2">
                5-6
              </p>
              <p className="text-xs">Tahun</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[url(/images/bg/bg-tema-1.avif)] bg-cover bg-no-repeat">
        <div className="container">
          <h2 className="text-[#0a7473] text-xl sm:text-4xl font-bold text-center mb-8">
            Solusi Cerdas untuk Ibu yang Ingin
            <br />
            Praktis Tapi Tetap Edukatif
          </h2>

          <div className="mb-18 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                img: "/images/assets/jam.avif",
                heading: "Hemat Waktu",
                text: "Nggak perlu browsing ide sana-sini",
              },
              {
                img: "/images/assets/printer.avif",
                heading: "Nggak Ribet",
                text: "Cukup print dan ajak anak bermain",
              },
              {
                img: "/images/assets/lampu.avif",
                heading: "Menstimulasi",
                text: "Dirancang untuk mendukung perkembangan motorik, bahasa, dan kognitif",
              },
              {
                img: "/images/assets/bintang.avif",
                heading: "Seru & Menyenangkan",
                text: "Anak belajar sambil main, nggak cepat bosan",
              },
            ].map((solusi, idx) => (
              <div
                key={idx}
                className="flex flex-col lg:flex-row gap-6 border-2 border-white bg-white/20 rounded-xl py-8 sm:py-14 px-8 shadow-md"
              >
                <div className="w-[40px] h-[40px]">
                  <Image
                    src={solusi.img}
                    width={40}
                    height={40}
                    alt="solusi"
                    className="h-auto"
                  />
                </div>
                <div>
                  <p className="font-bold mb-2">{solusi.heading}</p>
                  <p>{solusi.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-[#0a7473] text-xl sm:text-4xl font-bold text-center mb-8">
            Cocok Untuk
          </h2>

          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col lg:flex-row gap-6 border-2 border-white bg-white/20 rounded-xl py-8 sm:py-14 px-8 shadow-md">
              <div className="w-[40px] h-[40px]">
                <Image
                  src="/images/assets/susu.avif"
                  width={40}
                  height={40}
                  alt="susu"
                  className="h-auto"
                />
              </div>
              <div>
                <p className="font-bold mb-2">Ibu dengan anak usia 2–6 tahun</p>
                <div className="mb-10">
                  <p className="flex flex-row items-center gap-2 mb-2">
                    <CircleCheck size={16} />
                    Ingin mendampingi anak belajar di rumah
                  </p>
                  <p className="flex flex-row items-center gap-2 mb-2">
                    <CircleCheck size={16} />
                    Butuh aktivitas yang ready-to-use
                  </p>
                  <p className="flex flex-row items-center gap-2">
                    <CircleCheck size={16} />
                    Suka materi belajar yang dekat dengan keseharian anak
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 border-2 border-white bg-white/20 rounded-xl py-14 px-8 shadow-md">
              <div className="w-[40px] h-[40px]">
                <Image
                  src="/images/assets/sekolah.avif"
                  width={40}
                  height={40}
                  alt="susu"
                  className="h-auto"
                />
              </div>
              <div>
                <p className="font-bold mb-2">Guru Paud atau TK</p>
                <div className="mb-10">
                  <p className="flex flex-row items-center gap-2 mb-2">
                    <CircleCheck size={16} />
                    Perlu worksheet tematik sesuai kurikulum
                  </p>
                  <p className="flex flex-row items-center gap-2 mb-2">
                    <CircleCheck size={16} />
                    Mau bahan ajar yang siap cetak dan menarik
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-[#fefdf9]">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-20 items-center justify-center">
            <div className="">
              <Image
                src="/images/funpaper/tema/funpaper-tema-campur.avif"
                width={225}
                height={225}
                alt="Funpaper Tema Campur"
                className="mx-auto"
              />
            </div>
            <div>
              <h2 className="font-bold text-2xl sm:text-4xl mb-8">
                Bunda, Aktivitas Edukatif
                <br />
                Nggak Harus Ribet
              </h2>

              <p className="mb-2">Dengan worksheet ini, Bunda bisa:</p>
              <div className="mb-10">
                <p className="flex flex-row items-center gap-2 mb-2">
                  <CircleCheck size={16} />
                  Menyediakan aktivitas edukatif setiap hari
                </p>
                <p className="flex flex-row items-center gap-2 mb-2">
                  <CircleCheck size={16} />
                  Membangun waktu berkualitas bareng si kecil
                </p>
              </div>

              <Link href="/funpaper-tema" className="tombol-pink">
                Download Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[url(/images/bg/bg-tema-1.avif)] bg-cover bg-no-repeat bg-center  min-h-[200px] md:min-h-[280px] flex flex-col justify-center">
        <div className="container">
          <h2 className="text-[#0a7473] text-2xl md:text-4xl font-bold text-center">
            Anak senang, Bunda tenang!
          </h2>
        </div>
      </section>
    </main>
  );
}
