import { useSwiper } from "swiper/react";

export const SwiperNavButton = () => {
    const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns lg:w-full absolute bottom-10 z-100 left-1/2 lg:left-0 -translate-x-1/2 lg:-translate-x-0">
      <div className="container flex flex-row gap-5">
        <button
          className="rounded-full bg-white/80 hover:bg-white/70 p-1 w-8 h-8 text-[#DEAE53] font-medium shadow-xl"
          onClick={() => swiper.slidePrev()}
        >
          &lt;
        </button>
        <div className="hero-pagination flex flex-row gap-2 items-center w-auto!"></div>
        <button
          className="rounded-full bg-white/80 hover:bg-white/70 p-1 w-8 h-8 text-[#DEAE53] font-medium shadow-xl"
          onClick={() => swiper.slideNext()}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
