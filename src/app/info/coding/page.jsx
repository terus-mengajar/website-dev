"use client";

// app/components/FunpaperTema.tsx
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page() {

  return (
    <main className="text-gray-800">
        <style>{`
            .text-coklat {
                color: #6B3636;
            }
            .text-coklat-muda {
                color: #9C6224;
            }
        `}</style>

      <section className="pt-28 pb-12 px-8 bg-[#FBF6F2] relative overflow-hidden">
        <div className="hidden sm:block absolute -bottom-10 -left-16 opacity-30 pointer-events-none rotate-30 -translate-x-60 translate-y-35">
          <img
            src="/images/shapes/logo-tm-cream.avif"
            alt=""
            className="w-105 h-105 object-contain"
          />
        </div>
        <div className="absolute -bottom-26 -right-14 opacity-30 pointer-events-none rotate-30 translate-x-15 sm:translate-x-35 translate-y-10 sm:translate-y-40">
          <img
            src="/images/shapes/logo-tm-cream.avif"
            alt=""
            className="w-60 sm:w-110 h:60 sm:h-110 object-contain"
          />
        </div>

        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center">
            <div className="">
              <Image
                src="/images/assets/coding.png"
                width={400}
                height={400}
                alt="Calistung"
                className="mx-auto w-30"
                unoptimized
              />
            </div>
            <div className="text-center md:text-left space-y-10">
              <h2 className="font-bold leading-tight text-3xl lg:text-4xl text-left text-coklat">
                Coding
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section id="kenalin-worksheet" className="py-24 px-4 bg-[#FCFBF8]">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold leading8 md:leading-12 mb-4 text-coklat-muda max-w-3xl mx-auto">
              Belajar Coding Dengan Peralatan Sederhana
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">Hanya dengan peralatan sederhana seperti wadah telur dan pompom anak bisa belajar coding. Lewat aktivitas ini anak dilatih untuk berpikir runut dan terstrukur yang merupakan dasar dari pembelajaran coding awal.</p>
            <Link className="inline-block" href="https://www.tiktok.com/@terusmengajar.id/video/7594308582556945672?_r=1&_t=ZS-95NTa40pr7Q" target="_blank">
              <Image
                src="/images/info/tiktok/coding.webp"
                width={400}
                height={400}
                alt="Calistung"
                className="mx-auto w-60 rounded-lg"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[url(/images/home/rekomendasi/bg-coding.png)] bg-cover bg-no-repeat bg-center  min-h-[200px] md:min-h-[280px] flex flex-col justify-center">
        <div className="container">
          <h2 className="text-white text-xl md:text-2xl font-bold text-center mb-8 max-w-2xl mx-auto">
            Coba Funpaper Coding untuk rekomendasi aktivitas coding tanpa layar lainnya.
          </h2>

          <div className="flex justify-center">
            <Link href="/funpaper-coding" className="tombol-biru">
              Coba Sekarang
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
