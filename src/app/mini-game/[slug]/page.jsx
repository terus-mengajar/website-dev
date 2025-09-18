// app/mini-games/[slug]/page.tsx
import Image from "next/image";
import PlayButton from "./PlayButton";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/mini-game/${slug}`,
    {
      cache: "no-store", // biar ga cache kalau datanya dinamis
    }
  );

  const game = await res.json();

  return {
    title: game.name,
    // description: game.description || "Mainkan mini game seru di sini!",
  };
}

// export const metadata = {
//   title: "Detail Mini Game",
// };

export default async function MiniGamePage({ params }) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/mini-game/${slug}`,
    {
      cache: "no-store", // biar ga cache kalau datanya dinamis
    }
  );

  if (res.status == 404) {
    redirect("/mini-game");
  }

  const game = await res.json();

  return (
    <div className="w-full mt-[68px]">
      {/* Section 1 */}
      <section className="py-12 bg-[#fcfbf8]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            {/* Card Game Preview */}
            <div className="w-full max-w-lg">
              {game.image_url && (
                <Image
                  src={game.image_url}
                  width={800}
                  height={500}
                  alt="Gambar Mini Game"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-14 items-start">
            {/* Sidebar Gratis untuk HP */}
            {/* <div className="flex md:hidden flex-col">
              <h3 className="text-3xl font-bold mb-2">Gratis</h3>
              <button className="tombol-pink py-2!">
                Mainkan Sekarang
              </button>
            </div> */}

            {/* Info Game */}
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-4xl text-center md:text-left font-bold text-[#ef9e00] mb-12">
                {game.name}
              </h2>
              <div className="flex mb-10">
                <div className="flex-1 text-center border-x border-[#cbaf78] px-18">
                  <p className="text-[#f77] text-4xl lg:text-5xl font-bold">
                    {game.age}
                  </p>
                  <p className="text-gray-600 text-xs lg:text-sm">Tahun</p>
                </div>
                <div className="flex-1 text-center border-r border-[#cbaf78] px-18">
                  <p className="text-[#6296b2] text-4xl lg:text-5xl font-bold">
                    {game.slides}
                  </p>
                  <p className="text-gray-600 text-xs lg:text-sm">
                    Slide Permainan
                  </p>
                </div>
              </div>
              <div className="text-gray-700">
                {game.description.split("\n").map((line, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-3">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar Gratis untuk desktop */}
            <PlayButton id={game.id} slug={slug} link={game.link} />
          </div>
        </div>
      </section>
    </div>
  );
}
