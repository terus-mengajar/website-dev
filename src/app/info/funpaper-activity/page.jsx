"use client";

// app/components/FunpaperTema.tsx
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="text-gray-800 -mt-[68px]">
      <style jsx>
        {`
          .text-coklat {
            color: #724643;
          }
        `}
      </style>

      {/* Hero */}
      <section className="py-20 px-8 text-center bg-[url(/images/bg/bg-activity-1.jpg)] bg-cover bg-no-repeat h-[1600px] sm:h-[1400px] lg:h-[1200px] overflow-hidden">
        <div className="container px-4 relative">
          <div
            className="mt-24 transition-transform duration-75 space-y-60 sm:space-y-80"
            style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          >
            <div className="space-y-10">
              <h1 className="text-3xl md:text-5xl text-coklat font-bold leading-tight mb-6">
                Jadi Lebih Kreatif Dengan Funpaper!
              </h1>
              <p className="text-lg md:text-xl font-medium">
                Kenalkan, Funpaper By Activity. Bundle Worksheet Seru
                Berdasarkan Jenis Aktivitas Favorit Anak. Dirancang khusus untuk
                mendukung tumbuh kembang anak melalui aktivitas yang
                menyenangkan dan siap pakai!
              </p>
              <a href="#" className="tombol-coklat">
                Pesan Sekarang
              </a>
            </div>

            <div className="">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-4xl font-bold leading-tight mb-4 text-coklat">
                  Apa yang Akan Ayah Bunda Dapatkan?
                </h2>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-md">
                {[
                  {
                    img: "/images/assets/printer-2.avif",
                    text: "Kumpulan Worksheet yang bisa langsung di Print",
                  },
                  {
                    img: "/images/assets/susu.avif",
                    text: "Cocok untuk anak usia 2–6 tahun dengan beragam kelompok usia",
                  },
                  {
                    img: "/images/assets/menulis.png",
                    text: "Disusun secara terstruktur dengan perkembangan anak",
                  },
                  {
                    img: "/images/assets/paint-3.avif",
                    text: "Penuh warna dan gambar lucu, bikin anak semangat belajar",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="text-center flex flex-col gap-1 justify-center border-2 border-white bg-white/40 rounded-xl py-8 px-8 w-50"
                  >
                    <Image
                      src={item.img}
                      alt={item.text}
                      width={40}
                      height={40}
                      className="mx-auto"
                    />
                    <p className="mt-2 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kenalin-worksheet" className="py-24 px-4 bg-[#fdf8f2]">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold leading8 md:leading-12 mb-8">
              Kenapa <span className="text-coklat">Funpaper by Activity</span>{" "}
              Berbeda?
            </h2>
          </div>
          <div className="space-y-10 mb-8">
            {[
              {
                img: "/images/funpaper/activity/funpaper-activity-1.avif",
                title: "Lengkap dan Variatif",
                text: "Setiap bundle dikurasi berdasarkan jenis kegiatan, anak bisa eksplorasi mewarnai, menggunting, menebalkan, dan banyak lagi.",
              },
              {
                img: "/images/funpaper/activity/funpaper-activity-2.avif",
                title: "Stimulasi Maksimal",
                text: "Melatih motorik halus, fokus, kreativitas, dan logika berpikir.",
              },
              {
                img: "/images/funpaper/activity/funpaper-activity-3.avif",
                title: "Visual Menarik",
                text: "Desain penuh warna dan ilustrasi lucu membuat anak lebih tertarik belajar.",
              },
              {
                img: "/images/funpaper/activity/funpaper-activity-4.avif",
                title: "Terstruktur",
                text: "Materi sudah disesuaikan dengan tahap perkembangan anak.",
              },
              {
                img: "/images/funpaper/activity/funpaper-activity-5.avif",
                title: "Praktis dan Mudah Diakses",
                text: "Tinggal download & print! Bisa langsung dipakai kapan saja, di mana saja.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center flex flex-col md:flex-row gap-4 md:gap-14 items-center"
              >
                <div className="flex-1/4">
                  <Image
                    src={item.img}
                    alt={item.text}
                    width={200}
                    height={300}
                    className="mx-auto"
                  />
                </div>

                <div className="bg-[#fefdf9] rounded-2xl py-10 px-8 text-left flex-3/4">
                  <p className="font-semibold mb-4">{item.title}</p>
                  <p className="">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aktivitas List */}
      <section id="list-funpaper-tema" className="py-24 px-4 bg-[#fefdf9]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            Pilih Aktivitas Favorit Anak
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-14">
            {[
              {
                img: "/images/funpaper/activity/funpaper-activity-6.avif",
                text: "Mewarnai",
              },
              {
                img: "/images/funpaper/activity/funpaper-activity-7.avif",
                text: "Gunting Tempel",
              },
              {
                img: "/images/funpaper/activity/funpaper-activity-8.avif",
                text: "Analisa",
              },
              {
                img: "/images/funpaper/activity/funpaper-activity-9.avif",
                text: "Mencocokkan",
              },
              {
                img: "/images/funpaper/activity/funpaper-activity-10.avif",
                text: "Menebalkan Garis",
              },
              {
                img: "/images/funpaper/activity/funpaper-activity-11.avif",
                text: "Dan Lainnya",
              },
            ].map((tema, idx) => (
              <div
                key={idx}
                className="px-4 py-10 flex flex-col items-center justify-center bg-[#fbf6f2] rounded-xl"
              >
                <Image
                  src={tema.img}
                  alt={tema.text}
                  width={200}
                  height={120}
                  className="rounded-lg mb-4"
                />
                <p className="mt-3 font-medium text-lg">{tema.text}</p>
              </div>
            ))}
          </div>

          <p className="text-lg mb-10">
            Pilih yang paling sesuai dengan minat dan kebutuhan belajar anak!
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-[url(/images/bg/bg-activity-2.avif)] bg-cover bg-center bg-no-repeat">
        <div className="container">
          <h2 className="text-coklat text-xl sm:text-4xl font-bold text-center mb-12">
            Cocok Untuk Siapa?
          </h2>

          <div className="mb-44 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                img: "/images/assets/susu.avif",
                title: "Bunda yang peduli tumbuh kembang anak",
                text: "Ingin memberikan stimulasi belajar tanpa harus repot cari bahan.",
              },
              {
                img: "/images/assets/sekolah.avif",
                title: "Guru Paud atau TK",
                text: "Butuh worksheet yang sesuai kurikulum, menarik, dan siap cetak.",
              },
            ].map((data, idx) => (
              <div
                key={idx}
                className="flex flex-col lg:flex-row gap-6 border-2 border-white bg-white/40 rounded-xl py-4 sm:py-8 px-8 items-center shadow-md"
              >
                <div className="w-[90px] h-[90px]">
                  <Image
                    src={data.img}
                    width={80}
                    height={80}
                    alt="cocok"
                    className="h-auto"
                  />
                </div>
                <div>
                  <p className="font-bold mb-2">{data.title}</p>
                  <p>{data.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 px-8 bg-[#fefdf9]">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center justify-center">
            <div className="">
              <Image
                src="/images/funpaper/activity/funpaper-activity-12.avif"
                width={700}
                height={700}
                alt="Funpaper Tema Campur"
                className="mx-auto w-80 md:w-160"
              />
            </div>
            <div className="text-center md:text-left space-y-10">
              <h2 className="font-bold text-xl leading-tight sm:text-3xl lg:text-4xl mb-8 text-center md:text-left">
                Yuk, Bikin Belajar Jadi Momen yang Ditunggu Anak!
              </h2>

              <p className="leading-tight">Saatnya motivasi anak untuk belajar sambil ekspresikan kreativitas mereka.</p>

              <Link href="/" className="tombol-pink text-lg!">
                Pesan Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[url(/images/bg/bg-activity-2.avif)] bg-cover bg-no-repeat bg-center  min-h-[200px] md:min-h-[280px] flex flex-col justify-center">
        <div className="container">
          <h2 className="text-coklat text-2xl md:text-4xl font-bold text-center">
            Karena belajar harus menyenangkan
          </h2>
        </div>
      </section>
    </main>
  );
}
