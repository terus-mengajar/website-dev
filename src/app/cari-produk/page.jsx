import FunpaperClient from "./FunpaperClient";

export const metadata = {
  title: "Cari Worksheet",
  description:
    "Cari ide bermain sambil belajar untuk anak TK dan PAUD! Temukan worksheet Calistung dan Coding yang sesuai dengan kebutuhan anak. Gunakan filter untuk hasil yang tepat.",
  openGraph: {
    title: "Cari Worksheet - Bermain Sambil Belajar | Terus Mengajar",
    description:
      "Cari ide bermain sambil belajar untuk anak TK dan PAUD! Temukan worksheet yang sesuai kebutuhan.",
    url: "https://terusmengajar.id/cari-produk",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default async function Page({ searchParams }) {
  const sParams = await searchParams; // ambil isi query ?nama=...
  const nama = sParams.nama || ""; // ambil isi query ?nama=...

  return (
    <main className="bg-[#fcfbf8] text-sm mt-[68px] pt-[40px] pb-[80px] px-[20px]">
      <section className="mb-14">
        <div className="container">
          <div className="card-header">
            <img src="/images/assets/funpaper.avif" className="w-32" alt="" />
            <div className="flex flex-col gap-3 py-4">
              <p className="font-bold">Funpaper</p>
              <p>
                Cari produk.
                <br />
                Manfaatkan filter untuk lebih mudah menemukan funpaper sesuai
                keinginan
              </p>
            </div>
          </div>
        </div>
      </section>

      <FunpaperClient nama={nama} />
    </main>
  );
}
