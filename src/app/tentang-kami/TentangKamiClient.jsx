"use client";

import Lottie from "lottie-react";
import { MoveRight } from "lucide-react";

export default function TentangKamiClient() {
  return (
    <main className="mt-[68px] leading-8">
      <section className="bg-[#fcfbf8] px-12 py-14 lg:px-28 bg-[url('/images/bg/bg-tm-logo-ujung.avif')] bg-no-repeat bg-left-top bg-contain">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-10 py-8">
            <div className="lg:w-1/2">
              <div className="max-w-xl">
                <Lottie
                  animationData={require("/public/lottie/funpaper_cover.json")}
                  loop={true}
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h1 className="text-[#ef9e00] font-bold text-4xl mb-4">
                Siapa Kami?
              </h1>
              <p className="mb-8">
                Di Terus Mengajar, kami hadir untuk memudahkan pembelajaran yang
                menarik dan bermanfaat bagi anak-anak.
              </p>
              <p>
                Kami menawarkan koleksi beragam lembar kerja atau worksheet
                interaktif yang dapat membantu anak-anak belajar dengan cara
                yang menyenangkan yang kami beri nama <b>Funpaper</b>
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10 py-8">
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="max-w-xl">
                <Lottie
                  animationData={require("/public/lottie/funpaper_putar.json")}
                  loop={true}
                />
              </div>
            </div>
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="font-bold text-4xl mb-4">Apa itu Funpaper?</h2>
              <p>
                <b>Funpaper</b> adalah lembar kerja untuk anak yang dirancang
                untuk membantu mengasah kemampuan kognitif, meningkatkan
                keterampilan motorik halus, menstimulasi kreativitas,
                meningkatkan kemampuan bahasa dan kosakata, serta mengembangkan
                keterampilan dalam pemecahan masalah.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10 py-8">
            <div className="lg:w-1/2">
              <div className="max-w-xl">
                <Lottie
                  animationData={require("/public/lottie/funpaper_counting.json")}
                  loop={true}
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-[#ef9e00] font-bold text-4xl mb-4">
                Apa Yang Kami Tawarkan?
              </h2>
              <p className="mb-8">
                Lebih dari 500+ funpaper untuk Anda dengan lebih banyak jenis
                aktifitas dan tema
              </p>
              <p>
                Follow akun{" "}
                <a
                  className="font-bold underline"
                  href="https://instagram.com/terusmengajar"
                  target="_blank"
                >
                  media sosial kami
                </a>{" "}
                biar tidak ketinggalan informasi
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf6f2] px-12 py-14 lg:px-28">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12 py-8">
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="max-w-xs">
                <Lottie
                  animationData={require("/public/lottie/aset_media_ajar_counting.json")}
                  loop={true}
                />
              </div>
            </div>
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="font-bold text-4xl mb-4">
                Aset Media Ajar yang Kreatif
              </h2>
              <p className="mb-4">
                Kami juga menyediakan berbagai macam aset yang dapat membantu
                orang tua atau guru di sekolah menciptakan media ajar yang
                menarik. Selengkapnya bisa cek disini
              </p>
              <a
                className="font-bold flex flex-row items-center"
                href="/aset-media-pembelajaran"
              >
                Lihat Selengkapnya&nbsp;&nbsp;
                <MoveRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfbf8] px-12 py-14 lg:px-28">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12 py-8">
            <div className="lg:w-1/2">
              <h2 className="font-bold text-4xl">Tim Kami</h2>
            </div>
            <div className="lg:w-1/2">
              <p>
                Tim kami adalah tim yang terdiri dari para ahli dalam bidang
                pendidikan, desain, dan teknologi. Bersama-sama, kami
                berkomitmen dan bekerja untuk menghadirkan solusi pembelajaran
                terbaik bagi anak-anak Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
