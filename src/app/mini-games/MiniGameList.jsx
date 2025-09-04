"use client";

import { useEffect, useState, useMemo } from "react";

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
  const perPage = 6;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/minigame");
      const data = await res.json();
      setGamesData(data);
      console.log(data);
    }
    fetchData();
  }, []);

  const sortedGames = useMemo(() => {
    let sorted = [...gamesData];
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
  }, [sort, gamesData]);

  const totalPages = Math.ceil(sortedGames.length / perPage);
  const games = sortedGames.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <p>
          Menampilkan {games.length} dari {gamesData.length} Produk
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

      {/* Game List */}
      {games.length === 0 && (
        <div>
          <p className="text-center italic text-gray-400 mt-12">Loading...</p>
        </div>
      )}

      {games.length > 0 && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {games.map((game) => (
              <div
                key={game.id}
                className="hover:shadow hover:cursor-pointer rounded-lg p-3 flex flex-col items-center"
              >
                <img
                  src={
                    game.thumbnail_url ||
                    "https://cdn.prod.website-files.com/644f4d0f9964649ed2f9f0a2/6865f624219eac01de947d16_6865e34270b964514b7b7006_3-p-800.png"
                  }
                  alt={game.name}
                  className="w-40 h-24 object-contain mb-6"
                />
                <p className="text-xs text-center mb-2">{game.name}</p>
                {game.jumlah_main > 0 && (
                  <p className="text-xs text-gray-400 text-center">
                    Dimainkan {game.jumlah_main} kali
                  </p>
                )}
                <button className="bg-[#8562a8] text-white text-xs px-4 py-1 mt-3 rounded-lg hover:bg-[#8562a8]/90 w-full">
                  Lihat Produk
                </button>
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
