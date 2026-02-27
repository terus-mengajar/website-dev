import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Balap Sedotan";

export const metadata = {
  title: TITLE,
};

const SummarySection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <div className="flex flex-row gap-4">
      <h2 className="mb-4 whitespace-nowrap">Area Simulasi :&nbsp;&nbsp;</h2>
      <ul className="list-disc space-y-1 text-gray-700">
        <li>Motorik Kasar</li>
        <li>Fokus</li>
      </ul>
    </div>
    <div className="flex flex-row gap-4">
      <h2 className="mb-4 whitespace-nowrap">Alat dan Bahan :&nbsp;&nbsp;</h2>
      <ul className="list-disc space-y-1 text-gray-700">
        <li>2 buah botol plastik bekas ukuran sedang</li>
        <li>Sedikit beras untuk pemberat</li>
        <li>10 buah sedotan plastik</li>
        <li>5 buah Kursi</li>
        <li>1 buah penjepit baju</li>
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
              <td className="align-top whitespace-nowrap pr-4">
                Manfaat Utama :{" "}
              </td>
              <td className="align-top pb-2">{goal}</td>
            </tr>
            <tr>
              <td className="align-top pr-4">Indikator yang diharapkan : </td>
              <td className="align-top pb-2">
                <p
                  className=""
                  dangerouslySetInnerHTML={{ __html: indicator }}
                />
              </td>
            </tr>
            <tr>
              <td className="align-top whitespace-nowrap pr-4">
                Durasi Bermain :{" "}
              </td>
              <td className="align-top">{duration}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <h3 className="font-bold text-lg mb-6">Cara Bermain :</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {steps.map((step, index) => (
        <div key={index} className={`flex gap-4 ${step.class ?? ""}`}>
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
      text: "Anak mengambil satu sedotan dari botol. Anak berjalan pelan-pelan ke botol yang kosong sambil menggenggam sedotan erat.",
      img: "/images/calistung/balap-sedotan/5.png",
    },
    {
      text: "Sampai di botol kosong, anak memasukkan sedotan ke dalamnya. Ulangi sampai semua sedotan berpindah.",
      img: "/images/calistung/balap-sedotan/6.png",
    },
    {
      text: "Ganti jalan biasa dengan jalan mundur, merangkak, atau jalan jinjit",
      img: "/images/calistung/balap-sedotan/7.png",
    },
    {
      text: "Ubah jarak botol jadi lebih dekat (1 meter) agar anak tidak lelah",
      img: "/images/calistung/balap-sedotan/8.png",
    },
  ];

  const level2Steps = [
    {
      text: "Anak mengambil satu sedotan lalu berlari kecil menuju botol kosong. Letakkan sedotan ke dalam botol dengan hati-hati.",
      img: "/images/calistung/balap-sedotan/9.png",
    },
    {
      text: "Kembali ke botol pertama untuk mengambil sedotan berikutnya. Lanjutkan sampai semua sedotan berpindah.",
      img: "/images/calistung/balap-sedotan/10.png",
    },
    {
      text: "Tambahkan rintangan kecil (misalnya bantal atau kardus) untuk dilompati",
      img: "/images/calistung/balap-sedotan/11.png",
    },
    {
      text: "Ajak anak berlomba dengan Bunda atau saudara: siapa yang lebih cepat memindahkan 5 sedotan",
      img: "/images/calistung/balap-sedotan/12.png",
    },
  ];

  const level3Steps = [
    {
      text: "Anak mengambil dua sedotan sekaligus dengan dua tangan. Berlari cepat ke botol kosong, lalu meletakkan sedotan secara tepat.",
      img: "/images/calistung/balap-sedotan/13.png",
    },
    {
      text: "Tambahkan tantangan waktu: “Selesaikan 10 sedotan dalam 2 menit!” Ulangi beberapa ronde.",
      img: "/images/calistung/balap-sedotan/14.png",
    },
    {
      text: "Atur jalur zigzag menggunakan kursi. Main sambil berhitung: “Setiap ambil sedotan, sebutkan angka 1 sampai 10.”",
      img: "/images/calistung/balap-sedotan/15.png",
      class: "md:col-span-2",
    },
    {
      text: "Tantangan tambahan: pindahkan sedotan pakai penjepit baju (motorik halus + fokus)",
      img: "/images/calistung/balap-sedotan/16.png",
      class: "md:col-span-2",
    },
  ];

  return (
    <CalistungPageLayout title={TITLE}>
      <SummarySection />

      <h3 className="font-bold text-lg mb-6">Cara Menyiapkan Permainan :</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className={`flex gap-4`}>
          <div className="flex flex-col gap-2 p-4 rounded-lg overflow-hidden border border-[#F2E4D6] w-full h-full">
            <img
              src="/images/calistung/balap-sedotan/1.png"
              alt="1"
              className="w-full h-40 object-contain"
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">1.</span>
              <p className="">
                Ambil 2 botol plastik ukuran sedang. Masukkan sedikit beras ke
                dalam masing-masing botol agar tidak mudah terguling saat
                dimainkan.
              </p>
            </div>
          </div>
        </div>

        <div className={`flex gap-4`}>
          <div className="flex flex-col gap-2 p-4 rounded-lg overflow-hidden border border-[#F2E4D6] w-full h-full">
            <img
              src="/images/calistung/balap-sedotan/2.png"
              alt="2"
              className="w-full h-40 object-contain"
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">2.</span>
              <p className="">
                Masukkan semua sedotan ke salah satu botol. Botol satunya
                dibiarkan kosong.
              </p>
            </div>
          </div>
        </div>

        <div className={`flex gap-4`}>
          <div className="flex flex-col gap-2 p-4 rounded-lg overflow-hidden border border-[#F2E4D6] w-full h-full">
            <img
              src="/images/calistung/balap-sedotan/3.png"
              alt="3"
              className="w-full h-40 object-contain"
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">3.</span>
              <p className="">
                Letakkan kedua botol di tempat yang agak lapang, misalnya
                halaman, teras, atau ruang tengah. Jarak antara kedua botol
                sekitar 2 meter (boleh disesuaikan dengan usia anak).
              </p>
            </div>
          </div>
        </div>

        <div className={`flex gap-4`}>
          <div className="flex flex-col gap-2 p-4 rounded-lg overflow-hidden border border-[#F2E4D6] w-full h-full">
            <img
              src="/images/calistung/balap-sedotan/4.png"
              alt="4"
              className="w-full h-40 object-contain"
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">4.</span>
              <p className="">
                Pastikan lantai atau tanah tidak licin dan bebas dari benda
                tajam. Anak berdiri di depan botol yang berisi sedotan dan siap
                memulai tantangan.
              </p>
            </div>
          </div>
        </div>
      </div>

      <LevelSection
        level="1"
        age="2-3 th"
        goal="Melatih koordinasi tangan dan kaki saat berjalan membawa benda, belajar sabar dan fokus menyelesaikan satu per satu."
        indicator={`<ul class="list-disc ms-4">
          <li>Anak bisa membawa dan memasukkan sedotan tanpa terjatuh</li>
          <li>Anak mengikuti instruksi satu langkah dengan baik</li>
        </ul>`}
        duration="15–20 menit"
        steps={level1Steps}
      />

      <LevelSection
        level="2"
        age="4-5 th"
        goal="Mengembangkan keseimbangan saat bergerak cepat, belajar mengatur ritme gerakan, dan tetap teliti saat meletakkan benda."
        indicator={`<ul class="list-disc ms-4">
          <li>Anak bisa bergerak cepat dan tetap terarah</li>
          <li>Anak mampu menyelesaikan tugas dengan urutan benar</li>
        </ul>`}
        duration="15–20 menit"
        steps={level2Steps}
      />

      <LevelSection
        level="3"
        age="5-6 th"
        goal="Menstimulasi kemampuan fokus di bawah tekanan waktu, melatih kecepatan respons motorik dan perencanaan gerak."
        indicator={`<ul class="list-disc ms-4">
          <li>Anak mampu menyelesaikan tantangan waktu</li>
          <li>Anak mampu memusatkan perhatian meskipun bergerak aktif</li>
        </ul>`}
        duration="15–20 menit"
        steps={level3Steps}
      />

      <p className="mb-8">
        Aktivitas ini bisa diulang setiap beberapa hari untuk memperkuat
        pemahaman dan keterampilan anak secara menyenangkan.
      </p>

      <div className="bg-[#FBF6F2] rounded-xl p-12 flex flex-col sm:flex-row gap-8 relative overflow-hidden">
        <div className="hidden md:block absolute -bottom-16 -left-16 opacity-40 pointer-events-none -rotate-15 -translate-x-10 translate-y-35">
          <img
            src="/images/shapes/logo-tm-cream.avif"
            alt=""
            className="w-110 h-110 object-contain"
          />
        </div>

        <div className="z-999">
          <h2 className="font-bold text-4xl mb-4 text-[#8562A8]">
            Cara Memainkannya
          </h2>
          <p className="mb-4">
            Lihat video disamping untuk melihat bagaimana cara memainkannya
            sesuai dengan instruksi yang tertera
          </p>
          <button className="tombol-hitam">Lihat di Tiktok</button>
        </div>

        <div>
          <img src="/images/calistung/misi-penyelamatan/17.png" alt="17" />
        </div>
      </div>
    </CalistungPageLayout>
  );
}
