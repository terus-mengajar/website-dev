"use client";

import LoadingCard from "@/components/common/LoadingCard";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-react";
import { ListFilter } from "lucide-react";

export default function FunpaperTemaList({ onOpenFilter, filters }) {
  const [loading, setLoading] = useState(true);
  const [funpaperData, setFunpaperData] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 18;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch(`/api/funpaper-tema?${filters}`);
      const data = await res.json();
      setFunpaperData(data);
      setLoading(false);
    }
    fetchData();
  }, [filters]);

  const totalPages = Math.ceil(funpaperData.length / perPage);
  const funpapers = funpaperData.slice((page - 1) * perPage, page * perPage);

  // console.log(funpaperData);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <p className="font-medium hidden lg:block">
          Menampilkan {funpapers.length} dari {funpaperData.length} Produk
        </p>

        <button
          className="border border-[#ecdab7] hover:bg-gray-100 text-sm rounded font-medium px-2 py-1 lg:hidden flex flex-row gap-1 items-center"
          onClick={onOpenFilter}
        >
          <ListFilter size={16} /> Filter
        </button>
      </div>

      {/* Funpaper List */}
      {loading && <LoadingCard cols={3} />}

      {!loading && funpapers.length === 0 && (
        <div className="card-header">
          <div className="w-60">
            <Lottie
              animationData={require("/public/lottie/produk_tidak_ditemukan.json")}
              loop={true}
            />
          </div>
          <div>
            <p className="font-bold text-lg mb-2">
              Waah, Produknya tidak ditemukan!
            </p>
            <p className="text-sm">Waah, Produknya tidak ditemukan!</p>
          </div>
        </div>
      )}

      {!loading && funpapers.length > 0 && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {funpapers.map((funpaper) => (
              <Link
                href={"/funpaper-tema/" + funpaper.slug}
                key={funpaper.id}
                className="hover:shadow hover:cursor-pointer rounded-lg p-3 flex flex-col items-center justify-between"
              >
                <div className="">
                  <Image
                    width={128}
                    height={96}
                    src={funpaper.mockup_thumbnail_url}
                    alt={funpaper.name_on_website}
                    className="mx-auto object-contain mb-6"
                  />
                  <p className="text-xs text-center mb-2">
                    {funpaper.name_on_website}
                  </p>
                  {funpaper.downloaded > 0 && (
                    <p className="text-xs text-gray-400 text-center">
                      Diunduh {funpaper.downloaded} kali
                    </p>
                  )}
                </div>
                <div>
                  <button className="bg-[#8562a8] text-white text-xs px-4 py-1 mt-3 rounded-lg hover:bg-[#8562a8]/90 w-full">
                    Lihat Produk
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 border border-[#DCD3BB] rounded disabled:opacity-50"
            >
              Sebelumnya
            </button>
            <span>
              {page} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 border border-[#DCD3BB] rounded disabled:opacity-50"
            >
              Berikutnya
            </button>
          </div>
        </>
      )}
    </div>
  );
}
