import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-purple text-white py-12">
      <div className="container mx-auto px-4">
        {/* Back to top + Logo */}
        <div className="mb-8">
          <Image
            src="/images/logo/logo-tm-putih.avif"
            alt="Terusmengajar Logo"
            width={62}
            height={40}
            className="h-auto"
            unoptimized
          />
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Produk */}
          <div>
            <h4 className="font-semibold mb-3">Produk</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/funpaper-coding" className="">
                  Funpaper Coding
                </Link>
              </li>
              <li>
                <Link href="/funpaper-calistung" className="">
                  Funpaper Calistung
                </Link>
              </li>
              <li>
                <Link href="/funpaper-harian" className="">
                  Funpaper Harian
                </Link>
              </li>
              <li>
                <Link href="/funpaper-tema" className="">
                  Funpaper Tema
                </Link>
              </li>
            </ul>
          </div>

          {/* Bermain */}
          <div>
            <h4 className="font-semibold mb-3">Bermain</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/calistung" className="">
                  Calistung
                </Link>
              </li>
              <li>
                <Link href="/info/funpaper-interaktif" className="">
                  Funpaper Interaktif
                </Link>
              </li>
              <li>
                <Link href="/mini-game" className="">
                  Mini Games
                </Link>
              </li>
            </ul>
          </div>

          {/* Tentang Kami */}
          <div>
            <h4 className="font-semibold mb-3">Tentang Kami</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tentang-kami" className="hover:underline">
                  terusmengajar.id
                </Link>
              </li>
              <li>
                <Link
                  href="https://s.id/terusmengajar-internship"
                  className="hover:underline"
                  target="_blank"
                >
                  Join Internship Program
                </Link>
              </li>
              <li>
                <Link
                  href="https://terusmengajar.notion.site/Expert-Partnership-Program-298138c5cbc080a88b51f171e48d0b56"
                  className="hover:underline"
                  target="_blank"
                >
                  Expert Partnership Program
                </Link>
              </li>
              <li>
                <Link href="/syarat-dan-ketentuan" className="hover:underline">
                  Syarat dan Ketentuan
                </Link>
              </li>
              <li>
                <Link href="/credit-attribution" className="hover:underline">
                  Credit & Attribution
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="">
            <h4 className="font-semibold mb-3 lg:text-right">Social Media</h4>
            <ul className="space-y-3 text-sm flex flex-col lg:items-end">
              <li>
                <a
                  href="https://www.tiktok.com/@terusmengajar.id"
                  target="_blank"
                  className="flex gap-2 hover:underline"
                >
                  <span>@terusmengajar.id</span>
                  <img
                    src="/images/icons/tiktok-icon.png"
                    alt="TikTok"
                    className="h-5"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/terusmengajar"
                  target="_blank"
                  className="flex items-center gap-2 hover:underline"
                >
                  <span>@terusmengajar</span>
                  <img
                    src="/images/icons/instagram-icon.avif"
                    alt="Instagram"
                    className="h-5"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com/terusmengajar/"
                  target="_blank"
                  className="flex items-center gap-2 hover:underline"
                >
                  <span>@terusmengajar</span>
                  <img
                    src="/images/icons/pinterest-icon.avif"
                    alt="Pinterest"
                    className="h-5"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/terusmengajarofficial"
                  target="_blank"
                  className="flex items-center gap-2 hover:underline"
                >
                  <span>@terusmengajarofficial</span>
                  <img
                    src="/images/icons/telegram-icon.png"
                    alt="Telegram"
                    className="h-5"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=6281934733175"
                  target="_blank"
                  className="flex items-center gap-2 hover:underline"
                >
                  <span>Hubungi Kami (WA)</span>
                  <img
                    src="/images/icons/whatsapp-icon.avif"
                    alt="WhatsApp"
                    className="h-5"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-left text-sm">
          <b>Copyright © {new Date().getFullYear()} Terusmengajar</b>
        </div>
      </div>
    </footer>
  );
}
