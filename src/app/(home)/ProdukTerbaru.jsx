import Image from "next/image";
import Link from "next/link";

export default function ProdukTerbaru() {
  return (
    <section className="base-section py-26! bg-[#FCFBF8]">
      <div className="container gap-8 items-center">
        <h2 className="text-ungu text-3xl md:text-4xl font-bold mb-8 text-center">
          Produk Terbaru
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start justify-center">
          {[
            {
              image: "/images/home/terbaru/funpaper-interaktif.webp",
              text: "Funpaper Interaktif",
              link: "/funpaper-interaktif",
            },
            {
              image: "/images/home/terbaru/funpaper-coding.webp",
              text: "Funpaper Coding",
              link: "/funpaper-coding",
            },
            {
              image: "/images/home/terbaru/calistung.webp",
              text: "Bermain Sambil Belajar Calistung",
              link: "/calistung",
            },
          ].map((item, i) => (
            <Link
              href={item.link}
              key={i}
              className="justify-center w-80 md:w-50 hover:scale-105 transition-all duration-300"
            >
              <div className="bg-[#FAF8F2] rounded-lg mb-4 max-w-45 h-45 mx-auto flex items-center">
                <Image
                  src={item.image}
                  alt="produk terbaru"
                  className="h-auto mx-auto"
                  width={150}
                  height={150}
                  unoptimized
                />
              </div>

              <p className="text-center font-semibold">{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
