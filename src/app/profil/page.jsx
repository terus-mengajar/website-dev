import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Profil() {
  const session = await auth();
  if(session) redirect("/");
  
  const user = session?.user
  // console.log(session)

  return (
    <main>
        <h1>Profil</h1>
        <form
            action={async () => {
              "use server"
              await signOut({redirectTo: '/'})
            }}
          >
            <button type="submit" className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition">Sign Out</button>
          </form>
    </main>
  );
}
