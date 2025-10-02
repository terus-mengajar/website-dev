"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { SwiperNavButton } from "./SwiperNavButton";

export default function Hero() {
  return (
    <section className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        // navigation
        // pagination={{ clickable: true }}
        // navigation={{
        //   nextEl: ".hero-next",
        //   prevEl: ".hero-prev",
        // }}
        pagination={{
          el: ".hero-pagination",
          clickable: true,
        }}
        className="w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <section className="relative bg-[url('/images/bg/bg-lembar-kerja.avif')] bg-cover bg-center h-[600px]">
            <Image
              src="/images/funpaper/carousel-1.avif"
              alt="Slide 1"
              height={630}
              width={630}
              className="w-[300px] md:w-[400px] lg:w-[580px] xl:w-[630px] h-auto absolute bottom-[-24%] -right-[120px]"
            />

            <div className="container h-full flex flex-col justify-center text-center items-center lg:items-start lg:text-left">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#ef9e00]">
                400+ Lembar Kerja <br /> Gratis untuk Anak
              </h1>
              <p className="max-w-2xl mb-6 lg:pe-30">
                Temukan berbagai macam jenis kegiatan untuk anak seperti
                mengenal angka, huruf, mewarnai, gunting tempel, dan masih
                banyak yang lainnya
              </p>
              <Link
                href="/funpaper-harian"
                className="tombol-biru text-white px-6 py-3 rounded-xl transition"
              >
                Download
              </Link>
            </div>
          </section>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <section className="relative bg-[url('/images/bg/bg-tele.avif')] bg-cover bg-center h-[600px]">
            <Image
              src="/images/funpaper/carousel-1.avif"
              alt="Slide 1"
              height={630}
              width={630}
              className="w-[300px] md:w-[400px] lg:w-[580px] xl:w-[630px] h-auto absolute bottom-[-24%] -right-[120px]"
            />

            <div className="container h-full flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 lg:pe-70 text-[#713131]">
                Join Telegram Channel
              </h1>
              <p className="max-w-2xl mb-6 lg:pe-40">
                Yuk join kedalam channel Telegram kami untuk mendapatkan info
                funpaper terbaru!
              </p>
              <a
                href="https://t.me/terusmengajarofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="tombol-biru text-white px-6 py-3 rounded-xl transition"
              >
                Telegram Channel
              </a>
            </div>
          </section>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <section className="relative bg-[url('/images/bg/bg-tematik.jpg')] bg-cover bg-center h-[600px]">
            <Image
              src="/images/funpaper/carousel-2.png"
              alt="Slide 1"
              height={630}
              width={630}
              className="w-[300px] md:w-[400px] lg:w-[580px] xl:w-[630px] h-auto absolute bottom-[-24%] -right-[120px]"
            />

            <div className="container h-full flex flex-col items-center justify-center text-center  lg:items-start lg:text-left">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#416cbd]">
                Funpaper Tematik
              </h1>
              <p className="max-w-2xl mb-6 lg:pe-30">
                Kumpulan lembar kerja tersusun dalam berbagai macam tema
                menarik, seperti tema tanaman, kebutuhanku, dll
              </p>
              <Link
                href="/funpaper-tema"
                className="tombol-biru text-white px-6 py-3 rounded-xl transition"
              >
                Download
              </Link>
            </div>
          </section>
        </SwiperSlide>

        <SwiperNavButton />
      </Swiper>
    </section>
  );
}
