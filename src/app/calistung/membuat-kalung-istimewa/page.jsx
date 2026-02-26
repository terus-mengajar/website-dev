import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Membuat Kalung Istimewa";

export const metadata = {
  title: TITLE,
};

const SummarySection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <div className="flex flex-row gap-4">
      <h2 className="mb-4 whitespace-nowrap">Area Simulasi :&nbsp;&nbsp;</h2>
      <ul className="list-disc space-y-1 text-gray-700">
        <li>Motorik halus</li>
        <li>Fokus dan konsentrasi</li>
        <li>Kognitif (klasifikasi bentuk dan ukuran)</li>
        <li>Sensori (raba tekstur, cium aroma)</li>
        <li>Meningkatkan kesadaran fonemik</li>
      </ul>
    </div>
    <div className="flex flex-row gap-4">
      <h2 className="mb-4 whitespace-nowrap">Alat dan Bahan :&nbsp;&nbsp;</h2>
      <ul className="list-disc space-y-1 text-gray-700">
        <li>10 lembar daun kering (berbagai bentuk dan ukuran)</li>
        <li>1 pensil (untuk melubangi daun)</li>
        <li>
          1 gulung tali rafia atau benang kasur (panjang ± 60 cm, cukup lentur
          dan mudah dimasukkan ke lubang daun)
        </li>
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
              <p className="" dangerouslySetInnerHTML={{ __html: step.text }} />
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
      text: "Ajak anak memilih 5–6 daun kering yang disukai.",
      img: "/images/calistung/membuat-kalung-istimewa/5.png",
    },
    {
      text: "Orang tua bantu melubangi daun dengan pensil perlahan-lahan.",
      img: "/images/calistung/membuat-kalung-istimewa/6.png",
    },
    {
      text: "Anak diminta memasukkan daun ke dalam tali satu per satu dengan dibimbing.",
      img: "/images/calistung/membuat-kalung-istimewa/7.png",
    },
    {
      text: "Setelah semua daun terpasang, bantu ikatkan tali menjadi kalung. Ajak anak memakai hasil karyanya dan beri pujian: “Wah, kalung daun buatanmu cantik sekali!”",
      img: "/images/calistung/membuat-kalung-istimewa/8.png",
    },
  ];

  const level2Steps = [
    {
      text: "Anak memilih 10 daun dari berbagai bentuk dan ukuran.",
      img: "/images/calistung/membuat-kalung-istimewa/9.png",
    },
    {
      text: "Anak mencoba melubangi daun sendiri menggunakan pensil (dengan bantuan bila perlu).",
      img: "/images/calistung/membuat-kalung-istimewa/10.png",
    },
    {
      text: "Minta anak memasukkan daun satu per satu ke dalam tali dengan urutan ukuran dari kecil ke besar.",
      img: "/images/calistung/membuat-kalung-istimewa/11.png",
    },
    {
      text: "Setelah semua daun terpasang, ajak anak mengikat tali menjadi kalung.",
      img: "/images/calistung/membuat-kalung-istimewa/12.png",
    },
    {
      text: "Tanyakan ke anak “Daun mana yang paling besar dan paling kecil? Bisa susun dari kecil ke besar ya?”",
      img: "/images/calistung/membuat-kalung-istimewa/13.png",
      class: "md:col-span-2",
    },
  ];

  const level3Steps = [
    {
      text: "Anak memilih 10 daun yang berbeda bentuk, warna, dan ukuran.",
      img: "/images/calistung/membuat-kalung-istimewa/14.png",
    },
    {
      text: "Anak melubangi daun sendiri dengan pensil secara mandiri.",
      img: "/images/calistung/membuat-kalung-istimewa/15.png",
    },
    {
      text: `Tantang anak menyusun daun sesuai kategori yang mereka buat sendiri:
              <ul class='list-disc ms-4'>
                <li>Berdasarkan warna</li>
                <li>Berdasarkan jenis ujung daun</li>
                <li>Berdasarkan tekstur</li>
              </ul>`,
      img: "/images/calistung/membuat-kalung-istimewa/16.png",
    },
    {
      text: "Setelah selesai, anak diminta menjelaskan urutan susunannya.“Kenapa daun ini kamu taruh di depan? Kenapa yang ini di tengah?”",
      img: "/images/calistung/membuat-kalung-istimewa/17.png",
    },
  ];

  return (
    <CalistungPageLayout title={TITLE}>
      <SummarySection />

      <h3 className="font-bold text-lg mb-6">Cara Menyiapkan Permainan :</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className={`flex gap-4 md:col-span-2`}>
          <div className="flex flex-col gap-2 p-4 rounded-lg overflow-hidden border border-[#F2E4D6] w-full h-full">
            <img
              src="/images/calistung/membuat-kalung-istimewa/1.png"
              alt="1"
              className="w-full h-40 object-contain"
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">1.</span>
              <p className="">
                Ajak anak berjalan-jalan santai di sekitar rumah atau taman
                untuk mengamati pohon.
              </p>
            </div>
          </div>
        </div>

        <div className={`flex gap-4 md:col-span-2`}>
          <div className="flex flex-col gap-2 p-4 rounded-lg overflow-hidden border border-[#F2E4D6] w-full h-full">
            <img
              src="/images/calistung/membuat-kalung-istimewa/2.png"
              alt="2"
              className="w-full h-40 object-contain"
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">2.</span>
              <p className="">
                Arahkan anak melihat bagian-bagian pohon:
                <ul className="list-disc ms-4">
                  <li>
                    Batang: “Lihat batang pohonnya kuat, ya! Batang ini yang
                    menopang pohon supaya bisa berdiri tegak.”
                  </li>
                  <li>
                    Akar: “Akar pohon biasanya ada di bawah tanah, lho. Dia
                    minum air dari tanah untuk disalurkan ke seluruh pohon.”
                  </li>
                  <li>
                    Cabang dan ranting: “Ranting itu seperti tangan pohon yang
                    memegang daun dan buah.”
                  </li>
                  <li>
                    Bunga dan buah (jika ada): “Kalau pohonnya sedang berbunga
                    atau berbuah, itu tandanya pohonnya sehat!”
                  </li>
                  <li>
                    Daun: “Nah, ini daun-daunnya. Cantik, ya? Ada yang besar,
                    ada yang kecil, warnanya juga beda-beda.”
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className={`flex gap-4`}>
          <div className="flex flex-col gap-2 p-4 rounded-lg overflow-hidden border border-[#F2E4D6] w-full h-full">
            <img
              src="/images/calistung/membuat-kalung-istimewa/3.png"
              alt="3"
              className="w-full h-40 object-contain"
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">3.</span>
              <p className="">
                Katakan “Semua bagian pohon itu penting! Tapi hari ini, kita
                akan berkreasi pakai daun, yuk cari daun yang jatuh di tanah.”
                Ajak anak memungut 10 daun kering yang jatuh di tanah, biarkan
                mereka memilih sendiri yang menurutnya paling menarik. Bantu
                arahkan memilih daun berbeda ukuran
              </p>
            </div>
          </div>
        </div>

        <div className={`flex gap-4`}>
          <div className="flex flex-col gap-2 p-4 rounded-lg overflow-hidden border border-[#F2E4D6] w-full h-full">
            <img
              src="/images/calistung/membuat-kalung-istimewa/4.png"
              alt="4"
              className="w-full h-40 object-contain"
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">4.</span>
              <p className="">
                Setelah terkumpul, lanjutkan dengan membuat kalung daun sesuai
                petunjuk bermain.
              </p>
            </div>
          </div>
        </div>
      </div>

      <LevelSection
        level="1"
        age="2-3 th"
        goal="Mengenal tekstur dan warna alami, melatih gerakan jari saat memasukkan daun ke tali, serta belajar menghargai hasil karya."
        indicator="Anak dapat memasukkan daun ke dalam tali dengan bantuan dan mengenali tekstur daun."
        duration="15–20 menit per sesi"
        steps={level1Steps}
      />

      <LevelSection
        level="2"
        age="4-5 th"
        goal="Mengasah keterampilan melubangi dan meronce, mengenal konsep ukuran (besar–kecil), serta belajar mengurutkan."
        indicator="Anak dapat melubangi daun dengan alat sederhana, menyusun sesuai ukuran, dan menyelesaikan satu kalung secara mandiri."
        duration="15–20 menit per sesi"
        steps={level2Steps}
      />

      <LevelSection
        level="3"
        age="5-6 th"
        goal="Melatih pengamatan lebih dalam, membuat kategori sendiri, menjelaskan alasan pilihan, dan menyusun berdasarkan konsep berpikir."
        indicator="Anak mampu melubangi, menyusun berdasarkan kategori yang ia tentukan sendiri, dan menjelaskan alasan urutan daun dalam kalung."
        duration="15–20 menit per sesi"
        steps={level3Steps}
      />

      <p className="mb-8">
        Aktivitas ini bisa diulang setiap beberapa hari untuk memperkuat
        pemahaman dan keterampilan anak secara menyenangkan.
      </p>
    </CalistungPageLayout>
  );
}
