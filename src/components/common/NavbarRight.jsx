"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User } from "lucide-react"; // atau bisa pakai Heroicons
import { useSession, signOut } from "next-auth/react";

export default function NavbarRight() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      {/* Search Box */}
      <div className="flex items-center bg-[#fff8e7] rounded-xl overflow-hidden">
        <input
          type="text"
          placeholder="Cari..."
          className="px-3 py-2 bg-transparent focus:outline-none text-sm"
        />
        <button className="bg-[#ef8f00] text-white px-3 py-[10px]">
          <Search size={16} />
        </button>
      </div>

      {/* User Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="bg-[#ef8f00] text-white p-2 rounded-xl"
        >
          <User size={18} />
        </button>

        {open &&
          (status === "authenticated" ? (
            <div className="absolute flex flex-col right-0 mt-2 w-32 bg-white rounded-lg shadow-lg z-50 overflow-hidden">
              <Link href="/profil" className="hover:bg-amber-50 px-2 pt-2 pb-1 overflow-hidden">
                Profil
              </Link>
              <a href="#" onClick={() => signOut()} className="hover:bg-amber-50 px-2 pt-1 pb-2">
                Logout
              </a>
            </div>
          ) : (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg z-50 overflow-hidden">
              <Link href="/auth/signup" className="hover:bg-amber-50 px-2 py-1">
                Daftar
              </Link>
              <Link href="/auth/login" className="hover:bg-amber-50 px-2 py-1">
                Masuk
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
