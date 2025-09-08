"use client";

import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { User, Clock, Settings, LogOut } from "lucide-react";
import toast from "react-hot-toast";

export default function ProfilePage({ session }) {
  // console.log("Session:", session);
  const [nama, setNama] = useState(session?.user?.name || "");
  //   const [image, setImage] = useState(session?.user?.image || "");
  const [email, setEmail] = useState(session?.user?.email || "");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [funpaperLogs, setFunpaperLogs] = useState([]);
  const [miniGameLogs, setMiniGameLogs] = useState([]);

  useEffect(() => {
    const fetchFunpaperLogs = async () => {
      const res = await fetch("/api/funpaper-log");
      if (res.ok) {
        const data = await res.json();
        setFunpaperLogs(data);
      }
    };
    fetchFunpaperLogs();
  }, []);

  useEffect(() => {
    const fetchMinigameLogs = async () => {
      const res = await fetch("/api/mini-game-log");
      if (res.ok) {
        const data = await res.json();
        setMiniGameLogs(data);
      }
    };
    fetchMinigameLogs();
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");

    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();

      if (data.success) {
        setNama(name);
        toast.success("Profil berhasil diperbarui!");
      } else {
        toast.error(data.error || "Gagal update profil");
      }
    } catch (err) {
      console.error(err);
      toast.error("Terjadi kesalahan server");
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setLoadingPassword(true);

    if (password !== repassword) {
      toast.error("Konfirmasi password tidak sama!");
      setLoadingPassword(false);
      return;
    }

    try {
      const res = await fetch("/api/update-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: session.user.email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Password berhasil diperbarui!");
      } else {
        toast.error(data.error || "Gagal update password");
      }
    } catch (err) {
      toast.error("Terjadi kesalahan server");
    } finally {
      setLoadingPassword(false);
    }
  };

  const [activeTab, setActiveTab] = useState("profile");

  const menu = [
    { id: "profile", label: "My Profile", icon: <User size={18} /> },
    { id: "riwayat", label: "Riwayat", icon: <Clock size={18} /> },
    { id: "pengaturan", label: "Pengaturan", icon: <Settings size={18} /> },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4 bg-[#fbf6f2] px-8 md:px-20 py-5 md:py-8 rounded-xl mb-14">
        <div className="flex me-8 items-center justify-center w-30 h-20 rounded-full">
          <img
            src={session?.user?.image || "/images/profil-default.avif"}
            alt="Foto Profil"
            className="bg-[#e4cbb2] rounded-full"
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold">{nama || email}</h1>
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="md:w-1/4 border-b md:border-b-0 md:border-r pr-0 md:pr-6 mb-6 border-[#e4cbb2]">
          <nav className="space-y-2 flex flex-col md:space-x-0 space-x-2 md:space-y-2 overflow-x-auto my-2 mb-6">
            {menu.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition ${
                  activeTab === item.id
                    ? "bg-rose-400 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </button>
            ))}
            <button
              onClick={() => signOut()}
              className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50"
            >
              <LogOut size={18} />
              <span className="ml-2">Keluar</span>
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="md:w-3/4 pl-0 md:pl-6">
          {activeTab === "profile" && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Profil Saya</h2>
              <div className="space-y-2">
                <table>
                  <tbody>
                    <tr>
                      <td className="pe-8 py-2">Nama</td>
                      <td>Mohammada Aprilianto</td>
                    </tr>
                    <tr>
                      <td className="pe-8 py-2">Email</td>
                      <td>mohammada.aprilianto@gmail.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "riwayat" && (
            <div>
              <h2 className="text-xl font-semibold mb-8">Riwayat</h2>
              <div className="space-y-10">
                {/* FUNPAPER */}
                <div>
                  <h3 className="font-bold mb-2">Riwayat Funpaper</h3>
                  <ul className="divide-y divide-gray-200">
                    {funpaperLogs.length === 0 && (
                      <li className="py-2 text-gray-500">Belum ada riwayat.</li>
                    )}

                    {funpaperLogs.map((log) => (
                      <li className="flex justify-between py-2" key={log.id}>
                        <span>{log.name}</span>
                        <a
                          href={"/katalog/" + log.slug}
                          className="text-blue-600 hover:underline"
                        >
                          Lihat
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* MINI GAME */}
                <div>
                  <h3 className="font-bold mb-2">Riwayat Mini Game</h3>
                  <ul className="divide-y divide-gray-200">
                    {miniGameLogs.length === 0 && (
                      <li className="py-2 text-gray-500">Belum ada riwayat.</li>
                    )}

                    {miniGameLogs.map((log) => (
                      <li className="flex justify-between py-2" key={log.id}>
                        <span>{log.name}</span>
                        <a
                          href={"/mini-game/" + log.slug}
                          className="text-blue-600 hover:underline"
                        >
                          Lihat
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "pengaturan" && (
            <>
              <div className="mb-16">
                <h2 className="text-xl font-semibold mb-8">Profil Saya</h2>
                <form
                  onSubmit={handleUpdateProfile}
                  className="space-y-4 max-w-md"
                >
                  <div className="mb-8">
                    <label className="block text-sm font-medium">Nama</label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={nama}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-rose-400 focus:border-rose-400 p-2"
                    />
                  </div>
                  <div className="mb-8">
                    <label className="block text-sm font-medium">Email</label>
                    <input
                      type="email"
                      defaultValue={email}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm bg-gray-100 cursor-not-allowed p-2"
                      disabled
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#8562a8] text-white hover:bg-[#8562a8]/80"
                  >
                    Perbarui Profil
                  </button>
                </form>
              </div>

              {/* GANTI PASSWORD */}
              {session?.provider === "credentials" && (
                <div>
                  <h2 className="text-xl font-semibold mb-8">Ganti Password</h2>
                  <form
                    onSubmit={handleUpdatePassword}
                    className="space-y-4 max-w-md"
                  >
                    <div className="mb-8">
                      <label className="block text-sm font-medium">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-rose-400 focus:border-rose-400 p-2"
                      />
                    </div>
                    <div className="mb-8">
                      <label className="block text-sm font-medium">
                        Konfirmasi Password
                      </label>
                      <input
                        type="password"
                        name="repassword"
                        value={repassword}
                        onChange={(e) => setRepassword(e.target.value)}
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm p-2"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-lg bg-[#8562a8] text-white hover:bg-[#8562a8]/80 disabled:bg-gray-400 disabled:cursor-not-allowed"
                      disabled={loadingPassword}
                    >
                      Ganti Password
                    </button>
                  </form>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
