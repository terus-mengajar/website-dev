"use client";

import { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { usePathname } from "next/navigation";

import { useSession, signOut } from "next-auth/react";
import NavbarRight from "./NavbarRight";

export default function Navbar() {
  // const session = await auth();
  const { data: session, status } = useSession();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const pathname = usePathname();

  // daftar halaman yang pakai navbar transparan
  const transparentRoutes = ["/"];
  const isTransparent = transparentRoutes.includes(pathname);

  // toggle dropdown (desktop & mobile sama)
  const toggleDropdown = (name) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  return (
    <header
      className={
        (!isTransparent ? "bg-white" : "mb-[-68px]") + " z-999 relative"
      }
    >
      <div className="container">
        <div className="flex items-center justify-between px-4 lg:px-0 py-4">
          <div className="flex flex-row">
            <div className="flex items-center flex-1 gap-6">
              {/* Mobile Button */}
              <button
                className="lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Brand */}
              <Link href="/" className="flex items-center me-8">
                <img
                  src="/images/logo/logo-tm-warna.avif"
                  alt="Logo"
                  width="64"
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link
                href="/"
                className={pathname === "/" ? "font-bold text-blue-500" : ""}
              >
                Home
              </Link>

              {/* Dropdown Download */}
              <div className="relative">
                <button
                  onClick={() =>
                    setDropdownOpen(
                      dropdownOpen === "download" ? null : "download"
                    )
                  }
                  className="flex items-center gap-1"
                >
                  Download <ChevronDown size={16} />
                </button>
                {dropdownOpen === "download" && (
                  <div className="absolute top-full mt-2 w-40 bg-white text-black rounded shadow">
                    <Link
                      href="/funpaper-harian"
                      className="block px-3 py-2 hover:bg-gray-100"
                    >
                      Funpaper Harian
                    </Link>
                    <Link
                      href="/funpaper-tema"
                      className="block px-3 py-2 hover:bg-gray-100"
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
              >
                Mini Game
              </Link>

              {/* Dropdown Lainnya */}
              <div className="relative">
                <button
                  onClick={() =>
                    setDropdownOpen(
                      dropdownOpen === "lainnya" ? null : "lainnya"
                    )
                  }
                  className="flex items-center gap-1"
                >
                  Lainnya <ChevronDown size={16} />
                </button>
                {dropdownOpen === "lainnya" && (
                  <div className="absolute top-full mt-2 w-40 bg-white text-black rounded shadow">
                    <Link
                      href="/galeri-produk"
                      className="block px-3 py-2 hover:bg-gray-100"
                    >
                      Galeri Produk
                    </Link>
                    <Link
                      href="/tentang-kami"
                      className="block px-3 py-2 hover:bg-gray-100"
                    >
                      Tentang Kami
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Search */}
          <NavbarRight />
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="lg:hidden bg-white px-4 py-4 space-y-3">
          <Link href="/" className="block">
            Home
          </Link>

          {/* Dropdown Download */}
          <div>
            <button
              onClick={() => toggleDropdown("download")}
              className="flex w-full items-center justify-between"
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
                <Link href="/funpaper-harian" className="block">
                  Funpaper Harian
                </Link>
                <Link href="/funpaper-tema" className="block">
                  Funpaper Tema
                </Link>
              </div>
            )}
          </div>

          <Link href="/mini-game" className="block">
            Mini Game
          </Link>

          {/* Dropdown Lainnya */}
          <div>
            <button
              onClick={() => toggleDropdown("lainnya")}
              className="flex w-full items-center justify-between"
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
                <Link href="/galeri-produk" className="block">
                  Galeri Produk
                </Link>
                <Link href="/tentang-kami" className="block">
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
