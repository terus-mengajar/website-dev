import Image from "next/image";
import Link from "next/link";

export default function Petualangan() {
  return (
    <section className="base-section py-32 bg-[url(/images/bg/bg-petualangan.jpg)] bg-cover bg-center flex flex-col justify-center min-h-120!">
      <div className="container gap-8 items-center">
        <h2 className="text-[#3582A6] text-3xl md:text-4xl font-bold mb-8 text-center">
          Petualangan untuk terus mengajar dimulai disini
        </h2>

        <div className="text-center">
          <Link href="/petualangan">
            <button className="tombol-biru bg-[#3FADEA]! hover:bg-[#3FADEA]! xl:text-lg!">
              Jelajahi Sekarang
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
