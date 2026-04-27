import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Menelusuri Jalur Yang Menantang";

export const metadata = {
  title: TITLE,
};

const SummarySection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <div className="flex flex-row gap-4">
      <h2 className="mb-4 whitespace-nowrap">Area Simulasi :&nbsp;&nbsp;</h2>
      <ul className="list-disc space-y-1 text-gray-700">
        <li>Motorik kasar</li>
        <li>Fokus dan konsentrasi</li>
        <li>Koordinasi mata dan tangan</li>
        <li>Kesiapan berhitung</li>
      </ul>
    </div>
    <div className="flex flex-row gap-4">
      <h2 className="mb-4 whitespace-nowrap">Alat dan Bahan :&nbsp;&nbsp;</h2>
      <ul className="list-disc space-y-1 text-gray-700">
        <li>Lakban (untuk membuat garis di lantai)</li>
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
  preparations,
  steps,
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
              <td className="align-top pb-2">{indicator}</td>
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

    <h3 className="font-bold text-lg mb-6">Cara Menyiapkan Jalur :</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg overflow-hidden border border-[#F2E4D6] mb-8">
      {preparations.map((prep, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col gap-2 px-12 py-4 w-full h-full items-center">
            <img
              src={prep.img}
              alt={`Step ${index + 1}`}
              className="w-38 h-34 object-contain"
            />

            <p className="text-center text-sm">{prep.text}</p>
          </div>
        </div>
      ))}
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
  const level1Preparations = [
    {
      text: "Garis Lurus",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/1.png",
    },
    {
      text: "Garis Melengkung",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/2.png",
    },
    {
      text: "Garis Zig Zag",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/3.png",
    },
  ];

  const level1Steps = [
    {
      text: "Ajak anak melihat dan menyentuh jalurnya terlebih dahulu.",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/4.png",
    },
    {
      text: "Mulai dari garis lurus, ajak anak berjalan biasa mengikuti garis.",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/5.png",
    },
    {
      text: "Di garis zigzag, ajak anak berjalan jinjit perlahan-lahan.",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/6.png",
    },
    {
      text: "Di jalur melengkung, anak diajak merangkak mengikuti arah lengkung.",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/7.png",
    },
    {
      text: "Beri semangat: “Wah, kamu hebat bisa jalan di jalurnya!”",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/8.png",
      class: "md:col-span-2",
    },
  ];

  const level2Preparations = [
    {
      text: "Garis Lurus",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/1.png",
    },
    {
      text: "Garis Melengkung",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/2.png",
    },
    {
      text: "Garis Zig Zag",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/3.png",
    },
  ];

  const level2Steps = [
    {
      text: "Anak diminta mengikuti garis lurus sambil melompat dengan dua kaki.",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/9.png",
    },
    {
      text: "Lanjut ke garis zigzag, anak diajak berjalan mundur dengan hati-hati.",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/10.png",
    },
    {
      text: "Di jalur melengkung, anak berjalan jinjit tanpa menyentuh luar garis.",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/11.png",
    },
    {
      text: "Tambahkan tantangan kecil: “Kamu bisa tepuk tangan 2 kali  sambil jalan mundur nggak?”",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/12.png",
    },
  ];

  const level3Preparations = [
    {
      text: "Garis Lurus",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/1.png",
    },
    {
      text: "Garis Melengkung",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/2.png",
    },
    {
      text: "Garis Zig Zag",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/3.png",
    },
  ];

  const level3Steps = [
    {
      text: "Anak melompat satu kaki mengikuti garis lurus, ganti kaki saat berbalik arah.",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/13.png",
    },
    {
      text: "Di garis zigzag, anak jalan miring (menyamping seperti kepiting).",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/14.png",
    },
    {
      text: "Di jalur melengkung, anak merayap rendah (crawl).",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/15.png",
    },
    {
      text: "Tambahkan misi kecil: “Bisa selesaikan semua jalur dalam waktu 45 detik? Yuk kita coba!”",
      img: "/images/calistung/menelusuri-jalur-yang-menantang/16.png",
    },
  ];

  return (
    <CalistungPageLayout title={TITLE}>
      <SummarySection />

      <LevelSection
        level="1"
        age="2-3 th"
        goal="Mengenal arah dan bentuk jalur, melatih keseimbangan saat berjalan dan merangkak, serta mulai fokus pada gerakan sederhana."
        indicator="Anak dapat mengikuti jalur dengan berjalan, jinjit, atau merangkak sederhana sesuai arahan."
        duration="15–30 menit setiap sesi"
        preparations={level1Preparations}
        steps={level1Steps}
      />

      <LevelSection
        level="2"
        age="4-5 th"
        goal="Mengembangkan koordinasi tubuh, kontrol gerakan, serta fokus mengikuti variasi gerak sesuai instruksi."
        indicator="Anak mampu melakukan gerakan bervariasi seperti lompat, jinjit, dan mundur sambil menjaga keseimbangan."
        duration="15–30 menit setiap sesi"
        preparations={level2Preparations}
        steps={level2Steps}
      />

      <LevelSection
        level="3"
        age="5-6 th"
        goal="Melatih kelincahan, daya ingat gerakan, konsentrasi lebih tinggi, serta kemampuan menyelesaikan tantangan dalam waktu tertentu."
        indicator="Anak dapat mengikuti semua jalur dengan kombinasi gerakan lebih kompleks dan menyelesaikannya secara mandiri atau dalam tantangan waktu."
        duration="15–30 menit setiap sesi"
        preparations={level3Preparations}
        steps={level3Steps}
      />

      <p className="mb-8">
        Aktivitas ini bisa diulang setiap beberapa hari untuk memperkuat
        pemahaman dan keterampilan anak secara menyenangkan.
      </p>

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
