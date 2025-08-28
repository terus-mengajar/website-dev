import Hero from "@/components/home/Hero";
import Petualangan from "@/components/home/Petualangan";
import KatabaAI from "@/components/home/KatabaAI";
import FunpaperHarian from "@/components/home/FunpaperHarian";
import EbookCalistung from "@/components/home/EbookCalistung";

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <Petualangan />
      <KatabaAI />
      <FunpaperHarian />
      <EbookCalistung />
    </main>
  );
}
