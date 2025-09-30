"use client";

import { Suspense } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

import NavbarRight from "./NavbarRight";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const pathname = usePathname();
  const navRef = useRef(null);

  // daftar halaman yang pakai navbar transparan
  const transparentRoutes = [
    "/", 
    "/info/funpaper-harian", 
    "/info/funpaper-tema", 
    "/info/funpaper-harian-bundle", 
    "/info/funsticker", 
    "/info/mini-games", 
    "/info/funpaper-activity"
  ];
  const isTransparent = transparentRoutes.includes(pathname);

  const toggleDropdown = (name) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  // Tutup menu/dropdown jika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdownOpen(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={
        (!isTransparent ? "bg-white fixed top-0 right-0 left-0" : "relative") +
        " z-[1000] font-medium text-sm lg:text-xs xl:text-sm leading-6"
      }
      ref={navRef}
    >
      <div className="container">
        <div className="flex items-center justify-between gap-4 py-4">

          <div className="flex flex-row">
            <div className="flex items-center gap-6">
              {/* Mobile Button */}
              <button
                className="lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Brand */}
              <Link
                href="/"
                className="flex items-center me-6"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdownOpen(null);
                }}
              >
                <Image
                  src="/images/logo/logo-tm-warna.avif"
                  alt="Logo"
                  width={50}
                  height={28}
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link
                href="/"
                className={pathname === "/" ? "font-bold text-blue-500" : ""}
                onClick={() => setDropdownOpen(null)}
              >
                Home
              </Link>

              {/* Dropdown Download */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("download")}
                  className={
                    "flex items-center gap-1 " +
                    (pathname === "/funpaper-harian" ||
                    pathname === "/funpaper-tema"
                      ? "font-bold text-blue-500"
                      : "")
                  }
                >
                  Download <ChevronDown size={16} />
                </button>
                {dropdownOpen === "download" && (
                  <div className="absolute top-9 mt-2 w-40 bg-white text-black rounded shadow-lg z-50 overflow-hidden">
                    <Link
                      href="/funpaper-harian"
                      className={
                        "block px-3 py-2 hover:bg-gray-100 " +
                        (pathname === "/funpaper-harian"
                          ? "font-bold text-blue-500"
                          : "")
                      }
                      onClick={() => setDropdownOpen(null)}
                    >
                      Funpaper Harian
                    </Link>
                    <Link
                      href="/funpaper-tema"
                      className={
                        "block px-3 py-2 hover:bg-gray-100 " +
                        (pathname === "/funpaper-tema"
                          ? "font-bold text-blue-500"
                          : "")
                      }
                      onClick={() => setDropdownOpen(null)}
                    >
                      Funpaper Tema
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/mini-game"
                className={
                  pathname === "/mini-game" ? "font-bold text-blue-500" : ""
                }
                onClick={() => setDropdownOpen(null)}
              >
                Mini Game{" "}
                <span className="text-[11px] text-[#694092] bg-[#FFEFFE] px-2 py-1 rounded-md">
                  New
                </span>
              </Link>

              {/* <Link
                href="/kataba-ai"
                className={
                  pathname === "/kataba-ai" ? "font-bold text-blue-500" : ""
                }
                onClick={() => setDropdownOpen(null)}
              >
                Kataba AI{" "}
                <span className="text-[11px] text-[#694092] bg-[#FFEFFE] px-2 py-1 rounded-md">
                  New
                </span>
              </Link> */}

              {/* Dropdown Lainnya */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("lainnya")}
                  className={
                    "flex items-center gap-1 " +
                    (pathname === "/galeri-produk" ||
                    pathname === "/tentang-kami"
                      ? "font-bold text-blue-500"
                      : "")
                  }
                >
                  Lainnya <ChevronDown size={16} />
                </button>
                {dropdownOpen === "lainnya" && (
                  <div className="absolute top-9 mt-2 w-40 bg-white text-black rounded shadow-lg z-50 overflow-hidden">
                    <Link
                      href="/galeri-produk"
                      className={
                        "block px-3 py-2 hover:bg-gray-100 " +
                        (pathname === "/galeri-produk"
                          ? "font-bold text-blue-500"
                          : "")
                      }
                      onClick={() => setDropdownOpen(null)}
                    >
                      Galeri Produk
                    </Link>
                    <Link
                      href="/tentang-kami"
                      className={
                        "block px-3 py-2 hover:bg-gray-100 " +
                        (pathname === "/tentang-kami"
                          ? "font-bold text-blue-500"
                          : "")
                      }
                      onClick={() => setDropdownOpen(null)}
                    >
                      Tentang Kami
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Search */}
          <Suspense fallback={null}>
            <NavbarRight />
          </Suspense>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className={ (!isTransparent ? "fixed " : "absolute ") + "left-0 right-0 top-[68px] lg:hidden bg-white px-4 py-4 space-y-3 z-[999] overflow-y-auto"}>
          <Link
            href="/"
            className="block py-2 border-b border-[#cbaf78]"
            onClick={() => {
              setMenuOpen(false);
              setDropdownOpen(null);
            }}
          >
            Home
          </Link>

          {/* Dropdown Download */}
          <div>
            <button
              onClick={() => toggleDropdown("download")}
              className={
                "flex w-full items-center justify-between py-2 border-b border-[#cbaf78] " +
                (pathname === "/funpaper-harian" ||
                pathname === "/funpaper-tema"
                  ? " font-bold text-blue-500 "
                  : "")
              }
            >
              <span>Download</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  dropdownOpen === "download" ? "rotate-180" : ""
                }`}
              />
            </button>
            {dropdownOpen === "download" && (
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  href="/funpaper-harian"
                  className={
                    "block py-2 border-b border-[#cbaf78] " +
                    (pathname === "/funpaper-harian"
                      ? " font-bold text-blue-500 "
                      : "")
                  }
                  onClick={() => {
                    setMenuOpen(false);
                    setDropdownOpen(null);
                  }}
                >
                  Funpaper Harian
                </Link>
                <Link
                  href="/funpaper-tema"
                  className={
                    "block py-2 border-b border-[#cbaf78] " +
                    (pathname === "/funpaper-tema"
                      ? " font-bold text-blue-500 "
                      : "")
                  }
                  onClick={() => {
                    setMenuOpen(false);
                    setDropdownOpen(null);
                  }}
                >
                  Funpaper Tema
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/mini-game"
            className="block py-2 border-b border-[#cbaf78]"
            onClick={() => {
              setMenuOpen(false);
              setDropdownOpen(null);
            }}
          >
            Mini Game{" "}
            <span className="text-[11px] text-[#694092] bg-[#FFEFFE] px-2 py-1 rounded-md">
              New
            </span>
          </Link>

          {/* <Link
            href="/kataba-ai"
            className="block py-2 border-b border-[#cbaf78]"
            onClick={() => {
              setMenuOpen(false);
              setDropdownOpen(null);
            }}
          >
            Kataba AI{" "}
            <span className="text-[11px] text-[#694092] bg-[#FFEFFE] px-2 py-1 rounded-md">
              New
            </span>
          </Link> */}

          {/* Dropdown Lainnya */}
          <div>
            <button
              onClick={() => toggleDropdown("lainnya")}
              className={
                (pathname === "/galeri-produk" || pathname === "/tentang-kami"
                  ? " font-bold text-blue-500 "
                  : "") +
                (dropdownOpen === "lainnya"
                  ? " border-b border-[#cbaf78] "
                  : "") +
                " flex w-full items-center justify-between py-2 "
              }
            >
              <span>Lainnya</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  dropdownOpen === "lainnya" ? "rotate-180" : ""
                }`}
              />
            </button>
            {dropdownOpen === "lainnya" && (
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  href="/galeri-produk"
                  className={
                    "block py-2 border-b border-[#cbaf78] " +
                    (pathname === "/galeri-produk"
                      ? "font-bold text-blue-500"
                      : "")
                  }
                  onClick={() => {
                    setMenuOpen(false);
                    setDropdownOpen(null);
                  }}
                >
                  Galeri Produk
                </Link>
                <Link
                  href="/tentang-kami"
                  className={
                    "block py-2 " +
                    (pathname === "/tentang-kami"
                      ? "font-bold text-blue-500"
                      : "")
                  }
                  onClick={() => {
                    setMenuOpen(false);
                    setDropdownOpen(null);
                  }}
                >
                  Tentang Kami
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
