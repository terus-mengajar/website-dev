"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import LoadingCard from "@/components/common/LoadingCard";
import Link from "next/link";

export default function AsetMediaPembelajaranList() {
  const [assetsData, setAssetsData] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 12;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/aset-media-pembelajaran");
      const data = await res.json();
      setAssetsData(data);
    }
    fetchData();
  }, []);

  const totalPages = Math.ceil(assetsData.length / perPage);
  const assets = assetsData.slice((page - 1) * perPage, page * perPage);

  return (
    <section className="px-12 pt-8 pb-20">
      <div className="container">
        {assets.length === 0 && <LoadingCard cols={3} />}

        {assets.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-center">
            {assets.map((asset, idx) => (
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
                  />
                </div>

                <p className="text-center text-sm">{asset.name}</p>
              </Link>
            ))}
          </div>
        )}
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
    </section>
  );
}
