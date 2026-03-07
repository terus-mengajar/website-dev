import TentangKamiClient from "./TentangKamiClient";

export const metadata = {
  title: "Tentang Kami",
  description:
    "Kenali Terus Mengajar - platform rekomendasi ide bermain sambil belajar untuk TK dan PAUD. Download worksheet Calistung dan Coding gratis. Dukung pembelajaran anak dengan cara menyenangkan!",
  openGraph: {
    title: "Tentang Kami - Terus Mengajar",
    description:
      "Platform rekomendasi ide bermain sambil belajar untuk TK dan PAUD. Download worksheet Calistung dan Coding gratis.",
    url: "https://terusmengajar.id/tentang-kami",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default function TentangKami() {
  return (
    <TentangKamiClient />
  );
}
