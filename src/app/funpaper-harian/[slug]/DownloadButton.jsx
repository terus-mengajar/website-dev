"use client";

import { useState } from "react";
import { File } from "lucide-react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function FunpaperDownload({ id, slug, linkA4, linkA5 }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [selected, setSelected] = useState("A4");
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (status !== "authenticated") {
      toast("Silakan masuk terlebih dahulu untuk download");
      router.push(`/auth/login?callbackUrl=/funpaper-harian/${slug}`);
      return;
    }

    setLoading(true);

    try {
      // update jumlah_downloaded
      await fetch(`/api/funpaper-harian/${slug}/download`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: session.user.email, // isi dari state/props/context
          funpaper_id: id, // isi dari props atau data
        }),
      });
    } catch (err) {
      console.error("Gagal update downloaded:", err);
    }

    // tentukan link berdasarkan pilihan
    const url = selected === "A4" ? linkA4 : linkA5;
    setLoading(false);
    window.open(url, "_blank");
  };

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold mb-4">Gratis</h3>
      <ul className="list-disc pl-5 mb-6 text-gray-700 text-sm space-y-3 font-medium">
        <li>Format PDF</li>
        <li>Siap print</li>
        <li>Tersedia dalam 2 ukuran (A4 & A5)</li>
        <li>Hanya untuk penggunaan pribadi</li>
        <li>Tekan tombol download untuk mulai mengunduh Funpaper</li>
      </ul>

      <p className="text-gray-700 text-sm mb-4 font-medium">Silahkan lihat <a href="/syarat-dan-ketentuan" target="_blank" className="text-pink underline">Syarat & Ketentuan</a> sebelum klik tombol download</p>

      <div className="flex gap-3 mb-4">
        <button
          type="button"
          onClick={() => setSelected("A4")}
          className={`px-2 py-1 rounded-lg border flex items-center text-xs gap-2 ${
            selected === "A4"
              ? "text-red-600 border-red-500"
              : "bg-white text-gray-600 border-gray-300"
          }`}
        >
          <File /> Funpaper A4
        </button>

        <button
          type="button"
          onClick={() => setSelected("A5")}
          className={`px-2 py-1 rounded-lg border flex items-center text-xs gap-2 ${
            selected === "A5"
              ? "text-red-600 border-red-500"
              : "bg-white text-gray-600 border-gray-300"
          }`}
        >
          <File /> Funpaper A5
        </button>
      </div>

      <button
        onClick={handleDownload}
        className={`tombol-pink py-2! text-center ${
          loading ? "opacity-50 cursor-not-allowed disabled" : ""
        }`}
      >
        {loading ? "Loading..." : "Download"}
      </button>
    </div>
  );
}
