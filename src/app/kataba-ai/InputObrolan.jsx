"use client";

// import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";

export default function InputGenerate() {
  // const router = useRouter();

  // const handleGenerate = () => {
  //   router.push("/kataba-ai/chat");
  // };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Input */}
      <input
        type="text"
        placeholder="Deskripsikan Ide Anda Disini"
        className="w-full px-4 py-5 pr-40 rounded-2xl outline-none text-gray-700 placeholder-gray-400 border border-fuchsia-400 shadow-[0_0_15px_0_#FC9FE852]"
      />

      {/* Tombol di dalam input */}
      <a
        href="https://kataba-ai-frontend-dev.vercel.app/" target="_blank"
        className="flex flex-row gap-2 items-center mt-2 sm:mt-0 w-full sm:w-auto sm:absolute sm:right-2 sm:top-1/2 sm:-translate-y-1/2 px-6 py-2 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-600 transition shadow"
        // onClick={handleGenerate}
      >
        <Sparkles size={16} /> Mulai Obrolan
      </a>
    </div>
  );
}
