import Hero from "./Hero";
// import Petualangan from "./petualangan/Petualangan";
// import KatabaAI from "./KatabaAI";
import Rekomendasi from "./Rekomendasi";
import CaraBermain from "./CaraBermain";
import Petualangan from "./Petualangan";
import ProdukTerbaru from "./ProdukTerbaru";
import FunpaperHarian from "./FunpaperHarian";
import EbookCalistung from "@/components/EBookCalistung";
import Freebies from "./Freebies";

export const metadata = {
  title: "Bermain Sambil Belajar untuk TK dan PAUD",
  description:
    "Rekomendasi ide bermain sambil belajar untuk anak TK dan PAUD. Download worksheet Calistung dan Coding gratis! Funpaper Harian, Funpaper Tema, dan Mini Games interaktif.",
  openGraph: {
    title: "Terus Mengajar - Bermain Sambil Belajar untuk TK dan PAUD",
    description:
      "Rekomendasi ide bermain sambil belajar untuk anak TK dan PAUD. Download worksheet Calistung dan Coding gratis!",
    url: "https://terusmengajar.id",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <main id="home" className="-mt-[68px]">
      <Hero />
      {/* <Petualangan /> */}
      {/* <KatabaAI /> */}
      <Rekomendasi />
      <CaraBermain />
      <Petualangan />
      <ProdukTerbaru />
      <FunpaperHarian />
      <EbookCalistung />
      <Freebies />
    </main>
  );
}
