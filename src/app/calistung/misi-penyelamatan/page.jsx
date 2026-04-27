import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Misi Penyelamatan";

export const metadata = {
  title: TITLE,
};

const SummarySection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <div className="flex flex-row gap-4">
      <h2 className="mb-4 whitespace-nowrap">Area Simulasi :&nbsp;&nbsp;</h2>
      <ul className="list-disc space-y-1 text-gray-700">
        <li>Oromotor</li>
        <li>Fokus dan konsentrasi</li>
      </ul>
    </div>
    <div className="flex flex-row gap-4">
      <h2 className="mb-4 whitespace-nowrap">Alat dan Bahan :&nbsp;&nbsp;</h2>
      <ul className="list-disc space-y-1 text-gray-700">
        <li>1 buah bola kecil</li>
        <li>1 lembar kertas A4 (boleh diganti koran/majalah bekas)</li>
        <li>1 buah mangkok plastik kecil</li>
        <li>1 buah sedotan (lubang besar dan kecil)</li>
        <li>7 lembar kertas bekas</li>
        <li>1 gulung selotip</li>
        <li>Meja</li>
      </ul>
    </div>
  </div>
);

const LevelSection = ({ level, age, goal, indicator, duration, steps }) => (
  <div className="mb-20">
    <div className="mb-14">
      <h2 className="font-bold text-xl mb-4">
        Level {level} ({age})
      </h2>
      <div className="">
        <table>
          <tbody>
            <tr>
              <td className="align-top whitespace-nowrap pr-4">
                Manfaat Utama :{" "}
              </td>
              <td className="align-top pb-2">{goal}</td>
            </tr>
            <tr>
              <td className="align-top pr-4">Indikator yang diharapkan : </td>
              <td className="align-top pb-2">{indicator}</td>
            </tr>
            <tr>
              <td className="align-top whitespace-nowrap pr-4">
                Durasi Bermain :{" "}
              </td>
              <td className="align-top">{duration}</td>
            </tr>
          </tbody>
        </table>
        {/* <p className="flex flex-row gap-2">
          <span className="whitespace-nowrap">Manfaat Utama : </span><span>{goal}</span>
        </p>
        <p className="flex flex-row gap-2">
          <span className="whitespace-nowrap">Indikator yang diharapkan : </span>
          <span>{indicator}</span>
        </p>
        <p className="flex flex-row gap-2">
          <span className="whitespace-nowrap">Durasi Bermain : </span>
          <span>{duration}</span>
        </p> */}
      </div>
    </div>

    <h3 className="font-bold text-lg mb-6">Cara Bermain :</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {steps.map((step, index) => (
        <div key={index} className={`flex gap-4 ${step.class ?? ""}`}>
          <div className="flex flex-col gap-2 p-4 rounded-lg overflow-hidden border border-[#F2E4D6] w-full h-full">
            <img
              src={step.img}
              alt={`Step ${index + 1}`}
              className="w-full h-40 object-contain"
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">{index + 1}.</span>
              <p className="">{step.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Page() {
  const level1Steps = [
    {
      text: "Letakkan bola kecil di depan terowongan.",
      img: "/images/calistung/misi-penyelamatan/5.png",
    },
    {
      text: "Ajak anak meniup bola tanpa sedotan agar masuk ke terowongan, lalu ke mangkok.",
      img: "/images/calistung/misi-penyelamatan/6.png",
    },
    {
      text: "Bantu arahkan napas anak:'Tiup pelan ya, kita lihat bolanya jalan nggak!'",
      img: "/images/calistung/misi-penyelamatan/7.png",
    },
    {
      text: "Ulangi 3–5 kali. Beri pujian: “Yeay! Bola masuk!”",
      img: "/images/calistung/misi-penyelamatan/8.png",
    },
  ];

  const level2Steps = [
    {
      text: "Minta anak menggunakan sedotan besar untuk meniup bola kecil masuk ke terowongan.",
      img: "/images/calistung/misi-penyelamatan/9.png",
    },
    {
      text: "Ganti bola jadi bola kertas ukuran sedang. Tambahkan tantangan: 'Kira-kira perlu berapa tiupan sampai bola masuk?'",
      img: "/images/calistung/misi-penyelamatan/10.png",
    },
    {
      text: "Ajak anak menghitung jumlah tiupan, lalu cocokan hasilnya.",
      img: "/images/calistung/misi-penyelamatan/11.png",
    },
    {
      text: "Ulangi dengan bola ukuran berbeda.",
      img: "/images/calistung/misi-penyelamatan/12.png",
    },
  ];

  const level3Steps = [
    {
      text: "Minta anak menggunakan sedotan kecil untuk meniup bola dari kertas ukuran kecil, sedang, dan besar.",
      img: "/images/calistung/misi-penyelamatan/13.png",
    },
    {
      text: "Tantang anak memilih sedotan yang tepat untuk tiap bola agar bisa masuk ke terowongan.",
      img: "/images/calistung/misi-penyelamatan/14.png",
    },
    {
      text: "Tambahkan misi: “Bisa nggak tiup 3 bola beda ukuran dan semuanya masuk ke mangkok dalam waktu 1 menit?”",
      img: "/images/calistung/misi-penyelamatan/15.png",
    },
    {
      text: "Ajak anak mencatat jumlah keberhasilan.",
      img: "/images/calistung/misi-penyelamatan/16.png",
    },
  ];

  return (
    <CalistungPageLayout title={TITLE}>
      <SummarySection />

      <h3 className="font-bold text-lg mb-6">Cara Menyiapkan Permainan :</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className={`flex gap-4`}>
          <div className="flex flex-col gap-2 p-4 rounded-lg overflow-hidden border border-[#F2E4D6] w-full h-full">
            <img
              src="/images/calistung/misi-penyelamatan/1.png"
              alt="1"
              className="w-full h-40 object-contain"
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">1.</span>
              <p className="">
                Ambil selembar kertas, lipat jadi seperti terowongan kecil.
              </p>
            </div>
          </div>
        </div>

        <div className={`flex gap-4`}>
          <div className="flex flex-col gap-2 p-4 rounded-lg overflow-hidden border border-[#F2E4D6] w-full h-full">
            <img
              src="/images/calistung/misi-penyelamatan/2.png"
              alt="2"
              className="w-full h-40 object-contain"
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">2.</span>
              <p className="">
                Tempelkan ujung kiri dan kanan terowongan ke meja pakai selotip,
                biar tidak roboh.
              </p>
            </div>
          </div>
        </div>

        <div className={`flex gap-4`}>
          <div className="flex flex-col gap-2 p-4 rounded-lg overflow-hidden border border-[#F2E4D6] w-full h-full">
            <img
              src="/images/calistung/misi-penyelamatan/3.png"
              alt="3"
              className="w-full h-40 object-contain"
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">3.</span>
              <p className="">
                Letakkan mangkok kecil di ujung terowongan, sejajar lurus.
              </p>
            </div>
          </div>
        </div>

        <div className={`flex gap-4`}>
          <div className="flex flex-col gap-2 p-4 rounded-lg overflow-hidden border border-[#F2E4D6] w-full h-full">
            <img
              src="/images/calistung/misi-penyelamatan/4.png"
              alt="4"
              className="w-full h-40 object-contain"
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">4.</span>
              <p className="">
                Siapkan bola kecil dan bola dari kertas bekas ukuran kecil,
                sedang, dan besar. Siapkan juga sedotan besar dan kecil.
              </p>
            </div>
          </div>
        </div>
      </div>

      <LevelSection
        level="1"
        age="2-3 th"
        goal="Melatih kekuatan tiupan, koordinasi mulut dan napas, serta perhatian visual sederhana."
        indicator="Anak dapat meniup bola melewati terowongan sederhana tanpa bantuan alat."
        duration="15–20 menit per sesi"
        steps={level1Steps}
      />

      <LevelSection
        level="2"
        age="4-5 th"
        goal="Meningkatkan kontrol tiupan, memperkuat otot mulut, dan mengenal perbedaan ukuran objek."
        indicator="Anak mampu meniup bola dari bahan berbeda menggunakan sedotan besar, serta membedakan kekuatan tiupan sesuai ukuran bola."
        duration="15–20 menit per sesi"
        steps={level2Steps}
      />

      <LevelSection
        level="3"
        age="5-6 th"
        goal="Mengasah ketepatan napas, pengambilan keputusan (memilih sedotan sesuai ukuran bola), dan fokus dalam menyelesaikan tantangan waktu."
        indicator="Anak dapat memilih sedotan sesuai ukuran bola, meniup dengan kekuatan tepat, dan menyelesaikan permainan dalam batas waktu."
        duration="15–20 menit per sesi"
        steps={level3Steps}
      />

      <p className="mb-8">
        Aktivitas ini bisa diulang setiap beberapa hari untuk memperkuat
        pemahaman dan keterampilan anak secara menyenangkan.
      </p>

      {/* CTA TIKTOK */}
      {/* <div className="bg-[#FBF6F2] rounded-xl p-12 flex flex-col sm:flex-row gap-8 relative overflow-hidden">
        <div className="hidden md:block absolute -bottom-16 -left-16 opacity-40 pointer-events-none -rotate-15 -translate-x-10 translate-y-35">
          <img
            src="/images/shapes/logo-tm-cream.avif"
            alt=""
            className="w-110 h-110 object-contain"
          />
        </div>

        <div className="z-999">
          <h2 className="font-bold text-4xl mb-4 text-[#8562A8]">
            Cara Memainkannya
          </h2>
          <p className="mb-4">
            Lihat video disamping untuk melihat bagaimana cara memainkannya
            sesuai dengan instruksi yang tertera
          </p>
          <button className="tombol-hitam">Lihat di Tiktok</button>
        </div>

        <div>
          <img src="/images/calistung/misi-penyelamatan/17.png" alt="17" />
        </div>
      </div> */}
    </CalistungPageLayout>
  );
}
