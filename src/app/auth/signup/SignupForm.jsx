"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signupAction } from "./actions";
import toast from "react-hot-toast";

export default function SignupForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.target);
    const result = await signupAction(formData);

    setLoading(false);

    if (result?.error) {
      setError(result.error);
    } else {
      toast.success("Daftar berhasil. Silahkan login!", {
        duration: 7000, // default 4000, jadi ini lebih lama
      });
      // router.push("/auth/signup/loading"); // redirect setelah signup sukses
      setTimeout(() => {
        router.push("/auth/login");
      }, 500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-8">
        <label htmlFor="signup-email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="signup-email"
          name="email"
          className="mt-1 block w-full rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border-[#cbaf78]"
          required
        />
      </div>
      <div className="mb-8">
        <label htmlFor="signup-password" className="block text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="signup-password"
          name="password"
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          required
        />
      </div>
      {error && (
        <div className="bg-[#ffe5e3] rounded-lg p-4 text-sm font-medium text-center">{error}</div>
      )}
      <button 
      type="submit" 
      id="tombol-signup" 
      className="tombol-pink w-full"
      disabled={loading}
      >
        {loading ? 'Loading..' : 'Daftar'}
      </button>
    </form>
  );
}
