"use client";

import { useEffect, useState, useMemo } from "react";

export default function FunpaperHarianList() {
  const [funpaperData, setFunpaperData] = useState([]);
  const [sort, setSort] = useState("populer");
  const [page, setPage] = useState(1);
  const perPage = 16;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/funpaper-harian");
      const data = await res.json();
      setFunpaperData(data);
      console.log(data);
    }
    fetchData();
  }, []);

  const sortedFunpaper = useMemo(() => {
    let sorted = [...funpaperData];
    switch (sort) {
      case "populer":
        sorted.sort((a, b) => b.id - a.id); // ganti sesuai ada/tidaknya kolom 'played'
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
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <p>
          Menampilkan {funpapers.length} dari {funpaperData.length} Produk
        </p>
        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setPage(1);
          }}
          className="border rounded px-2 py-1"
        >
          <option value="populer">Terpopuler</option>
          <option value="baru">Terbaru</option>
          <option value="lama">Terlama</option>
          <option value="az">Nama (A-Z)</option>
          <option value="za">Nama (Z-A)</option>
        </select>
      </div>

      {/* Funpaper List */}
      {funpapers.length === 0 && (
        <div>
          <p className="text-center italic text-gray-400 mt-12">Loading...</p>
        </div>
      )}

      {funpapers.length > 0 && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {funpapers.map((funpaper) => (
              <div
                key={funpaper.id}
                className="hover:shadow hover:cursor-pointer rounded-lg p-3 flex flex-col items-center justify-between"
              >
                <div>
                  <img
                    src={
                      funpaper.thumbnail_url ||
                      "https://cdn.prod.website-files.com/644f4d0f9964649ed2f9f0a2/64f2e5e2c76668758d64daf9_sCzcERTr_AT6cMLPjiWcmu3Y0xgYTRrRzRBlxmCqG8c.jpeg"
                    }
                    alt={funpaper.name}
                    className="w-40 h-24 object-contain mb-6"
                  />
                  <p className="text-xs text-center mb-2">{funpaper.name}</p>
                  {funpaper.download_count > 0 && (
                    <p className="text-xs text-gray-400 text-center">
                      Diunduh {funpaper.download_count} kali
                    </p>
                  )}
                </div>
                <div>
                  <button className="bg-[#8562a8] text-white text-xs px-4 py-1 mt-3 rounded-lg hover:bg-[#8562a8]/90 w-full">
                    Lihat Produk
                  </button>
                </div>
              </div>
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
