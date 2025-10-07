import Image from "next/image";

export default function EbookCalistung() {
  return (
    <section className="base-section py-24 bg-[url('/images/bg/bg-calistung-1.avif')] bg-cover bg-center">
      <div className="container flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:basis-6/10 text-center lg:text-left order-2 lg:order-1">
          <h2 className="text-[#3763a1] text-4xl md:text-6xl font-bold mb-5">
            E-Book Calistung
          </h2>
          <p className="">
            E-Book gratis untuk bantu Ayah Bunda mempersiapkan fondasi belajar calistung secara bertahap. Berisi aktivitas seru yang bisa dilakukan di rumah setiap hari.
          </p>
          <div className="flex gap-2 pt-5 justify-center lg:justify-start">
              {/* <button className="tombol-biru text-[12px]! md:text-sm!">Download</button> */}
              <a href="https://t.me/terusmengajarofficial" target="_blank" className="tombol-pink bg-[#DB63A7]! text-[12px]! md:text-sm! inline-block">Join Waiting List</a>
            </div>
        </div>

        <div className="lg:basis-4/10 flex justify-center lg:justify-end order-1 lg:order-2">
          <Image
            src="/images/funpaper/ebook/ebook-calistung.avif"
            alt="calistung"
            className="h-auto"
            width={300}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}
