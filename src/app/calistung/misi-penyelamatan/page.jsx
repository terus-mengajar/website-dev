import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Misi Penyelamatan";

export const metadata = {
  title: TITLE,
};

const SummarySection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <div>
      <h2 className="font-bold text-lg mb-4">Area Simulasi :</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Prascil</li>
        <li>Membaca dan menulis</li>
      </ul>
    </div>
    <div>
      <h2 className="font-bold text-lg mb-4">Alat dan Bahan :</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Wadah satu buah</li>
        <li>Wadah melingkar kecil (piring/sedotan)</li>
        <li>Mangkuk plastik kecil</li>
        <li>Wadah melingkar besar/kecil (untuk lubang besar dan kecil)</li>
        <li>Pompon/bola warna-warni</li>
        <li>Sepit sumpit/capit</li>
        <li>Meja</li>
      </ul>
    </div>
  </div>
);

const LevelSection = ({ level, age, goal, observing, duration, prepSteps, steps }) => (
  <div className="mb-20">
    <div className="bg-[#FAF7F2] rounded-xl p-6 mb-8">
      <h2 className="font-bold text-xl mb-4">Level {level} ({age})</h2>
      <div className="space-y-3 text-gray-700">
        <p><span className="font-semibold text-black">Apa yang ingin dikembangkan :</span> {goal}</p>
        <p><span className="font-semibold text-black">Hal yang bisa dbservasi :</span> {observing}</p>
        <p><span className="font-semibold text-black">Durasi Bermain :</span> {duration}</p>
      </div>
    </div>

    {prepSteps && (
      <div className="mb-10">
        <h3 className="font-bold text-lg mb-6">Cara Menyiapkan Permainan :</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prepSteps.map((step, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200">
                <img 
                  src={`https://placehold.co/600x400/f3f4f6/374151?text=Prep+${index + 1}`} 
                  alt={`Prep Step ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-3">
                <p className="text-gray-600 leading-relaxed"><span className="font-bold text-gray-400">{index + 1}.</span> {step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

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
    "Sediakan double tape yang di tempelkan di pinggir-pinggir wadah.",
    "Potonglah kertas/tisu untuk memudahkan perjalanan misi penyelamatan.",
    "Bentuklah piring sumpit yang menyerupai laba-laba.",
    "Simpan koin/pompon di atas sumpit tersebut sebanyak mungkin di atas piring agar bisa dijadikan misi penyelamatan.",
  ];

  const level1Steps = [
    "Ambilkan koin satu per satu menggunakan tangan.",
    "Lakukan secara perlahan agar koin yang tersimpan di atas meja masuk ke dalam wadah piring.",
    "Ulangi sampai semua koin yang ada di sumpit masuk ke dalam wadah piring.",
    "Misi penyelamatan koin pun telah usai dilakukan.",
  ];

  const level2Steps = [
    "Cara mengambil koin dengan sepit sumpit. Lalu simpan kedalam wadah satu per satu.",
    "Sambil mengambil, mintalah anak untuk menghitung berapa banyak koin yang sedang diselamatkan masuk ke piring.",
    "Ulangi sampai semua koin yang ada di sumpit masuk sedalam wadah piring.",
    "Misi penyelamatan koin pun selesai.",
  ];

  const level3Steps = [
    "Cara mengambil koin dengan sepit sumpit. Lalu simpan kedalam wadah sesuai lubang-lubang yang telah disiapkan piringnya.",
    "Hitunglah koin tersebut di simpan di piring yang berlubang sedang atau yang berlubang kecil.",
    "Pisahkan koin-koin di piring yang berlabel sedang dan label yang kecil itu.",
    "Misi penyelamatan pun pun selesai di lakukan.",
  ];

  return (
    <CalistungPageLayout title={TITLE}>
      <SummarySection />
      
      <LevelSection 
        level="1" 
        age="2-3 th"
        goal="Anak belajar tentang warna dan kemandirian, belajar memasukkan koin secara satu per satu, belajar melatih ujung jempol dan jari telunjuknya."
        observing="Anak dapat fokus permainan memasukkan benda satu per satu sesuai dengan instruksi yang diarahkan secara mandiri."
        duration="15-20 menit per hari."
        prepSteps={gamePrep}
        steps={level1Steps}
      />

      <LevelSection 
        level="2" 
        age="4-5 th"
        goal="Menumbuhkan fokus dan konsentrasi terhadap koin yang diambil, melatih otot kemandirian kaki merayap/jalan mundur sambil membawa benda."
        observing="Anak dapat mandiri mengikuti instruksi mengikuti alur kegiatan dalam penggunaan sumpit, dan mandiri membedakan banyak dan sedikitnya koin."
        duration="20-30 menit per hari."
        steps={level2Steps}
      />

      <LevelSection 
        level="3" 
        age="6-8 th"
        goal="Mengenal rincian panjang pendek, menumbuhkan konsentrasi yang tepat terhadap koin, dan melatih daya ingat gerak motorik halus."
        observing="Anak dapat memilih potongan sesuai ukuran dengan tepat dalam menentukan benda di lubang berukuran sedang, panjang, dan yang kecil."
        duration="30-40 menit per hari."
        steps={level3Steps}
      />
    </CalistungPageLayout>
  );
}
