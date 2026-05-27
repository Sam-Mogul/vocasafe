"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    if (!consent) {
      setStatus("error");
      setErrorMessage("Please consent to the newsletter subscription.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setConsent(false);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <footer className="bg-primary-navy text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Footer Top: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="font-display font-bold text-xl uppercase tracking-widest text-accent-orange">
                VocaSafe Watch™
              </span>
              <p className="mt-3 text-xs text-white/70 font-light leading-relaxed max-w-sm">
                AI-powered, waterproof assistive smartwatch combining symbol-based AAC communication with real-time GPS safety tracking to empower independence.
              </p>
            </div>
            
            <div className="space-y-3.5 text-xs text-white/80 font-light">
              <a
                href="mailto:info@vocasafewatch.net"
                className="flex items-center gap-2.5 hover:text-accent-light transition-colors"
              >
                <Mail size={16} className="text-accent-orange flex-shrink-0" />
                <span>info@vocasafewatch.net</span>
              </a>
              <a
                href="tel:+19786015097"
                className="flex items-center gap-2.5 hover:text-accent-light transition-colors"
              >
                <Phone size={16} className="text-accent-orange flex-shrink-0" />
                <span>+1 (978) 601-5097</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-accent-orange flex-shrink-0 mt-0.5" />
                <span>
                  165 Middlesex Ave, #1093<br />
                  Somerville, MA 02145<br />
                  United States
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-semibold text-xs uppercase tracking-widest text-accent-orange">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-white/85">
              <li>
                <Link href="/" className="hover:text-accent-light transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent-light transition-colors">About</Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-accent-light transition-colors">Product Features</Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-accent-light transition-colors">Impact</Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-accent-light transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-accent-light transition-colors">Resources</Link>
              </li>
              <li>
                <Link href="/crowdfunding" className="hover:text-accent-light transition-colors">Crowdfunding</Link>
              </li>
              <li>
                <Link href="/co-design" className="hover:text-accent-light transition-colors">Co-Design</Link>
              </li>
              <li>
                <Link href="/shareyourvoice" className="hover:text-accent-light transition-colors">Share Your Voice</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Categories */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-semibold text-xs uppercase tracking-widest text-accent-orange">
              Legal & Insights
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-white/85">
              <li>
                <Link href="/accessibility-statement" className="hover:text-accent-light transition-colors">Accessibility Statement</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-accent-light transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-sale" className="hover:text-accent-light transition-colors">Terms of Sale</Link>
              </li>
              <li>
                <Link href="/blog/categories/company-insights" className="hover:text-accent-light transition-colors">Company Insights</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Box */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-semibold text-xs uppercase tracking-widest text-accent-orange">
              Join Our Community
            </h4>
            <p className="text-[11px] text-white/70 leading-relaxed font-light">
              Join our community of caregivers, therapists, and innovators working to make communication accessible to everyone.
            </p>
            <p className="text-[10px] text-white/50 leading-relaxed font-light">
              Subscribe to receive updates on product development, early access opportunities, and stories from families.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2.5 mt-2">
              <div>
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Enter your email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded py-2 px-3 text-xs text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange transition-all"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  id="newsletter-consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 rounded border-white/25 bg-white/10 text-accent-orange focus:ring-accent-orange cursor-pointer"
                />
                <label htmlFor="newsletter-consent" className="text-[9px] text-white/60 leading-tight select-none cursor-pointer">
                  Yes, subscribe me to your newsletter.
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-2 bg-accent-orange hover:bg-orange-600 active:bg-orange-700 disabled:bg-gray-600 transition-colors rounded text-xs font-bold uppercase tracking-wider text-white shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={12} className="animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit</span>
                )}
              </button>

              {status === "success" && (
                <p className="text-[10px] text-green-400 font-medium">
                  ✓ Successfully subscribed to our newsletter!
                </p>
              )}
              {status === "error" && (
                <p className="text-[10px] text-red-400 font-medium">
                  ✗ {errorMessage}
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Footer Bottom: Socials, Copyright, Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@vocasafewatch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/65 hover:text-white transition-colors"
              aria-label="Follow VocaSafe Watch on TikTok"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.42-.43-.61-.67-.02 2.44-.01 4.88-.01 7.32-.06 2.06-.69 4.14-2.07 5.67-1.58 1.83-4.04 2.82-6.49 2.68-2.6-.08-5.18-1.54-6.38-3.85-1.39-2.58-1.07-5.96.88-8.19 1.49-1.76 3.86-2.59 6.13-2.3v4.06c-1.12-.13-2.31.25-3.04 1.14-.68.8-.75 2-.22 2.89.58.98 1.83 1.47 2.92 1.19.8-.18 1.4-.87 1.51-1.68.07-1.18.04-2.36.05-3.54V0z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/vocasafewatch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/65 hover:text-white transition-colors"
              aria-label="Follow VocaSafe Watch on Instagram"
            >
              <svg className="w-[18px] h-[18px] stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/vocasafewatch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/65 hover:text-white transition-colors"
              aria-label="Follow VocaSafe Watch on Facebook"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M9 8H7v3h2v9h3v-9h3.6L16 8h-4V6c0-.5.5-1 1-1h3V2h-3c-3 0-5 2-5 5v1z" />
              </svg>
            </a>
            {/* X (formerly Twitter) */}
            <a
              href="https://x.com/vocasafe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/65 hover:text-white transition-colors"
              aria-label="Follow VocaSafe Watch on X"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/vocasafe-watch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/65 hover:text-white transition-colors"
              aria-label="Follow VocaSafe Watch on LinkedIn"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          {/* Legal Rights Block */}
          <div className="text-center md:text-right space-y-1">
            <p className="text-[10px] text-white/50">
              © 2026 by VocaSafe Watch™ All rights reserved.
            </p>
            <p className="text-[9px] text-white/40 max-w-md leading-normal font-light">
              Disclaimer: VocaSafe Watch™ is currently in development. Features and functionality described are subject to change.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
