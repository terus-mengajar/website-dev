"use client";

import { useEffect, useState } from "react";
import LoadingCard from "@/components/LoadingCard";
import Link from "next/link";
import { CLOUDFLARE_R2_WEBSITE_ASSETS_URL } from "@/lib/cloudflare";

export default function ProdukTerkait({ activityId, themeId }) {
  const [funpapers, setFunpapers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `/api/funpaper-harian?limit=4&activity_id=${activityId}&theme_id=${themeId}`
      );
      const data = await res.json();
      setFunpapers(data);
    }
    fetchData();
  }, []);

  return (
    <section className="py-16 bg-[#fcfcfc]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Judul */}
        <h2 className="text-2xl lg:text-3xl font-bold mb-10">Produk Terkait</h2>

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
                      {funpaper.name + " - " + funpaper.activity}
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
      </div>
    </section>
  );
}
