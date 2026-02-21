import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Waktunya Bersih-Bersih";

export const metadata = {
  title: TITLE,
};

const SummarySection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <div>
      <h2 className="font-bold text-lg mb-4">Area Simulasi :</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Prascil</li>
        <li>Fokus</li>
      </ul>
    </div>
    <div>
      <h2 className="font-bold text-lg mb-4">Alat dan Bahan :</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Keranjang / wadah penyimpanan mainan</li>
        <li>Berbagai jenis mainan (mobil-mobilan, bola, balok, dsb.)</li>
        <li>Label warna / tulisan nama kategori mainan</li>
        <li>Kantong plastik atau kotak kecil (untuk memisahkan jenis)</li>
        <li>Timer / jam pasir (opsional)</li>
      </ul>
    </div>
  </div>
);

const PrepSection = ({ steps }) => (
  <div className="mb-16">
    <h3 className="font-bold text-lg mb-6">Cara Menyiapkan Permainan :</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200">
            <img
              src={`https://placehold.co/600x400/faf5ff/6b21a8?text=Persiapan+${index + 1}`}
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
            <span className="font-bold text-gray-400 shrink-0">{index + 1}.</span>
            <p className="text-gray-600 leading-relaxed">{step}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Page() {
  const gamePrep = [
    "Sebar berbagai jenis mainan secara acak di lantai atau meja. Pastikan semua mainan terlihat jelas dan dapat dijangkau anak.",
    "Siapkan keranjang atau wadah penyimpanan di dekat area bermain. Bisa menggunakan satu keranjang besar, atau beberapa keranjang kecil yang sudah diberi label kategori.",
  ];

  const level1Steps = [
    "Tunjukkan kepada anak mainan-mainan yang berserakan di lantai. Katakan dengan ceria: 'Waktunya bersih-bersih! Yuk kita rapikan mainan bersama!'",
    "Ambil satu mainan dan masukkan ke dalam keranjang sambil menyebutkan namanya. Minta anak untuk meniru dan melakukan hal yang sama.",
    "Dampingi anak satu per satu mengambil mainan dan memasukkannya ke dalam keranjang. Berikan semangat setiap kali anak berhasil.",
    "Setelah semua mainan masuk keranjang, hitung bersama berapa banyak mainan yang sudah dirapikan. Beri tepuk tangan sebagai apresiasi!",
  ];

  const level2Steps = [
    "Sebar berbagai jenis mainan (misalnya: mobil-mobilan, bola, dan balok warna-warni) di lantai secara acak.",
    "Siapkan dua atau tiga keranjang berbeda, masing-masing dengan label kategori (misal: 'kendaraan', 'bola', 'balok').",
    "Minta anak memilih satu mainan, mengidentifikasi jenisnya, lalu menyimpannya di keranjang yang sesuai kategori.",
    "Lanjutkan hingga semua mainan tersortir. Ajak anak menghitung jumlah mainan di masing-masing keranjang.",
  ];

  const level3Steps = [
    "Sebar banyak mainan beragam jenis dan warna. Ajak anak berdiskusi terlebih dahulu: mainan mana yang masuk ke kelompok mana?",
    "Minta anak membuat aturan sendiri untuk mengelompokkan mainan, misalnya berdasarkan warna, ukuran, atau jenis bahan.",
    "Anak menyortir semua mainan secara mandiri sesuai aturan yang telah ia tentukan sendiri.",
    "Setelah selesai, minta anak menceritakan cara pengelompokannya: 'Kenapa mobil merah dimasukkan ke sini?'",
    "Tantang anak untuk menghitung total mainan lalu menuliskan atau menyebutkan jumlah di masing-masing kelompok. Kelompok mana yang paling banyak?",
  ];

  return (
    <CalistungPageLayout title={TITLE}>
      <SummarySection />

      <PrepSection steps={gamePrep} />

      <LevelSection
        level="1"
        age="2-3 th"
        goal="Anak belajar mengenal konsep 'rapi' dan 'berantakan', melatih kemampuan mengambil dan menyimpan benda, serta mengenal nama-nama mainan."
        observing="Anak dapat secara mandiri mengambil mainan dan memasukkannya ke dalam keranjang, serta mulai menyebutkan nama benda yang ia pegang."
        duration="~5 menit."
        steps={level1Steps}
      />

      <LevelSection
        level="2"
        age="4-5 th"
        goal="Mengembangkan kemampuan mengelompokkan benda berdasarkan kategori, melatih konsentrasi dan kemandirian, serta mengenal konsep berhitung dan perbandingan jumlah."
        observing="Anak dapat membedakan dan menyortir mainan berdasarkan jenisnya secara mandiri, serta mampu menghitung dan membandingkan jumlah mainan di setiap kelompok."
        duration="5-10 menit."
        steps={level2Steps}
      />

      <LevelSection
        level="3"
        age="5-6 th"
        goal="Melatih kemampuan berpikir kritis dalam membuat aturan pengelompokan sendiri, mengembangkan kemandirian, serta memperkuat kemampuan berhitung dan bercerita."
        observing="Anak dapat membuat sistem pengelompokan mainan secara mandiri, menjelaskan alasannya, dan mampu menghitung serta membandingkan jumlah di setiap kelompok dengan tepat."
        duration="10-15 menit."
        steps={level3Steps}
      />
    </CalistungPageLayout>
  );
}
