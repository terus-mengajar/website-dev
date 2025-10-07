import Image from "next/image";

export default function Freebies() {
  return (
    <section className="base-section py-24 bg-[url('/images/bg/bg-activity-1.jpg')] md:bg-cover bg-top lg:bg-center">
      <div className="container flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:basis-7/10 text-center lg:text-left order-2 lg:order-1">
          <h2 className="text-coklat text-4xl md:text-5xl font-bold mb-3">
            Bantu kami berkembang
          </h2>
          <p className="text-coklat text-xl md:text-2xl font-medium mb-5">
            dengan hanya menjawab beberapa pertanyaan ✨ 
          </p>
          <p className="my-5 font-medium">Anda dapat Free Funpaper Bundle cuma-cuma! 👉 </p>
          <div className="flex gap-2 justify-center lg:justify-start">
              {/* <button className="tombol-biru text-[12px]! md:text-sm!">Download</button> */}
              <a href="https://t.me/terusmengajarofficial" target="_blank" className="tombol-coklat text-[12px]! md:text-sm! inline-block">Ambil Bundlenya</a>
            </div>
        </div>

        <div className="lg:basis-3/10 flex justify-center lg:justify-end order-1 lg:order-2">
          <Image
            src="/images/funpaper/bundle/bundle-3.png"
            alt="bundle"
            className="h-auto"
            width={300}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}
