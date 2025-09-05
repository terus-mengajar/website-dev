// components/PlayButton.tsx
"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function PlayButton({ slug, link }) {
  const { status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlePlay = async () => {
    if (status !== "authenticated") {
      toast("Silakan masuk terlebih dahulu untuk main");
      router.push(`/auth/login?callbackUrl=/mini-game/${slug}`);
      return;
    }

    setLoading(true);

    try {
      // update jumlah played
      await fetch(`/api/minigame/${slug}/played`, {
        method: "POST",
      });
    } catch (err) {
      console.error("Gagal update played:", err);
    }

    setLoading(false);
    // redirect ke link game
    window.open(link, "_blank");
  };

  return (
    <div className="flex flex-col">
      <h3 className="text-3xl font-bold mb-2">Gratis</h3>
      <button
        onClick={handlePlay}
        className={`tombol-pink py-2! text-center ${
          loading ? "opacity-50 cursor-not-allowed disabled" : ""
        }`}
      >
        {loading ? "Loading..." : "Mainkan Sekarang"}
      </button>
    </div>
  );
}
