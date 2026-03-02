"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { SwiperNavButton } from "./SwiperNavButton";

export default function Hero() {
  return (
    <section className="bg-[url(/images/bg/bg-hero.jpg)] bg-cover bg-center">
      <div className="h-[600px]">
        <div className="container h-full flex flex-col justify-center text-center items-center lg:items-start lg:text-left ">
          <h1 className="text-3xl md:text-[40px] font-bold mb-4 text-[#356C71] leading-tight text-center max-w-160 mx-auto">
            Dapatkan Rekomendasi Ide Bermain Sambil Belajar untuk TK dan PAUD
          </h1>
        </div>
      </div>
    </section>
  );
}
