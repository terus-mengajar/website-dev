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

  return (
    <header
      className={
        (!isTransparent ? "bg-white" : "mb-[-68px]") + " z-999 relative"
      }
    >
      <div className="container">
        <div className="mx-auto flex items-center justify-between px-4 py-4">
          {/* Brand */}
          <Link href="/" className="flex items-center me-14">
            <img src="/images/logo/logo-tm-warna.avif" alt="Logo" width="64" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className={
                (pathname === "/" ? "font-bold text-blue-500" : "")
              }
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
                className="flex items-center gap-1 hover:underline"
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
              href="/mini-games" 
              className={
                (pathname === "/mini-games" ? "font-bold text-blue-500" : "")
              }
            >
              Mini Games
            </Link>

            {/* Dropdown Lainnya */}
            <div className="relative">
              <button
                onClick={() =>
                  setDropdownOpen(dropdownOpen === "lainnya" ? null : "lainnya")
                }
                className="flex items-center gap-1 hover:underline"
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

            {/* Search */}
            <NavbarRight />
          </nav>

          {/* Mobile Button */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="lg:hidden bg-white px-4 py-4 space-y-3">
          <Link href="/" className="block hover:underline">
            Home
          </Link>
          <Link href="/funpaper-harian" className="block hover:underline">
            Funpaper Harian
          </Link>
          <Link href="/funpaper-tema" className="block hover:underline">
            Funpaper Tema
          </Link>
          <Link href="/mini-games" className="block hover:underline">
            Mini Games
          </Link>
          <Link href="/galeri-produk" className="block hover:underline">
            Galeri Produk
          </Link>
          <Link href="/tentang-kami" className="block hover:underline">
            Tentang Kami
          </Link>
          <form
            action="/cari-produk"
            method="get"
            className="flex items-center gap-2 mt-3"
          >
            <input
              type="text"
              name="nama"
              placeholder="Cari..."
              className="px-2 py-1 rounded text-black flex-1"
            />
            <button type="submit">
              <Search size={18} />
            </button>
          </form>
          <div className="flex gap-3 mt-3">
            {status === "authenticated" ? (
              <>
                <Link href="/profil" className="hover:underline">
                  Profil
                </Link>
                <a
                  href="#"
                  onClick={() => signOut()}
                  className="hover:underline"
                >
                  Logout
                </a>
              </>
            ) : (
              <>
                <Link href="/auth/signup" className="hover:underline">
                  Daftar
                </Link>
                <Link href="/auth/login" className="hover:underline">
                  Masuk
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
