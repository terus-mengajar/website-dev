import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Gelembung Cinta";

export const metadata = {
  title: TITLE,
};

const SummarySection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <div>
      <h2 className="font-bold text-lg mb-4">Area Simulasi :</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Motorik Halus</li>
        <li>Sensoris</li>
        <li>Bahasa Berhitung</li>
      </ul>
    </div>
    <div>
      <h2 className="font-bold text-lg mb-4">Alat dan Bahan :</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Baskom / ember besar</li>
        <li>Air bersih</li>
        <li>Sabun cair / sabun cuci piring</li>
        <li>Sedotan</li>
        <li>Botol plastik kecil (untuk level lebih tinggi)</li>
        <li>Handuk / lap kering</li>
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
              src={`https://placehold.co/600x400/fdf2f8/9d174d?text=Persiapan+${index + 1}`}
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

const SafetySection = ({ notes }) => (
  <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-16">
    <h3 className="font-bold text-lg mb-4 text-red-700">Catatan Keamanan :</h3>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      {notes.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </ul>
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
    "Siapkan tempat bermain di dalam atau luar ruangan yang memudahkan pembersihan setelah bermain (misalnya di teras atau kamar mandi).",
    "Isi baskom dengan air bersih secukupnya. Tambahkan beberapa tetes sabun cair ke dalam air, lalu aduk perlahan hingga berbusa.",
    "Siapkan sedotan untuk setiap anak. Pastikan sedotan bersih dan aman digunakan.",
    "Letakkan handuk atau lap kering di dekat area bermain untuk membersihkan tangan dan meja setelah selesai.",
  ];

  const safetyNotes = [
    "Selalu dampingi anak saat bermain air, terutama untuk usia 2–3 tahun.",
    "Pastikan anak tidak meminum air sabun. Ingatkan bahwa air ini hanya untuk membuat gelembung.",
    "Jika anak memiliki kulit sensitif, gunakan sabun khusus bayi yang lembut.",
    "Keringkan lantai segera jika terkena tumpahan air untuk mencegah tergelincir.",
  ];

  const level1Steps = [
    "Ajak anak duduk di depan baskom berisi air sabun. Perkenalkan gelembung sabun dan biarkan anak menyentuh busa di permukaan air.",
    "Tunjukkan cara meniup gelembung menggunakan sedotan secara perlahan. Celupkan ujung sedotan ke air sabun, lalu tiup dengan lembut.",
    "Biarkan anak mencoba meniup gelembung sendiri. Arahkan anak untuk meniup dengan napas yang perlahan dan stabil.",
    "Amati gelembung yang terbentuk bersama anak. Ajak anak menyebutkan warna-warna yang terlihat di permukaan gelembung.",
  ];

  const level2Steps = [
    "Ajak anak memasukkan sedotan ke dalam air sabun lalu perlahan meniupnya untuk membuat gelembung sebesar mungkin.",
    "Minta anak menghitung berapa banyak gelembung yang berhasil dibuat dalam satu tarikan napas.",
    "Coba variasi: tiup pelan vs tiup kencang. Ajak anak mengamati perbedaan ukuran gelembung yang dihasilkan dan mendiskusikannya.",
  ];

  const level3Steps = [
    "Siapkan botol plastik kecil yang sudah dilubangi bagian bawahnya. Celupkan ujung botol ke air sabun, lalu tiup melalui mulut botol untuk menciptakan awan gelembung.",
    "Tantang anak membuat gelembung terbesar yang bisa ia hasilkan, lalu ukur garis tengah gelembung menggunakan penggaris sebelum meletus.",
    "Ajak anak mencatat hasil percobaan: berapa besar gelembung dari tiupan pelan vs kencang? Diskusikan mengapa hasilnya berbeda.",
  ];

  return (
    <CalistungPageLayout title={TITLE}>
      <SummarySection />

      <PrepSection steps={gamePrep} />

      <SafetySection notes={safetyNotes} />

      <LevelSection
        level="1"
        age="2-3 th"
        goal="Anak belajar mengenal sensasi air dan busa, melatih otot mulut dan kemampuan meniup, serta merangsang indra penglihatan melalui warna-warna pada gelembung sabun."
        observing="Anak dapat meniup gelembung menggunakan sedotan dengan bantuan, dan menunjukkan ketertarikan terhadap tekstur busa dan warna pada gelembung."
        duration="5-10 menit per hari."
        steps={level1Steps}
      />

      <LevelSection
        level="2"
        age="4-5 th"
        goal="Melatih kontrol napas dan kekuatan tiupan, mengembangkan kemampuan berhitung melalui menghitung gelembung, serta mengenal konsep sebab-akibat (tiup pelan vs kencang)."
        observing="Anak dapat secara mandiri meniup gelembung, menghitung jumlah gelembung yang terbentuk, dan membandingkan hasil dari cara meniup yang berbeda."
        duration="10-15 menit per hari."
        steps={level2Steps}
      />

      <LevelSection
        level="3"
        age="5-6 th"
        goal="Mengembangkan kemampuan eksplorasi sains sederhana, melatih pengukuran dasar, serta mendorong kemampuan berpikir kritis melalui pencatatan dan perbandingan hasil percobaan."
        observing="Anak dapat menggunakan alat alternatif untuk membuat gelembung, mengukur ukuran gelembung, mencatat hasil, dan menjelaskan perbedaan hasil berdasarkan pengamatannya."
        duration="15-20 menit per hari."
        steps={level3Steps}
      />
    </CalistungPageLayout>
  );
}
