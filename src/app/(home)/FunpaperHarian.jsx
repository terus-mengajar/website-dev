// src/components/FunpaperHarian.jsx
"use client";

import { useEffect, useState } from "react";
import LoadingCard from "../../components/LoadingCard";
import Link from "next/link";
import Image from "next/image";
import { CLOUDFLARE_R2_WEBSITE_ASSETS_URL } from "@/lib/cloudflare";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Judul */}
          <div>
            <h1 className="text-ungu text-3xl lg:text-4xl font-bold mb-4">
              Funpaper Harian
            </h1>
            <p className="text-lg md:max-w-[400px]">
              Satu hari satu worksheet, beragam jenis aktivitas!
            </p>
          </div>

          {/* Hero Section */}
          <div className="flex items-center justify-center rounded-xl bg-[url('/images/bg/bg-konfeti.png')] bg-cover bg-center w-full h-[140px] mb-14 p-2">
            <h2 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl text-[#785556]">
              6277+ kali telah didownload
            </h2>
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
                        src={
                          CLOUDFLARE_R2_WEBSITE_ASSETS_URL +
                          "/funpaper-harian/" +
                          funpaper.slug +
                          ".jpg"
                        }
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
