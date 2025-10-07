"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Search, User, ArrowLeft } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function NavbarRight() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const dropdownRef = useRef(null);
  const searchParams = useSearchParams();

  // === Search mobile states ===
  const [showSearch, setShowSearch] = useState(false);
  const [closing, setClosing] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Ambil q dari URL saat mount / ketika URL berubah
  useEffect(() => {
    const namaParam = searchParams.get("nama") || "";
    setQuery(namaParam);
  }, [searchParams]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenUser(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const openSearch = () => {
  //   setClosing(false);
  //   setShowSearch(true);
  // };

  const startCloseSearch = () => {
    // jangan unmount dulu; biarkan animasi keluar jalan
    setClosing(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setShowSearch(false);
      router.push(`/cari-produk?nama=${encodeURIComponent(query)}`);
    }
  };

  // Dipanggil saat animasi slideUp selesai
  const handleExitAnimationEnd = () => {
    if (closing) {
      setShowSearch(false);
      setClosing(false);
    }
  };

  return (
    <div className="flex items-center gap-2" ref={dropdownRef}>
      {/* Search Box (Desktop) */}
      <div className="hidden sm:flex sm:items-center bg-[#fff8e7] rounded-xl overflow-hidden">
        <form onSubmit={handleSearch} className="flex items-stretch">
          <input
            type="text"
            placeholder="Cari..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
            className="flex-1 w-50 px-3 py-2 bg-transparent focus:outline-none text-sm"
          />
          <button
            type="submit"
            className="bg-[#ef8f00] text-white px-3 py-2"
          >
            <Search size={16} />
          </button>
        </form>
      </div>

      {/* Tombol Search Mobile */}
      <button onClick={() => setShowSearch(true)} className="sm:hidden">
        <Search size={20} />
      </button>

      {/* User Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpenUser((prev) => !prev)}
          className="bg-[#ef8f00] text-white p-2 rounded-xl flex items-center justify-center"
        >
          <User size={18} />
        </button>

        {openUser &&
          (status === "authenticated" ? (
            <div className="absolute flex flex-col right-0 mt-2 w-32 bg-white rounded-lg shadow-lg z-50 overflow-hidden">
              <Link
                href="/profil"
                onClick={() => setOpenUser(false)}
                className="hover:bg-amber-50 px-2 pt-2 pb-1"
              >
                Profil
              </Link>
              <button
                onClick={async () => {
                  await signOut({ redirectTo: "/" });
                  toast.success("Logout berhasil");
                  setOpenUser(false);
                }}
                className="hover:bg-amber-50 text-left px-2 pt-1 pb-2"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="absolute flex flex-col right-0 mt-2 w-32 bg-white rounded-lg shadow-lg z-50 overflow-hidden">
              <Link
                href="/auth/signup"
                onClick={() => setOpenUser(false)}
                className="hover:bg-amber-50 px-2 pt-2 pb-1"
              >
                Daftar
              </Link>
              <Link
                href="/auth/login"
                onClick={() => setOpenUser(false)}
                className="hover:bg-amber-50 px-2 pt-1 pb-2"
              >
                Masuk
              </Link>
            </div>
          ))}
      </div>

      {/* Overlay Search (Mobile) */}
      {(showSearch || closing) && (
        <div className="fixed inset-0 z-50 flex flex-col">
          {/* Overlay hitam */}
          <div
            className={`absolute inset-0 bg-black/50 ${
              closing ? "animate-fadeOut" : "animate-fadeIn"
            }`}
            onClick={() => !closing && startCloseSearch()}
          />

          {/* Box putih */}
          <div
            className={`relative bg-white shadow px-4 pt-4 pb-8 ${
              closing ? "animate-slideUp" : "animate-slideDown"
            }`}
            onClick={(e) => e.stopPropagation()}
            onAnimationEnd={handleExitAnimationEnd}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => !closing && startCloseSearch()}
                  className="p-2 rounded hover:bg-gray-100"
                >
                  <ArrowLeft size={20} />
                </button>
                <span className="font-semibold">Search</span>
              </div>

              <form onSubmit={handleSearch} className="flex flex-1">
                <input
                  type="text"
                  placeholder="Cari..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  required
                  className="flex-1 px-3 py-2 rounded-l-md focus:outline-none bg-[#fff8e7]"
                />
                <button
                  type="submit"
                  className="bg-[#ef8f00] text-white px-3 py-2 rounded-r-md hover:bg-[#ef8f00]/90"
                >
                  <Search size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
