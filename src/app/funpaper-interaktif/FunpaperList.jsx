"use client";

import LoadingCard from "@/components/LoadingCard";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CLOUDFLARE_R2_WEBSITE_ASSETS_URL } from "@/lib/cloudflare";
import Image from "next/image";
import { ListFilter, ArrowDownToLine, Play } from "lucide-react";
import Lottie from "lottie-react";
import { useSearchParams } from "next/navigation";
import produkTidakDitemukan from "@/assets/lottie/produk_tidak_ditemukan.json";

export default function FunpaperList({ onOpenFilter, filters }) {
  const searchParams = useSearchParams();
  const hasParams = searchParams.toString().length > 0;
  const [loading, setLoading] = useState(true);
  const [funpaperData, setFunpaperData] = useState([]);
  const [total, setTotal] = useState(0);
  const [sort, setSort] = useState("baru");
  const [page, setPage] = useState(1);
  const perPage = 18;

  // Reset halaman saat filters atau sort berubah
  useEffect(() => {
    setPage(1);
  }, [filters, sort]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const params = new URLSearchParams(filters);
      params.set("page", String(page));
      params.set("perPage", String(perPage));
      params.set("sort", sort);
      const res = await fetch(`/api/funpaper-interaktif?${params.toString()}`);
      const json = await res.json();
      setFunpaperData(Array.isArray(json.data) ? json.data : []);
      setTotal(json.total ?? 0);
      setLoading(false);
    }
    fetchData();
  }, [filters, page, sort]);

  const totalPages = Math.ceil(total / perPage);

  return (
    <div className="w-full">
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
          }}
          className="border border-[#ecdab7] text-xs rounded px-2 py-1"
        >
          {/* <option value="populer">Terpopuler</option> */}
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
                href={
                  "funpaper-interaktif/" +
                  funpaper.slug +
                  "?tipe=" +
                  funpaper.tipe
                }
                key={funpaper.link_detail}
                className="hover:shadow hover:cursor-pointer rounded-lg p-3 flex flex-col items-center justify-between"
              >
                <div className="">
                  <Image
                    src={funpaper.interactive_image_url ?? funpaper.image_url}
                    height={180}
                    width={128}
                    alt={funpaper.name}
                    className="mx-auto object-contain mb-6"
                    unoptimized
                  />
                  <p className="text-xs text-center mb-2">{funpaper.name}</p>
                  <div className="flex flex-row gap-1 items-center justify-center text-[10px] text-gray-400">
                    {funpaper.downloaded > 0 && (
                      <div
                        className={
                          "px-4 flex flex-col items-center " +
                          (funpaper.downloaded > 0 && funpaper.played > 0
                            ? "border-r-1 border-gray-300"
                            : "")
                        }
                      >
                        <p className="text-center flex flex-row gap-1 mb-1">
                          <ArrowDownToLine size="12" /> {funpaper.downloaded} x
                        </p>
                        <p className="text-center">Diunduh</p>
                      </div>
                    )}

                    {funpaper.played > 0 && (
                      <div className="px-4 flex flex-col items-center ">
                        <p className="text-center flex flex-row gap-1 mb-1">
                          <Play size="12" /> {funpaper.played} x
                        </p>
                        <p className="text-center">Dimainkan</p>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <button className="bg-[#8562a8] text-white text-xs px-4 py-1 mt-3 rounded-lg hover:bg-[#8562a8]/90 w-full">
                    Mainkan
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
