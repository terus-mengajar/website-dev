// src/components/FunpaperHarian.jsx

export default function FunpaperHarian() {
  const cards = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Judul */}
        <h1 className="text-3xl lg:text-4xl font-bold mb-10">
          Funpaper Harian
        </h1>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-4">
          <div className="lg:flex-basis-5/10 flex items-center justify-center rounded-xl lg:mb-0 bg-[url('/images/bg/bg-activity-1.avif')] bg-cover bg-center w-full h-[230px]">
            <h3 className="text-2xl font-bold text-[#785556] text-center">
              Ribuan Worksheet Telah <br /> di Download
            </h3>
          </div>
          <div className="lg:flex-basis-5/10 flex items-center rounded-xl p-6 bg-[url('/images/bg/bg-tm-logo-half.avif')] bg-cover bg-center w-full h-[230px]">
            <img
              src="/images/funpaper/bundle/bundle-1.avif"
              alt="Funpaper Bundle"
              className="h-auto mr-6 w-[100px]"
            />
            <div className="flex flex-col gap-1 w-full">
              <p className="font-semibold">
                Free Funpaper Harian Bundle
              </p>
              <p className="text-sm text-gray-600 mb-3">
                Semua bisa download secara gratis! <br />
                Dapatkan 15 Lembar Kerja Gratis dalam tiap bundle
              </p>
              <div>
                <a
                    href="/funpaper-harian"
                    className="text-center tombol-pink float-end text-white text-sm font-medium py-1 rounded-lg transition"
                >
                    Lihat
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Produk Terkait */}
        <div className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
            {/* Contoh item (nanti bisa map data) */}
            {cards.map((num) => (
              <div className="flex flex-col items-center">
                <div className="mb-2">
                    <div className="w-32 h-32 bg-white flex items-center justify-center rounded-md bg-[url('/images/shapes/oval-ungu.avif')] bg-cover bg-center">
                    <img
                        src="https://cdn.prod.website-files.com/644f4d0f9964649ed2f9f0a2/65bb81f6575a82c1fa3faf26_HtP2PhawQor0T-bPRYeNjWh9fpgDWXzhPlvNj_wbnyA.jpeg"
                        alt="Produk Terkait"
                        className="h-full object-cover w-[80%]"
                    />
                    </div>
                    <h4 className="text-center text-sm font-medium mt-2">
                    Judul Produk
                    </h4>
                </div>
                <a
                  href="#"
                  className="mt-2 inline-block tombol-ungu text-white text-xs font-medium px-3 py-1 rounded-lg transition"
                >
                  Lihat Produk
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Link Lihat Semua */}
        <div className="text-center pt-4">
          <a href="/funpaper-harian" className="font-bold">
            Lihat Semua &gt;
          </a>
        </div>
      </div>
    </section>
  );
}
