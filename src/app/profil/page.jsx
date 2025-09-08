import { auth } from "@/lib/auth"; // sesuaikan path import auth()
import { redirect } from "next/navigation";
import ProfilePage from "./ProfilePage";

export const metadata = {
  title: "Profil",
  //   description:
  //     "Temukan berbagai macam jenis kegiatan untuk anak seperti mengenal angka, huruf, mewarnai, gunting tempel, dan masih banyak yang lainnya"
};

export default async function Page() {
  const session = await auth();
  // console.log(session)

  // kalau belum login, redirect ke /
  if (!session) {
    redirect("/");
  }


  return (
    <main className="bg-[#fcfbf8] text-sm mt-[68px]">
      <section className="pt-[40px] pb-[80px]">
        <div className="container">
          <ProfilePage session={session} />
        </div>
      </section>
    </main>
  );
}
