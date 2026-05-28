import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VocaSafe Watch™ | Platform Evolution",
  description:
    "VocaSafe is evolving its platform architecture as we develop the next generation of wearable assistive communication technology focused on real-time communication support during critical moments.",
  alternates: {
    canonical: "https://www.vocasafewatch.net",
  },
};

export default function HoldingPage() {
  return (
    <div
      style={{ backgroundColor: "#121F36" }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
    >
      {/* Logo */}
      <div className="flex flex-col items-center gap-3 mb-12">
        <div className="relative w-14 h-14 sm:w-16 sm:h-16">
          <Image
            src="/images/logo-icon.png"
            alt="VocaSafe Watch™ Logo"
            fill
            sizes="64px"
            className="object-contain"
            priority
          />
        </div>
        <span className="text-white font-semibold text-sm tracking-tight select-none">
          VocaSafe Watch™
        </span>
      </div>

      {/* Main content block */}
      <div className="max-w-xl w-full text-center space-y-6">
        {/* Positioning statement */}
        <p className="text-white text-base sm:text-lg font-light leading-relaxed tracking-wide">
          VocaSafe is evolving its platform architecture as we develop the next
          generation of wearable assistive communication technology focused on
          real-time communication support during critical moments.
        </p>

        {/* Tagline */}
        <p
          className="text-sm sm:text-base font-light tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Communication Anywhere. Anytime.
        </p>

        {/* CTA */}
        <div className="pt-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 border border-white text-white text-xs font-semibold uppercase tracking-widest px-8 py-3.5 rounded-sm hover:bg-white hover:text-[#121F36] transition-colors duration-200"
          >
            Stay Informed <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* Social icons */}
      <div className="flex items-center gap-6 mt-16">
        {/* TikTok */}
        <a
          href="https://tiktok.com/@vocasafe"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="text-white/50 hover:text-white transition-colors duration-200"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" />
            <path d="M10 12C8.34315 12 7 13.3431 7 15C7 16.6569 8.34315 18 10 18C11.6569 18 13 16.6569 13 15V6C13.3333 7 14.6 9 17 9" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/vocasafewatch"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white/50 hover:text-white transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/vocasafewatch"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-white/50 hover:text-white transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>

        {/* X / Twitter */}
        <a
          href="https://x.com/vocasafe"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="text-white/50 hover:text-white transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/company/vocasafe-watch"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white/50 hover:text-white transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-10 text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
        © 2026 VocaSafe Watch™. All rights reserved.
      </p>
    </div>
  );
}
