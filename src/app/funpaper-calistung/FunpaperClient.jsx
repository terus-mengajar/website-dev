"use client";

import SidebarMedsos from "@/components/SidebarMedsos";
import FunpaperList from "./FunpaperList";
import Filter from "@/components/FilterCalistung";
import { useEffect, useState } from "react";
import FilterMobile from "@/components/FilterMobileCalistung";
import { useSearchParams } from "next/navigation";

export default function Client({ params }) {
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);

  const [selectedTema, setSelectedTema] = useState([]);

  const toggleCheckboxTema = (value) => {
    setSelectedTema((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
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
      const temaParam = selectedTema.join(",");

      const query = new URLSearchParams();
      if (temaParam) query.set("tema", temaParam);

      setFilterValues(query.toString());
    }, 700);

    // kalau user klik lagi sebelum 500ms → clear timeout
    return () => clearTimeout(handler);
  }, [selectedTema]);

  return (
    <section className="pb-[80px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="order-2 lg:order-1 w-full lg:w-auto bg-[#FBF6F2] rounded-xl p-6 h-fit">
            <div className="hidden lg:block">
              <Filter
                selectedTema={selectedTema}
                toggleCheckboxTema={toggleCheckboxTema}
              />
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
          <FilterMobile
            selectedTema={selectedTema}
            toggleCheckboxTema={toggleCheckboxTema}
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
