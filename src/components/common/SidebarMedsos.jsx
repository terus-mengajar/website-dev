"use client";

import {
  FaTiktok,
  FaInstagram,
  FaPinterest,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

export default function SidebarMedsos() {
  const items = [
    {
      name: "Tiktok",
      color: "bg-black",
      icon: <FaTiktok size={28} />,
      url: "#",
    },
    {
      name: "Instagram",
      color: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
      icon: <FaInstagram size={28} />,
      url: "#",
    },
    {
      name: "Pinterest",
      color: "bg-red-600",
      icon: <FaPinterest size={28} />,
      url: "#",
    },
    // {
    //   name: "Telegram",
    //   color: "bg-sky-500",
    //   icon: <FaTelegram size={20} />,
    //   url: "#",
    // },
    // {
    //   name: "Whatsapp",
    //   color: "bg-green-500",
    //   icon: <FaWhatsapp size={20} />,
    //   url: "#",
    // },
  ];

  return (
    <aside className="space-y-3 w-[220px]">
      <h2 className="text-xs font-semibold">Ikuti Kami di</h2>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
            {items.map((item, i) => (
            <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${item.color} text-white text-xl flex items-center gap-3 px-6 py-4 rounded-lg font-semibold hover:opacity-90 transition`}
            >
                {item.icon}
                <span>{item.name}</span>
            </a>
            ))}
        </div>

        {/* Tambahan teks khusus (opsional) */}
        <div>
          <p className="text-xs mb-2 font-semibold">Bundle Funpaper Gratis tiap pekan</p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 text-white text-xl flex items-center gap-3 px-6 py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            <FaTelegram size={28} />
            <span>Telegram</span>
          </a>
        </div>

        <div>
          <p className="text-xs mb-2 font-semibold">Tanya Produk & Informasi Lainnya</p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white text-xl flex items-center gap-3 px-6 py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            <FaWhatsapp size={28} />
            <span>Whatsapp</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
