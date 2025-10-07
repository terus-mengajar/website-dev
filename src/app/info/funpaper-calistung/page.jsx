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
          .text-hijau {
            color: #0085a0;
          }
        `}
      </style>

      {/* Hero */}
      <section className="py-20 px-8 text-center bg-[url(/images/bg/bg-calistung.jpg)] bg-cover bg-top bg-no-repeat h-[1900px] sm:h-[1700px] lg:h-[1500px] overflow-hidden">
        <div className="container px-4 relative">
          <div
            className="mt-24 transition-transform duration-75 space-y-60 sm:space-y-80"
            style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          >
            <div className="space-y-10">
              <h1 className="text-3xl md:text-5xl text-hijau font-bold leading-tight mb-6">
                Dapatkan Gratis
                <br />
                Funpaper Calistung
              </h1>
              <p className="text-lg md:text-xl font-medium">
                Rahasia ananda lancar calistung tanpa kendala
              </p>
              <Link
                href="/funpaper-calistung"
                className="tombol-hijau bg-[#0085A0]!"
              >
                Download Sekarang
              </Link>
            </div>

            <div className="">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-4 text-hijau">
                  Sebagai orang tua pasti ingin memberikan yang terbaik untuk
                  anaknya, termasuk dalam mendampingi anak belajar membaca,
                  menulis dan berhitung. Tapi sering terkendala karena
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-md">
                {[
                  {
                    img: "/images/assets/koin.png",
                    text: "Biaya les privat mahal",
                  },
                  {
                    img: "/images/assets/komputer-silang.png",
                    text: "Bimbel online kurang efektif",
                  },
                  {
                    img: "/images/assets/otak-petir.png",
                    text: "Kesulitan buat anak mau belajar",
                  },
                  {
                    img: "/images/assets/tanda-tanya.png",
                    text: "Bingung memilih metode yang tepat",
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

            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-auto lg:w-200">
                <Image
                  src="/images/funpaper/calistung/funpaper-calistung-1.png"
                  width={300}
                  height={200}
                  alt="calistung"
                  className="mx-auto"
                />
              </div>
              <div className="text-center lg:text-left lg:px-18">
                <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-1 text-hijau">
                  Sekarang ada solusinya!
                </h3>
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-4 text-hijau">
                  Funpaper Calistung dari Terus Mengajar
                </h2>
                <p className="font-medium">
                  Funpaper Calistung hadir untuk memberikan teknik yang mudah
                  dipraktikkan anak usia dini hingga awal SD agar menguasai
                  keterampilan dasar membaca, menulis, dan berhitung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kenalin-worksheet" className="py-24 px-4 bg-[#fdf8f2]">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold leading8 md:leading-12 mb-8">
              Dengan Funpaper Calistung anak bisa:
            </h2>
          </div>
          <div className="space-y-10 mb-8">
            {[
              {
                img: "/images/funpaper/calistung/funpaper-calistung-2.png",
                title: "Membaca tanpa mengeja",
                text: "Menggunakan metode suku kata yang terbukti lebih mudah dipahami anak",
              },
              {
                img: "/images/funpaper/calistung/funpaper-calistung-3.png",
                title: "Menulis bertahap",
                text: "Dimulai dari latihan pola garis, huruf, suku kata dan kata sederhana agar anak tidak merasa terbebani dan lebih percaya diri",
              },
              {
                img: "/images/funpaper/calistung/funpaper-calistung-4.png",
                title: "Berhitung konkret",
                text: "Anak belajar berhitung lewat gambar dan permainan sehingga konsep angka lebih mudah dipahami, bukan sekedar hafalan.",
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

      <section className="py-18 px-8 bg-[#fefdf9]">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center justify-center">
            <div className="">
              <Image
                src="/images/funpaper/calistung/funpaper-calistung-5.png"
                width={700}
                height={700}
                alt="Funpaper Calistung"
                className="mx-auto w-80 md:w-160"
              />
            </div>
            <div className="text-center md:text-left space-y-10">
              <h2 className="font-bold text-xl leading-tight sm:text-3xl lg:text-4xl mb-8 text-center md:text-left">
                Yuk bantu anak siap membaca, menulis, dan berhitung dengan mudah
              </h2>

              <Link href="/funpaper-calistung" className="tombol-pink">
                Download Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[url(/images/bg/bg-calistung.jpg)] bg-cover bg-no-repeat bg-position-[center_top_-50px] lg:bg-position-[center_top_-400px] min-h-[300px] md:min-h-[400px] flex flex-col justify-center">
        <div className="container">
          <h2 className="text-hijau text-2xl md:text-4xl font-bold text-center">
            Dengan Funpaper Calistung ananda tak sekedar bisa dan hafal tetapi PAHAM
          </h2>
        </div>
      </section>
    </main>
  );
}
