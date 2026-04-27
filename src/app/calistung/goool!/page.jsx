import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Goool!";

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
        <li>Koordinasi mata dan tangan</li>
        <li>Kepercayaan diri</li>
      </ul>
    </div>
    <div className="flex flex-row gap-4">
      <h2 className="mb-4 whitespace-nowrap">Alat dan Bahan :&nbsp;&nbsp;</h2>
      <ul className="list-disc space-y-1 text-gray-700">
        <li>1 bola kecil (boleh bola kain, plastik, atau bola bekas mainan)</li>
        <li>1 keranjang pakaian</li>
        <li>1 gulung lakban hitam (untuk membuat garis di lantai)</li>
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
      text: "Buat 3 garis lurus di lantai memakai lakban dengan jarak 30 cm, 50 cm, dan 70 cm dari keranjang.",
      img: "/images/calistung/goool!/1.png",
    },
    {
      text: "Ajak anak berdiri di garis paling dekat.",
      img: "/images/calistung/goool!/2.png",
    },
    {
      text: "Berikan bola dan minta anak melemparkan bola ke keranjang. Katakan, “Wah hebat! Yuk kita coba dari garis yang agak jauh.”",
      img: "/images/calistung/goool!/3.png",
      class: "md:col-span-2",
    },
    {
      text: "Ulangi dari garis ke-2 dan ke-3 dengan nada semangat. Berikan kesempatan 3 kali lemparan di tiap garis.",
      img: "/images/calistung/goool!/4.png",
      class: "md:col-span-2",
    },
  ];

  const level2Steps = [
    {
      text: "Jarak antar garis ditambah: 50 cm, 100 cm, dan 150 cm",
      img: "/images/calistung/goool!/5.png",
      class: "md:col-span-2",
    },
    {
      text: "Pada garis pertama jelaskan tantangannya: “Kalau kamu bisa masukin bola dari sini, kita pindah ke garis yang lebih jauh!” Anak harus memasukkan bola minimal 1x dari 2 kali percobaan untuk pindah ke garis berikutnya",
      img: "/images/calistung/goool!/6.png",
      class: "md:col-span-2",
    },
    {
      text: "Ajak anak mencoba 2 gaya lempar berbeda (lempar atas dan bawah). Bantu hitung percobaan dan beri semangat di setiap percobaan.",
      img: "/images/calistung/goool!/7.png",
      class: "md:col-span-2",
    },
  ];

  const level3Steps = [
    {
      text: "Jarak ditambah lebih jauh: 1 meter, 1.5 meter, dan 2 meter",
      img: "/images/calistung/goool!/8.png",
      class: "md:col-span-2",
    },
    {
      text: "Anak harus memasukkan bola minimal 1x dari 2 percobaan untuk bisa pindah. Gunakan hitung mundur “3... 2... 1... lempar!” untuk melatih fokus dan kontrol waktu",
      img: "/images/calistung/goool!/9.png",
      class: "md:col-span-2",
    },
    {
      text: "Tantangan tambahan: gunakan satu tangan untuk gaya lempar tertentu (lempar atas, bawah, samping)",
      img: "/images/calistung/goool!/10.png",
      class: "md:col-span-2",
    },
  ];

  return (
    <CalistungPageLayout title={TITLE}>
      <SummarySection />

      <LevelSection
        level="1"
        age="2-3 th"
        goal="Melatih koordinasi tangan dan mata, motorik kasar (melempar), serta fokus dalam mengikuti instruksi sederhana."
        indicator={`<ul class="list-disc ms-4">
          <li>Anak dapat melempar bola ke arah sasaran</li>
          <li>Anak mencoba mengikuti instruksi sederhana</li>
          <li>Anak fokus selama 5–10 menit</li>
        </ul>`}
        duration="15–25 menit"
        steps={level1Steps}
      />

      <LevelSection
        level="2"
        age="4-5 th"
        goal="Mengembangkan kontrol tubuh, konsentrasi dalam menyelesaikan tantangan, dan kepercayaan diri saat berhasil menyelesaikan tugas."
        indicator={`<ul class="list-disc ms-4">
          <li>Anak mampu menyesuaikan gaya lempar</li>
          <li>Anak menunjukkan usaha untuk menyelesaikan tantangan</li>
          <li>Anak sabar menunggu giliran (jika bermain bersama)</li>
        </ul>`}
        duration="15–25 menit"
        steps={level2Steps}
      />

      <LevelSection
        level="3"
        age="5-6 th"
        goal="Melatih kemampuan memecahkan masalah (strategi melempar), kontrol waktu, serta motorik kasar yang lebih presisi dan stabil."
        indicator={`<ul class="list-disc ms-4">
          <li>Anak mampu mengatur kekuatan dan arah lempar</li>
          <li>Anak memahami aturan main dan menerapkannya</li>
          <li>Anak bisa fokus dan bermain mandiri 15–20 menit</li>
        </ul>`}
        duration="15–25 menit"
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
