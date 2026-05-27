"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Product Features", href: "/features" },
  { label: "Partners & Investors", href: "/partner" },
  { label: "Impact", href: "/impact" },
  { label: "Resources", href: "/resources" },
  { label: "Crowdfunding", href: "/crowdfunding" },
  { label: "Co-Design", href: "/co-design" },
  { label: "Insights", href: "/blog" },
  { label: "Share Your Voice", href: "/shareyourvoice" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    setIsOpen(false);
    setTimeout(checkScroll, 100);
  }, [pathname]);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollNavLeft = () => {
    scrollRef.current?.scrollBy({ left: -160, behavior: "smooth" });
  };

  const scrollNavRight = () => {
    scrollRef.current?.scrollBy({ left: 160, behavior: "smooth" });
  };

  return (
    <header className="w-full fixed top-0 z-50">
      {/* ── Main Bar ── */}
      <nav className="w-full bg-primary-navy border-b border-white/10 flex items-center h-[58px]">

        {/* ── Logo & Wordmark ── */}
        <Link
          href="/"
          prefetch={true}
          className="flex items-center gap-2.5 px-3 sm:px-5 lg:px-6 h-full lg:border-r border-white/15 hover:bg-white/5 transition-colors"
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
            <Image
              src="/images/logo-icon.png"
              alt="Vocasafe Logo"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>
          <span className="font-sans font-semibold text-[12.5px] tracking-tight text-white whitespace-nowrap">
            Vocasafe Watch™
          </span>
        </Link>

        {/* ── Desktop Nav Scroller ── */}
        <div className="hidden lg:flex items-center flex-1 min-w-0 h-full relative overflow-hidden">

          {/* Scroll-left chevron — only when there is content to the left */}
          <button
            onClick={scrollNavLeft}
            aria-label="Scroll nav left"
            className={cn(
              "h-full px-2 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 transition-all flex-shrink-0",
              !canScrollLeft && "opacity-0 pointer-events-none w-0 px-0"
            )}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Links */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex items-center h-full overflow-x-auto no-scrollbar scroll-smooth flex-1"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  prefetch={true}
                  className={cn(
                    "h-full flex items-center text-[10px] font-semibold uppercase tracking-widest px-3.5 whitespace-nowrap transition-all border-b-2 flex-shrink-0",
                    isActive
                      ? "text-white border-accent-orange"
                      : "text-white/60 hover:text-white border-transparent hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Scroll-right chevron — fades with gradient */}
          <button
            onClick={scrollNavRight}
            aria-label="Scroll nav right"
            className={cn(
              "h-full px-2.5 flex items-center justify-center text-white/60 hover:text-white transition-all flex-shrink-0 bg-gradient-to-l from-primary-navy via-primary-navy/80 to-transparent",
              !canScrollRight && "opacity-0 pointer-events-none w-0 px-0"
            )}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ── Right: CTA + Contact Icons ── */}
        <div className="flex items-center gap-1.5 sm:gap-2 ml-auto flex-shrink-0 px-2 sm:px-5 h-full border-l border-white/10">

          {/* CONTACT US button */}
          <Link
            href="/contact-us"
            prefetch={true}
            className="flex items-center bg-white hover:bg-white/90 active:bg-white/80 border border-transparent text-primary-navy text-[9px] sm:text-[9.5px] font-extrabold uppercase tracking-[0.12em] sm:tracking-[0.14em] py-1.5 px-2.5 sm:py-2 sm:px-4 rounded-[5px] transition-all whitespace-nowrap animate-pulse-subtle"
          >
            Contact Us
          </Link>

          {/* Phone icon — circle */}
          <a
            href="tel:+19786015097"
            className="hidden sm:flex w-7 h-7 items-center justify-center text-white/60 hover:text-white border border-white/20 rounded-full transition-all hover:border-white/50 hover:bg-white/5"
            title="Call us"
          >
            <Phone size={11} className="stroke-[2.5]" />
          </a>

          {/* Email icon — circle */}
          <a
            href="mailto:catherine@vocasafewatch.net"
            className="hidden sm:flex w-7 h-7 items-center justify-center text-white/60 hover:text-white border border-white/20 rounded-full transition-all hover:border-white/50 hover:bg-white/5"
            title="Email us"
          >
            <Mail size={11} className="stroke-[2.5]" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-8 h-8 flex items-center justify-center p-1.5 text-white/80 hover:text-white transition-all cursor-pointer ml-0.5 sm:ml-1 relative"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <Menu size={19} className={cn("absolute transition-all duration-300 transform", isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100")} />
              <X size={19} className={cn("absolute transition-all duration-300 transform", isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0")} />
            </div>
          </button>
        </div>
      </nav>

      {/* ── Mobile Dropdown ── */}
      <div
        className={cn(
          "w-full bg-primary-navy border-b border-white/10 lg:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden",
          isOpen ? "max-h-[460px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        )}
      >
        <div className="px-4 py-3 space-y-0.5">
          {NAV_LINKS.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                prefetch={true}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-2.5 px-3 text-[10.5px] font-semibold uppercase tracking-widest rounded transition-all duration-300 transform",
                  isActive
                    ? "text-white bg-white/10 border-l-2 border-accent-orange pl-4"
                    : "text-white/60 hover:text-white hover:bg-white/5",
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2"
                )}
                style={{
                  transitionDelay: isOpen ? `${idx * 25}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Mobile bottom row */}
          <div
            className={cn(
              "pt-3 pb-1 flex items-center gap-2 transition-all duration-500 transform",
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            )}
            style={{
              transitionDelay: isOpen ? `${NAV_LINKS.length * 25}ms` : "0ms",
            }}
          >
            <Link
              href="/contact-us"
              prefetch={true}
              onClick={() => setIsOpen(false)}
              className="flex-1 text-center bg-white hover:bg-white/90 active:bg-white/80 border border-transparent text-primary-navy text-[9.5px] font-extrabold uppercase tracking-[0.12em] py-2.5 px-4 rounded-[5px] transition-all"
            >
              Contact Us
            </Link>
            <a
              href="tel:+19786015097"
              className="w-9 h-9 flex items-center justify-center text-white/60 hover:text-white border border-white/20 rounded-full transition-all"
              title="Call us"
            >
              <Phone size={13} />
            </a>
            <a
              href="mailto:catherine@vocasafewatch.net"
              className="w-9 h-9 flex items-center justify-center text-white/60 hover:text-white border border-white/20 rounded-full transition-all"
              title="Email us"
            >
              <Mail size={13} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
