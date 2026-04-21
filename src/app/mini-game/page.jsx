import SidebarMedsos from "@/components/SidebarMedsos";
import MiniGameList from "./MiniGameList";

export const metadata = {
  title: "Mini Games - Coding untuk Anak",
  description:
    "Permainan interaktif untuk bermain sambil belajar! Koleksi mini game edukatif dan coding untuk anak TK dan PAUD. Mainkan gratis di Smartphone, Tablet, Laptop, atau PC.",
  openGraph: {
    title: "Mini Games - Coding untuk Anak | Terus Mengajar",
    description:
      "Permainan interaktif untuk bermain sambil belajar! Mini game edukatif dan coding untuk anak TK dan PAUD.",
    url: "https://terusmengajar.id/mini-game",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default async function Page() {
  return (
    <main className="bg-[#fcfbf8] text-sm mt-[68px] pt-[40px] pb-[80px]">
      <section className="mb-14">
        <div className="container">
          <p className="mb-4 text-sm">
            Home &gt; <b>Mini Games</b>
          </p>

          <div className="card-header">
            <img src="/images/assets/mini-games.avif" className="w-32" alt="" />
            <div className="flex flex-col gap-3 py-4">
              <p className="font-bold">Mini Games</p>
              <p>
                Semua bisa mainkan secara gratis!
                <br />
                Permainan Interaktif ini bisa dimainkan di Smartphone, Tablet,
                Laptop, atau PC!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="order-2 lg:order-1 w-full lg:w-auto bg-[#E6CBEC] rounded-xl p-6 h-fit">
              <SidebarMedsos />
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <MiniGameList />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
