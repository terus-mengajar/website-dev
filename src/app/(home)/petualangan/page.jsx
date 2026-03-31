import Image from "next/image";
import Link from "next/link";

export default function Petualangan() {
  return (
    <section className="base-section pt-44! bg-[#fffbfb]" id="petualangan">
      <div className="container">
        {/* 1 */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-items-center">
          <div className="lg:basis-5/10 flex justify-center order-1 lg:order-2">
            <Image
              src="/images/karakter/karakter-tongkat.avif"
              alt="petualangan 1"
              width={400}
              height={218}
              unoptimized
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
              unoptimized
            />
          </div>

          <div className="lg:basis-5/10 text-center lg:text-left">
            <h2 className="text-karakter">
              Funpaper
              <br />
              Harian
            </h2>
            <p>
              Lembar kerja praktis untuk menemani aktivitas anak setiap hari.
              Mulai dari mengenal angka, huruf, mewarnai, hingga aktivitas
              gunting tempel, semuanya tersedia gratis dan bisa diunduh kapan
              saja.
            </p>
            <div className="flex gap-2 pt-5 justify-center lg:justify-start">
              <Link href="/info/funpaper-harian" className="tombol-pink">
                Selengkapnya
              </Link>
              <Link href="/funpaper-harian" className="tombol-biru">
                Download
              </Link>
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
              unoptimized
            />
          </div>

          <div className="lg:basis-5/10 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-karakter">
              Funpaper
              <br />
              Tema
            </h2>
            <p>
              Kumpulan lembar kerja bertema seperti tanaman, alam semesta, dll.
              Disusun dalam satu paket PDF untuk pengalaman belajar yang lebih
              mendalam.
            </p>
            <div className="flex gap-2 pt-5 justify-center lg:justify-start">
              <Link href="/info/funpaper-tema" className="tombol-pink">
                Selengkapnya
              </Link>
              <Link href="/funpaper-tema" className="tombol-biru">
                Download
              </Link>
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
              unoptimized
            />
          </div>

          <div className="lg:basis-5/10 text-center lg:text-left">
            <h2 className="text-karakter">
              Mini
              <br />
              Games
            </h2>
            <p>
              Games edukatif untuk latihan berhitung, menyusun kata, mengenal
              pola, dan mengasah daya ingat dengan cara yang menyenangkan.
            </p>
            <div className="flex gap-2 pt-5 justify-center lg:justify-start">
              <Link href="/info/mini-games" className="tombol-pink">
                Selengkapnya
              </Link>
              <Link href="/mini-game" className="tombol-biru">
                Mainkan
              </Link>
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
              unoptimized
            />
          </div>

          <div className="lg:basis-5/10 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-karakter">
              Funpaper
              <br />
              Calistung
            </h2>
            <p>
              Lembar kerja yang fokus kepada membaca, menulis dan berhitung.
              Aktivitasnya ringan, menyenangkan, dan sesuai dengan tahap
              perkembangan anak.
            </p>
            {/* <button className="tombol-segera mt-5">Segera Hadir</button> */}
            <div className="flex gap-2 pt-5 justify-center lg:justify-start">
              <Link href="/info/funpaper-calistung" className="tombol-pink">
                Selengkapnya
              </Link>
              <Link href="/funpaper-calistung" className="tombol-biru">
                Download
              </Link>
            </div>
          </div>
        </div>

        <div className="batu">
          <img src="/images/karakter/batu-kanan-kiri.avif" alt="" />
        </div>

        {/* 6 */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
          <div className="lg:basis-5/10 flex justify-center">
            <Image
              src="/images/karakter/karakter-aktivitas-calistung.webp"
              alt="petualangan 6"
              width={480}
              height={120}
              unoptimized
            />
          </div>

          <div className="lg:basis-5/10 text-center lg:text-left">
            <h2 className="text-karakter">
              Bermain
              <br />
              Sambil Belajar
              <br />
              Calistung
            </h2>
            <p>
              Rekomendasi aktivitas untuk bantu anak belajar calistung dengan pendekatan bermain. Aktivitasnya ringan, menyenangkan, dan sesuai tahap perkembangan anak.
            </p>
            <div className="flex gap-2 pt-5 justify-center lg:justify-start">
              <Link href="#" className="tombol-pink">
                Selengkapnya
              </Link>
              <Link href="/calistung" className="tombol-biru">
                Download
              </Link>
            </div>
          </div>
        </div>

        <div className="batu">
          <img src="/images/karakter/batu-kiri-kanan.avif" alt="" />
        </div>

        {/* 7 */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-items-center">
          <div className="lg:basis-5/10 flex justify-center order-1 lg:order-2">
            <Image
              src="/images/karakter/karakter-interaktif.webp"
              alt="petualangan 7"
              width={480}
              height={120}
              unoptimized
            />
          </div>

          <div className="lg:basis-5/10 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-karakter">
              Funpaper
              <br />
              Interaktif
            </h2>
            <p>
              Permainan gratis online yang disukai anak. Menghadirkan aktivitas bermain sambil belajar yang lebih hidup, interaktif dan menyenangkan.
            </p>
            {/* <button className="tombol-segera mt-5">Segera Hadir</button> */}
            <div className="flex gap-2 pt-5 justify-center lg:justify-start">
              <Link href="/info/funpaper-interaktif" className="tombol-pink">
                Selengkapnya
              </Link>
              <Link href="/funpaper-interaktif" className="tombol-biru">
                Download
              </Link>
            </div>
          </div>
        </div>

        <div className="batu">
          <img src="/images/karakter/batu-kanan-kiri.avif" alt="" />
        </div>

        {/* 8 */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
          <div className="lg:basis-5/10 flex justify-center">
            <Image
              src="/images/karakter/karakter-coding.webp"
              alt="petualangan 8"
              width={480}
              height={120}
              unoptimized
            />
          </div>

          <div className="lg:basis-5/10 text-center lg:text-left">
            <h2 className="text-karakter">
              Funpaper
              <br />
              Coding
            </h2>
            <p>
              Rekomendasi aktivitas belajar coding tanpa layar untuk melatih anak berpikir logis dan runtut, memecahkan masalah sederhana, dan berkreasi.
            </p>
            <div className="flex gap-2 pt-5 justify-center lg:justify-start">
              <Link href="#" className="tombol-pink">
                Selengkapnya
              </Link>
              <Link href="/funpaper-coding" className="tombol-biru">
                Download
              </Link>
            </div>
          </div>
        </div>

        <div className="batu">
          <img src="/images/karakter/batu-kiri-kanan.avif" alt="" />
        </div>

        {/* 9 */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
          
          <div className="lg:basis-5/10 text-center lg:text-left">
            <h2 className="text-karakter">Funpaper<br />Activity</h2>
            <p>
              Kumpulan lembar kerja berdasarkan jenis aktivitas yang disukai
              anak. Dirancang khusus untuk mendukung tumbuh kembang anak melalui
              aktivitas yang menyenangkan dan siap pakai!
            </p>
            <button className="tombol-segera mt-5">Segera Hadir</button>
          </div>

          <div className="lg:basis-5/10 flex justify-center">
            <Image
              src="/images/karakter/karakter-activity.avif"
              alt="petualangan 9"
              width={480}
              height={120}
              unoptimized
            />
          </div>

        </div>

        <div className="batu">
          <img src="/images/karakter/batu-kanan-kiri.avif" alt="" />
        </div>

        {/* 10 */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-items-center">
          <div className="lg:basis-5/10 flex justify-center">
            <Image
              src="/images/karakter/karakter-funsticker.avif"
              alt="petualangan 10"
              width={480}
              height={120}
              unoptimized
            />
          </div>

          <div className="lg:basis-5/10 text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-karakter">Funsticker</h2>
            <p className="mb-8">
              Buku stiker penuh aktivitas kreatif untuk anak 2–6 tahun. Membantu
              mengembangkan motorik, logika, dan bahasa, sambil menciptakan
              waktu bermain berkualitas dengan orang tua.
            </p>
             <button className="tombol-segera mt-5">Join Waiting List</button>
          </div>
        </div>

        <div className="batu">
          <img src="/images/karakter/batu-kiri-kanan.avif" alt="" />
        </div>

        <div className="py-4">
          <Image
            src="/images/karakter/masih-banyak-lagi.avif"
            alt="Masih banyak lagi"
            className="mx-auto"
            width={900}
            height={491}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
