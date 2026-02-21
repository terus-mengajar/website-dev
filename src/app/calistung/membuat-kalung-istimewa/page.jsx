import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Membuat Kalung Istimewa";

export const metadata = {
  title: TITLE,
};

const SummarySection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <div>
      <h2 className="font-bold text-lg mb-4">Area Simulasi :</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Prascil</li>
        <li>Kosakata dan Tata Bahasa</li>
        <li>Bahasa Berhitung</li>
      </ul>
    </div>
    <div>
      <h2 className="font-bold text-lg mb-4">Alat dan Bahan :</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Daun-daun kering/daun segar beragam bentuk dan warna</li>
        <li>Tali/benang</li>
        <li>Gunting</li>
        <li>Jarum (untuk anak yang lebih besar)</li>
        <li>Lem tembak/lem kertas (opsional)</li>
      </ul>
    </div>
  </div>
);

const PrepSection = ({ steps }) => (
  <div className="mb-10">
    <h3 className="font-bold text-lg mb-6">Cara Menyiapkan Permainan :</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200">
            <img
              src={`https://placehold.co/600x400/f0fdf4/166534?text=Persiapan+${index + 1}`}
              alt={`Persiapan ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-3">
            <p className="text-gray-600 leading-relaxed">
              <span className="font-bold text-gray-400">{index + 1}.</span>{" "}
              {step}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const LevelSection = ({ level, age, goal, observing, duration, steps }) => (
  <div className="mb-20">
    <div className="bg-[#FAF7F2] rounded-xl p-6 mb-8">
      <h2 className="font-bold text-xl mb-4">
        Level {level} ({age})
      </h2>
      <div className="space-y-3 text-gray-700">
        <p>
          <span className="font-semibold text-black">
            Apa yang ingin dikembangkan :
          </span>{" "}
          {goal}
        </p>
        <p>
          <span className="font-semibold text-black">
            Hal yang bisa diobservasi :
          </span>{" "}
          {observing}
        </p>
        <p>
          <span className="font-semibold text-black">Durasi Bermain :</span>{" "}
          {duration}
        </p>
      </div>
    </div>

    <h3 className="font-bold text-lg mb-6">Cara Bermain :</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200">
            <img
              src={`https://placehold.co/600x400/f3f4f6/374151?text=Step+${index + 1}`}
              alt={`Step ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-3">
            <span className="font-bold text-gray-400">{index + 1}.</span>
            <p className="text-gray-600 leading-relaxed">{step}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Page() {
  const gamePrep = [
    "Kumpulkan berbagai jenis daun-daun kering atau segar dari lingkungan sekitar. Pilih daun dengan beragam bentuk, ukuran, dan warna.",
    "Siapkan tali atau benang dengan panjang yang cukup untuk dijadikan kalung. Potong sesuai kebutuhan.",
    "Lubangi bagian pangkal daun menggunakan jarum atau alat pelubang agar mudah diuntai ke tali.",
    "Susun daun-daun di atas meja sesuai urutannya agar anak bisa mulai menguntai dengan mudah.",
  ];

  const level1Steps = [
    "Tunjukkan kepada anak daun-daun yang sudah disiapkan di atas meja. Biarkan anak menyentuh dan mengenal tekstur setiap daun.",
    "Bantu anak untuk memilih daunnya satu per satu dan masukkan ke dalam tali yang sudah tersedia.",
    "Arahkan anak untuk menguntai daun ke tali secara perlahan sambil memegang ujung tali agar tidak lepas.",
    "Ulangi hingga kalung terisi beberapa daun. Ikat ujung tali saat selesai dan kenakan di leher anak.",
  ];

  const level2Steps = [
    "Ajak anak untuk memilih sendiri daun-daun yang diinginkan untuk membuat kalung.",
    "Minta anak untuk menghitung jumlah daun yang akan diuntai, misalnya 5 atau 10 daun.",
    "Arahkan anak menguntai daun ke tali secara mandiri satu per satu sambil menghitung.",
    "Minta anak menyebutkan warna atau bentuk setiap daun yang diuntai untuk memperkaya kosakata.",
    "Ikat ujung tali bersama-sama dan kenakan kalung yang sudah jadi.",
  ];

  const level3Steps = [
    "Ajak anak berdiskusi tentang pola kalung yang ingin dibuat, misalnya: daun besar–kecil–besar atau berdasarkan warna.",
    "Minta anak menentukan sendiri urutan dan pola daun yang akan digunakan sebelum mulai menguntai.",
    "Anak menguntai daun sesuai pola yang telah direncanakan secara mandiri.",
    "Minta anak menghitung total daun yang digunakan dan mencatat hasilnya di atas kertas.",
    "Ajak anak menceritakan kalung yang dibuatnya: berapa jumlah daun, apa warnanya, apa polanya.",
  ];

  return (
    <CalistungPageLayout title={TITLE}>
      <SummarySection />

      <PrepSection steps={gamePrep} />

      <div className="my-16 border-t border-gray-200" />

      <LevelSection
        level="1"
        age="2-3 th"
        goal="Anak belajar mengenal berbagai jenis daun, tekstur, dan warna melalui indra perabaan. Melatih koordinasi tangan dan jari dalam memegang benda kecil."
        observing="Anak dapat fokus memasukkan daun ke dalam tali satu per satu dengan bantuan, dan menunjukkan minat terhadap benda-benda alam di sekitarnya."
        duration="10-15 menit per hari."
        steps={level1Steps}
      />

      <LevelSection
        level="2"
        age="4-5 th"
        goal="Menumbuhkan kemampuan berhitung sederhana (1–10), memperkaya kosakata warna dan bentuk, serta melatih kemandirian dalam menyelesaikan tugas kreatif."
        observing="Anak dapat mandiri memilih dan menguntai daun ke tali sambil menyebutkan nama warna dan bentuk daun yang digunakan."
        duration="15-20 menit per hari."
        steps={level2Steps}
      />

      <LevelSection
        level="3"
        age="5-6 th"
        goal="Mengembangkan kemampuan berpola, berhitung lebih lanjut, dan kemampuan bercerita. Melatih daya ingat dan kemampuan perencanaan sederhana sebelum bereksplorasi."
        observing="Anak dapat merencanakan pola kalung secara mandiri, menghitung jumlah daun dengan tepat, dan mampu menceritakan kembali proses pembuatan kalungnya."
        duration="20-30 menit per hari."
        steps={level3Steps}
      />
    </CalistungPageLayout>
  );
}
