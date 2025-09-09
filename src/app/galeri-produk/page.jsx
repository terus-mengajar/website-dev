"use client";

import Lottie from "lottie-react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GaleriProduk() {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const galeries = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    thumbnail_url:
      "https://cdn.prod.website-files.com/644f4d0f9964649ed2f9f0a2/65cf2e9fa10234ecb7a281a7_3%20thumb.jpg",
    image_url:
      "https://cdn.prod.website-files.com/644f4d0f9964649ed2f9f0a2/65cf2e9a465d82f8f3c2e2e8_3%20resze.jpg",
  }));


  return (
    <main className="mt-[68px]">
      <section className="py-8 px-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-16 px-12 py-4 bg-[#fbf6f2] bg-[url(/images/shapes/logo-tm-cream-cropped-30.avif)] bg-cover lg:bg-contain bg-no-repeat bg-right rounded-lg items-center">
            <div className="max-w-[200px]">
              <Lottie
                animationData={require("/public/lottie/kamera_gerak.json")}
                loop={true}
              />
            </div>

            <div className="flex flex-col gap-3 py-4">
              <p className="font-bold">Galeri Produk</p>
              <p>Foto produk kami!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 pt-8 pb-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-center">
            {galeries.map((galery, idx) => (
              <div key={idx}>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setPhotoIndex(idx);
                    setOpen(true);
                  }}
                >
                  <img
                    src={galery.thumbnail_url}
                    className=""
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={photoIndex}
            slides={galeries.map((a) => ({ src: a.image_url }))}
            carousel={{ finite: true }} // biar ga looping
            controller={{ closeOnBackdropClick: true }} // klik overlay bisa close
          />
        </div>
      </section>
    </main>
  );
}
