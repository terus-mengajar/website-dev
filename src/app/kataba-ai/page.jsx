// import InputObrolan from "./InputObrolan";
import Image from "next/image";
import {
  FaTiktok,
  FaInstagram,
  FaPinterest,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

export const metadata = {
  title: "Kataba AI",
  //   description:
  //     "Temukan berbagai macam jenis kegiatan untuk anak seperti mengenal angka, huruf, mewarnai, gunting tempel, dan masih banyak yang lainnya"
};

export default async function Page() {
  const items = [
    {
      name: "Tiktok",
      color: "bg-black",
      icon: <FaTiktok size={24} />,
      url: "https://www.tiktok.com/@terusmengajar.id",
    },
    {
      name: "Instagram",
      color: "bg-gradient-to-r from-[#F6825C] to-[#9238C0]",
      icon: <FaInstagram size={24} />,
      url: "https://instagram.com/terusmengajar",
    },
    {
      name: "Pinterest",
      color: "bg-red-600",
      icon: <FaPinterest size={24} />,
      url: "https://pinterest.com/terusmengajar/",
    },
    {
      name: "Whatsapp",
      color: "bg-green-500",
      icon: <FaWhatsapp size={24} />,
      url: "https://api.whatsapp.com/send?phone=6281934733175",
    },
    {
      name: "Telegram",
      color: "bg-sky-500",
      icon: <FaTelegramPlane size={24} />,
      url: "https://t.me/terusmengajarofficial",
    },
  ];

  return (
    <main className="bg-[#fcfbf8] text-md mt-[68px] pt-[40px] min-h-120">
      <section className="mb-14 py-14">
        <div className="container flex flex-col lg:flex-row gap-18">
          <div className="order-2 lg:order-1">
            <h2 className="text-amber-500 text-3xl md:text-4xl font-bold leading-tight">
              Yuk Kenalan Dengan
            </h2>
            <h1 className="text-amber-500 text-5xl md:text-6xl font-bold leading-tight mb-4">
              KATABA AI
            </h1>
            <p className="mb-6">
              Kataba AI adalah asisten pintar yang membantu Ayah Bunda menemukan
              media belajar yang tepat untuk Ananda. Cukup dengan mengetik
              pertanyaan sederhana, Kataba AI akan langsung merekomendasikan
              worksheet sesuai usia, kebutuhan, dan kemampuan si kecil.
            </p>
            <p className="mb-6">
              Dengan Kataba AI, Ayah Bunda tidak perlu menelusuri ratusan
              halaman. Cukup tanya sekali, hasilnya langsung relevan dan siap
              digunakan
            </p>
            {/* <a href="https://kataba-ai-frontend-dev.vercel.app/" target="_blank" className="tombol-pink-kataba-ai">Tanya Kataba</a> */}
          </div>
          <div className="order-1 lg:order-2 mx-auto">
            <img
              className="w-80 lg:w-200"
              src="/images/karakter/karakter-kataba-ai-1.avif"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* <section className="py-14">
        <div className="container">
          <InputObrolan />
        </div>
      </section> */}

      <section className="py-14">
        <div className="container flex flex-col gap-12">
          <div className="mx-auto basis-1/2">
            <h2 className="text-amber-500 text-3xl md:text-4xl font-bold leading-tight text-center mb-4">
              Lihat bagaimana cara kerja KATABA AI!
            </h2>
            <p className="mb-6 text-center">
              Tonton video demo di bawah ini dan lihat betapa mudahnya menemukan
              worksheet yang tepat untuk Ananda.
            </p>

            {/* <img className="w-80 lg:w-260" src="/images/karakter/karakter-kataba-ai-2.avif" alt="" /> */}
            <Image
              className="w-full lg:w-200 mx-auto"
              src="/images/katabaai/katabaai-demo.gif"
              alt="demo"
              width={300}
              height={200}
            />
            {/* <video
              autoPlay
              muted
              loop
              className="max-w-full rounded-lg"
            >
              <source src="/images/katabaai/katabaai-demo.mov" type="video/quicktime" />
              Browser kamu tidak mendukung video tag.
            </video> */}
          </div>
          <div className="basis-1/2">
            <p className="mb-2">
              Saat ini KATABA AI masih dalam tahap pengembangan awal, artinya
              sistem masih terus dikembangkan dan diuji. Pada tahap ini, KATABA
              AI:
            </p>
            <ul className="list-disc ms-5 space-y-1">
              <li>
                Sudah bisa memberikan rekomendasi dari worksheet terus mengajar.
              </li>
              <li>
                Sedang terus disempurnakan agar semakin akurat, cepat, dan
                intuitif saat berinteraksi dengan Ayah Bunda.
              </li>
            </ul>
            {/* <p className="mb-8">
              Kataba AI Adalah inovasi terbaru dari Terus Mengajar, dirancang
              untuk membantu Ayah Bunda menemukan media belajar yang paling
              sesuai bagi ananda.
            </p>
            <p>
              Dengan teknologi AI, KATABA mampu memahami kebutuhan si kecil,
              memberikan rekomendasi personal, dan menghemat waktu Ayah Bunda.
              Tidak perlu scroll panjang atau mencari manual, cukup tanya KATABA
              jawabannya langsung tersedia.
            </p> */}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[url(/images/bg/bg-katabaai.jpg)] bg-cover bg-no-repeat bg-center lg:bg-position-[center_top_-500px] min-h-[400px] md:min-h-[300px] flex flex-col justify-center">
        <div className="container flex flex-col items-center space-y-2">
          <h2 className="text-amber-500 text-xl md:text-3xl font-bold leading-8 md:leading-12 text-center">
            Dapatkan pengalaman memilih produk yang lebih cerdas dan personal.
            Tetap terhubung dengan Kataba AI untuk info dan inovasi terbaru
          </h2>
          <div className="mt-20 bg-white/60 rounded-2xl p-8 w-full border-3 border-white">
            <p className="text-amber-500 text-xl md:text-3xl font-bold leading-8 md:leading-12 text-center mb-4">
              Follow social media kami
            </p>

            <div className="flex flex-wrap gap-3">
              {items.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${item.color} grow text-white text-xl flex flex-col sm:flex-row items-center gap-3 px-3 py-2 rounded-lg font-semibold hover:opacity-90 transition`}
                >
                  {item.icon}
                  <span className="hidden sm:inline-block text-sm sm:text-md">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* <h2 className="text-amber-500 text-3xl md:text-5xl font-bold leading-10 md:leading-14 text-center">
            Jadilah yang pertama kali berinteraksi dengan KATABA
          </h2>
          <p className="">
            Kataba, teman setia Ayah Bunda dampingi si kecil belajar
          </p>
          <a
            href="https://kataba-ai-frontend-dev.vercel.app/"
            target="_blank"
            className="tombol-pink-kataba-ai"
          >
            Mulai Obrolan
          </a> */}
        </div>
      </section>
    </main>
  );
}
