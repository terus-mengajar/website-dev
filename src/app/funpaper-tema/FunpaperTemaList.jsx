"use client";

import LoadingCard from "@/components/common/LoadingCard";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";

export default function FunpaperTemaList() {
  const [funpaperData, setFunpaperData] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 16;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/funpaper-tema");
      const data = await res.json();
      setFunpaperData(data);
    }
    fetchData();
  }, []);

  const totalPages = Math.ceil(funpaperData.length / perPage);
  const funpapers = funpaperData.slice((page - 1) * perPage, page * perPage);

  // console.log(funpaperData);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <p className="font-medium">
          Menampilkan {funpapers.length} dari {funpaperData.length} Produk
        </p>
      </div>

      {/* Funpaper List */}
      {funpapers.length === 0 && <LoadingCard />}

      {funpapers.length > 0 && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {funpapers.map((funpaper) => (
              <Link
                href={"/funpaper-tema/" + funpaper.slug}
                key={funpaper.id}
                className="hover:shadow hover:cursor-pointer rounded-lg p-3 flex flex-col items-center justify-between"
              >
                <div className="">
                  <img
                    src={funpaper.mockup_thumbnail_url}
                    alt={funpaper.name_on_website}
                    className="w-40 h-24 object-contain mb-6"
                  />
                  <p className="text-xs text-center mb-2">{funpaper.name_on_website}</p>
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
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span>
              {page} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
