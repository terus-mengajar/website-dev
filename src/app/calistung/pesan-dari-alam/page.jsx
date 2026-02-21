import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Pesan dari Alam";

export const metadata = {
  title: TITLE,
};

const SummarySection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <div>
      <h2 className="font-bold text-lg mb-4">Area Simulasi :</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Motorik Halus</li>
        <li>Fokus</li>
      </ul>
    </div>
    <div>
      <h2 className="font-bold text-lg mb-4">Alat dan Bahan :</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>16 lembar daun kering (untuk usia 2–6 tahun, 3–4 tahun)</li>
        <li>Tali / benang secukupnya</li>
        <li>1 lembar karton / kertas tebal</li>
        <li>Spidol</li>
      </ul>
    </div>
  </div>
);

const LevelSection = ({ level, age, mainBenefit, indicators, duration, steps }) => (
  <div className="mb-20">
    <div className="bg-[#FAF7F2] rounded-xl p-6 mb-8">
      <h2 className="font-bold text-xl mb-4">
        Level {level} ({age})
      </h2>
      <div className="space-y-3 text-gray-700">
        <p>
          <span className="font-semibold text-black">Manfaat Utama :</span>{" "}
          {mainBenefit}
        </p>
        <div>
          <p className="font-semibold text-black mb-1">
            Indikator yang Dikerjakan :
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            {indicators.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
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
            <span className="font-bold text-gray-400 shrink-0">{index + 1}.</span>
            <p className="text-gray-600 leading-relaxed">{step}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Page() {
  const level1Steps = [
    "Sediakan karton dan beberapa daun kering di atas meja. Ajak anak untuk menyentuh dan mengenal tekstur setiap daun sebelum mulai.",
    "Minta anak untuk meletakkan daun satu per satu di atas karton secara bebas. Biarkan anak bereksplorasi dengan posisi dan susunan daun sesuai keinginannya.",
    "Setelah daun tersusun, ajak anak untuk menceritakan apa yang ia buat. Berikan pujian dan simpanan karya tersebut sebagai kenang-kenangan.",
  ];

  const level2Steps = [
    "Sediakan karton dan daun-daun kering yang beragam ukuran dan bentuknya. Tunjukkan contoh pola sederhana (misal: melingkar, berjajar) kepada anak.",
    "Minta anak untuk menyusun daun-daun mengikuti pola yang sudah dicontohkan, sambil membedakan mana daun yang besar dan mana yang kecil.",
    "Gunakan spidol untuk menggambar garis besar sebuah huruf besar di atas karton. Minta anak mengisi bentuk huruf tersebut dengan daun-daun yang disusun rapih.",
    "Ajak anak menceritakan huruf apa yang ia buat dan benda apa yang diawali huruf tersebut.",
  ];

  const level3Steps = [
    "Siapkan karton dan daun-daun kering. Ajak anak memilih sebuah kata pendek (2–4 huruf), misalnya 'daun', 'batu', atau namanya sendiri.",
    "Minta anak untuk menuliskan kata tersebut dengan spidol di atas karton, lalu mengisi setiap huruf dengan susunan daun kering di atasnya.",
    "Setelah kata terbentuk dari daun, minta anak memotret atau menelusuri hasil karyanya dengan jari untuk merasakan bentuk hurufnya.",
    "Ajak anak membandingkan karyanya dengan ronde sebelumnya. Adakah perbedaan pola atau warna daun yang digunakan? Diskusikan bersama.",
  ];

  return (
    <CalistungPageLayout title={TITLE}>
      <SummarySection />

      <LevelSection
        level="1"
        age="2-3 th"
        mainBenefit="Melatih kehalusan jari-jari, menempel, menggerakkan tekanan daun, dan mengikuti instruksi sederhana."
        indicators={[
          "Anak bisa memposisikan daun dengan benar dan rapi di atas karton.",
          "Anak mau dan berani memegang daun kering.",
          "Anak mencoba menyusun, memindahkan, dan menikmati aktivitas dengan daun.",
        ]}
        duration="15-20 menit."
        steps={level1Steps}
      />

      <LevelSection
        level="2"
        age="4-5 th"
        mainBenefit="Mengembangkan koordinasi motorik halus, mengenal formasi pola dan bentuk, serta menghubungkan daun dengan konsep huruf."
        indicators={[
          "Anak bisa meniru pola dan mempertimbangkan susunan sendiri.",
          "Anak mampu membedakan ukuran dan bentuk daun.",
          "Anak mau menceritakan koleksi dan pelajaran yang didapatnya.",
        ]}
        duration="15-20 menit."
        steps={level2Steps}
      />

      <LevelSection
        level="3"
        age="5-6 th"
        mainBenefit="Meniru dan membuat kosakata lebih visual, menyempurnakan kemampuan membentuk huruf, dan membangun kemandirian serta kemampuan berkolaborasi."
        indicators={[
          "Anak bisa menentukan satu kata dan menulisnya secara mandiri.",
          "Anak menciptakan variasi warna dan pola dengan dedaunan.",
          "Anak mengerjakan tugas secara mandiri dan fokus hingga selesai.",
        ]}
        duration="15-30 menit."
        steps={level3Steps}
      />
    </CalistungPageLayout>
  );
}
