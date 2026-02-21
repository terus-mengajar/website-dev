import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Balap Sedotan";

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
        <li>4 botol / toples plastik bening dengan tutup</li>
        <li>Sedotan plastik</li>
        <li>Gunting</li>
        <li>1 buah / bola kecil (pompom / kapas)</li>
        <li>Isolasi / selotip</li>
        <li>Penanda / spidol</li>
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
              src={`https://placehold.co/600x400/eff6ff/1e40af?text=Persiapan+${index + 1}`}
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
    "Siapkan 4 botol plastik bening. Buat lubang kecil di tutup setiap botol menggunakan gunting, cukup besar untuk dimasuki sedotan.",
    "Masukkan sedotan melalui lubang di tutup botol. Rekatkan sekitar lubang menggunakan isolasi agar udara tidak bocor saat ditiup.",
    "Potong sedotan agar panjangnya sesuai dan tidak terlalu dalam masuk ke dalam botol. Pastikan tiupan udara bisa menggerakkan benda di dalam.",
    "Letakkan pompom atau bola kecil ke dalam botol. Tutup botol dengan tutup yang sudah dipasangi sedotan. Botol siap digunakan.",
  ];

  const level1Steps = [
    "Pegang botol dengan satu tangan dan masukkan ujung sedotan ke mulut. Arahkan anak untuk meniup sedotan perlahan untuk merasakan udara keluar.",
    "Minta anak meniup sedotan sehingga pompom di dalam botol bergerak ke atas. Lihatlah pompom naik saat ditiup keras!",
    "Ulangi tiupan beberapa kali. Ajak anak menghitung berapa kali ia berhasil membuat pompom bergerak mencapai bagian atas botol.",
    "Gantikan pompom dengan benda ringan lain (kapas, kertas kecil) dan bandingkan bagaimana benda yang berbeda bereaksi terhadap tiupan.",
  ];

  const level2Steps = [
    "Susun dua botol berdampingan. Minta anak dan pendamping masing-masing memegang satu botol. Siapa yang pompomnya lebih cepat naik?",
    "Tentukan aturan: tiupan harus terus-menerus tanpa berhenti sampai pompom mencapai atas. Mulailah hitungan mundur bersama: 3, 2, 1, mulai!",
    "Setelah satu ronde, tukar posisi botol lalu ulangi. Hitung skor tiap pemain: siapa yang menang paling banyak ronde?",
    "Coba variasi: ganti sedotan dengan sedotan yang lebih besar/lebih kecil. Amati bersama anak perbedaan hasilnya.",
  ];

  const level3Steps = [
    "Buat lintasan balap menggunakan kursi-kursi yang dijajarkan. Letakkan botol di atas setiap kursi sebagai pos yang harus dilewati.",
    "Anak berjalan dari satu kursi ke kursi berikutnya sambil membawa dan meniup botolnya. Pompom harus berhasil naik di setiap pos sebelum bisa pindah ke pos berikutnya.",
    "Jika pompom belum naik, anak harus tetap di pos itu dan meniup lagi sampai berhasil. Hitung berapa banyak tiupan yang dibutuhkan di setiap pos.",
    "Setelah menyelesaikan semua pos, ajak anak menjumlahkan total tiupan yang digunakan di seluruh lintasan dan catat hasilnya.",
  ];

  return (
    <CalistungPageLayout title={TITLE}>
      <SummarySection />

      <PrepSection steps={gamePrep} />

      <LevelSection
        level="1"
        age="2-3 th"
        goal="Melatih otot mulut dan kemampuan meniup dengan terkontrol melalui sedotan, serta melatih koordinasi tangan dan mulut bekerja bersamaan."
        observing="Anak dapat meniup sedotan dengan cukup kuat untuk menggerakkan pompom di dalam botol, dan mulai bisa menghitung jumlah tiupan yang berhasil."
        duration="5-10 menit per hari."
        steps={level1Steps}
      />

      <LevelSection
        level="2"
        age="4-5 th"
        goal="Menumbuhkan semangat kompetisi yang sehat, melatih kontrol napas panjang yang stabil, dan mengembangkan kemampuan menghitung skor sederhana."
        observing="Anak dapat bermain dengan aturan balap, menjaga tiupan tetap stabil, menghitung poin kemenangan, dan membandingkan hasil dari sedotan berukuran berbeda."
        duration="10-20 menit per hari."
        steps={level2Steps}
      />

      <LevelSection
        level="3"
        age="5-6 th"
        goal="Mengembangkan kemampuan berhitung dan penjumlahan dalam konteks permainan, melatih strategi, dan meningkatkan daya tahan fokus selama aktivitas multi-pos."
        observing="Anak dapat menyelesaikan seluruh lintasan balap secara mandiri, menghitung tiupan di setiap pos, dan menjumlahkan total tiupan dengan tepat."
        duration="15-20 menit per hari."
        steps={level3Steps}
      />
    </CalistungPageLayout>
  );
}
