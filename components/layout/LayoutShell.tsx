"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const BARE_ROUTES = [
    "/",
    "/contact-us",
    "/privacy-policy",
    "/accessibility-statement",
  ];

  const isHolding =
    BARE_ROUTES.includes(pathname) || pathname.startsWith("/post/");

  if (isHolding) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[58px]">{children}</main>
      <Footer />
    </>
  );
}
