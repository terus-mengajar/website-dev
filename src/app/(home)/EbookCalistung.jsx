export default function EbookCalistung() {
  return (
    <section className="base-section py-24 bg-[url('/images/bg/bg-calistung-1.avif')] bg-cover bg-center">
      <div className="container flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:basis-6/10 text-center lg:text-left order-2 lg:order-1">
          <h2 className="text-[#3763a1] text-4xl md:text-6xl font-bold mb-5">
            E-Book Calistung
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur temporibus provident facere. Dolor Sit Amet.
          </p>
          <div className="flex gap-2 pt-5 justify-center lg:justify-start">
              <button className="tombol-biru text-[12px]! md:text-sm!">Download</button>
              {/* <button className="tombol-pink text-[12px]! md:text-sm!">Aktifkan Notifikasi</button> */}
            </div>
        </div>

        <div className="lg:basis-4/10 flex justify-center lg:justify-end order-1 lg:order-2">
          <img
            src="/images/funpaper/ebook/ebook-calistung.avif"
            alt=""
            className="h-[250px]"
          />
        </div>
      </div>
    </section>
  );
}
