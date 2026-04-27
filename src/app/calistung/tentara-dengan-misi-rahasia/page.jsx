import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Tentara Dengan Misi Rahasia";

export const metadata = {
  title: TITLE,
};

const SummarySection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <div className="flex flex-row gap-4">
      <h2 className="mb-4 whitespace-nowrap">Area Simulasi :&nbsp;&nbsp;</h2>
      <ul className="list-disc space-y-1 text-gray-700">
        <li>Motorik halus</li>
        <li>Fokus</li>
        <li>Keseimbangan</li>
        <li>Kelenturan tubuh</li>
      </ul>
    </div>
    <div className="flex flex-row gap-4">
      <h2 className="mb-4 whitespace-nowrap">Alat dan Bahan :&nbsp;&nbsp;</h2>
      <ul className="list-disc space-y-1 text-gray-700">
        <li>1 meja</li>
        <li>5 kursi</li>
        <li>Pastikan menggunakan meja dan kursi yang bisa dilewati anak</li>
        <li>
          Selimut atau kain panjang (opsional, untuk menutupi terowongan agar
          lebih seru)
        </li>
      </ul>
    </div>
  </div>
);

const LevelSection = ({
  level,
  age,
  goal,
  indicator,
  duration,
  steps,
  tantangan,
}) => (
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

    <h3 className="font-bold text-lg mb-6">Tantangan :</h3>
    <p className="" dangerouslySetInnerHTML={{ __html: tantangan }} />
  </div>
);

export default function Page() {
  const level1Steps = [
    {
      text: "Susun kursi berbaris rapi dan letakkan meja di ujungnya agar membentuk terowongan. Katakan: “Ayo kita jadi tentara! Kita harus masuk terowongan diam-diam.”",
      img: "/images/calistung/tentara-dengan-misi-rahasia/1.png",
      class: "md:col-span-2",
    },
    {
      text: "Bunda menunjukkan cara merangkak biasa melewati bawah kursi dan meja.",
      img: "/images/calistung/tentara-dengan-misi-rahasia/2.png",
      class: "md:col-span-2",
    },
    {
      text: "Ajak anak mengikuti perlahan. Ulangi 2–3 kali sambil beri pujian: “Wah, hebat banget bisa masuknya tanpa ketahuan!”",
      img: "/images/calistung/tentara-dengan-misi-rahasia/3.png",
      class: "md:col-span-2",
    },
  ];

  const level2Steps = [
    {
      text: "Merayap dengan lutut, siku, dan perut menempel lantai",
      img: "/images/calistung/tentara-dengan-misi-rahasia/4.png",
      class: "md:col-span-2",
    },
    {
      text: "Setelah keluar terowongan, anak berlari zigzag menghindari “musuh” (kursi yang disusun zigzag)",
      img: "/images/calistung/tentara-dengan-misi-rahasia/5.png",
      class: "md:col-span-2",
    },
    {
      text: "Berikan misi: “Ambil mainan di ujung sana dan bawa kembali lewat terowongan!”",
      img: "/images/calistung/tentara-dengan-misi-rahasia/6.png",
      class: "md:col-span-2",
    },
  ];

  const level3Steps = [
    {
      text: "Anak merayap (crawl) di bawah terowongan",
      img: "/images/calistung/tentara-dengan-misi-rahasia/7.png",
      class: "md:col-span-2",
    },
    {
      text: "Naik ke atas kursi, lalu melompat turun dengan hati-hati",
      img: "/images/calistung/tentara-dengan-misi-rahasia/8.png",
      class: "md:col-span-2",
    },
    {
      text: "Berjalan dari satu kursi ke kursi lainnya (dengan bantuan tangan jika perlu) Simulasikan misi dengan main peran sebagai tentara: “Komandan, anda harus lewati jalur rahasia dan selamatkan senjata dari markas musuh!”",
      img: "/images/calistung/tentara-dengan-misi-rahasia/9.png",
      class: "md:col-span-2",
    },
  ];

  return (
    <CalistungPageLayout title={TITLE}>
      <SummarySection />

      <LevelSection
        level="1"
        age="2-3 th"
        goal="Melatih koordinasi tangan dan kaki saat merangkak, meningkatkan keseimbangan tubuh, serta fokus mengikuti rute sederhana."
        indicator={`<ul class="list-disc ms-4">
          <li>Anak mampu merangkak melewati terowongan</li>
          <li>Anak mengikuti perintah sederhana</li>
          <li>Anak menunjukkan semangat mencoba</li>
        </ul>`}
        duration="15–25 menit"
        steps={level1Steps}
        tantangan={`<ul class="list-disc ms-4">
          <li>Merangkak dari awal sampai akhir tanpa menabrak kaki kursi</li>
          <li>Mencoba merangkak sambil membawa mainan kecil</li>
        </ul>`}
      />

      <LevelSection
        level="2"
        age="4-5 th"
        goal="Mengembangkan kelenturan dan kekuatan otot tubuh bagian atas dan bawah, belajar menyelesaikan tantangan motorik dengan arah yang lebih kompleks."
        indicator={`<ul class="list-disc ms-4">
          <li>Anak merayap dan bergerak melalui rute zigzag</li>
          <li>Anak mencoba menyelesaikan tantangan walau gagal</li>
          <li>Anak bisa mengikuti urutan dua langkah</li>
        </ul>`}
        duration="15–25 menit"
        steps={level2Steps}
        tantangan={`<ul class="list-disc ms-4">
          <li>Menyelesaikan dalam waktu tertentu (misalnya 20 detik)</li>
        </ul>`}
      />

      <LevelSection
        level="3"
        age="5-6 th"
        goal="Melatih kontrol tubuh dan keberanian dalam tantangan fisik, mengenal konsep urutan langkah, serta fokus menyelesaikan misi."
        indicator={`<ul class="list-disc ms-4">
          <li>Anak menyelesaikan rute penuh dengan aman dan percaya diri</li>
          <li>Anak mengingat dan mengikuti urutan gerakan</li>
          <li>Anak menunjukkan keseimbangan dan keberanian</li>
        </ul>`}
        duration="15–25 menit"
        steps={level3Steps}
        tantangan={`<ul class="list-disc ms-4">
          <li>Menyelesaikan seluruh rute tanpa jatuh</li>
          <li>Mengingat urutan gerakan (merayap → lompat → jalan di kursi → kembali merangkak)</li>
        </ul>`}
      />

      {/* CTA TIKTOK */}
      {/* <div className="bg-[#FBF6F2] rounded-xl p-12 flex flex-col sm:flex-row gap-8 relative overflow-hidden">
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
      </div> */}
    </CalistungPageLayout>
  );
}
