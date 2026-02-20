import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Menyimpan Harta Karun";

export const metadata = {
  title: TITLE,
};

const SummarySection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <div>
      <h2 className="font-bold text-lg mb-4">Area Simulasi :</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Prascil</li>
        <li>Membaca dan Menulis</li>
        <li>Kosakata dan Tata Bahasa</li>
        <li>Bahasa Berhitung</li>
      </ul>
    </div>
    <div>
      <h2 className="font-bold text-lg mb-4">Alat dan Bahan :</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Koin</li>
        <li>Wadah (Gelas)</li>
        <li>Botol bekas</li>
        <li>Gunting dan Solasi (jika botol harus dilubangi koinnya)</li>
      </ul>
    </div>
  </div>
);

const LevelSection = ({ level, age, goal, observing, duration, steps }) => (
  <div className="mb-20">
    <div className="bg-[#FAF7F2] rounded-xl p-6 mb-8">
      <h2 className="font-bold text-xl mb-4">Level {level} ({age})</h2>
      <div className="space-y-3 text-gray-700">
        <p><span className="font-semibold text-black">Apa yang ingin dikembangkan :</span> {goal}</p>
        <p><span className="font-semibold text-black">Hal yang bisa dbservasi :</span> {observing}</p>
        <p><span className="font-semibold text-black">Durasi Bermain :</span> {duration}</p>
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
  const level1Steps = [
    "Sediakan koin dan gelas. Minta anak untuk memasukkan satu per satu koin ke dalam gelas. Lakukan berkali-kali sampai koin habis.",
    "Minta anak untuk memindahkan koin yang ada di dalam gelas ke tangan kita.",
    "Kemudian koin yang ada di tangan kitalah dimasukkan ke dalam gelas.",
    "Latihan memasukkan koin ke dalam botol bekas.",
    "Koin yang dimasukkan ke dalam botol bekas, jangan dulu dikeluarkan.",
    "Melainkan botol bekas ditiup-tiup sampa koinnya bunyi.",
  ];

  const level2Steps = [
    "Sediakan koin di atas meja.",
    "Gunakan botol bekas untuk meletakkan koin tersebut.",
    "Minta anak meletakkan koin di atas meja dengan berjejer.",
    "Masukkan satu per satu koin ke dalam botol bekas.",
    "Mintalah anak untuk menghitung jumlah koin yang dimasukkan. Berapa banyak koin yang bisa dimasukkan ke dalam botol tersebut? Gunakan benda-benda lainnya jika diperlukan.",
  ];

  const level3Steps = [
    "Sediakan koin-koin yang sudah di masukkan ke dalam botol tersebut.",
    "Sebutkan berapa jumlah koin.",
    "Sediakan piring plastik di atas meja sebanyak tiga piring (Satuan, Puluhan, Ratusan).",
    "Ambil koin tersebut dari dalam botol. Simpan piring berjejer satu per satu (koin dari piring satu, pindah ke piring dua, dst).",
    "Gelas-gelas plastik yang telah disediakan simpan pula berdekatan dengan koin-koin itu.",
    "Simpan koin satu ke piring satuan, satu piring puluhan, dan satu piring ratusan.",
    "Gunakan piring lagi untuk menyimpan koin di atas piring tersebut sampai koinnya diletakkan dengan rapi.",
    "Berilah keterangan/nama ke wadah tersebut.",
  ];

  return (
    <CalistungPageLayout title={TITLE}>
      <SummarySection />
      
      <LevelSection 
        level="1" 
        age="2-3 th"
        goal="Anak belajar untuk bisa memegang benda dengan ujung jempol dan jari telunjuknya, melatih jemari kordinasi mata dan tangan."
        observing="Anak belajar bersabar memasukkan koin satu demi satu, konsentrasi terhadap koin yang akan di masukkan."
        duration="Anak bermain selama 5-10 menit tiap hari agar terbiasa dengan benda-benda yang dimasukkan."
        steps={level1Steps}
      />

      <LevelSection 
        level="2" 
        age="4-6 th"
        goal="Menghitung jumlah benda (koin) dalam botol bekas dan mengenal angka (jumlah koin yang dimasukkan jangan terlalu banyak, mungkin 1-10/20 dulu aja)."
        observing="Anak dapat menghitung jumlah koin yang masuk ke botol atau koin yang dikeluarkannya satu demi satu."
        duration="Anak bermain selama 10-15 menit agar terbiasa menghitung jumlah benda yang masuk."
        steps={level2Steps}
      />

      <LevelSection 
        level="3" 
        age="6-8 th"
        goal="Mengetahui rincian benda (jumlah koin), menumbuhkan ingatan yang kuat terhadap koin yang telah dimasukkan/dikeluarkan ke wadah piring."
        observing="Anak dapat membedakan mana koin yang satuan, puluhan dan ratusan karena sudah diberi nama di wadah piring."
        duration="Anak bermain selama 15-20 menit agar terbiasa menghitung jumlah benda yang masuk dan menghitung ratusan."
        steps={level3Steps}
      />
    </CalistungPageLayout>
  );
}
