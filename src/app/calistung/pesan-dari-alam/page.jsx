import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Pesan Dari Alam";

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
        <li>
          10 lembar daun kering (untuk usia 2-3 tahun) 20 lembar daun kering
          (untuk usia 4-6 tahun)
        </li>
        <li>Lem kertas secukupnya</li>
        <li>1 lembar kardus tipis</li>
        <li>Spidol</li>
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
              className={`w-full object-contain ${
                step.class?.includes("md:row-span-2") ? "h-50" : "h-40"
              }`}
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">{index + 1}.</span>
              <p className="" dangerouslySetInnerHTML={{ __html: step.text }} />
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
      text: "Beri anak 2–3 lembar daun dan bantu oleskan lem di atas kardus. Ajak anak menempelkan daun satu per satu dengan tangan kecilnya. Bunda bisa membantu memegang kardus agar tidak bergeser.",
      img: "/images/calistung/pesan-dari-alam/1.png",
      class: "md:row-span-2",
    },
    {
      text: "Anak menempelkan daun membentuk garis lurus",
      img: "/images/calistung/pesan-dari-alam/2.png",
    },
    {
      text: "Bisa juga membuat “bingkai” dari daun di pinggir kardus",
      img: "/images/calistung/pesan-dari-alam/3.png",
    },
  ];

  const level2Steps = [
    {
      text: "Sebelum di tempel ajak anak menyusun daun membentuk pola garis zigzag di atas kardus",
      img: "/images/calistung/pesan-dari-alam/4.png",
    },
    {
      text: "Setelah itu baru ditempel, awasi anak saat menggunakan lem",
      img: "/images/calistung/pesan-dari-alam/5.png",
    },
    {
      text: "Variasikan bermain dengan membuat kolase huruf D dari daun. Bunda bisa membuat terlebih dahulu pola huruf D di kardus",
      img: "/images/calistung/pesan-dari-alam/6.png",
    },
    {
      text: "Anak menempel daun mengikuti pola huruf yang sudah dibuat.",
      img: "/images/calistung/pesan-dari-alam/7.png",
    },
  ];

  const level3Steps = [
    {
      text: "Minta anak menyusun kolase membentuk kata “daun”",
      img: "/images/calistung/pesan-dari-alam/8.png",
    },
    {
      text: "Pertama, bunda menulis kata “daun” di atas kardus",
      img: "/images/calistung/pesan-dari-alam/9.png",
    },
    {
      text: "Minta anak menempelkan daun pada tulisan “daun” tersebut. Anak boleh menggunakan kombinasi daun besar dan kecil untuk menambah detail.",
      img: "/images/calistung/pesan-dari-alam/10.png",
    },
    {
      text: "Biarkan anak menuangkan lem sendiri dan menempel tanpa bantuan.",
      img: "/images/calistung/pesan-dari-alam/11.png",
    },
  ];

  return (
    <CalistungPageLayout title={TITLE}>
      <SummarySection />

      <LevelSection
        level="1"
        age="2-3 th"
        goal="Melatih kekuatan jari saat menempel, mengenal tekstur daun, dan mengikuti instruksi sederhana."
        indicator={`
          <ul class="list-disc ms-4">
            <li>Anak bisa menempelkan daun dengan bantuan</li>
            <li>Anak menunjukkan minat memilih daun</li>
            <li>Anak memahami arahan sederhana</li>
          </ul>  
        `}
        duration="15–25 menit"
        steps={level1Steps}
      />

      <LevelSection
        level="2"
        age="4-5 th"
        goal="Mengembangkan koordinasi mata-tangan, mengenal konsep pola dan bentuk."
        indicator={`
          <ul class="list-disc ms-4">
            <li>Anak bisa menyusun dan menempelkan sendiri</li>
            <li>Anak mampu membedakan ukuran dan bentuk daun</li>
            <li>Anak menyelesaikan kolase pola huruf D</li>
          </ul>  
        `}
        duration="15–25 menit"
        steps={level2Steps}
      />

      <LevelSection
        level="3"
        age="5-6 th"
        goal="Menstimulasi kreativitas visual, memperkuat kemampuan menyusun pola logis, dan membangun narasi dari karya."
        indicator={`
          <ul class="list-disc ms-4">
            <li>Anak bisa menyusun kolase kata</li>
            <li>Anak menjelaskan kreasinya dengan sederhana</li>
            <li>Anak menggunakan bahan secara mandiri dan fokus</li>
          </ul>  
        `}
        duration="15–25 menit"
        steps={level3Steps}
      />

      <p className="mb-8">
        Aktivitas ini bisa diulang setiap beberapa hari untuk memperkuat
        pemahaman dan keterampilan anak secara menyenangkan.
      </p>
    </CalistungPageLayout>
  );
}
