"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const bbb = document.createElement("script");
    bbb.type = "text/javascript";
    bbb.async = true;
    bbb.src = "https://seal-boston.bbb.org/v3/seals/blue-seal-293-61-bbb-569666.js";
    const s = document.getElementsByTagName("script")[0];
    if (s && s.parentNode) {
      s.parentNode.insertBefore(bbb, s);
    } else {
      document.head.appendChild(bbb);
    }
  }, []);

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
    <footer className="bg-[#121F36] text-white pt-16 pb-8 border-t border-white/5 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Subscribe Section */}
        <div className="space-y-4 text-left">
          <h3 className="text-xl font-sans font-bold uppercase tracking-widest text-[#E95F21]">
            Subscribe
          </h3>
          <p className="text-xs sm:text-sm text-white font-semibold">
            Join our community of caregivers, therapists, and innovators working to make communication accessible to everyone.
          </p>
          <p className="text-xs text-white/80 font-light">
            Subscribe to receive updates on product development, early access opportunities, and stories from families using assistive technology to change lives.
          </p>

          {/* Form */}
          <form onSubmit={handleSubscribe} className="space-y-4 pt-2">
            <div>
              <label htmlFor="newsletter-email" className="block text-[11px] font-bold text-white uppercase tracking-wider mb-2">
                Email *
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#121F36] border border-white rounded-[6px] py-3 px-4 text-xs text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange transition-all"
              />
            </div>

            <div className="flex items-start gap-2.5">
              <input
                id="newsletter-consent"
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 rounded border-white/20 bg-white/10 text-accent-orange focus:ring-accent-orange cursor-pointer w-4 h-4"
              />
              <label htmlFor="newsletter-consent" className="text-xs text-white/70 select-none cursor-pointer leading-tight">
                Yes, subscribe me to your newsletter.
              </label>
            </div>

            {/* Flat Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 bg-transparent border border-white hover:bg-white hover:text-[#121F36] disabled:border-gray-500 disabled:text-gray-500 transition-all rounded-[6px] text-xs font-bold uppercase tracking-wider text-white shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={12} className="animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>SUBMIT</span>
              )}
            </button>

            {status === "success" && (
              <p className="text-xs text-green-400 font-medium bg-green-950/20 border border-green-500/30 rounded py-1.5 px-3">
                ✓ Successfully subscribed to our newsletter!
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-400 font-medium bg-red-950/20 border border-red-500/30 rounded py-1.5 px-3">
                ✗ {errorMessage}
              </p>
            )}
          </form>
        </div>

        {/* Explore Links section for SEO and navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10 text-xs text-white/70 font-light">
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider">Explore</h4>
            <ul className="space-y-1.5">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/features" className="hover:underline">Product</Link></li>
              <li><Link href="/impact" className="hover:underline">Impact</Link></li>
              <li><Link href="/partner" className="hover:underline">Partner</Link></li>
              <li><Link href="/resources" className="hover:underline">Resources</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider">Co-Design</h4>
            <ul className="space-y-1.5">
              <li><Link href="/co-design" className="hover:underline">Co-Design</Link></li>
              <li><Link href="/crowdfunding" className="hover:underline">Crowdfunding</Link></li>
              <li><Link href="/shareyourvoice" className="hover:underline">Share Your Voice</Link></li>
              <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-1.5 leading-relaxed">
              <li>Email: <a href="mailto:info@vocasafewatch.net" className="hover:underline font-medium text-white/80">info@vocasafewatch.net</a></li>
              <li>Phone: <a href="tel:+19786015097" className="hover:underline font-medium text-white/80">+1-978-601-5097</a></li>
              <li className="text-white/50 pt-1 leading-tight">
                Address:<br />
                <span className="block mt-0.5 text-white/60">
                  165 Middlesex Ave, #1093<br />
                  Somerville, MA 02145
                </span>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider">Legal</h4>
            <ul className="space-y-1.5">
              <li><Link href="/accessibility-statement" className="hover:underline">Accessibility Statement</Link></li>
              <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              
            </ul>
          </div>
        </div>

        {/* Follow & Socials section */}
        <div className="space-y-3 pt-6 border-t border-white/10">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">
            Follow our journey.
          </h4>
          <div className="flex items-center gap-6">
            {/* TikTok */}
            <a href="https://tiktok.com/@vocasafe" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#E95F21] transition-colors" aria-label="TikTok">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"/>
                <path d="M10 12C8.34315 12 7 13.3431 7 15C7 16.6569 8.34315 18 10 18C11.6569 18 13 16.6569 13 15V6C13.3333 7 14.6 9 17 9"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com/vocasafewatch" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#E95F21] transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            {/* Facebook */}
            <a href="https://facebook.com/vocasafewatch" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#E95F21] transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            {/* Twitter / X */}
            <a href="https://x.com/vocasafe" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#E95F21] transition-colors" aria-label="X (Twitter)">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com/company/vocasafe-watch" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#E95F21] transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        {/* Copyright and Disclaimer */}
        <div className="pt-6 border-t border-white/15 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <p className="text-[11px] text-white/60">
              © 2026 by Vocasafe Watch™. All rights reserved.
            </p>
            <p className="text-[10px] text-white/45 font-light leading-normal max-w-2xl">
              Vocasafe Watch™ is currently in development. Features and functionality described are subject to change.
            </p>
          </div>
          {/* BBB Seal */}
          <div className="flex-shrink-0 flex items-center justify-center min-h-[61px] min-w-[293px]">
            {React.createElement('bbbseal', { className: 'bbbseal bbb_1_61_293' })}
          </div>
        </div>

      </div>
    </footer>
  );
}
