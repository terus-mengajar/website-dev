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
      <section className="py-20 px-8 text-center bg-[url(/images/bg/bg-interaktif.jpg)] bg-cover bg-no-repeat h-[2300px] sm:h-[2300px] overflow-hidden">
        <div className="container px-4 relative">
          <div
            className="mt-24 transition-transform duration-75 space-y-60 sm:space-y-80"
            style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          >
            <div className="space-y-10 pb-30">
              <h1 className="text-3xl md:text-5xl text-hijau font-bold leading-tight mb-6">
                Perkenalkan, <br /> Funpaper Interaktif
              </h1>
              <p className="text-lg md:text-xl font-medium mb-0">
                Belajar calistung dan belajar coding sebenarnya punya fondasi
                yang sama yaitu logika berpikir, fokus, urutan, dan pemecahan
                masalah.
              </p>
            </div>

            <div className="text-center space-y-5">
              <h2 className="text-2xl sm:text-4xl font-bold leading-tight mb-4 text-hijau">
                Fondasi ini bisa dilatih lewat rekomendasi aktivitas sederhana
                seperti:
              </h2>

              <div className="border-2 border-white bg-white/40 rounded-xl py-4 sm:py-6 px-4">
                <p className="text-md">Menghitung buah dan sayur di dapur</p>
              </div>
              <div className="border-2 border-white bg-white/40 rounded-xl py-4 sm:py-6 px-4">
                <p className="text-md">
                  Membandingkan ukuran tinggi badan orang tua dan anak
                </p>
              </div>
              <div className="border-2 border-white bg-white/40 rounded-xl py-4 sm:py-6 px-4">
                <p className="text-md">
                  Mengenal bentuk geometri lewat benda yang ada di rumah seperti
                  jam dinding, jendela, pintu
                </p>
              </div>
              <div className="border-2 border-white bg-white/40 rounded-xl py-4 sm:py-6 px-4">
                <p className="text-md">Menebak angka tersembunyi</p>
              </div>
              <div className="border-2 border-white bg-white/40 rounded-xl py-4 sm:py-6 px-4">
                <p className="text-md">
                  Ikut serta memasak makanan yang ada di rumah
                </p>
              </div>
            </div>

            <div className="">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-4 text-hijau">
                  Masalahnya, menyiapkan aktivitas seperti ini setiap hari tidak
                  selalu mudah.
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-md max-w-180 mx-auto">
                {[
                  {
                    img: "/images/assets/jam-2.avif",
                    text: "Butuh Waktu",
                  },
                  {
                    img: "/images/assets/bahan.png",
                    text: "Butuh Bahan",
                  },
                  {
                    img: "/images/assets/baterai-2.png",
                    text: "Butuh Ekstra Energi",
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
                      unoptimized
                    />
                    <p className="mt-2 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
              <h2 className="text-hijau leading-tight text-2xl sm:text-4xl font-bold text-center lg:text-left mx-auto sm:basis-3/4">
                Sementara di sisi lain, gadget selalu ada di tangan anak.
                Tinggal klik, langsung menyala.
              </h2>
              <div className="border-1 border-white rounded-xl p-5 w-50 bg-white/40 sm:basis-1/4 mx-auto">
                <Image
                  src="/images/assets/hp.png"
                  width={150}
                  height={150}
                  alt="interaktif"
                  className="mx-auto"
                  unoptimized
                />
              </div>
            </div>

            <div className="">
              <h2 className="text-hijau leading-tight text-2xl sm:text-4xl font-bold text-center">
                Pertanyaannya:
                <br />
                Apakah layar itu hanya dipakai untuk menonton, atau bisa menjadi
                ruang latihan berpikir?
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section id="kenalin-worksheet" className="py-24 px-4 bg-[#fdf8f2]">
        <div className="container space-y-14">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold leading8 md:leading-12 mb-8">
              <span className="text-hijau">Funpaper Interaktif</span> ini
              dirancang untuk menjembatani keduanya
            </h2>
            <p className="text-center mb-4">
              Dirancang dengan pendekatan edukatif, visual ramah anak, dan
              gameplay sederhana agar anak bisa belajar mandiri sambil bermain.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-6  mx-auto justify-center text-sm">
            <div className="text-center rounded-2xl w-full">
              <Image
                src="/images/funpaper/interaktif/funpaper-interaktif.gif"
                alt="interaktif gif"
                width={1000}
                height={1000}
                className="mx-auto"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[url(/images/bg/bg-interaktif.jpg)] bg-cover bg-no-repeat">
        <div className="container">
          <h2 className="text-hijau text-xl sm:text-4xl font-bold text-center mb-12">
            Dengan Funpaper Interaktif anak tidak hanya melihat layar, tetapi...
          </h2>

          <div className="flex flex-col md:flex-row gap-6 border-2 border-white bg-white/40 rounded-xl py-8 px-8 mb-28 max-w-240 mx-auto shadow-md">
            <div className="">
              <p className="flex flex-row gap-2 mb-2">
                <span>
                  <CircleCheck size={16} className="mt-1" />
                </span>
                Belajar membaca, belajar menulis, belajar huruf dan belajar
                angka
              </p>
              <p className="flex flex-row gap-2 mb-2">
                <span>
                  <CircleCheck size={16} className="mt-1" />
                </span>
                Mengenal bentuk dan warna
              </p>
              <p className="flex flex-row gap-2 mb-2">
                <span>
                  <CircleCheck size={16} className="mt-1" />
                </span>
                Belajar coding lewat aktivitas menyusun kode arah, urutan
                langkah, dan permainan seru lainnya.
              </p>
            </div>
          </div>

          <h2 className="text-hijau text-xl sm:text-4xl font-bold text-center mb-12">
            Dan yang membuatnya fleksibel:
          </h2>

          <div className="mb-18 flex flex-row flex-wrap justify-center gap-8">
            {[
              {
                img: "/images/funpaper/interaktif/hp-2.png",
                text: "Bisa langsung dimainkan di gadget",
              },
              {
                img: "/images/funpaper/interaktif/sheet-1.png",
                text: "Bisa diprint untuk aktivitas fisik",
              },
              {
                img: "/images/funpaper/interaktif/sheet-2.png",
                text: "Satu materi, dua cara belajar",
              },
            ].map((solusi, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-6 border-2 border-white bg-white/40 rounded-xl py-4 sm:py-8 px-4 w-full sm:w-70 shadow-md"
              >
                <div className="w-[120px] h-[120px]">
                  <Image
                    src={solusi.img}
                    width={120}
                    height={120}
                    alt="solusi"
                    className="h-auto mx-auto"
                    unoptimized
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm">{solusi.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-[#fefdf9]">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center justify-center">
            <div className="basis-2/5">
              <Image
                src="/images/funpaper/interaktif/hp.png"
                width={700}
                height={700}
                alt="Funpaper Tema Campur"
                className="mx-auto w-60 md:w-80"
                unoptimized
              />
            </div>
            <div className="basis-3/5 text-center md:text-left">
              <p className="mb-7 font-bold">
                Funpaper Interaktif ini bisa diakses gratis agar Ayah Bunda
                melihat bagaimana layar bisa menjadi ruang latihan berpikir,
                bukan hanya hiburan.
              </p>

              <Link
                href="/funpaper-interaktif"
                className="tombol-pink text-lg!"
              >
                Coba Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[url(/images/bg/bg-interaktif.jpg)] bg-cover md:bg-position-[center_top_-100px] bg-no-repeat  min-h-[200px] md:min-h-[280px] flex flex-col justify-center">
        <div className="container">
          <h2 className="text-hijau text-2xl md:text-4xl font-bold text-center leading-10 md:leading-14">
            Jadikan Screen Time Lebih Berkualitas Bersama Funpaper Interaktif
          </h2>
        </div>
      </section>
    </main>
  );
}
