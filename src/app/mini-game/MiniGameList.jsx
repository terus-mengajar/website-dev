"use client";

import { useEffect, useState, useMemo } from "react";
import LoadingCard from "@/components/common/LoadingCard";
import Link from "next/link";
import { CLOUDFLARE_R2_WEBSITE_ASSETS_URL } from "@/lib/cloudflare";
import Image from "next/image";

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
  const perPage = 12;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch("/api/mini-game");
      const data = await res.json();
      setGamesData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const sortedGames = useMemo(() => {
    let sorted = [...gamesData];
    switch (sort) {
      case "populer":
        sorted.sort((a, b) => b.played - a.played); // ganti sesuai ada/tidaknya kolom 'played'
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
  }, [sort, gamesData]);

  const totalPages = Math.ceil(sortedGames.length / perPage);
  const games = sortedGames.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="w-full">
      {/* Game List */}
      {loading && <LoadingCard cols={3} />}

      {!loading && games.length === 0 && (
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
            <p className="text-sm">
              Waah, Gamenya tidak ditemukan!
            </p>
          </div>
        </div>
      )}

      {games.length > 0 && (
        <>
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <p className="font-semibold">
              Menampilkan {games.length} dari {gamesData.length} Produk
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
            {games.map((game) => (
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
        </>
      )}
    </div>
  );
}
