import { Poppins } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import { SessionProvider } from "next-auth/react";
// import { usePathname } from "next/navigation";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Terus Mengajar",
  description:
    "Temukan berbagai macam jenis kegiatan untuk anak seperti mengenal angka, huruf, mewarnai, gunting tempel, dan masih banyak yang lainnya",
  icons: {
    // icon: "/images/favicon.png", // favicon default
    // apple: "/images/apple-touch-icon.png", // optional untuk iOS
    icon: [{ rel: "icon", type: "image/png", url: "/images/favicon.png" }],
  },
};

export default function RootLayout({ children }) {
  // const pathname = usePathname();
  // const hideLayout = ["/login", "/signup", "/loading"].includes(pathname);
  const hideLayout = false;

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <SessionProvider>
          {!hideLayout && <Navbar />}
          {children}
          {!hideLayout && <Footer />}
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                marginTop: "75px", // supaya agak ke bawah, tidak nutup navbar
              },
            }}
          />
        </SessionProvider>
      </body>
    </html>
  );
}
