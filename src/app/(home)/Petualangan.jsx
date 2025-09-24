import Image from "next/image";

export default function Petualangan() {
  return (
    <section className="base-section bg-[#fffbfb]">
      <div className="container">
        {/* 1 */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-items-center">
          <div className="lg:basis-5/10 flex justify-center order-1 lg:order-2">
            <Image
              src="/images/karakter/karakter-tongkat.avif"
              alt="petualangan 1"
              width={400}
              height={218}
            />
          </div>

          <div className="lg:basis-5/10 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-karakter">
              Petualangan untuk terus mengajar dimulai disini
            </h2>
          </div>
        </div>

        <div className="batu">
          <img src="/images/karakter/batu-kanan-kiri.avif" alt="" />
        </div>

        {/* 2 */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
          <div className="lg:basis-5/10 flex justify-center">
            <Image
              src="/images/karakter/karakter-kertas-bus.avif"
              alt="petualangan 2"
              width={480}
              height={120}
            />
          </div>

          <div className="lg:basis-5/10 text-center lg:text-left">
            <h2 className="text-karakter">
              Funpaper
              <br />
              Harian
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur temporibus provident facere. Dolor Sit Amet.
            </p>
            <div className="flex gap-2 pt-5 justify-center lg:justify-start">
              <a href="/info/funpaper-harian" className="tombol-pink">Selengkapnya</a>
              <a href="/funpaper-harian" className="tombol-biru">Download</a>
            </div>
          </div>
        </div>

        <div className="batu">
          <img src="/images/karakter/batu-kiri-kanan.avif" alt="" />
        </div>

        {/* 3 */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-items-center">
          <div className="lg:basis-5/10 flex justify-center order-1 lg:order-2">
            <Image
              src="/images/karakter/karakter-buku-kertas.avif"
              alt="petualangan 3"
              width={480}
              height={120}
            />
          </div>

          <div className="lg:basis-5/10 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-karakter">
              Funpaper
              <br />
              Tema
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              consectetur temporibus provident facere. Dolor Sit Amet.
            </p>
            <div className="flex gap-2 pt-5 justify-center lg:justify-start">
              <a href="/info/funpaper-tema" className="tombol-pink">Selengkapnya</a>
              <a href="/funpaper-tema" className="tombol-biru">Download</a>
            </div>
          </div>
        </div>

        <div className="batu">
          <img src="/images/karakter/batu-kanan-kiri.avif" alt="" />
        </div>

        {/* 4 */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
          <div className="lg:basis-5/10 flex justify-center">
            <Image
              src="/images/karakter/karakter-minigames.avif"
              alt="petualangan 4"
              width={480}
              height={120}
            />
          </div>

          <div className="lg:basis-5/10 text-center lg:text-left">
            <h2 className="text-karakter">
              Mini
              <br />
              Games
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              consectetur temporibus provident facere. Dolor Sit Amet.
            </p>
            <div className="flex gap-2 pt-5 justify-center lg:justify-start">
              <a href="/info/mini-games" className="tombol-pink">Selengkapnya</a>
              <a href="/mini-game" className="tombol-biru">Download</a>
            </div>
          </div>
        </div>

        <div className="batu">
          <img src="/images/karakter/batu-kiri-kanan.avif" alt="" />
        </div>

        {/* 5 */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-items-center">
          <div className="lg:basis-5/10 flex justify-center order-1 lg:order-2">
            <Image
              src="/images/karakter/karakter-calistung.avif"
              alt="petualangan 5"
              width={480}
              height={120}
            />
          </div>

          <div className="lg:basis-5/10 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-karakter">
              Funpaper
              <br />
              Calistung
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              consectetur temporibus provident facere. Dolor Sit Amet.
            </p>
            <button className="tombol-segera mt-5">Segera Hadir</button>
          </div>
        </div>

        <div className="batu">
          <img src="/images/karakter/batu-kanan-kiri.avif" alt="" />
        </div>

        {/* 6 */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
          <div className="lg:basis-5/10 flex justify-center">
            <Image
              src="/images/karakter/karakter-activity.avif"
              alt="petualangan 6"
              width={480}
              height={120}
            />
          </div>

          <div className="lg:basis-5/10 text-center lg:text-left">
            <h2 className="text-karakter">Funpaper Activity</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              consectetur temporibus provident facere. Dolor Sit Amet.
            </p>
            <button className="tombol-segera mt-5">Segera Hadir</button>
          </div>
        </div>

        <div className="batu">
          <img src="/images/karakter/batu-kiri-kanan.avif" alt="" />
        </div>

        {/* 7 */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-items-center">
          <div className="lg:basis-5/10 flex justify-center order-1 lg:order-2">
            <Image
              src="/images/karakter/karakter-funsticker.avif"
              alt="petualangan 7"
              width={480}
              height={120}
            />
          </div>

          <div className="lg:basis-5/10 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-karakter">Funsticker</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              consectetur temporibus provident facere. Dolor Sit Amet.
            </p>
            <button className="tombol-segera mt-5">Segera Hadir</button>
          </div>
        </div>

        <div className="batu">
          <img src="/images/karakter/batu-kanan-kiri.avif" alt="" />
        </div>

        {/* 8 */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
          <div className="lg:basis-5/10 flex justify-center">
            <Image
              src="/images/karakter/karakter-bundle.avif"
              alt="petualangan 8"
              width={480}
              height={120}
            />
          </div>

          <div className="lg:basis-5/10 text-center lg:text-left">
            <h2 className="text-karakter">
              Free Bundle
              <br />
              Funpaper
              <br />
              Tiap Pekan
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              consectetur temporibus provident facere. Dolor Sit Amet.
            </p>
            <button className="tombol-pink mt-5">Dapatkan Sekarang</button>
          </div>
        </div>

        <div className="py-28">
          <Image
            src="/images/karakter/masih-banyak-lagi.avif"
            alt="Masih banyak lagi"
            className="mx-auto"
            width={900}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}
