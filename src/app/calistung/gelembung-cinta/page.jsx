import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Gelembung Cinta";

export const metadata = {
  title: TITLE,
};

const SummarySection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <div className="flex flex-row gap-4">
      <h2 className="mb-4 whitespace-nowrap">Area Simulasi :&nbsp;&nbsp;</h2>
      <ul className="list-disc space-y-1 text-gray-700">
        <li>Oromotor</li>
        <li>Fokus</li>
        <li>Sensori</li>
      </ul>
    </div>
    <div className="flex flex-row gap-4">
      <h2 className="mb-4 whitespace-nowrap">Alat dan Bahan :&nbsp;&nbsp;</h2>
      <ul className="list-disc space-y-1 text-gray-700">
        <li>1 mangkuk sedang</li>
        <li>Sedotan (yang bersih dan tidak terlalu kecil lubangnya)</li>
        <li>Air bersih</li>
        <li>Sabun cuci piring cair (sedikit saja, cukup 2–3 tetes)</li>
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
                step.class?.includes("md:row-span-2") ? "h-80" : "h-40"
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
      text: "Ajak anak duduk nyaman. Peragakan cara meniup dengan sedotan.",
      img: "/images/calistung/gelembung-cinta/5.png",
    },
    {
      text: "Minta anak mencelupkan sedotan ke air sabun, lalu meniup perlahan.",
      img: "/images/calistung/gelembung-cinta/6.png",
    },
    {
      text: "Saat buih mulai muncul, katakan dengan antusias: “Waaah, ada gelembungnyaa!” Ambil buih dengan tangan bunda, lalu anak meniup buih di permukaan tangan.",
      img: "/images/calistung/gelembung-cinta/7.png",
    },
    {
      text: "Anak boleh menyentuh atau menghancurkan buih dengan jari.",
      img: "/images/calistung/gelembung-cinta/8.png",
    },
  ];

  const level2Steps = [
    {
      text: "Ajak anak meniup terus sampai buihnya melewati tepi mangkuk. Biarkan anak meniup dalam waktu lebih lama tanpa berhenti",
      img: "/images/calistung/gelembung-cinta/9.png",
    },
    {
      text: "Ajak anak mencoba dengan ketukan teratur (1 ketukan... 2 ketukan... 3 ketukan...)",
      img: "/images/calistung/gelembung-cinta/10.png",
    },
  ];

  const level3Steps = [
    {
      text: "Tambahkan pewarna makanan untuk buih berwarna",
      img: "/images/calistung/gelembung-cinta/11.png",
      class: "md:order-1",
    },
    {
      text: "Fokus meniup lama untuk membuat tumpukan buih setinggi mungkin",
      img: "/images/calistung/gelembung-cinta/12.png",
      class: "md:order-3",
    },
    {
      text: "Siapkan dua mangkuk, anak membuat buih di masing-masing mangkuk dan membandingkan tinggi buih.",
      img: "/images/calistung/gelembung-cinta/13.png",
      class: "md:row-span-2 md:order-2",
    },
  ];

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Cara Bermain ${TITLE}`,
    description:
      "Permainan gelembung cinta untuk melatih otot mulut, fokus, dan sensori anak. Aktivitas sederhana yang menyenangkan menggunakan bahan rumahan.",
    image: "/images/calistung/gelembung-cinta/5.png",
    totalTime: "PT20M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "IDR",
      value: "0",
    },
    supply: [
      { "@type": "HowToSupply", name: "1 mangkuk sedang" },
      { "@type": "HowToSupply", name: "Sedotan bersih" },
      { "@type": "HowToSupply", name: "Air bersih" },
      { "@type": "HowToSupply", name: "Sabun cuci piring cair" },
    ],
    tool: [
      { "@type": "HowToTool", name: "Mangkuk" },
      { "@type": "HowToTool", name: "Sedotan" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Siapkan tempat dan bahan",
        text: "Pilih tempat yang mudah dibersihkan. Tuangkan air bersih ke dalam mangkuk sekitar 50 ml. Tambahkan 2–3 tetes sabun cuci piring, aduk pelan.",
        image: "/images/calistung/gelembung-cinta/1.png",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Peragakan cara meniup",
        text: "Ajak anak duduk nyaman. Peragakan cara meniup dengan sedotan ke udara terlebih dahulu.",
        image: "/images/calistung/gelembung-cinta/5.png",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Celupkan dan tiup",
        text: "Minta anak mencelupkan sedotan ke air sabun, lalu meniup perlahan hingga muncul buih.",
        image: "/images/calistung/gelembung-cinta/6.png",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Bermain dengan buih",
        text: "Saat buih mulai muncul, ajak anak meniup buih di permukaan tangan. Anak boleh menyentuh atau menghancurkan buih dengan jari.",
        image: "/images/calistung/gelembung-cinta/7.png",
      },
    ],
  };

  return (
    <CalistungPageLayout title={TITLE} jsonLd={howToJsonLd}>
      <SummarySection />

      <h3 className="font-bold text-lg mb-6">Cara Menyiapkan Permainan :</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className={`flex gap-4`}>
          <div className="flex flex-col gap-2 p-4 rounded-lg overflow-hidden border border-[#F2E4D6] w-full h-full">
            <img
              src="/images/calistung/gelembung-cinta/1.png"
              alt="1"
              className="w-full h-40 object-contain"
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">1.</span>
              <p className="">
                Pilih tempat yang mudah dibersihkan, seperti halaman rumah,
                kamar mandi, atau area cuci piring.
              </p>
            </div>
          </div>
        </div>

        <div className={`flex gap-4`}>
          <div className="flex flex-col gap-2 p-4 rounded-lg overflow-hidden border border-[#F2E4D6] w-full h-full">
            <img
              src="/images/calistung/gelembung-cinta/2.png"
              alt="2"
              className="w-full h-40 object-contain"
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">2.</span>
              <p className="">
                Tuangkan air bersih ke dalam mangkuk sekitar 50 ml.
              </p>
            </div>
          </div>
        </div>

        <div className={`flex gap-4`}>
          <div className="flex flex-col gap-2 p-4 rounded-lg overflow-hidden border border-[#F2E4D6] w-full h-full">
            <img
              src="/images/calistung/gelembung-cinta/3.png"
              alt="3"
              className="w-full h-40 object-contain"
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">3.</span>
              <p className="">
                Tambahkan 2–3 tetes sabun cuci piring, aduk pelan.
              </p>
            </div>
          </div>
        </div>

        <div className={`flex gap-4`}>
          <div className="flex flex-col gap-2 p-4 rounded-lg overflow-hidden border border-[#F2E4D6] w-full h-full">
            <img
              src="/images/calistung/gelembung-cinta/4.png"
              alt="4"
              className="w-full h-40 object-contain"
            />

            <div className="flex gap-3 text-[#201C23] leading-relaxed text-sm">
              <span className="">4.</span>
              <p className="">
                Siapkan sedotan. Sebelum bermain, ajarkan anak meniup ke udara
                terlebih dulu untuk memastikan udara keluar dari mulut, bukan
                sebaliknya (agar tidak menyedot air sabun). “Ayo coba tiup ke
                udara, ada anginnya nggak?”
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="font-bold text-lg mb-6">Catatan Keamanan :</h3>
      <div className="mb-12">
        <ul className="list-disc ms-4">
          <li>Awasi anak selama meniup sedotan.</li>
          <li>
            Ingatkan bahwa sedotan hanya untuk meniup, bukan untuk diisap.
          </li>
        </ul>
      </div>

      <LevelSection
        level="1"
        age="2-3 th"
        goal="Menguatkan otot mulut dan napas saat meniup, melatih fokus dan respon terhadap instruksi sederhana."
        indicator={`
          <ul class="list-disc ms-4">
            <li>Anak mampu meniup hingga menghasilkan buih</li>
            <li>Anak merespons dengan senang dan aktif mengikuti permainan</li>
            <li>Anak dapat meniru contoh dari orang tua</li>
          </ul>  
        `}
        duration="15–20 menit"
        steps={level1Steps}
      />

      <LevelSection
        level="2"
        age="4-5 th"
        goal="Mengembangkan kontrol pernapasan dan kesabaran, melatih koordinasi mata-tangan dan konsentrasi saat membuat buih lebih banyak."
        indicator={`
          <ul class="list-disc ms-4">
            <li>Anak bisa meniup lebih lama dan menghasilkan lebih banyak buih</li>
            <li>Anak menunjukkan antusias mengulang dan bereksperimen</li>
            <li>Anak bisa mengontrol kekuatan tiupan</li>
          </ul>  
        `}
        duration="15–20 menit"
        steps={level2Steps}
      />

      <LevelSection
        level="3"
        age="5-6 th"
        goal="Melatih kekuatan tiupan yang terkontrol, kemampuan observasi bentuk/warna, dan fokus menyelesaikan misi bermain."
        indicator={`
          <ul class="list-disc ms-4">
            <li>Anak bisa membuat buih tinggi dan rapi</li>
            <li>Anak menyelesaikan tantangan membuat buih berwarna atau tinggi tertentu</li>
            <li>Anak bisa menjelaskan apa yang terjadi saat meniup</li>
          </ul>  
        `}
        duration="15–20 menit"
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
