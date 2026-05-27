import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VocaSafe Watch™ | Smart AAC & Safety Watch for Communication and Care",
    template: "%s | VocaSafe Watch™",
  },
  description: "VocaSafe Watch™ combines Augmentative and Alternative Communication (AAC) tools with real-time safety tracking. Empowering individuals with communication challenges to connect, stay safe, and live more independently.",
  alternates: {
    canonical: "https://www.vocasafewatch.net",
  },
  verification: {
    google: "E5RrYfiRYut8ZkwWCxxzygIjQ6BRk5KXEcx_P2jyNrc",
  },
  openGraph: {
    title: "VocaSafe Watch™ | Smart AAC & Safety Watch for Communication and Care",
    description: "VocaSafe Watch™ combines Augmentative and Alternative Communication (AAC) tools with real-time safety tracking.",
    url: "https://www.vocasafewatch.net",
    siteName: "VocaSafe Watch™",
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
    <html lang="en" className={`${plusJakartaSans.variable} ${dmSans.variable} h-full antialiased`}>
      <head>
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
      </head>
      <body className="flex min-h-full flex-col font-sans bg-white text-neutral-dark">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
