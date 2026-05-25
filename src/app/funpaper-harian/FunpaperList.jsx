"use client";

import LoadingCard from "@/components/LoadingCard";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ListFilter } from "lucide-react";
import Lottie from "lottie-react";
import { useSearchParams } from "next/navigation";
import produkTidakDitemukan from "@/assets/lottie/produk_tidak_ditemukan.json";
import bundleMaze from "@/assets/lottie/bundle_maze.json";
import bundleSoalCampuran from "@/assets/lottie/bundle_soal_campuran.json";
import bundleMewarnai from "@/assets/lottie/bundle_mewarnai.json";

export default function FunpaperHarianList({ onOpenFilter, filters }) {
  const searchParams = useSearchParams();
  const hasParams = searchParams.toString().length > 0;
  const [loading, setLoading] = useState(true);
  const [funpaperData, setFunpaperData] = useState([]);
  const [sort, setSort] = useState("rekomendasi");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const perPage = 18;

  // Fetch ulang saat filter, page, atau sort berubah
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const params = new URLSearchParams(filters);
      params.set("page", String(page));
      params.set("perPage", String(perPage));
      params.set("sort", sort);
      const res = await fetch(`/api/funpaper-harian?${params.toString()}`);
      const json = await res.json();
      setFunpaperData(Array.isArray(json.data) ? json.data : []);
      setTotal(json.total ?? 0);
      setLoading(false);
    }
    fetchData();
  }, [filters, page, sort]);

  // Reset ke halaman 1 saat filter berubah
  useEffect(() => {
    setPage(1);
  }, [filters]);

  const totalPages = Math.ceil(total / perPage);

  return (
    <div className="w-full">
      {/* MENYUKAI */}
      {!hasParams && (
        <div className="menyukai">
          <h3 className="font-bold text-xl mb-4">
            Anda mungkin juga menyukainya
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href={`/funpaper-harian?aktivitas=4`}
              className="p-4 bg-[#FBF6F2] rounded-xl cursor-pointer"
            >
              <div className="rounded-xl overflow-hidden mb-2">
                <Lottie animationData={bundleMewarnai} loop={true} />
              </div>
              <p className="font-medium text-center">Bundle Mewarnai</p>
            </Link>
            <Link
              href={`/funpaper-harian?aktivitas=3`}
              className="p-4 bg-[#FBF6F2] rounded-xl cursor-pointer"
            >
              <div className="rounded-xl overflow-hidden mb-2">
                <Lottie animationData={bundleSoalCampuran} loop={true} />
              </div>
              <p className="font-medium text-center">Bundle Soal Campuran</p>
            </Link>
            <Link
              href={`/funpaper-harian?aktivitas=7`}
              className="p-4 bg-[#FBF6F2] rounded-xl"
            >
              <div className="rounded-xl overflow-hidden mb-2">
                <Lottie animationData={bundleMaze} loop={true} />
              </div>
              <p className="font-medium text-center">Bundle Maze</p>
            </Link>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-4">
        <p className="font-medium hidden lg:block">
          Menampilkan {funpaperData.length} dari {total} Produk
        </p>

        {/* Tombol filter khusus mobile */}
        <button
          className="border border-[#ecdab7] hover:bg-gray-100 text-sm rounded font-medium px-2 py-1 lg:hidden flex flex-row gap-1 items-center mb-4"
          onClick={onOpenFilter}
        >
          <ListFilter size={16} /> Filter
        </button>

        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setPage(1);
          }}
          className="border border-[#ecdab7] text-xs rounded px-2 py-1"
        >
          <option value="rekomendasi">Paling Sesuai</option>
          <option value="populer">Terpopuler</option>
          <option value="baru">Terbaru</option>
          <option value="lama">Terlama</option>
          <option value="az">Nama (A-Z)</option>
          <option value="za">Nama (Z-A)</option>
        </select>
      </div>

      {/* Funpaper List */}
      {loading && <LoadingCard cols={3} />}

      {!loading && funpaperData.length === 0 && (
        <div className="card-header">
          <div className="w-60 lg:w-120">
            <Lottie animationData={produkTidakDitemukan} loop={true} />
          </div>
          <div>
            <p className="font-bold text-lg mb-2">
              Waah, Produknya tidak ditemukan!
            </p>
            <p className="text-sm">Waah, Produknya tidak ditemukan!</p>
          </div>
        </div>
      )}

      {!loading && funpaperData.length > 0 && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {funpaperData.map((funpaper) => (
              <Link
                href={"/funpaper-harian/" + funpaper.slug}
                key={funpaper.id}
                className="hover:shadow hover:cursor-pointer rounded-lg p-3 flex flex-col items-center justify-between"
              >
                <div className="">
                  <Image
                    src={funpaper.image_url}
                    height={180}
                    width={128}
                    alt={funpaper.name}
                    className="mx-auto object-contain mb-6"
                    unoptimized
                  />
                  <p className="text-xs text-center mb-2">
                    {funpaper.name + " - " + funpaper.activity}
                  </p>
                  {funpaper.short_description && (
                    <p className="text-xs text-gray-500 text-center line-clamp-2 mb-1 px-1">
                      {funpaper.short_description}
                    </p>
                  )}
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
          {totalPages > 1 && (
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
          )}
        </>
      )}
    </div>
  );
}
