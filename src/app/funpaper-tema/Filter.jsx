"use client";

import { ChevronDown, ListFilter } from "lucide-react";
import { useEffect, useState } from "react";

export default function SidebarFilter({
  selectedUsia,
  toggleCheckboxUsia,
}) {
  const [filterUsia, setFilterUsia] = useState([]);
  const [expandedUsia, setExpandedUsia] = useState(false);
  const [loadingUsia, setLoadingUsia] = useState(true);

  // AMBIL LIST FILTER KATEGORI
  useEffect(() => {
    async function fetchData() {
      setLoadingUsia(true);
      const res = await fetch("/api/filter/funpaper-tema/usia");
      const data = await res.json();
      setFilterUsia(data);
      setLoadingUsia(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="mb-8">
        <h2 className="text-lg font-bold pb-2 border-b border-[#ecdab7]">
          Filter
        </h2>

        {/* FILTER USIA */}
        <div className="py-2">
          {/* Tombol Expand/Collapse */}
          <button
            onClick={() => setExpandedUsia(!expandedUsia)}
            className="flex justify-between w-full text-left font-semibold py-2"
          >
            Usia Anak
            <span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  expandedUsia ? "rotate-180" : ""
                }`}
              />
            </span>
          </button>

          {loadingUsia && expandedUsia && (
            <p className="text-gray-400 my-1">Loading...</p>
          )}

          {!loadingUsia && expandedUsia && (
            <>
              {filterUsia.map((usia, idx) => (
                <div key={usia.value} className="mt-2 space-y-2">
                  <label
                    key={usia.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedUsia.includes(usia.value)}
                      onChange={() => toggleCheckboxUsia(usia.value)}
                      className="custom-checkbox"
                    />
                    <span>{usia.label}</span>
                  </label>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
