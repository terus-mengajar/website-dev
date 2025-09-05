"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

export default function LoginForm({ callbackUrl }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false, // jangan auto redirect, biar kita handle manual
      email,
      password,
    });

    setLoading(false);

    if (res?.error) {
      setError("Email atau password salah! Mohon coba kembali");
    } else {
      toast.success("Masuk berhasil");
      // router.push("/auth/login/loading");
      setTimeout(() => {
        router.push(callbackUrl);
      }, 500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-8">
        <label htmlFor="signin-email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="signin-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border-[#cbaf78]"
          required
        />
      </div>
      <div className="mb-8">
        <label htmlFor="signin-password" className="block text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="signin-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          required
        />
      </div>
      {error && (
        <div className="bg-[#ffe5e3] rounded-lg p-4 text-sm font-medium text-center">
          {error}
        </div>
      )}
      <button
        type="submit"
        id="tombol-login"
        className="tombol-pink w-full"
        disabled={loading}
      >
        {loading ? 'Loading..' : 'Masuk'}
      </button>
    </form>
  );
}
