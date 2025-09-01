// import { useState } from "react";
// import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import { auth, signIn } from "@/lib/auth";
// import { redirect } from "next/dist/server/api-utils";

export default async function Login() {
  const session = await auth();
  if(session) redirect("/");

  // const router = useRouter();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");

  //   // contoh fake login (ganti dengan API request kamu)
  //   if (email === "admin@test.com" && password === "123456") {
  //     router.push("/"); // redirect ke home
  //   } else {
  //     setError("Email atau password salah! Mohon coba kembali");
  //   }
  // };

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center bg-[#fff3d5]">
      <div className="text-center mb-6">
        <img
          src="/images/logo/logo-tm-warna.avif"
          alt="Logo"
          className="mx-auto w-20"
        />
      </div>

      <div className="relative z-9 w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-8">Masuk Sekarang</h3>

        <form className="space-y-4">
          <div className="mb-8">
            <label htmlFor="signin-email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="signin-email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border-[#cbaf78]"
              required
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="signin-password"
              className="block text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="signin-password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              required
            />
          </div>
          {/* {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )} */}
          <button
            type="submit"
            id="tombol-login"
            className="tombol-pink w-full"
          >
            Masuk
          </button>
        </form>

        <div className="flex items-center gap-2 my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">Atau</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <form
          action={async () => {
            "use server"
            await signIn("google", {redirectTo: '/auth/loading'})
          }}
        >
          <button type="submit" className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition"><img src="https://cdn.prod.website-files.com/644f34dbedcce472b908fe59/65c58fc135f02f4e7656d433_google.svg" alt="Google" className="w-5 h-5" /> Lanjutkan dengan Google</button>
        </form>



        <div className="text-center mt-6 text-sm">
          Belum memiliki akun?{" "}
          <a href="/auth/signup" className="text-pink font-medium underline">
            Daftar
          </a>
        </div>
      </div>

      <img 
        className="absolute left-[-400px] top-[-220px] rotate-30 w-160"
        src="/images/shapes/logo-tm-cream.avif" 
        alt="" 
      />
      <img 
        className="absolute right-[-420px] bottom-[-250px] rotate-30 w-160"
        src="/images/shapes/logo-tm-cream.avif" 
        alt="" 
      />
    </div>
  );
}
