"use client";

import { ChevronDown, ListFilter } from "lucide-react";
import { useEffect, useState } from "react";

export default function Filter({ selectedTema, toggleCheckboxTema }) {
  const [filterTema, setFilterTema] = useState([]);
  const [expandedTema, setExpandedTema] = useState(false);
  const [loadingTema, setLoadingTema] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoadingTema(true);
      const res = await fetch("/api/filter/funpaper-coding/tema");
      const data = await res.json();
      setFilterTema(data);
      setLoadingTema(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="mb-8">
        <h2 className="text-lg font-bold pb-2 border-b border-[#59287E]">
          Filter
        </h2>

        {/* FILTER TEMA */}
        <div className="py-2">
          {/* Tombol Expand/Collapse */}
          <button
            onClick={() => setExpandedTema(!expandedTema)}
            className="flex justify-between w-full text-left font-semibold py-2"
          >
            Kategori
            <span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  expandedTema ? "rotate-180" : ""
                }`}
              />
            </span>
          </button>

          {loadingTema && expandedTema && (
            <p className="text-gray-400 my-1">Loading...</p>
          )}

          {!loadingTema && expandedTema && (
            <>
              {filterTema.map((tema, idx) => (
                <div key={tema.value} className="mt-2 space-y-2">
                  <label
                    key={tema.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTema.includes(tema.value)}
                      onChange={() => toggleCheckboxTema(tema.value)}
                      className="custom-checkbox"
                    />
                    <span>{tema.label}</span>
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
