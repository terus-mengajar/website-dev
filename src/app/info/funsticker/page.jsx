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
        `}
      </style>

      {/* Hero */}
      <section className="py-20 px-8 text-center bg-[url(/images/bg/bg-funsticker-1.jpg)] bg-cover bg-no-repeat h-[1500px] sm:h-[1400px] overflow-hidden">
        <div className="container px-4 relative">
          <div
            className="mt-24 transition-transform duration-75 space-y-60 sm:space-y-80"
            style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          >
            <div className="space-y-10">
              <h1 className="text-3xl md:text-5xl text-biru font-bold leading-tight mb-6">
                Kenalkan Funsticker!
              </h1>
              <p className="text-lg md:text-xl font-medium">
                Sticker book edukatif untuk anak usia 2–6 tahun. Dirancang untuk
                stimulasi motorik, bahasa, logika, dan bonding anak & orang tua.
              </p>
              <Image
                src="/images/funsticker/funsticker-1.png"
                alt="funsticker"
                width={400}
                height={200}
                className="mx-auto"
              />
              <a href="/funsticker" className="tombol-biru-tua">
                Beli Sekarang
              </a>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-4xl font-bold leading-tight mb-4 text-biru">
                  Mainan Yang Bikin
                  <br />
                  Anak Belajar Tanpa
                  <br />
                  Disadari!
                </h2>

                <p className="text-md">
                  Funsticker adalah buku stiker bertema edukatif dengan
                  ilustrasi menarik dan aktivitas yang mendukung tumbuh kembang
                  anak usia dini.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 text-md">
                {[
                  {
                    img: "/images/assets/paint-2.png",
                    text: "Fullcolor & ramah anak",
                  },
                  {
                    img: "/images/assets/lampu.avif",
                    text: "Melatih Logika,  Fokus & Bahasa",
                  },
                  {
                    img: "/images/assets/otak.png",
                    text: "Stimulasi Motorik Halus",
                  },
                  {
                    img: "/images/assets/joystick-2.png",
                    text: "Bisa dimainkan dengan orang tua",
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
          </div>
        </div>
      </section>

      <section id="kenalin-worksheet" className="py-24 px-4 bg-[#fdf8f2]">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold leading8 md:leading-12 mb-8">
              Apa yang Membuat <span className="text-biru">Funsticker</span>{" "}
              Berbeda?
            </h2>
          </div>
          <div className="space-y-10 mb-8">
            {[
              {
                img: "/images/funsticker/funsticker-11.avif",
                title: "Bukan Mainan Biasa",
                text: "Setiap halaman punya cerita dan aktivitas yang memancing rasa ingin tahu. Anak tak hanya menempel stiker, tapi juga belajar mencocokkan, mengelompokkan, dan mengikuti instruksi.",
              },
              {
                img: "/images/funsticker/funsticker-12.avif",
                title: "Pas untuk Tangan Kecil Anak",
                text: "Stiker berukuran ideal, ilustrasi simpel tapi penuh makna, dan aktivitasnya sesuai dengan perkembangan anak 2–6 tahun.",
              },
              {
                img: "/images/funsticker/funsticker-13.avif",
                title: "Mendukung Bonding Anak & Orang Tua",
                text: "Anak bisa mendengar cerita dari Ayah atau Bunda, menyebutkan nama-nama benda, dan berdiskusi ringan sambil menempel stiker.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center flex flex-col md:flex-row gap-4 md:gap-14 items-center"
              >
                <div className="flex-1/4">
                  <Image
                    src={item.img}
                    alt={item.text}
                    width={200}
                    height={300}
                    className="mx-auto"
                  />
                </div>

                <div className="bg-[#fefdf9] rounded-2xl py-10 px-8 text-left flex-3/4">
                  <p className="font-semibold mb-4">{item.title}</p>
                  <p className="">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tema List */}
      <section id="list-funpaper-tema" className="py-20 px-4 bg-[#fefdf9]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            Pilih tema favorit anak:
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                img: "/images/funsticker/funsticker-3.avif",
                title: "Pekerjaan",
                text: "Kenalkan aneka pekerjaan & peranannya",
              },
              {
                img: "/images/funsticker/funsticker-4.avif",
                title: "Disebuah rumah",
                text: "Eksplor bagian rumah & kosakata sekitarnya",
              },
              {
                img: "/images/funsticker/funsticker-5.avif",
                title: "Daily activities",
                text: "Belajar urutan aktivitas harian",
              },
              {
                img: "/images/funsticker/funsticker-6.avif",
                title: "Vocabulary",
                text: "Kenalkan kosakata bahasa Inggris dasar",
              },
            ].map((tema, idx) => (
              <div
                key={idx}
                className="px-4 py-10 flex flex-col items-center justify-center bg-[#fbf6f2] rounded-xl"
              >
                <Image
                  src={tema.img}
                  alt={tema.text}
                  width={200}
                  height={120}
                  className="rounded-lg mb-4"
                />
                <p className="font-semibold text-lg">{tema.title}</p>
                <p className="mt-3 text-lg">{tema.text}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-20 text-2xl md:text-3xl font-bold mb-14">
            Spesifikasi Produk
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 justify-center mb-8 md:divide-x md:divide-[#cbaf78]">
            <div className="px-8 md:px-12 py-4 text-center">
              <Image
                src="/images/funsticker/funsticker-7.avif"
                alt="funsticker"
                width={120}
                height={120}
                className="mx-auto"
              />
              <p className="">10–15 halaman penuh warna</p>
            </div>

            <div className="px-8 md:px-12 py-4 text-center">
              <Image
                src="/images/funsticker/funsticker-8.avif"
                alt="funsticker"
                width={120}
                height={120}
                className="mx-auto"
              />
              <p className="">Ilustrasi menarik dan informatif</p>
            </div>

            <div className="px-8 md:px-12 py-4 text-center">
              <Image
                src="/images/funsticker/funsticker-9.avif"
                alt="funsticker"
                width={120}
                height={120}
                className="mx-auto"
              />
              <p className="">Ukuran A5, pas untuk anak</p>
            </div>

            <div className="px-8 md:px-12 py-4 text-center">
              <Image
                src="/images/funsticker/funsticker-10.avif"
                alt="funsticker"
                width={120}
                height={120}
                className="mx-auto"
              />
              <p className="">Kertas tebal & tahan lipat</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[url(/images/bg/bg-funsticker-2.avif)] bg-cover bg-no-repeat">
        <div className="container">
          <h2 className="text-biru text-xl sm:text-4xl font-bold text-center mb-12">
            Apa Manfaatnya untuk Anak?
          </h2>

          <div className="mb-18 flex flex-row flex-wrap justify-center gap-8">
            {[
              {
                img: "/images/assets/otak.png",
                text: "Melatih motorik halus lewat aktivitas menempel",
              },
              {
                img: "/images/assets/buku.png",
                text: "Mengembangkan kemampuan bahasa & kosakata",
              },
              {
                img: "/images/assets/fokus.png",
                text: "Meningkatkan fokus dan konsentrasi",
              },
              {
                img: "/images/assets/gear-2.png",
                text: "Belajar logika dasar: mencocokkan, mengelompokkan, urutan",
              },
              {
                img: "/images/assets/amplop-love.png",
                text: "Meningkatkan bonding dan interaksi sosial dengan orang tua",
              },
            ].map((solusi, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-6 border-2 border-white bg-white/40 rounded-xl py-4 sm:py-8 px-4 w-full sm:w-70 shadow-md"
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
                  <p className="font-bold mb-2">{solusi.heading}</p>
                  <p>{solusi.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-biru text-xl sm:text-4xl font-bold text-center mb-12">
            Cocok Untuk Siapa?
          </h2>

          <div className="flex flex-col md:flex-row gap-6 border-2 border-white bg-white/40 rounded-xl py-8 px-8 mb-20 max-w-240 mx-auto shadow-md">
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
                Ibu rumah tangga yang ingin anaknya aktif tanpa layar
              </p>
              <p className="flex flex-row gap-2 mb-2">
                <span>
                  <CircleCheck size={16} className="mt-1" />
                </span>
                Ibu bekerja yang cari aktivitas edukatif mandiri
              </p>
              <p className="flex flex-row gap-2 mb-2">
                <span>
                  <CircleCheck size={16} className="mt-1" />
                </span>
                Orang tua yang ingin quality time bersama anak
              </p>
              <p className="flex flex-row gap-2 mb-2">
                <span>
                  <CircleCheck size={16} className="mt-1" />
                </span>
                Guru PAUD & terapis anak usia dini sebagai media belajar
                interaktif
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
                src="/images/funsticker/funsticker-2.avif"
                width={700}
                height={700}
                alt="Funpaper Tema Campur"
                className="mx-auto w-120 md:w-160"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-bold text-xl leading-tight sm:text-3xl lg:text-4xl mb-8 text-center md:text-left">
                Beri anak pengalaman belajar yang menyenangkan setiap hari
              </h2>

              <Link href="/funsticker" className="tombol-pink">
                Beli Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[url(/images/bg/bg-funsticker-2.avif)] bg-cover bg-no-repeat bg-center  min-h-[200px] md:min-h-[280px] flex flex-col justify-center">
        <div className="container">
          <h2 className="text-biru text-2xl md:text-4xl font-bold text-center">
            Lorem Ipsum Dolor Sit Amet
          </h2>
        </div>
      </section>
    </main>
  );
}
