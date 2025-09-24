// src/components/FunpaperHarian.jsx
"use client";

import { useEffect, useState } from "react";
import LoadingCard from "../../components/LoadingCard";
import Link from "next/link";
import Image from "next/image";

export default function FunpaperHarian() {
  const [funpapers, setFunpapers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/funpaper-harian?limit=8");
      const data = await res.json();
      setFunpapers(data);
      // console.log(data);
    }
    fetchData();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        {/* Judul */}
        <h1 className="text-3xl lg:text-4xl font-bold mb-10">
          Funpaper Harian
        </h1>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-4">
          <div className="lg:flex-basis-5/10 flex items-center justify-center rounded-xl lg:mb-0 bg-[url('/images/bg/bg-activity-2.avif')] bg-cover bg-center w-full h-[140px] lg:h-[180px]">
            <h3 className="text-2xl font-bold text-[#785556] text-center">
              Ribuan Worksheet Telah <br /> di Download
            </h3>
          </div>
          <div className="lg:flex-basis-5/10 flex items-center rounded-xl px-6 py-6 bg-[url('/images/bg/bg-tm-logo-half.avif')] bg-cover bg-center w-full h-[280px] md:h-[180px]">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="">
                <Image
                  src="/images/funpaper/bundle/bundle-1.avif"
                  alt="Funpaper Bundle"
                  width={140}
                  height={60}
                  className="mx-auto md:mx-0"
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <p className="font-semibold">Free Funpaper Harian Bundle</p>
                <p className="text-sm text-gray-600 mb-3">
                  Semua bisa download secara gratis! Dapatkan 15 Lembar Kerja
                  Gratis dalam tiap bundle
                </p>
                <div>
                  <a
                    href="/funpaper-harian-bundle"
                    className="text-center tombol-pink float-end text-white text-sm font-medium py-2! rounded-lg! transition"
                  >
                    Lihat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Produk Terkait */}
        <div className="mb-8">
          {funpapers.length === 0 && <LoadingCard />}

          {funpapers.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
              {/* Contoh item (nanti bisa map data) */}
              {funpapers.map((funpaper) => (
                <Link
                  className="flex flex-col items-center hover:shadow hover:cursor-pointer rounded-lg p-3 justify-between"
                  href={"/funpaper-harian/" + funpaper.slug}
                  key={funpaper.id}
                >
                  <div className="mb-2 flex flex-col items-center">
                    <div className="w-32 h-32 bg-white flex items-center justify-center rounded-md bg-[url('/images/shapes/oval-ungu.avif')] bg-cover bg-center">
                      <img
                        src="https://cdn.prod.website-files.com/644f4d0f9964649ed2f9f0a2/65bb81f6575a82c1fa3faf26_HtP2PhawQor0T-bPRYeNjWh9fpgDWXzhPlvNj_wbnyA.jpeg"
                        alt="Produk Terkait"
                        className="h-full object-cover w-[80%]"
                      />
                    </div>
                    <h4 className="text-center text-sm font-medium mt-2">
                      {funpaper.name}
                    </h4>
                  </div>
                  <span className="mt-2 inline-block tombol-ungu text-white text-xs font-medium px-3 py-1 rounded-lg transition">
                    Lihat Produk
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Link Lihat Semua */}
        <div className="text-center pt-4">
          <a href="/funpaper-harian" className="font-bold">
            Lihat Semua &gt;
          </a>
        </div>
      </div>
    </section>
  );
}
