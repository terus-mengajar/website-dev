import Image from "next/image";
import AsetMediaPembelajaranList from "./AsetMediaPembelajaranList";

export const metadata = {
  title: "Aset Media Pembelajaran",
};

export default function GaleriProduk() {
  return (
    <main className="mt-[68px] bg-[#fcfbf8]">
      <section className="py-8 px-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-16 px-12 py-10 bg-[#fbf6f2] bg-[url(/images/shapes/logo-tm-cream-cropped-30.avif)] bg-cover lg:bg-contain bg-no-repeat bg-right rounded-lg items-center">
            <div className="max-w-[200px]">
              <Image
                src="/images/assets/aset-media-pembelajaran.avif"
                width={350}
                height={350}
                alt="Icon Aset"
              />
            </div>

            <div className="flex flex-col gap-3 py-4 text-sm leading-6">
              <p className="font-bold text-[#ef9e00]">
                Aset Media Pembelajaran
              </p>
              <p>
                Semua aset adalah Canva Element, dapat digunakan secara gratis
                jika memiliki akun{" "}
                <a
                  href="https://partner.canva.com/cobagratiscanva"
                  target="_blank"
                  className="underline"
                >
                  Canva Pro
                </a>{" "}
                atau{" "}
                <a
                  href="https://www.canva.com/education/"
                  target="_blank"
                  className="underline"
                >
                  Canva Pro for Education
                </a>
                . Untuk menggunakan aset silahkan klik koleksi aset yang
                diinginkan kemudian klik Gunakan Aset
              </p>
            </div>
          </div>
        </div>
      </section>

      <AsetMediaPembelajaranList />
    </main>
  );
}
