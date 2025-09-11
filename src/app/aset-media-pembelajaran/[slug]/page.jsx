import LoadingCard from "@/components/common/LoadingCard";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/aset-media-pembelajaran/${slug}`,
    {
      cache: "no-store", // biar ga cache kalau datanya dinamis
    }
  );

  if (res.status == 404) {
    redirect("/aset-media-pembelajaran");
  }

  const asset = await res.json();

  return {
    title: asset.name,
    // description: game.description || "Mainkan mini game seru di sini!",
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/aset-media-pembelajaran/${slug}`,
    {
      cache: "no-store", // biar ga cache kalau datanya dinamis
    }
  );
  const asset = await res.json();

  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/aset-media-pembelajaran/lainnya/`,
    {
      cache: "no-store", // biar ga cache kalau datanya dinamis
    }
  );
  const asset_lainnyas = await res2.json();

  return (
    <main className="bg-[#fcfbf8] text-sm mt-[68px] pt-[40px] pb-[80px] px-[20px]">
      <section className="mb-8">
        <div className="container">
          <p className="mb-4 text-sm">
            Home &gt; Aset Media Pembelajaran &gt; <b>{asset.name}</b>
          </p>
        </div>
      </section>

      <section className="py-2">
        <div className="container">
          <div className="flex flex-row justify-between items-center mb-4">
            <h1 className="text-xl font-bold">{asset.name}</h1>
            <a href={asset.canva_url} target="_blank" className="tombol-pink">
              Gunakan Asset
            </a>
          </div>

          <Image
            src={asset.cover_url}
            width={940}
            height={520}
            alt="Gambar Aset"
          />
        </div>
      </section>

      <section className="py-14">
        <div className="container">
          <h2 className="text-xl font-bold mb-2">Aset Lainnya</h2>
          {asset_lainnyas.length === 0 && <LoadingCard cols={3} />}

          {asset_lainnyas.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-center">
              {asset_lainnyas.map((asset_lainnya, idx) => (
                <Link
                  className="hover:shadow rounded-xl p-2"
                  href={"/aset-media-pembelajaran/" + asset_lainnya.slug}
                  key={idx}
                >
                  <div className="mb-3">
                    <Image
                      src={asset_lainnya.cover_url}
                      alt="Cover Aset"
                      width={336}
                      height={188}
                      className="rounded-xl "
                    />
                  </div>

                  <p className="text-center text-sm">{asset_lainnya.name}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
