"use client";

import Link from "next/link";
import { Compass, Home, MessageSquare, Info, BookOpen, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white px-4 sm:px-6 lg:px-8 relative overflow-hidden py-16">
      {/* Decorative premium grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#121f3605_1px,transparent_1px),linear-gradient(to_bottom,#121f3605_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      
      {/* Glowing radial accent light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#E95F21]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-xl text-center space-y-8 relative z-10 animate-fade-in-up">
        {/* Modern decorative illustration with Compass */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-orange-100 animate-ping opacity-25 scale-75" />
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-orange-50 text-[#E95F21] border border-orange-100 flex items-center justify-center shadow-sm relative">
              <Compass size={40} className="sm:size-48 stroke-[1.5]" />
            </div>
          </div>
        </div>

        {/* Headline section */}
        <div className="space-y-3">
          <span className="text-xs font-bold text-[#E95F21] uppercase tracking-widest bg-orange-50 py-1.5 px-4 rounded-full inline-block">
            Error Code 404
          </span>
          <h1 className="text-4xl sm:text-5xl font-sans font-black text-[#121F36] tracking-tight leading-none">
            Page Not Found
          </h1>
          <div className="w-12 h-1 bg-[#E95F21] mx-auto rounded-full mt-2" />
        </div>

        {/* Support copy */}
        <p className="text-sm sm:text-base text-gray-500 font-light max-w-md mx-auto leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track!
        </p>

        {/* Dynamic actions - no dead ends */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto pt-4">
          <Link
            href="/"
            className="w-full border border-gray-200 bg-white hover:bg-neutral-light hover:border-gray-300 text-[#121F36] font-bold uppercase tracking-wider py-3.5 px-6 rounded-full text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:-translate-y-0.5"
          >
            <Home size={14} className="text-[#E95F21]" />
            <span>Home</span>
          </Link>
          
          <Link
            href="/about"
            className="w-full border border-gray-200 bg-white hover:bg-neutral-light hover:border-gray-300 text-[#121F36] font-bold uppercase tracking-wider py-3.5 px-6 rounded-full text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:-translate-y-0.5"
          >
            <Info size={14} className="text-[#E95F21]" />
            <span>About</span>
          </Link>

          <Link
            href="/blog"
            className="w-full border border-gray-200 bg-white hover:bg-neutral-light hover:border-gray-300 text-[#121F36] font-bold uppercase tracking-wider py-3.5 px-6 rounded-full text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:-translate-y-0.5"
          >
            <BookOpen size={14} className="text-[#E95F21]" />
            <span>Blog</span>
          </Link>

          <Link
            href="/contact-us"
            className="w-full border border-gray-200 bg-white hover:bg-neutral-light hover:border-gray-300 text-[#121F36] font-bold uppercase tracking-wider py-3.5 px-6 rounded-full text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:-translate-y-0.5"
          >
            <MessageSquare size={14} className="text-[#E95F21]" />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Secondary Back Link */}
        <div className="pt-2">
          <button
            onClick={() => window.history.back()}
            className="text-xs text-gray-400 font-medium hover:text-[#121F36] transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-0 outline-none"
          >
            <ArrowLeft size={12} />
            <span>Go Back to Previous Page</span>
          </button>
        </div>
      </div>
    </div>
  );
}
