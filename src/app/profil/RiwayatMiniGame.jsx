"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RiwayatMiniGame() {
  const [miniGameLogs, setMiniGameLogs] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    const fetchMinigameLogs = async () => {
      setLoading(true);
      const params = new URLSearchParams();
      params.set("page", String(page));
      params.set("perPage", String(perPage));
      const res = await fetch(`/api/mini-game-log?${params.toString()}`);
      if (res.ok) {
        const json = await res.json();
        setMiniGameLogs(Array.isArray(json.data) ? json.data : []);
        setTotal(json.total ?? 0);
      }
      setLoading(false);
    };
    fetchMinigameLogs();
  }, [page]);

  const totalPages = Math.ceil(total / perPage);

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
            {miniGameLogs.map((log) => (
              <li
                className="flex justify-between items-center py-3"
                key={log.id}
              >
                <span className="text-sm text-gray-700 truncate max-w-[70%]">
                  {log.name}
                </span>
                <Link
                  href={"/mini-game/" + log.slug}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#8562a8] text-white hover:bg-[#6e4f91] transition-colors duration-200 shrink-0"
                >
                  Lihat <ArrowRight size={12} />
                </Link>
              </li>
            ))}

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
      </ul>
    </div>
  );
}
