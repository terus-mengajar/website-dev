"use client";

import { redirect } from "next/navigation";
import { CircleCheckBig } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Loading() {
  const { data: session, status } = useSession();
//   if (session) redirect("/");

  useEffect(() => {
    if (status === "loading") return; // masih cek session
    if (status === "authenticated") {
      // kasih delay biar user lihat card sebentar
      setTimeout(() => {
        redirect("/");
      }, 2000);
    }
  }, [status]);

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center bg-[#fff3d5]">
      <div className="text-center mb-6">
        <img
          src="/images/logo/logo-tm-warna.avif"
          alt="Logo"
          className="mx-auto w-20"
        />
      </div>

      <div className="relative z-9 w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <div className="flex justify-center mb-4">
          <CircleCheckBig className="text-green-500" size={48} />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-center">
          Login berhasil
        </h3>

        <p className="mb-8 text-center">
          Anda akan segera diredirect ke home...
        </p>
      </div>

      <img
        className="absolute left-[-400px] top-[-220px] rotate-30 w-160"
        src="/images/shapes/logo-tm-cream.avif"
        alt=""
      />
    </div>
  );
}
