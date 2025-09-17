"use client";

import SidebarMedsos from "@/components/common/SidebarMedsos";
import FunpaperTemaList from "./FunpaperTemaList";
import Filter from "./Filter";
import FilterMobile from "./FilterMobile";
import { useEffect, useState } from "react";

export default function Client() {
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);

  // ✅ state global untuk filter
  const [selectedUsia, setSelectedUsia] = useState([]);

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

  // Data yang sudah "final" (setelah debounce) → dikirim ke FunpaperHarianList
  const [filterValues, setFilterValues] = useState("");

  // 🔑 Debounce: update filterValues setelah 500ms, tidak numpuk klik sebelumnya
  useEffect(() => {
    const handler = setTimeout(() => {
      // bikin query string custom
      const usiaParam = selectedUsia.join(",");

      const query = new URLSearchParams();
      if (usiaParam) query.set("usia", usiaParam);

      setFilterValues(query.toString());
    }, 700);

    // kalau user klik lagi sebelum 500ms → clear timeout
    return () => clearTimeout(handler);
  }, [selectedUsia]);

  return (
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="order-2 lg:order-1 w-full lg:w-auto">
            <Filter
              selectedUsia={selectedUsia}
              toggleCheckboxUsia={toggleCheckboxUsia}
            />
            <SidebarMedsos />
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <FunpaperTemaList
              filters={filterValues} // ✅ selalu dapat filter terbaru setelah debounce
              onOpenFilter={() => setOpenMobileSidebar(true)}
            />
          </div>
        </div>
      </div>

      {/* Sidebar mobile */}
      {openMobileSidebar && (
        <>
          <FilterMobile
            selectedUsia={selectedUsia}
            toggleCheckboxUsia={toggleCheckboxUsia}
            onClose={() => setOpenMobileSidebar(false)}
          />
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setOpenMobileSidebar(false)}
          />
        </>
      )}
    </section>
  );
}
