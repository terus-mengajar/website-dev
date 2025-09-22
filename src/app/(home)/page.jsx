import Hero from "./Hero";
import Petualangan from "./Petualangan";
import KatabaAI from "./KatabaAI";
import FunpaperHarian from "./FunpaperHarian";
import EbookCalistung from "./EbookCalistung";

export default function Home() {
  return (
    <main id="home" className="-mt-[68px]">
      <Hero />
      <Petualangan />
      <KatabaAI />
      <FunpaperHarian />
      <EbookCalistung />
    </main>
  );
}
