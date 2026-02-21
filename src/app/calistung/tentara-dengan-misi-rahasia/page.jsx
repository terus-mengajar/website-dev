import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Tentara dengan Misi Rahasia";

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
        <li>Meja</li>
        <li>Kursi</li>
        <li>Kartu instruksi (opsional)</li>
        <li>Boneka/figur mainan (untuk representasi "tentara")</li>
      </ul>
    </div>
  </div>
);

const LevelSection = ({ level, age, goal, observing, duration, steps, challenges }) => (
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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

    {challenges && (
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h3 className="font-bold text-lg mb-4 text-amber-800">Tantangan :</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default function Page() {
  const level1Steps = [
    "Siapkan satu meja dan beberapa kursi di ruangan. Jelaskan kepada anak bahwa ia adalah 'tentara' yang mendapat misi rahasia untuk mengatur kursi.",
    "Minta anak untuk meletakkan kursi di samping meja. Tunjukkan contohnya terlebih dahulu sambil menyebutkan posisinya: 'di samping kanan' atau 'di samping kiri'.",
    "Setelah kursi diletakkan, minta anak untuk menyebutkan posisi kursi tersebut terhadap meja. Beri pujian saat anak menjawab dengan benar.",
    "Tambahkan tantangan dengan meminta anak meletakkan kursi di depan dan di belakang meja secara bergantian.",
  ];

  const level1Challenges = [
    "Mintalah anak untuk mengatur kursi sesuai instruksi tanpa dicontohkan terlebih dahulu.",
    "Tantang anak untuk menyebutkan kembali posisi semua kursi yang telah ia atur dalam satu kalimat.",
  ];

  const level2Steps = [
    "Siapkan meja dan beberapa kursi (3–5 kursi). Berikan misi kepada anak untuk mengatur kursi mengelilingi meja.",
    "Minta anak meletakkan kursi satu per satu di posisi yang berbeda: di depan, di belakang, di samping kanan, dan di samping kiri meja.",
    "Letakkan boneka/figur mainan di salah satu kursi. Minta anak menyebutkan posisi boneka itu terhadap meja (misal: 'boneka ada di kursi depan meja').",
    "Minta anak menghitung total kursi yang sudah diatur dan menyebutkan jumlahnya.",
  ];

  const level2Challenges = [
    "Mintalah anak untuk mengatur kursi mengikuti pola tertentu, misalnya: dua kursi di kiri, satu di kanan, satu di depan.",
    "Minta anak menceritakan misi yang ia lakukan kepada orang tua/guru menggunakan kalimat lengkap.",
  ];

  const level3Steps = [
    "Siapkan meja dan banyak kursi (5–8 kursi). Berikan kartu instruksi berisi gambar pola susunan kursi yang harus ditiru anak.",
    "Minta anak membaca kartu instruksi dan mengatur kursi sesuai pola yang ada di kartu tanpa dibantu.",
    "Setelah selesai, minta anak membandingkan susunan kursinya dengan kartu instruksi. Apakah sudah sesuai?",
    "Ajak anak berdiskusi: ada berapa kursi di kanan? Di kiri? Berapa total seluruh kursi? Minta anak menulis atau menyebutkan jawabannya.",
  ];

  const level3Challenges = [
    "Mintalah anak untuk membuat kartu instruksi sendiri lalu tantang orang lain untuk mengikuti polanya.",
    "Minta anak menghitung selisih jumlah kursi di sisi kanan dan kiri meja, lalu menyebutkan sisi mana yang lebih banyak.",
  ];

  return (
    <CalistungPageLayout title={TITLE}>
      <SummarySection />

      <LevelSection
        level="1"
        age="2-3 th"
        goal="Anak belajar mengenal kata posisi/preposisi sederhana (di samping, di depan, di belakang) melalui kegiatan menyusun kursi di sekitar meja."
        observing="Anak dapat memahami dan mengikuti instruksi posisi satu langkah, serta mulai menyebutkan posisi benda dengan kata yang tepat."
        duration="5-10 menit per hari."
        steps={level1Steps}
        challenges={level1Challenges}
      />

      <LevelSection
        level="2"
        age="4-5 th"
        goal="Meningkatkan pemahaman preposisi ganda (kombinasi posisi), melatih kemampuan berhitung benda nyata, dan mengembangkan kemampuan bercerita tentang posisi benda."
        observing="Anak dapat mengatur kursi sesuai instruksi multi-langkah, menghitung jumlah kursi, dan menceritakan kembali posisi setiap kursi dengan kalimat sederhana."
        duration="10-20 menit per hari."
        steps={level2Steps}
        challenges={level2Challenges}
      />

      <LevelSection
        level="3"
        age="5-6 th"
        goal="Mengembangkan kemampuan membaca instruksi gambar, berpikir kritis dalam mencocokkan pola, serta melatih kemampuan berhitung dan membandingkan jumlah benda."
        observing="Anak dapat secara mandiri membaca kartu instruksi, menyusun kursi sesuai pola, menghitung dan membandingkan jumlah kursi di berbagai posisi, serta membuat instruksi sendiri."
        duration="20-30 menit per hari."
        steps={level3Steps}
        challenges={level3Challenges}
      />
    </CalistungPageLayout>
  );
}
