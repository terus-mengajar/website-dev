import Image from "next/image";
import Link from "next/link";

export default function Rekomendasi() {
  return (
    <section className="base-section py-26! bg-[#FCFBF8]">
      <div className="container gap-8 items-center">
        <h2 className="text-ungu text-3xl md:text-4xl font-bold mb-12 text-center">
          Rekomendasi Ide Bermain
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-14 items-center justify-items-center">
          {[
            {
              image: "/images/assets/calistung.png",
              text: "Calistung",
              href: "/info/calistung",
            },
            {
              image: "/images/assets/menggunting.png",
              text: "Menggunting",
              href: "/info/menggunting",
            },
            {
              image: "/images/assets/mewarnai.png",
              text: "Mewarnai",
              href: "/info/mewarnai",
            },
            {
              image: "/images/assets/coding.png",
              text: "Coding",
              href: "/info/coding",
            },
            {
              image: "/images/assets/gunting-tempel.png",
              text: "Gunting Tempel",
              href: "/info/gunting-tempel",
            },
            {
              image: "/images/assets/menebalkan-garis.png",
              text: "Menebalkan Garis",
              href: "/info/menebalkan-garis",
            },
            {
              image: "/images/assets/maze.png",
              text: "Maze",
              href: "/info/maze",
            },
            {
              image: "/images/assets/menghubungkan-titik.png",
              text: "Menghubungkan Titik",
              href: "/info/menghubungkan-titik",
            },
          ].map((item, i) => (
            <Link key={i} href={item.href} className="justify-center items-center hover:scale-105 transition-all duration-300">
              <div className="bg-[#FAF8F2] rounded-lg mb-4 w-20 md:w-32 mx-auto">
                <Image
                  src={item.image}
                  alt="produk terbaru"
                  className="h-auto mx-auto"
                  width={150}
                  height={150}
                  unoptimized
                />
              </div>

              <p className="text-sm md:text-md text-center font-semibold">
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
