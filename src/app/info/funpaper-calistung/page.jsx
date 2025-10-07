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
        `}
      </style>

      {/* Hero */}
      <section className="py-20 px-8 text-center bg-[url(/images/bg/bg-harian-1.avif)] bg-cover bg-no-repeat h-[1800px] sm:h-[1500px] lg:h-[1300px] overflow-hidden">
        <div className="container px-4 relative">
          <div
            className="mt-24 transition-transform duration-75 space-y-60 sm:space-y-80"
            style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          >
            <div className="space-y-10">
              <h1 className="text-3xl md:text-5xl text-biru font-bold leading-tight mb-6">
                Jadi Lebih Kreatif<br />Dengan Funpaper!
              </h1>
              <p className="text-lg md:text-xl font-medium">
                Kumpulan lembar kerja dengan aktivitas yang fokus pada keterampilan dasar anak usia dini seperti pengenalan angka dan huruf, kemampuan motorik halus (menggunting, menebalkan garis, menulis), kreativitas seni (mewarnai, menggambar), serta aktivitas kognitif sederhana seperti maze dan soal campuran.
              </p>
              <Link href="/funpaper-calistung" className="tombol-biru-tua">
                Download Sekarang
              </Link>
            </div>

            <div className="">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-4xl font-bold leading-tight mb-4 text-biru">
                  Dengan Funpaper Harian Anak Bisa
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-md">
                {[
                  {
                    img: "/images/assets/penggaris.png",
                    text: "Mengenal konsep angka, huruf, bentuk geometri, pola, & konsep dasar matematika",
                  },
                  {
                    img: "/images/assets/huruf.png",
                    text: "Latihan pengenalan huruf dan kosa kata sederhana",
                  },
                  {
                    img: "/images/assets/lampu-2.png",
                    text: "Meningkatkan kemampuan logika",
                  },
                  {
                    img: "/images/assets/bola.png",
                    text: "Melatih kemampuan mengenali pola visual dan perbedaan kecil antar objek",
                  },
                  {
                    img: "/images/assets/menulis.png",
                    text: "Memperkuat kontrol tangan dan koordinasi mata-tangan",
                  },
                  {
                    img: "/images/assets/paint-3.avif",
                    text: "Mengembangkan imajinasi dan kreativitas",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="text-center flex flex-col gap-1 justify-center border-2 border-white bg-white/40 rounded-xl py-8 px-4"
                  >
                    <Image
                      src={item.img}
                      alt={item.text}
                      width={40}
                      height={40}
                      className="mx-auto"
                    />
                    <p className="mt-2 text-sm">{item.text}</p>
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
              Kenapa Harus Punya Funpaper Ini?
            </h2>
          </div>

          <div className="mb-18 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                img: "/images/assets/free-2.png",
                heading: "Gratis dan praktis",
                text: "Bisa diunduh kapan saja, tinggal print, langsung siap dipakai",
              },
              {
                img: "/images/assets/check.png",
                heading: "Variasi aktivitas setiap hari",
                text: "Dengan banyak tema dan variasi aktivitas, pembelajaran jadi tidak monoton, anak tidak cepat bosan karena terus mendapat tantangan baru tiap hari.",
              },
              {
                img: "/images/assets/palu.png",
                heading: "Melatih banyak kemampuan sekaligus",
                text: "Dari motorik halus (menggunting, menebalkan garis), kreativitas (mewarnai), sampai fokus dan logika (maze, soal campuran). Semua ada dalam satu media.",
              },
              {
                img: "/images/assets/pensil.avif",
                heading: "Ilustrasi menarik",
                text: "Desain visual ramah anak dengan memuat gambar, ikon, atau bentuk yang familiar bagi anak.",
              },
              {
                img: "/images/assets/tas-2.png",
                heading: "Sesuai tahap perkembangan.",
                text: "Funpaper bisa dipilih sesuai usia anak (2–6 tahun), jadi bunda tidak perlu bingung lagi mencari lembar aktivitas yang cocok dengan kemampuan si kecil.",
              },
              {
                img: "/images/assets/sekolah-2.avif",
                heading: "Membuat Anak Lebih Siap Sekolah",
                text: "Rutin mengerjakan Funpaper Harian melatih konsistensi dan disiplin belajar, sekaligus mengenalkan anak pada keterampilan dasar calistung dengan menyenangkan.",
              },
            ].map((solusi, idx) => (
              <div
                key={idx}
                className="flex flex-col lg:flex-row gap-6 bg-[#fefdf9] rounded-xl py-8 sm:py-14 px-8"
              >
                <div className="basis-1/4">
                  <Image
                    src={solusi.img}
                    width={200}
                    height={200}
                    alt="solusi"
                    className="max-w-12"
                  />
                </div>
                <div>
                  <p className="font-bold mb-2">{solusi.heading}</p>
                  <p>{solusi.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aktivitas List */}
      <section id="list-funpaper-tema" className="py-24 px-4 bg-[#fefdf9]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            Total <span className="text-[#3763A1]">400+</span> Worksheet
            Pembelajaran Yang Interaktif & Menyenangkan
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-14">
            {[
              {
                img: "/images/funpaper/harian/funpaper-harian-2.png",
                text: "Mewarnai",
              },
              {
                img: "/images/funpaper/harian/funpaper-harian-3.png",
                text: "Menebalkan Garis",
              },
              {
                img: "/images/funpaper/harian/funpaper-harian-4.png",
                text: "Gunting Tempel",
              },
              {
                img: "/images/funpaper/harian/funpaper-harian-5.png",
                text: "Soal Campuran",
              },
              {
                img: "/images/funpaper/harian/funpaper-harian-6.png",
                text: "Maze",
              },
              {
                img: "/images/funpaper/harian/funpaper-harian-7.png",
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
                  width={200}
                  height={120}
                  className="rounded-lg mb-4"
                />
                <p className="mt-3 font-medium text-lg">{tema.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[url(/images/bg/bg-harian-2.avif)] bg-cover bg-center bg-no-repeat">
        <div className="container">
          <h2 className="text-biru text-xl sm:text-4xl font-bold text-center mb-12">
            Cocok Untuk Siapa?
          </h2>

          <div className="mb-44 flex flex-row flex-wrap justify-center gap-8">
            {[
              {
                img: "/images/assets/orang-tua.avif",
                text: "Orang tua yang cari aktivitas edukatif untuk mengisi waktu di rumah",
              },
              {
                img: "/images/assets/sekolah-3.png",
                text: "Pelaku homeschooling yang aktif mencari materi ajar tambahan",
              },
              {
                img: "/images/assets/buku-2.png",
                text: "Guru yang membutuhkan bahan ajar sesuai kurikulum",
              },
            ].map((data, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 border-2 border-white bg-white/40 rounded-xl py-4 sm:py-8 px-8 items-center shadow-md w-70"
              >
                <div className="w-[70px] h-[70px]">
                  <Image
                    src={data.img}
                    width={80}
                    height={80}
                    alt="cocok"
                    className="h-auto"
                  />
                </div>
                <div>
                  <p className="text-center">{data.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 px-8 bg-[#fefdf9]">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center justify-center">
            <div className="">
              <Image
                src="/images/funpaper/harian/funpaper-harian-1.png"
                width={700}
                height={700}
                alt="Funpaper Tema Campur"
                className="mx-auto w-80 md:w-160"
              />
            </div>
            <div className="text-center md:text-left space-y-10">
              <h2 className="font-bold text-xl leading-tight sm:text-3xl lg:text-4xl mb-8 text-center md:text-left">
                Penuhi Kebutuhan Belajar Ananda Dengan Funpaper Harian
              </h2>

              <Link href="/funpaper-harian" className="tombol-pink">
                Download Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[url(/images/bg/bg-harian-2.avif)] bg-cover bg-no-repeat bg-position-[center_top_-100px] lg:bg-position-[center_top_-300px] min-h-[300px] md:min-h-[400px] flex flex-col justify-center">
        <div className="container">
          <h2 className="text-biru text-2xl md:text-4xl font-bold text-center">
            Temani Ananda Belajar Sampai Bermain
          </h2>
        </div>
      </section>
    </main>
  );
}
