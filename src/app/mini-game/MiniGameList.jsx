"use client";

import { useEffect, useState, useMemo } from "react";
import LoadingCard from "@/components/common/LoadingCard";
import Link from "next/link";

// type Game = {
//   id: number;
//   name: string;
//   slug: string;
//   thumbnail_url: string;
//   updated_at: string;
// };

export default function GameList() {
  const [gamesData, setGamesData] = useState([]);
  const [sort, setSort] = useState("populer");
  const [page, setPage] = useState(1);
  const perPage = 12;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/mini-game");
      const data = await res.json();
      setGamesData(data);
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
      {games.length === 0 && <LoadingCard cols={3} />}

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
                  <img
                    src={
                      game.thumbnail_url ||
                      "https://cdn.prod.website-files.com/644f4d0f9964649ed2f9f0a2/6865f624219eac01de947d16_6865e34270b964514b7b7006_3-p-800.png"
                    }
                    alt={game.name}
                    className="w-40 h-24 object-contain mb-6"
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
