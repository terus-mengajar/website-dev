"use client";

import Image from "next/image";
import Link from "next/link";
import { MEWARNAI } from "@/lib/constants";

export default function page() {
  return (
    <main className="bg-[#fcfbf8] text-sm mt-[68px] pt-[40px] pb-[80px]">
      <style>{`
            .text-coklat {
                color: #6B3636;
            }
            .text-coklat-muda {
                color: #9C6224;
            }
        `}</style>

      <section className="mb-14">
        <div className="container">
          <div className="card-header">
            <img src="/images/assets/tablet.webp" className="w-28" alt="" />
            <div className="flex flex-col gap-3 py-4">
              <p className="font-bold">Tablet atau Smartphone</p>
              <p>
                Ubah screen time si kecil menjadi petualangan belajar yang seru!
                Dirancang untuk menstimulasi motorik dan kecepatan berpikir
                anak. Tanpa perlu mencetak, si kecil bisa langsung berinteraksi
                dengan elemen di layar yang bergerak dan memberikan respon
                instan
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container md:p-10">
          <div className="grid grid-cols-2 gap-10">
            {[
              {
                image: "/images/info/tablet-smartphone/mini-games.avif",
                text: "Mini Games",
                href: "/mini-game",
              },
              {
                image: "/images/info/tablet-smartphone/funpaper-interaktif.png",
                text: "Funpaper Interaktif",
                href: "/funpaper-interaktif",
              },
            ].map((item, i) => (
              <Link href={item.href} key={i}>
                <div className="bg-[#F4EBFF] rounded-xl p-4 shadow-lg mb-8 shadow-[#D963C326] bg-[url('/images/info/print-funpaper/logo-tm-ungu.webp')] bg-cover bg-center h-54 sm:h-58 flex items-center">
                  <Image
                    src={item.image}
                    alt={item.text}
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
                <p className="text-center text-md sm:text-lg">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
