import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Waktunya Bersih-Bersih";

export const metadata = {
  title: TITLE,
};

const SummarySection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <div className="flex flex-row gap-4">
      <h2 className="mb-4 whitespace-nowrap">Area Simulasi :&nbsp;&nbsp;</h2>
      <ul className="list-disc space-y-1 text-gray-700">
        <li>Motorik Halus</li>
        <li>Fokus</li>
      </ul>
    </div>
    <div className="flex flex-row gap-4">
      <h2 className="mb-4 whitespace-nowrap">Alat dan Bahan :&nbsp;&nbsp;</h2>
      <ul className="list-disc space-y-1 text-gray-700">
        <li>1 buah kain lap bersih</li>
        <li>Air secukupnya (untuk membasahi kain)</li>
        <li>Botol semprot (spray)</li>
        <li>
          Beberapa mainan anak (campurkan antara yang bisa dibasahi dan tidak)
        </li>
        <li>Alat tambahan (opsional): sikat gigi bekas, spons, sabun</li>
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
                  dangerouslySetInnerHTML={{ __html: indicator.trim() }}
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
      text: "Anak memilih satu mainan dari meja.",
      img: "/images/calistung/waktunya-bersih-bersih/3.png",
    },
    {
      text: "Bunda bantu menyemprot mainan dengan air.",
      img: "/images/calistung/waktunya-bersih-bersih/4.png",
    },
    {
      text: "Anak mengelap mainan dengan kain sampai terlihat bersih.",
      img: "/images/calistung/waktunya-bersih-bersih/5.png",
    },
    {
      text: "Lanjut ke mainan berikutnya satu per satu.",
      img: "/images/calistung/waktunya-bersih-bersih/6.png",
    },
  ];

  const level2Steps = [
    {
      text: "Anak memilah mana mainan yang boleh dibasahi dan mana yang tidak.",
      img: "/images/calistung/waktunya-bersih-bersih/7.png",
    },
    {
      text: "Anak menyemprot sendiri mainan dengan botol spray. Gunakan kain lap atau spons untuk membersihkan mainan.",
      img: "/images/calistung/waktunya-bersih-bersih/8.png",
    },
    {
      text: "Ambil mainan yang lain, gunakan sikat kecil untuk membersihkannya",
      img: "/images/calistung/waktunya-bersih-bersih/9.png",
    },
    {
      text: "Keringkan mainan satu per satu. Hitung jumlah mainan yang sudah dibersihkan",
      img: "/images/calistung/waktunya-bersih-bersih/10.png",
    },
  ];

  const level3Steps = [
    {
      text: "Anak menyortir mainan berdasarkan jenis bahan: plastik dan elektronik.",
      img: "/images/calistung/waktunya-bersih-bersih/11.png",
    },
    {
      text: "Anak menentukan metode pembersihan sesuai bahan mainan: disemprot + dilap, disikat, atau cukup diseka kering. Anak membersihkan semua mainan satu per satu dengan teknik berbeda.",
      img: "/images/calistung/waktunya-bersih-bersih/12.png",
    },
    {
      text: "Cuci mainan sambil menyebutkan warna atau huruf awal nama mainan",
      img: "/images/calistung/waktunya-bersih-bersih/13.png",
    },
    {
      text: "Setelah selesai, mainan dijemur lalu ditata kembali ke tempatnya.",
      img: "/images/calistung/waktunya-bersih-bersih/14.png",
    },
    {
      text: "Ajak anak refleksi kegiatan dengan bertanya apa saja yang dia lakukan. Dorong anak agar bercerita “Tadi aku bersihin 8 mainan, yang paling kotor excavator.”",
      img: "/images/calistung/waktunya-bersih-bersih/15.png",
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
              src="/images/calistung/waktunya-bersih-bersih/1.png"
              alt="1"
              className="w-full h-40 object-contain"
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">1.</span>
              <p className="">
                Siapkan beberapa mainan anak. Campur mainan yang bisa
                dibersihkan dengan air dan yang tidak (seperti mainan elektronik
                atau berbahan baterai). Letakkan semua mainan di atas meja atau
                alas lantai.
              </p>
            </div>
          </div>
        </div>

        <div className={`flex gap-4`}>
          <div className="flex flex-col gap-2 p-4 rounded-lg overflow-hidden border border-[#F2E4D6] w-full h-full">
            <img
              src="/images/calistung/waktunya-bersih-bersih/2.png"
              alt="2"
              className="w-full h-40 object-contain"
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">2.</span>
              <p className="">
                Siapkan kain lap bersih yang sudah dibasahi, botol spray berisi
                air, serta alat pembersih tambahan seperti spons atau sikat
                gigi. Pastikan tempat bermain aman dan tidak licin. Gunakan alas
                plastik atau handuk agar tidak becek. Jelaskan kepada anak bahwa
                kita akan bermain “cuci mainan” hari ini
              </p>
            </div>
          </div>
        </div>
      </div>

      <LevelSection
        level="1"
        age="2-3 th"
        goal="Melatih gerakan jari saat mengelap, mengenal konsep bersih-kotor, dan belajar mengikuti instruksi sederhana."
        indicator={`<ul class="list-disc ms-4">
          <li>Anak bisa mengelap mainan dengan arah yang konsisten</li>
          <li>Anak fokus membersihkan satu per satu</li>
        </ul>`}
        duration="15 menit"
        steps={level1Steps}
      />

      <LevelSection
        level="2"
        age="4-5 th"
        goal="Mengembangkan koordinasi tangan dan mata saat menyemprot dan mengelap, melatih fokus menyelesaikan tugas."
        indicator={`<ul class="list-disc ms-4">
          <li>Anak bisa menyemprot dan mengelap dengan baik</li>
          <li>Anak bisa memilah mainan yang boleh dan tidak boleh dibasahi</li>
        </ul>`}
        duration="15 menit"
        steps={level2Steps}
      />

      <LevelSection
        level="3"
        age="5-6 th"
        goal="Meningkatkan kemampuan berpikir logis dan pengambilan keputusan saat memilih metode pembersihan, melatih tanggung jawab."
        indicator={`<ul class="list-disc ms-4">
          <li>Anak bisa menentukan alat pembersih sesuai jenis mainan</li>
          <li>Anak bisa membersihkan mainan hingga selesai dengan rapi</li>
        </ul>`}
        duration="15 menit"
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
