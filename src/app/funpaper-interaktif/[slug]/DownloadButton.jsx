"use client";

import { useState, useEffect } from "react";
import { File } from "lucide-react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function FunpaperDownload({ id, slug, link, interactive, tipe }) {
  // console.log(link)
  const { data: session, status } = useSession();
  const router = useRouter();

  const [selected, setSelected] = useState("A4");
  const [loadingInteractive, setLoadingInteractive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isNotProd, setIsNotProd] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsNotProd(window.location.hostname !== "terusmengajar.id");
  }, []);

  const handleInteractive = async () => {
    if (status !== "authenticated") {
      toast("Silakan masuk terlebih dahulu untuk bermain");
      router.push(`/auth/login?callbackUrl=/funpaper-calistung/${slug}`);
      return;
    }

    setLoadingInteractive(true);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sso`, {
      cache: "no-store", // biar ga cache kalau datanya dinamis
    });

    // if (res.status == 404) {
    //   redirect("/funpaper-harian");
    // }

    const sso = await res.json();
    // console.log(sso);

    setLoadingInteractive(false);

    window.open(
      process.env.NEXT_PUBLIC_INTERACTIVE_BASE_URL +
        "/" +
        tipe +
        "/" +
        slug +
        "?sso=" +
        sso.sso_token,
      "_blank",
    );
  };

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold mb-4">Gratis</h3>
      <ul className="list-disc pl-5 mb-6 text-gray-700 text-sm space-y-3 font-medium">
        <li>Format PDF</li>
        <li>Siap print</li>
        {/* <li>Tersedia dalam 2 ukuran (A4 & A5)</li> */}
        <li>Hanya untuk penggunaan pribadi</li>
        <li>Tekan tombol mainkan untuk mulai memainkan Funpaper</li>
      </ul>

      <p className="text-gray-700 text-sm mb-4 font-medium">
        Silahkan lihat{" "}
        <a
          href="/syarat-dan-ketentuan"
          target="_blank"
          className="text-pink underline"
        >
          Syarat & Ketentuan
        </a>{" "}
        sebelum klik tombol mainkan
      </p>

      <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row gap-2">
        {interactive === 1 &&
          isMounted &&
          isNotProd && (
            <button
              onClick={handleInteractive}
              className={`tombol-pink py-2! text-center ${
                loadingInteractive
                  ? "opacity-50 cursor-not-allowed disabled"
                  : ""
              }`}
            >
              {loadingInteractive ? "Loading..." : "Mainkan"}
            </button>
          )}
      </div>
    </div>
  );
}
