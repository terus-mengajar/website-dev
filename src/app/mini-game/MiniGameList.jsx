"use client";

import { useEffect, useState } from "react";
import LoadingCard from "@/components/LoadingCard";
import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-react";
import produkTidakDitemukan from "@/assets/lottie/produk_tidak_ditemukan.json";

// type Game = {
//   id: number;
//   name: string;
//   slug: string;
//   thumbnail_url: string;
//   updated_at: string;
// };

export default function GameList() {
  const [loading, setLoading] = useState(true);
  const [gamesData, setGamesData] = useState([]);
  const [sort, setSort] = useState("populer");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const perPage = 12;

  // Fetch ulang saat page atau sort berubah
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const params = new URLSearchParams();
      params.set("page", String(page));
      params.set("perPage", String(perPage));
      params.set("sort", sort);
      const res = await fetch(`/api/mini-game?${params.toString()}`);
      const json = await res.json();
      setGamesData(Array.isArray(json.data) ? json.data : []);
      setTotal(json.total ?? 0);
      setLoading(false);
    }
    fetchData();
  }, [page, sort]);

  const totalPages = Math.ceil(total / perPage);

  return (
    <div className="w-full">
      {/* Game List */}
      {loading && <LoadingCard cols={3} />}

      {!loading && gamesData.length === 0 && (
        <div className="card-header">
          <div className="w-60 lg:w-120">
            <Lottie animationData={produkTidakDitemukan} loop={true} />
          </div>
          <div>
            <p className="font-bold text-lg mb-2">
              Waah, Produknya tidak ditemukan!
            </p>
            <p className="text-sm">Waah, Gamenya tidak ditemukan!</p>
          </div>
        </div>
      )}

      {gamesData.length > 0 && (
        <>
          {/* Header */}
          <div className="flex justify-end lg:justify-between items-center mb-4">
            <p className="font-semibold hidden lg:block">
              Menampilkan {gamesData.length} dari {total} Produk
            </p>
            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                setPage(1);
              }}
              className="border border-[#ecdab7] rounded px-2 py-1 text-xs"
            >
              <option value="populer">Terpopuler</option>
              <option value="baru">Terbaru</option>
              <option value="lama">Terlama</option>
              <option value="az">Nama (A-Z)</option>
              <option value="za">Nama (Z-A)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {gamesData.map((game) => (
              <Link
                href={"/mini-game/" + game.slug}
                key={game.id}
                className="hover:shadow hover:cursor-pointer rounded-lg p-3 flex flex-col items-center justify-between"
              >
                <div>
                  <Image
                    src={game.thumbnail_url}
                    height={145}
                    width={242}
                    alt={game.name}
                    className="object-contain mb-6"
                    unoptimized
                  />
                  <p className="text-xs text-center mb-2">{game.name}</p>
                  {game.played > 0 && (
                    <p className="text-xs text-gray-400 text-center">
                      Dimainkan {game.played} kali
                    </p>
                  )}
                </div>

                <button className="bg-[#8562a8] text-white text-xs px-4 py-1 mt-3 rounded-lg hover:bg-[#8562a8]/90 w-full">
                  Lihat Produk
                </button>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
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
