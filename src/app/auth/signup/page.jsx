import { auth, signIn } from "@/lib/auth";
import SignupForm from "./SignupForm";

export default async function LoginPage() {
  const session = await auth();
  if (session) redirect("/");

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
        <h3 className="text-xl font-semibold mb-8">Daftar Sekarang</h3>

        <SignupForm />

        <div className="flex items-center gap-2 my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">Atau</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/" });
          }}
        >
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition"
          >
            <img
              src="https://cdn.prod.website-files.com/644f34dbedcce472b908fe59/65c58fc135f02f4e7656d433_google.svg"
              alt="Google"
              className="w-5 h-5"
            />{" "}
            Lanjutkan dengan Google
          </button>
        </form>

        <div className="text-center mt-6 text-sm">
          Sudah memiliki akun?{" "}
          <a href="/auth/login" className="text-pink font-medium underline">
            Masuk
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
