import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Goool!";

export const metadata = {
  title: TITLE,
};

const SummarySection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <div>
      <h2 className="font-bold text-lg mb-4">Area Simulasi :</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Prascil</li>
        <li>Bahasa Berhitung</li>
        <li>Kosakata dan Tata Bahasa</li>
      </ul>
    </div>
    <div>
      <h2 className="font-bold text-lg mb-4">Alat dan Bahan :</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Gelas plastik beberapa buah</li>
        <li>Bola-bola kecil / bola plastik / pompom</li>
        <li>Meja atau lantai sebagai area bermain</li>
        <li>Lakban / selotip (untuk menandai garis)</li>
        <li>Kertas dan spidol (untuk label/skor)</li>
      </ul>
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
  const level1Steps = [
    "Siapkan beberapa gelas plastik yang berjejer di atas meja. Letakkan bola-bola kecil di dekat anak.",
    "Minta anak untuk menjatuhkan atau memasukkan bola satu per satu ke dalam gelas yang ada di depannya.",
    "Arahkan anak untuk memasukkan bola sesuai target gelas yang ditunjuk. Ulangi sampai semua bola masuk ke dalam gelas.",
    "Hitung bersama anak berapa banyak bola yang berhasil masuk ke dalam gelas.",
  ];

  const level2Steps = [
    "Susun gelas plastik berjejer dengan jarak tertentu di atas meja. Beri nomor pada masing-masing gelas.",
    "Tentukan garis lempar menggunakan lakban di lantai. Minta anak berdiri di belakang garis.",
    "Anak melempar bola satu per satu ke arah gelas-gelas yang sudah disiapkan.",
    "Setelah semua bola dilempar, minta anak menghitung berapa gelas yang berhasil dimasuki bola.",
    "Catat hasilnya dan ulangi permainan. Bandingkan skor tiap ronde dan tunjukkan mana yang lebih banyak.",
  ];

  const level3Steps = [
    "Susun gelas plastik berjejer dengan berbagai jarak (dekat, sedang, jauh). Beri nilai angka pada setiap gelas.",
    "Anak melempar bola ke arah gelas-gelas tersebut dari garis yang sudah ditentukan.",
    "Setiap bola yang masuk ke gelas akan mendapatkan skor sesuai angka di gelas tersebut.",
    "Setelah semua bola dilempar, minta anak menjumlahkan total skor yang didapat dari semua gelas yang berhasil dimasuki.",
    "Bandingkan skor antar ronde. Diskusikan strategi: gelas mana yang lebih mudah/sulit, dan kenapa.",
  ];

  return (
    <CalistungPageLayout title={TITLE}>
      <SummarySection />

      <LevelSection
        level="1"
        age="2-4 th"
        goal="Anak belajar melatih koordinasi mata dan tangan, mengarahkan bola ke target yang tepat, serta mengenal konsep 'masuk' dan 'tidak masuk'."
        observing="Anak dapat fokus memasukkan bola ke dalam gelas satu per satu dan mulai bisa menghitung jumlah bola yang berhasil masuk."
        duration="5-10 menit per hari."
        steps={level1Steps}
      />

      <LevelSection
        level="2"
        age="4-5 th"
        goal="Meningkatkan kemampuan melempar dengan arah yang tepat, melatih konsentrasi, dan mengenal konsep membandingkan jumlah (lebih banyak/sedikit)."
        observing="Anak dapat secara mandiri melempar bola ke arah target dan menghitung bola yang berhasil masuk, serta membandingkan hasil antar ronde."
        duration="10-20 menit per hari."
        steps={level2Steps}
      />

      <LevelSection
        level="3"
        age="5-6 th"
        goal="Mengembangkan kemampuan berhitung dan penjumlahan sederhana melalui sistem skor, serta melatih kemampuan strategi dan pengambilan keputusan."
        observing="Anak dapat menjumlahkan skor dari beberapa gelas secara mandiri, membandingkan hasil antar ronde, dan menentukan strategi melempar yang paling efektif."
        duration="20-30 menit per hari."
        steps={level3Steps}
      />
    </CalistungPageLayout>
  );
}
