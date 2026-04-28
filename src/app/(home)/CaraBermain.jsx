import Image from "next/image";
import Link from "next/link";

export default function Rekomendasi() {
  return (
    <section className="base-section py-26!">
      <div className="container gap-8 items-center">
        <h2 className="text-ungu text-3xl md:text-4xl font-bold mb-12 text-center">
          Pilih Cara Bermain Kamu
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-14 items-center justify-items-center">
          {[
            {
              image: "/images/assets/tablet.webp",
              text: "Tablet atau Smartphone",
              href: "info/tablet-smartphone",
            },
            {
              image: "/images/assets/printer.webp",
              text: "Kertas & Printer",
              href: "info/print-funpaper",
            },
            {
              image: "/images/assets/benda-sekitar.webp",
              text: "Benda Sekitar",
              href: "calistung",
            },
          ].map((item, i) => (
            <Link
              href={item.href}
              key={i}
              className="justify-center items-center hover:scale-105 transition-all duration-300"
            >
              <div className="bg-[#FAF8F2] rounded-lg mb-4 w-28 md:w-32 mx-auto p-4">
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
