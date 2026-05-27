import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vocasafe Watch™ | Smart AAC & Safety Watch for Communication and Care",
    template: "%s | Vocasafe Watch™",
  },
  description: "Vocasafe Watch™ combines Augmentative and Alternative Communication (AAC) tools with real-time safety tracking. Empowering individuals with communication challenges to connect, stay safe, and live more independently.",
  icons: {
    icon: "/images/logo-icon.png",
    shortcut: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
  alternates: {
    canonical: "https://www.vocasafewatch.net",
  },
  verification: {
    google: "E5RrYfiRYut8ZkwWCxxzygIjQ6BRk5KXEcx_P2jyNrc",
  },
  openGraph: {
    title: "Vocasafe Watch™ | Smart AAC & Safety Watch for Communication and Care",
    description: "Vocasafe Watch™ combines Augmentative and Alternative Communication (AAC) tools with real-time safety tracking.",
    url: "https://www.vocasafewatch.net",
    siteName: "Vocasafe Watch™",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${sora.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col font-sans bg-white text-neutral-dark" suppressHydrationWarning>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <Navbar />
        <main className="flex-grow pt-[58px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
