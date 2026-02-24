import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Menyimpan Harta Karun";

export const metadata = {
  title: TITLE,
};

const SummarySection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <div className="flex flex-row gap-4">
      <h2 className="mb-4 whitespace-nowrap">Area Simulasi :</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Motorik halus</li>
        <li>Fokus dan konsentrasi</li>
        <li>Koordinasi mata dan tangan</li>
        <li>Kesiapan berhitung</li>
      </ul>
    </div>
    <div className="flex flex-row gap-4">
      <h2 className="mb-4 whitespace-nowrap">Alat dan Bahan :</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Koin</li>
        <ul className="ps-5 list-disc list-inside space-y-1 text-gray-700">
          <li>Level 1: 5 buah</li>
          <li>Level 2 & 3: 10 buah</li>
        </ul>
        <li>Celengan kecil (boleh dari botol bekas atau wadah lucu)</li>
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
              <td className="align-top whitespace-nowrap pr-4">Manfaat Utama : </td>
              <td className="align-top">{goal}</td>
            </tr>
            <tr>
              <td className="align-top whitespace-nowrap pr-4">Indikator yang diharapkan : </td>
              <td className="align-top">{indicator}</td>
            </tr>
            <tr>
              <td className="align-top whitespace-nowrap pr-4">Durasi Bermain : </td>
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
        <div key={index} className={`flex gap-4 ${step.class ?? ''}`}>
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
      "text" : "Ajak anak duduk bersama. Tunjukkan koin & celengan sambil mengatakan “harta karunnya kita simpan dulu yuk biar tidak hilang”",
      "img" : "/images/calistung/menyimpan-harta-karun/1.png"
    },
    {
      "text" : "Arahkan jari anak menyentuh koin sambil dihitung bersama: “Satu, dua, tiga...”",
      "img" : "/images/calistung/menyimpan-harta-karun/2.png"
    },
    {
      "text" :"Masukkan 1 koin ke celengan sambil berkata: “Hore... masuk”",
      "img" : "/images/calistung/menyimpan-harta-karun/3.png"
    },
    {
      "text" : "Berikan 1 koin ke anak, bantu ia memasukkan koin.",
      "img" : "/images/calistung/menyimpan-harta-karun/4.png"
    },
    {
      "text" : "Ulangi sampai semua koin habis sambil menghitung bersama.",
      "img" : "/images/calistung/menyimpan-harta-karun/5.png"
    },
    {
      "text" : "Beri tepuk tangan dan pujian: “Wah, hebat sekali!”",
      "img" : "/images/calistung/menyimpan-harta-karun/6.png",
    }
  ];

  const level2Steps = [
    {
      "text" : "Tambahkan jumlah koin menjadi 10",
      "img" : "/images/calistung/menyimpan-harta-karun/7.png"
    },
    {
      "text" : "Ajak anak menyusun semua koin dalam satu barisan rapi.",
      "img" : "/images/calistung/menyimpan-harta-karun/8.png"
    },
    {
      "text" : "Hitung bersama dari 1 sampai 10 sambil menunjuk koin",
      "img" : "/images/calistung/menyimpan-harta-karun/9.png"
    },
    {
      "text" : "Minta anak memasukkan koin satu per satu.",
      "img" : "/images/calistung/menyimpan-harta-karun/10.png"
    },
    {
      "text" : "Di tengah-tengah, tanyakan “Sudah berapa yang masuk?”. Biarkan anak menjawab sendiri. Jika jawabannya kurang tepat, orang tua bisa mengoreksi “Coba kita hitung ulang bersama, yuk.”",
      "img" : "/images/calistung/menyimpan-harta-karun/11.png",
      "class" : "md:col-span-2"
    },
  ];

  const level3Steps = [
    {
      "text" :  "Ceritakan bahwa anak adalah penjaga harta karun di sebuah gua",
      "img" : "/images/calistung/menyimpan-harta-karun/12.png"
    },
    {
      "text" : "Minta anak menghitung 10 koin sendiri",
      "img" : "/images/calistung/menyimpan-harta-karun/13.png"
    },
    {
      "text" : "Minta anak membuat kelompok koin (misalnya 5 koin Rp. 200,- + 5 koin Rp.500,-)",
      "img" : "/images/calistung/menyimpan-harta-karun/14.png"
    },
    {
      "text" : "Berikan perintah: “Ambil 3 koin, masukkan ke celengan!”. Tanyakan “Berapa sisa koinmu sekarang?”",
      "img" : "/images/calistung/menyimpan-harta-karun/15.png"
    },
    {
      "text" : "Bisa juga pakai pertanyaan reflektif “Lebih banyak yang sudah masuk atau yang belum ya?”",
      "img" : "/images/calistung/menyimpan-harta-karun/16.png"
    },
    {
      "text" : "Ulangi dengan variasi instruksi: “Sekarang tambahkan 2 lagi. Totalnya?”",
      "img" : "/images/calistung/menyimpan-harta-karun/17.png"
    },
    {
      "text" : "Atau bisa dengan mengajak anak menghitung mundur sisa koin untuk menambah tantangan",
      "img" : "/images/calistung/menyimpan-harta-karun/18.png"
    },
    {
      "text" : "Lanjutkan hingga semua 10 koin tersimpan",
      "img" : "/images/calistung/menyimpan-harta-karun/19.png"
    },
  ];

  return (
    <CalistungPageLayout title={TITLE}>
      <SummarySection />

      <LevelSection
        level="1"
        age="2-3 th"
        goal="Mengasah gerakan jari, mulai mengenal urutan angka, dan membangun fokus sebentar."
        indicator="Anak dapat memasukkan koin satu per satu ke dalam celengan dengan arahan sederhana."
        duration="15–20 menit setiap sesi. Bisa diulang beberapa kali dalam seminggu"
        steps={level1Steps}
      />

      <LevelSection
        level="2"
        age="4-5 th"
        goal="Mengembangkan koordinasi tangan-mata, belajar berhitung lebih terstruktur, dan mengikuti instruksi lebih panjang."
        indicator="Anak dapat menghitung koin sambil memasukkan dan mengikuti instruksi urutan."
        duration="15–20 menit setiap sesi. Bisa diulang beberapa kali dalam seminggu."
        steps={level2Steps}
      />

      <LevelSection
        level="3"
        age="5-6 th"
        goal="Melatih konsentrasi yang lebih lama, kemampuan logika sederhana, serta mengenal konsep jumlah dan urutan."
        indicator="Anak dapat membuat pola atau kelompok koin dan menjumlahkan secara lisan."
        duration="15–20 menit setiap sesi. Bisa diulang beberapa kali dalam seminggu"
        steps={level3Steps}
      />

      <p>Aktivitas ini bisa diulang setiap beberapa hari untuk memperkuat pemahaman dan keterampilan anak secara menyenangkan.</p>
    </CalistungPageLayout>
  );
}
