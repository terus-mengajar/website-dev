// import { Metadata } from "next";
import { Suspense } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";

import Script from "next/script";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { SessionProvider } from "next-auth/react";
import PageLoader from "@/components/PageLoader";
// import { usePathname } from "next/navigation";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Terus Mengajar - Download Lembar Kerja",
    // template: "%s | Terus Mengajar"
    template: "%s",
  },
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
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TL3G10LTXP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TL3G10LTXP');
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <SessionProvider>
          {!hideLayout && <Navbar />}

          <Suspense fallback={null}>
            <PageLoader />
          </Suspense>

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
