export default function Footer() {
  return (
    <footer className="bg-purple text-white py-12">
      <div className="container mx-auto px-4">
        {/* Back to top + Logo */}
        <div className="mb-8">
          <img
            src="/images/logo/logo-tm-putih.avif"
            alt="Terusmengajar Logo"
            className="h-10"
          />
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Produk */}
          <div>
            <h4 className="font-semibold mb-3">Produk</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/funpaper-harian" className="">
                  Funpaper Harian
                </a>
              </li>
              <li>
                <a href="/funpaper-tema" className="">
                  Funpaper Tema
                </a>
              </li>
              <li>
                <a href="/mini-game" className="">
                  Mini Games
                </a>
              </li>
            </ul>
          </div>

          {/* Tentang Kami */}
          <div>
            <h4 className="font-semibold mb-3">Tentang Kami</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/tentang-kami" className="hover:underline">
                  terusmengajar.id
                </a>
              </li>
              <li>
                <a href="/syarat-dan-ketentuan" className="hover:underline">
                  Syarat dan Ketentuan
                </a>
              </li>
              <li>
                <a href="/credit-attribution" className="hover:underline">
                  Credit & Attribution
                </a>
              </li>
            </ul>
          </div>

          {/* Spacer */}
          {/* <div></div> */}

          {/* Social Media */}
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-3 md:text-right">Social Media</h4>
            <ul className="space-y-3 text-sm flex flex-col md:items-end">
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
