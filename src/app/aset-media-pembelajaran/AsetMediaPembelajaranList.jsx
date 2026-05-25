"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import LoadingCard from "@/components/LoadingCard";
import Link from "next/link";

export default function AsetMediaPembelajaranList() {
  const [assetsData, setAssetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const perPage = 12;

  // Fetch ulang saat page berubah
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const params = new URLSearchParams();
      params.set("page", String(page));
      params.set("perPage", String(perPage));
      const res = await fetch(
        `/api/aset-media-pembelajaran?${params.toString()}`,
      );
      const json = await res.json();
      setAssetsData(Array.isArray(json.data) ? json.data : []);
      setTotal(json.total ?? 0);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  const totalPages = Math.ceil(total / perPage);

  return (
    <section className="pt-8 pb-20">
      <div className="container">
        {loading && <LoadingCard cols={3} />}

        {!loading && assetsData.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-center">
            {assetsData.map((asset, idx) => (
              <Link
                className="hover:shadow rounded-xl p-2"
                href={"/aset-media-pembelajaran/" + asset.slug}
                key={idx}
              >
                <div className="mb-3">
                  <Image
                    src={asset.cover_url}
                    alt="Cover Aset"
                    width={336}
                    height={188}
                    className="rounded-xl "
                    unoptimized
                  />
                </div>

                <p className="text-center text-sm">{asset.name}</p>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
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
      )}
    </section>
  );
}
