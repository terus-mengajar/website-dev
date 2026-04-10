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
            <img src="/images/assets/printer.webp" className="w-28" alt="" />
            <div className="flex flex-col gap-3 py-4">
              <p className="font-bold">Print Funpaper</p>
              <p>
                Jelajahi berbagai pilihan Funpaper siap cetak yang dirancang
                khusus untuk mengasah kreativitas dan logika. Pilih Funpaper
                favoritmu, cetak, dan hadirkan keceriaan belajar yang tak
                terlupakan di mana saja dan kapan saja.
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
                image: "/images/info/print-funpaper/funpaper-harian.webp",
                text: "Funpaper Harian",
                href: "/funpaper-harian",
              },
              {
                image: "/images/info/print-funpaper/funpaper-tema.webp",
                text: "Funpaper Tema",
                href: "/funpaper-tema",
              },
              {
                image: "/images/info/print-funpaper/funpaper-calistung.webp",
                text: "Funpaper Calistung",
                href: "/funpaper-calistung",
              },
              {
                image: "/images/info/print-funpaper/funpaper-coding.webp",
                text: "Funpaper Coding",
                href: "/funpaper-coding",
              },
            ].map((item, i) => (
              <Link href={item.href} key={i}>
                <div className="bg-[#F4EBFF] rounded-xl p-4 shadow-lg mb-8 shadow-[#D963C326] bg-[url('/images/info/print-funpaper/logo-tm-ungu.webp')] bg-cover bg-center">
                  <Image
                    src={item.image}
                    alt={item.text}
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
                <p className="text-center">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
