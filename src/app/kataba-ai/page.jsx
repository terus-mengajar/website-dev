import InputGenerate from "./InputGenerate";

export const metadata = {
  title: "Kataba AI",
  //   description:
  //     "Temukan berbagai macam jenis kegiatan untuk anak seperti mengenal angka, huruf, mewarnai, gunting tempel, dan masih banyak yang lainnya"
};

export default async function Page() {
  return (
    <main className="bg-[#fcfbf8] text-md mt-[68px] pt-[40px] pb-[80px] px-[20px] min-h-120">
      <section className="mb-14 py-14 px-4">
        <div className="container flex flex-col lg:flex-row gap-18">
          <div className="order-2 lg:order-1">
            <h1 className="text-amber-500 text-5xl md:text-6xl font-bold leading-14 mb-4">KATABA AI</h1>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.</p>
            <button className="tombol-pink-kataba-ai">Aktifkan Notifikasi</button>
          </div>
          <div className="order-1 lg:order-2 mx-auto">
            <img className="w-80 lg:w-200" src="/images/karakter/karakter-kataba-ai-1.avif" alt="" />
          </div>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="container">
          <InputGenerate />
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="container flex flex-col lg:flex-row gap-12">
          <div className="order-1 lg:order-2 mx-auto">
            <img className="w-80 lg:w-260" src="/images/karakter/karakter-kataba-ai-2.avif" alt="" />
          </div>
          <div className="order-2 lg:order-1">
            <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container flex flex-col items-center">
          <h2 className="text-amber-500 text-3xl md:text-5xl font-bold leading-10 md:leading-14 text-center mb-12">Jadilah yang pertama kali berinteraksi dengan KATABA</h2>
          <button className="tombol-pink-kataba-ai">Aktifkan Notifikasi</button>
        </div>
      </section>
    </main>
  );
}
