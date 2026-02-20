import CalistungPageLayout from "@/components/calistung/CalistungPageLayout";

const TITLE = "Menelusuri Jalur yang Menantang";

export const metadata = {
  title: TITLE,
};

const SummarySection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <div>
      <h2 className="font-bold text-lg mb-4">Area Simulasi :</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Motorik kasar</li>
        <li>Mengenal arah</li>
        <li>Koordinasi mata dan tangan</li>
        <li>Bahasa Berhitung</li>
      </ul>
    </div>
    <div>
      <h2 className="font-bold text-lg mb-4">Alat dan Bahan :</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>Selotip (lakban/masking tape)/Tali/Kapur</li>
      </ul>
    </div>
  </div>
);

const LevelSection = ({ level, age, goal, observing, duration, prepSteps, steps }) => (
  <div className="mb-20">
    <div className="bg-[#FAF7F2] rounded-xl p-6 mb-8">
      <h2 className="font-bold text-xl mb-4">Level {level} ({age})</h2>
      <div className="space-y-3 text-gray-700">
        <p><span className="font-semibold text-black">Apa yang ingin dikembangkan :</span> {goal}</p>
        <p><span className="font-semibold text-black">Hal yang bisa dbservasi :</span> {observing}</p>
        <p><span className="font-semibold text-black">Durasi Bermain :</span> {duration}</p>
      </div>
    </div>

    {prepSteps && (
      <div className="mb-10">
        <h3 className="font-bold text-lg mb-6">Cara Menyiapkan Jalur :</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prepSteps.map((step, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200">
                <img 
                  src={`https://placehold.co/600x400/f3f4f6/374151?text=Prep+${index + 1}`} 
                  alt={`Prep Step ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-3">
                <p className="text-gray-600 text-center w-full font-medium">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

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
            <span className="font-bold text-gray-400">{index + 1}.</span>
            <p className="text-gray-600 leading-relaxed">{step}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Page() {
  const level1Prep = ["Garis Lurus", "Garis Zigzag", "Garis Bergelombang"];
  const level1Steps = [
    "Sediakan jalur yang telah dibuat.",
    "Minta anak untuk berjalan di garis lurus dengan seimbang.",
    "Bergerak maju mengikuti jalur zigzag dengan melompat.",
    "Melewati jalur bergelombang dengan cara merangkak.",
    "Melakukan gerakan berguling mengikuti jalur bergelombang.",
  ];

  const level2Prep = ["Garis Lurus", "Garis Zigzag", "Garis Bergelombang"];
  const level2Steps = [
    "Berjalan melompati garis lurus secara dua kaki secara bersamaan.",
    "Berjalan menyamping mengikuti jalur zigzag.",
    "Jalur bergelombang jalan dengan cara berjinjit.",
    "Melompat dengan satu kaki.",
  ];

  const level3Prep = ["Garis Lurus", "Garis Zigzag", "Garis Bergelombang"];
  const level3Steps = [
    "Menyiapkan jalur yang telah dibuat kemudian minta anak berjalan dengan rincian gerakan.",
    "Berjalan di atas garis zigzag dengan arah menyamping.",
    "Melakukan gerakan merangkak di jalur bergelombang.",
    "Lompat di setiap garis kemudian hitung tiap gerakan.",
  ];

  return (
    <CalistungPageLayout title={TITLE}>
      <SummarySection />
      
      <LevelSection 
        level="1" 
        age="2-3 th"
        goal="Mengenal garis lurus dan melompat, melatih motorik kasar dan meningkatkan kepercayaan diri pada anak."
        observing="Anak dapat seimbang berjalan di lintasan, melompat, merangkak, berguling sesuai instruksi."
        duration="10-15 menit sesuai kemampuan."
        prepSteps={level1Prep}
        steps={level1Steps}
      />

      <LevelSection 
        level="2" 
        age="4-5 th"
        goal="Mengetahui cara berjalan mundur dan menyamping sambil meningkatkan keseimbangan tubuh."
        observing="Anak mandiri melalui jalur dengan berbagai variasi gerak (jalan mundur/menyamping) sambil menjaga keseimbangan."
        duration="15-20 menit sesuai kenyamanan anak."
        prepSteps={level2Prep}
        steps={level2Steps}
      />

      <LevelSection 
        level="3" 
        age="6-8 th"
        goal="Mengenal jalur dengan berbagai tantangan yang lebih tinggi, meningkatkan konsentrasi dan meningkatkan daya ingat gerak motorik kasar."
        observing="Anak dapat mengikuti alur jalur dengan kombinasi gerakan yang lebih kompleks dan instruksi yang bertahap secara mandiri sesuai contoh dan arahan."
        duration="20-30 menit sesuai kemampuan."
        prepSteps={level3Prep}
        steps={level3Steps}
      />
    </CalistungPageLayout>
  );
}
