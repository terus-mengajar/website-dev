"use client";

import { ChevronDown, ListFilter } from "lucide-react";
import { useEffect, useState } from "react";

export default function Filter({
  temaInitial,
  aktivitasInitial,
  selectedKategori,
  toggleCheckboxKategori,
  selectedUsia,
  toggleCheckboxUsia,
}) {
  const [filterUsia, setFilterUsia] = useState([]);
  const [filterKategori, setFilterKategori] = useState([]);
  const [expandedKategori, setExpandedKategori] = useState(false);
  const [expandedUsia, setExpandedUsia] = useState(false);
  // const [selectedKategori, setSelectedKategori] = useState([]);
  // const [selectedUsia, setSelectedUsia] = useState([]);
  const [loadingKategori, setLoadingKategori] = useState(true);
  const [loadingUsia, setLoadingUsia] = useState(true);
  // const [openMobileSidebar, setOpenMobileSidebar] = useState(false);
  // console.log('temaI '+temaInitial)
  // console.log('aktivI '+aktivitasInitial)

  // AMBIL LIST FILTER KATEGORI
  useEffect(() => {
    async function fetchData() {
      setLoadingKategori(true);
      const res = await fetch("/api/filter/funpaper-harian/kategori");
      const data = await res.json();
      setFilterKategori(data);
      // console.log(data);
      setLoadingKategori(false);
    }
    fetchData();
  }, [temaInitial, aktivitasInitial]);

  useEffect(() => {
    if (filterKategori.length > 0) {
      // 🔑 Auto-select dari URL param (tema / aktivitas)
      let defaults = [];
      if (temaInitial) {
        defaults = [
          ...defaults,
          ...filterKategori
            .filter((k) => k.value == temaInitial)
            .flatMap((k) => k.activities.map((a) => `${k.value}_${a.value}`)),
        ];
      }

      if (aktivitasInitial) {
        defaults = [
          ...defaults,
          ...filterKategori.flatMap((k) =>
            k.activities
              .filter((a) => a.value == aktivitasInitial)
              .map((a) => `${k.value}_${a.value}`)
          ),
        ];
      }

      // kirim ke parent lewat toggleCheckboxKategori
      defaults.forEach((val) => {
        if (!selectedKategori.includes(val)) {
          toggleCheckboxKategori(val);
        }
      });
    }
  }, [filterKategori]);

  // AMBIL LIST FILTER KATEGORI
  useEffect(() => {
    async function fetchData() {
      setLoadingUsia(true);
      const res = await fetch("/api/filter/funpaper-harian/usia");
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

        {/* FILTER KATEGORI */}
        <div className="py-2 border-b border-[#ecdab7]">
          {/* Tombol Expand/Collapse */}
          <button
            onClick={() => setExpandedKategori(!expandedKategori)}
            className="flex justify-between w-full text-left font-semibold py-2"
          >
            Kategori
            <span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  expandedKategori ? "rotate-180" : ""
                }`}
              />
            </span>
          </button>

          {loadingKategori && expandedKategori && (
            <p className="text-gray-400 my-1">Loading...</p>
          )}

          {!loadingKategori && expandedKategori && (
            
            <div className="space-y-2 py-2 pl-4">
              
              {filterKategori.map((kategori, idx) => (
                <div key={kategori.value + "_" + kategori.value}>
                  <p className="font-bold">{kategori.label}</p>

                  {kategori.activities.map((activity, idx) => (
                    <div
                      key={kategori.value + "_" + activity.value}
                      className="mt-2 space-y-2"
                    >
                      <label
                        key={kategori.value + "_" + activity.value}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedKategori.includes(
                            kategori.value + "_" + activity.value
                          )}
                          onChange={() =>
                            toggleCheckboxKategori(
                              kategori.value + "_" + activity.value
                            )
                          }
                          className="custom-checkbox"
                          value={kategori.value + "_" + activity.value}
                        />
                        <span>{activity.label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

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
