"use client";

import SidebarMedsos from "@/components/SidebarMedsos";
import FunpaperList from "./FunpaperList";
import Filter from "@/components/Filter";
import { useEffect, useState } from "react";
import FilterMobile from "@/components/FilterMobile";

export default function Client({ params }) {
  const temaInitial = params.tema;
  const aktivitasInitial = params.aktivitas;

  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);

  // ✅ state global untuk filter
  const [selectedKategori, setSelectedKategori] = useState([]);
  const [selectedUsia, setSelectedUsia] = useState([]);

  const toggleCheckboxKategori = (value) => {
    setSelectedKategori((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const toggleCheckboxUsia = (value) => {
    setSelectedUsia((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setOpenMobileSidebar(false); // tutup otomatis saat resize ke layar besar
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Data yang sudah "final" (setelah debounce) → dikirim ke FunpaperList
  const [filterValues, setFilterValues] = useState("");

  // 🔑 Debounce: update filterValues setelah 500ms, tidak numpuk klik sebelumnya
  useEffect(() => {
    const handler = setTimeout(() => {
      // bikin query string custom
      const kategoriParam = selectedKategori.join(",");
      const usiaParam = selectedUsia.join(",");

      const query = new URLSearchParams();
      if (kategoriParam) query.set("kategori", kategoriParam);
      if (usiaParam) query.set("usia", usiaParam);

      setFilterValues(query.toString());
    }, 700);

    // kalau user klik lagi sebelum 500ms → clear timeout
    return () => clearTimeout(handler);
  }, [selectedUsia, selectedKategori]);

  return (
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="order-2 lg:order-1 w-full lg:w-auto">
            <div className="hidden lg:block">
              {/* <Filter
                temaInitial={temaInitial}
                aktivitasInitial={aktivitasInitial}
                selectedKategori={selectedKategori}
                toggleCheckboxKategori={toggleCheckboxKategori}
                selectedUsia={selectedUsia}
                toggleCheckboxUsia={toggleCheckboxUsia}
              /> */}
            </div>
            <SidebarMedsos />
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <FunpaperList
              filters={filterValues} // ✅ selalu dapat filter terbaru setelah debounce
              onOpenFilter={() => setOpenMobileSidebar(true)}
            />
          </div>
        </div>
      </div>

      {/* Sidebar mobile */}
      {openMobileSidebar && (
        <>
          {/* <FilterMobile
            temaInitial={temaInitial}
            aktivitasInitial={aktivitasInitial}
            selectedKategori={selectedKategori}
            toggleCheckboxKategori={toggleCheckboxKategori}
            selectedUsia={selectedUsia}
            toggleCheckboxUsia={toggleCheckboxUsia}
            onClose={() => setOpenMobileSidebar(false)}
          /> */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setOpenMobileSidebar(false)}
          />
        </>
      )}
    </section>
  );
}
