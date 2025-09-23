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
            color: #3763a1;
          }
        `}
      </style>

      {/* Hero */}
      <section className="py-20 px-8 text-center bg-[url(/images/bg/bg-harian-bundle-1.avif)] bg-cover bg-no-repeat h-[1700px] sm:h-[1800px] overflow-hidden">
        <div className="container px-4 relative">
          <div
            className="mt-24 transition-transform duration-75 space-y-60 sm:space-y-80"
            style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          >
            <div className="text-biru">
              <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-2">
                Bikin Waktu Belajar di Rumah Jadi Lebih Seru, Tanpa Drama dan
                Tanpa Ribet!
              </h1>
              <Image
                src="/images/funpaper/tema/funpaper-tema-mengenal-angka.avif"
                alt="mengenal angka"
                width={400}
                height={100}
                className="mx-auto"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 content-between">
              <p className="order-2 lg:order-1 text-xl md:text-4xl leading-tight font-bold text-center lg:text-left text-biru">
                Anak-anak usia dini memang perlu diajak bermain sambil belajar
                tapi bukan berarti Bunda jadi pusing 7 keliling gara-gara itu.
              </p>

              <Image
                src="/images/assets/buku-lampu.avif"
                width={300}
                height={100}
                alt="buku lampu"
                className="order-1 lg:order-2 mx-auto"
              />
            </div>

            <div className="">
              <div className="text-center mb-8">
                <h2 className="text-xl md:text-4xl leading-tight font-bold text-biru">
                  Banyak orang tua yang ingin memberi stimulasi edukatif ke
                  anak-anaknya, tapi sayangnya...
                </h2>
              </div>
              <div className="flex flex-row flex-wrap gap-6 justify-center">
                {[
                  {
                    img: "/images/assets/lampu-coret.avif",
                    text: "Ide udah mentok",
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
                    img: "/images/assets/jam-2.avif",
                    text: "Waktu Terbatas",
                  },
                  {
                    img: "/images/assets/tanda-tanya.avif",
                    text: "Bingung harus mulai dari mana",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="text-center text-md flex flex-col gap-1 justify-center border-2 border-white bg-white/20 rounded-xl py-3 px-4 w-30 md:w-40 shadow-md"
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

      <section id="kenalin-worksheet" className="py-20 px-4 bg-[#fdf8f2]">
        <div className="container">
          <div className="items-center">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight md:leading-12 mb-4">
                <span className="text-[#1085AD]">Hadir untuk Membantu!</span>
                <br />
                Bundle Worksheet Edukatif Siap Pakai
                <br />
                dari Terus Mengajar
              </h2>
              <p className="max-w-150 mx-auto">
                Kami menyusun lembar aktivitas ini secara khusus untuk anak usia 2–6 tahun, agar Bunda bisa langsung dampingi anak bermain sambil belajar tanpa perlu repot menyiapkan sendiri.
              </p>
            </div>
            <div className="flex flex-row flex-wrap gap-6  mx-auto justify-center text-sm">
              {[
                {
                  img: "/images/assets/printer-centang.png",
                  text: "Sudah cetak, tinggal pakai",
                },
                {
                  img: "/images/assets/pensil-2.avif",
                  text: "Terdapat aneka pilihan Alat Tulis dalam Paket",
                },
                {
                  img: "/images/assets/box-2.png",
                  text: "Dikirim ke rumah, siap langsung digunakan",
                },
                {
                  img: "/images/assets/menulis.png",
                  text: "Aktivitas dibuat sesuai tahapan perkembangan anak usia dini",
                },
                {
                  img: "/images/assets/kuas.png",
                  text: "Ilustrasi menarik, minim distraksi, dan disukai  anak-anak",
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
          </div>
        </div>
      </section>

      {/* Tema List */}
      <section id="list-funpaper-tema" className="py-24 px-4 bg-[#fefdf9]">
        <div className="container mx-auto px-4 text-center space-y-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            9 Pilihan Bundle yang Bisa Bunda Pilih Sesuai Usia & Kebutuhan Anak:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                img: "/images/funpaper/bundle/bundle-mengenal-angka-2-4.avif",
                text: "Mengenal Angka\n(2-4 Tahun)",
              },
              {
                img: "/images/funpaper/bundle/bundle-mengenal-angka-4-5.avif",
                text: "Mengenal Angka\n(4-5 Tahun)",
              },
              {
                img: "/images/funpaper/bundle/bundle-mengenal-huruf-2-4.avif",
                text: "Mengenal Huruf\n(2-4 Tahun)",
              },
              {
                img: "/images/funpaper/bundle/bundle-mengenal-huruf-4-5.avif",
                text: "Mengenal Huruf\n(4-5 Tahun)",
              },
              {
                img: "/images/funpaper/bundle/bundle-mengenal-huruf-5-6.avif",
                text: "Mengenal Huruf\n(5-6 Tahun)",
              },
              {
                img: "/images/funpaper/bundle/bundle-seni-dan-warna-2-4.avif",
                text: "Seni dan Warna\n(2-4 Tahun)",
              },
              {
                img: "/images/funpaper/bundle/bundle-mewarnai-2-4.avif",
                text: "Mewarnai\n(2-4 Tahun)",
              },
              {
                img: "/images/funpaper/bundle/bundle-soal-campuran-2-4.avif",
                text: "Soal Campuran\n(2-4 Tahun)",
              },
              {
                img: "/images/funpaper/bundle/bundle-soal-campuran-5-6.avif",
                text: "Soal Campuran\n(5-6 Tahun)",
              },
            ].map((tema, idx) => (
              <div
                key={idx}
                className="px-4 py-8 flex flex-col items-center justify-center bg-[#fbf6f2] rounded-xl"
              >
                <div className="w-32">
                  <Image
                    src={tema.img}
                    alt={tema.text}
                    width={120}
                    height={100}
                    className="rounded-lg"
                  />
                </div>
                <p className="mt-3 font-medium text-sm whitespace-pre-line">
                  {tema.text}
                </p>
              </div>
            ))}
          </div>

          <p className="">
            Setiap bundle disusun oleh tim edukasi anak usia dini, dengan
            aktivitas yang mendukung perkembangan motorik, bahasa, fokus, dan
            logika anak secara bertahap.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-[url(/images/bg/bg-harian-bundle-1.avif)] bg-cover bg-no-repeat bg-center text-sm">
        <div className="container">
          <h2 className="text-biru text-xl sm:text-4xl font-bold text-center mb-10">
            Semua Paket Sudah Termasuk:
          </h2>

          <div className="mb-10 flex flex-row flex-wrap justify-center gap-8">
            {[
              {
                img: "/images/assets/pensil.avif",
                heading: "Perlengkapan Belajar",
                text: "Crayon, Pensil, Penghapus, Gunting, dan Lem",
              },
              {
                img: "/images/assets/image.avif",
                heading: "Sticker Edukatif",
                text: "Sticker siap tempel pada cover worksheet",
              },
              {
                img: "/images/assets/box.avif",
                heading: "Packaging Terbaik",
                text: "Dikemas rapi dalam kotak kardus dengan bubble wrap, aman sampai rumah!",
              },
            ].map((data, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-6 border-2 border-white bg-white/20 rounded-xl py-4 sm:py-8 px-4 w-full sm:w-60 shadow-md"
              >
                <div className="w-[40px] h-[40px]">
                  <Image
                    src={data.img}
                    width={40}
                    height={40}
                    alt="sticker"
                    className="h-auto"
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold mb-2">{data.heading}</p>
                  <p>{data.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-biru text-xl sm:text-4xl font-bold text-center mb-10">
            Jadi, Bunda Tak Perlu Lagi...
          </h2>

          <div className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                img: "/images/assets/tanda-tanya.avif",
                text: "Bingung hari ini anak mau belajar apa",
              },
              {
                img: "/images/assets/gear.avif",
                text: "Repot cari-cari ide DIY (Do It Yourself)",
              },
              {
                img: "/images/assets/printer-silang.avif",
                text: "Download dan print worksheet secara mandiri",
              },
              {
                img: "/images/assets/susu-seru.avif",
                text: "Khawatir anak bosan atau tantrum saat belajar",
              },
            ].map((solusi, idx) => (
              <div
                key={idx}
                className="flex flex-col lg:flex-row gap-6 border-2 border-white bg-white/20 rounded-xl py-4 sm:py-8 px-8 items-center shadow-md"
              >
                <div className="w-[40px] h-[40px]">
                  <Image
                    src={solusi.img}
                    width={40}
                    height={40}
                    alt={solusi.heading}
                    className="h-auto"
                  />
                </div>
                <p>{solusi.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22 px-8 bg-[#fefdf9]">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-20 items-center justify-center">
            <div className="">
              <Image
                src="/images/funpaper/bundle/bundle-2.avif"
                width={400}
                height={300}
                alt="Funpaper Tema Campur"
                className="mx-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-bold text-2xl sm:text-4xl">
                Siap Mulai Belajar Seru
                <br />
                Tanpa Ribet?
              </h2>

              <p className="">
                Klik tombol di bawah ini untuk lihat semua pilihan worksheet dan
                pesan sekarang juga!
              </p>

              <div className="flex flex-col md:flex-row gap-4 text-center">
                <Link href="/funpaper-harian" className="tombol-pink">
                  Download Sekarang
                </Link>
                <Link href="/funpaper-harian" className="tombol-biru-muda">
                  Preorder Sekarang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[url(/images/bg/bg-harian-bundle-1.avif)] bg-cover bg-no-repeat bg-center  min-h-[200px] md:min-h-[280px] flex flex-col justify-center">
        <div className="container">
          <h2 className="text-biru text-2xl md:text-4xl leading-tight font-bold text-center">
            Bantu anak tumbuh dengan bahagia, belajar dengan gembira, dan siap
            sekolah mulai dari rumah
          </h2>
        </div>
      </section>
    </main>
  );
}
