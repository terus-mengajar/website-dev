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
    default: "Terus Mengajar - Rekomendasi Ide Bermain Sambil Belajar untuk TK dan PAUD",
    template: "%s | Terus Mengajar",
  },
  description:
    "Rekomendasi ide bermain sambil belajar untuk TK dan PAUD. Download worksheet Calistung dan Coding gratis! Aktivitas menyenangkan untuk anak usia 2-6 tahun.",
  keywords: [
    "bermain sambil belajar",
    "worksheet anak TK",
    "worksheet anak PAUD",
    "calistung anak",
    "coding anak",
    "lembar kerja anak",
    "mewarnai anak",
    "belajar menghitung",
    "belajar membaca",
    "aktivitas anak",
    "worksheet gratis",
    "funpaper",
    "anak usia dini",
    "PAUD",
    "TK",
  ],
  authors: [{ name: "Terus Mengajar" }],
  creator: "Terus Mengajar",
  publisher: "Terus Mengajar",
  metadataBase: new URL("https://terusmengajar.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Terus Mengajar - Rekomendasi Ide Bermain Sambil Belajar untuk TK dan PAUD",
    description:
      "Rekomendasi ide bermain sambil belajar untuk TK dan PAUD. Download worksheet Calistung dan Coding gratis! Aktivitas menyenangkan untuk anak usia 2-6 tahun.",
    url: "https://terusmengajar.id",
    siteName: "Terus Mengajar",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terus Mengajar - Bermain Sambil Belajar untuk TK dan PAUD",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terus Mengajar - Rekomendasi Ide Bermain Sambil Belajar untuk TK dan PAUD",
    description:
      "Download worksheet Calistung dan Coding gratis! Aktivitas menyenangkan untuk anak usia 2-6 tahun.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ rel: "icon", type: "image/png", url: "/images/favicon.png" }],
    apple: "/images/apple-touch-icon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Terus Mengajar",
  alternateName: "TM",
  url: "https://terusmengajar.id",
  logo: {
    "@type": "ImageObject",
    url: "https://terusmengajar.id/images/og.png",
    width: 1200,
    height: 630,
  },
  sameAs: [
    "https://www.tiktok.com/@terusmengajar.id",
    "https://instagram.com/terusmengajar",
    "https://pinterest.com/terusmengajar/",
    "https://t.me/terusmengajarofficial",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: "Indonesian",
  },
};

export default function RootLayout({ children }) {
  // const pathname = usePathname();
  // const hideLayout = ["/login", "/signup", "/loading"].includes(pathname);
  const hideLayout = false;

  return (
    <html lang="id">
      <head>
        {/* Google Analytics */}
        {process.env.GOOGLE_ANALYTIC_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTIC_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GOOGLE_ANALYTIC_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {/* Organization JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
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
