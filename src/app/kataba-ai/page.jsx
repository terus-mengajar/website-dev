import InputObrolan from "./InputObrolan";
import Image from "next/image";

export const metadata = {
  title: "Kataba AI",
  //   description:
  //     "Temukan berbagai macam jenis kegiatan untuk anak seperti mengenal angka, huruf, mewarnai, gunting tempel, dan masih banyak yang lainnya"
};

export default async function Page() {
  return (
    <main className="bg-[#fcfbf8] text-md mt-[68px] pt-[40px] pb-[80px] min-h-120">
      <section className="mb-14 py-14">
        <div className="container flex flex-col lg:flex-row gap-18">
          <div className="order-2 lg:order-1 space-y-6">
            <h1 className="text-amber-500 text-5xl md:text-6xl font-bold leading-14">
              KATABA AI
            </h1>
            <p className="">
              Asisten pintar untuk bantu memilih media belajar yang cocok untuk
              ananda. Temukan media belajar yang tepat lebih cepat. Tanyakan
              pada KATABA AI dan dapatkan rekomendasi sesuai usia, kebutuhan,
              dan minat belajar ananda.
            </p>
            <a href="https://kataba-ai-frontend-dev.vercel.app/" target="_blank" className="tombol-pink-kataba-ai">Tanya Kataba</a>
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

      <section className="py-14">
        <div className="container">
          <InputObrolan />
        </div>
      </section>

      <section className="py-14">
        <div className="container flex flex-col lg:flex-row gap-12">
          <div className="mx-auto basis-1/2">
            {/* <img className="w-80 lg:w-260" src="/images/karakter/karakter-kataba-ai-2.avif" alt="" /> */}
            <Image className="w-full lg:w-300" src="/images/katabaai/katabaai-demo.gif" alt="demo" width={300} height={200} />
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
            <p className="mb-8">
              Kataba AI Adalah inovasi terbaru dari Terus Mengajar, dirancang
              untuk membantu Ayah Bunda menemukan media belajar yang paling
              sesuai bagi ananda.
            </p>
            <p>
              Dengan teknologi AI, KATABA mampu memahami kebutuhan si kecil,
              memberikan rekomendasi personal, dan menghemat waktu Ayah Bunda.
              Tidak perlu scroll panjang atau mencari manual, cukup tanya KATABA
              jawabannya langsung tersedia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container flex flex-col items-center space-y-4">
          <h2 className="text-amber-500 text-3xl md:text-5xl font-bold leading-10 md:leading-14 text-center">
            Jadilah yang pertama kali berinteraksi dengan KATABA
          </h2>
          <p className="">Kataba, teman setia Ayah Bunda dampingi si kecil belajar</p>
          <a href="https://kataba-ai-frontend-dev.vercel.app/" target="_blank" className="tombol-pink-kataba-ai">Mulai Obrolan</a>
        </div>
      </section>
    </main>
  );
}
