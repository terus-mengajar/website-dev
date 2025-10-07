"use client";

import LoadingCard from "@/components/LoadingCard";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { CLOUDFLARE_R2_WEBSITE_ASSETS_URL } from "@/lib/cloudflare";
import Image from "next/image";
import { ListFilter } from "lucide-react";
import Lottie from "lottie-react";
import { useSearchParams } from "next/navigation";

export default function FunpaperList({ onOpenFilter, filters }) {
  const searchParams = useSearchParams();
  const hasParams = searchParams.toString().length > 0;
  const [loading, setLoading] = useState(true);
  const [funpaperData, setFunpaperData] = useState([]);
  const [sort, setSort] = useState("populer");
  const [page, setPage] = useState(1);
  const perPage = 18;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch(`/api/funpaper-calistung`);
      const data = await res.json();
      setFunpaperData(data);
      setLoading(false);
    }
    fetchData();
  }, [filters]);

  const sortedFunpaper = useMemo(() => {
    let sorted = [...funpaperData];
    switch (sort) {
      case "populer":
        sorted.sort((a, b) => b.downloaded - a.downloaded); // ganti sesuai ada/tidaknya kolom 'played'
        break;
      case "baru":
        sorted.sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
        break;
      case "lama":
        sorted.sort(
          (a, b) =>
            new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime()
        );
        break;
      case "az":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
    return sorted;
  }, [sort, funpaperData]);

  const totalPages = Math.ceil(sortedFunpaper.length / perPage);
  const funpapers = sortedFunpaper.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <p className="font-medium hidden lg:block">
          Menampilkan {funpapers.length} dari {funpaperData.length} Produk
        </p>

        {/* Tombol filter khusus mobile */}
        {/* <button
          className="border border-[#ecdab7] hover:bg-gray-100 text-sm rounded font-medium px-2 py-1 lg:hidden flex flex-row gap-1 items-center mb-4"
          onClick={onOpenFilter}
        >
          <ListFilter size={16} /> Filter
        </button> */}

        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setPage(1);
          }}
          className="border border-[#ecdab7] text-xs rounded px-2 py-1"
        >
          <option value="populer">Terpopuler</option>
          <option value="baru">Terbaru</option>
          <option value="lama">Terlama</option>
          <option value="az">Nama (A-Z)</option>
          <option value="za">Nama (Z-A)</option>
        </select>
      </div>

      {/* Funpaper List */}
      {loading && <LoadingCard cols={3} />}

      {!loading && funpapers.length === 0 && (
        <div className="card-header">
          <div className="w-60 lg:w-120">
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
                href={"/funpaper-calistung/" + funpaper.slug}
                key={funpaper.id}
                className="hover:shadow hover:cursor-pointer rounded-lg p-3 flex flex-col items-center justify-between"
              >
                <div className="">
                  <Image
                    src={
                      CLOUDFLARE_R2_WEBSITE_ASSETS_URL +
                      "/funpaper-calistung/" +
                      funpaper.slug +
                      ".jpg"
                    }
                    height={180}
                    width={128}
                    alt={funpaper.name}
                    className="mx-auto object-contain mb-6"
                  />
                  <p className="text-xs text-center mb-2">
                    {funpaper.name + " - " + funpaper.theme}
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
