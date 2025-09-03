import { auth } from "@/lib/auth"; // sesuaikan path import auth()
import { redirect } from "next/navigation";
import ProfilePage from "./ProfilePage";

export default async function Page() {
  const session = await auth();
  // console.log(session)

  // kalau belum login, redirect ke /
  if (!session) {
    redirect("/");
  }

  return (
    <main className="bg-[#fcfbf8] text-sm">
      <section className="pt-[40px] pb-[80px]">
        <div className="container">
          <ProfilePage session={session} />
        </div>
      </section>
    </main>
  );
}
