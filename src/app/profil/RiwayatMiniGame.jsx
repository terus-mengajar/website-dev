"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function RiwayatMiniGame() {
  const [miniGameLogs, setMiniGameLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    const fetchMinigameLogs = async () => {
      setLoading(true);
      const res = await fetch("/api/mini-game-log");
      if (res.ok) {
        const data = await res.json();
        setMiniGameLogs(data);
      }
      setLoading(false);
    };
    fetchMinigameLogs();
  }, []);

  const totalPages = Math.ceil(miniGameLogs.length / perPage);
  const minigames = miniGameLogs.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <h3 className="font-bold mb-2">Riwayat Mini Game</h3>
      <ul className="divide-y divide-gray-200">
        {loading && <li className="py-2 text-gray-500">Loading...</li>}

        {!loading && miniGameLogs.length === 0 && (
          <li className="py-2 text-gray-500">Belum ada riwayat.</li>
        )}

        {!loading && miniGameLogs.length > 0 && (
          <>
            {minigames.map((log) => (
              <li className="flex justify-between py-2" key={log.id}>
                <span>{log.name}</span>
                <Link
                  href={"/mini-game/" + log.slug}
                  className="text-blue-600 hover:underline"
                >
                  Lihat
                </Link>
              </li>
            ))}

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
      </ul>
    </div>
  );
}
