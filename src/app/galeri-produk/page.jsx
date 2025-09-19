"use client";

import Lottie from "lottie-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import LoadingCard from "@/components/common/LoadingCard";

export default function GaleriProduk() {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/galeri-produk");
      const data = await res.json();
      setGalleries(data);
    }
    fetchData();
  }, []);

  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <main className="mt-[68px]">
      <section className="py-8">
        <div className="container">
          <div className="card-header">
            <div className="max-w-[200px]">
              <Lottie
                animationData={require("/public/lottie/kamera_gerak.json")}
                loop={true}
              />
            </div>

            <div className="flex flex-col gap-3 py-4 text-center lg:text-left">
              <p className="font-bold">Galeri Produk</p>
              <p>Foto produk kami!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 pb-20">
        <div className="container">
          {galleries.length === 0 && <LoadingCard cols={3} />}

          {galleries.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-center">
              {galleries.map((gallery, idx) => (
                <div key={idx}>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setPhotoIndex(idx);
                      setOpen(true);
                    }}
                  >
                    <Image
                      width={300}
                      height={300}
                      src={gallery.url}
                      alt="Foto Galeri"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Lightbox */}
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={photoIndex}
            slides={galleries.map((a) => ({ src: a.url }))}
            carousel={{ finite: true }} // biar ga looping
            controller={{ closeOnBackdropClick: true }} // klik overlay bisa close
          />
        </div>
      </section>
    </main>
  );
}
