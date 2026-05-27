"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Bell, Share2 } from "lucide-react";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VocaSafe Watch",
    "url": "https://www.vocasafewatch.net",
    "logo": "https://www.vocasafewatch.net/images/logo.png",
    "description": "An intelligent wearable assistive communication platform designed for critical real-world moments.",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-978-601-5097",
      "contactType": "customer support",
      "email": "info@vocasafewatch.net"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "165 Middlesex Ave, #1093",
      "addressLocality": "Somerville",
      "addressRegion": "MA",
      "postalCode": "02145",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.instagram.com/vocasafewatch",
      "https://www.facebook.com/vocasafewatch",
      "https://www.linkedin.com/company/vocasafe-watch",
      "https://x.com/vocasafe"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* SECTION 1 — Hero */}
      <section className="relative w-full min-h-[480px] sm:min-h-[520px] flex items-center overflow-hidden py-12 bg-gradient-to-br from-primary-navy to-slate-900 text-white">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left text column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs sm:text-sm text-[#E95F21] font-bold uppercase tracking-widest block">
                Communication Anywhere. Anytime.
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white leading-tight">
                An intelligent wearable assistive communication platform designed for critical real-world moments.
              </h1>

              <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed max-w-2xl">
                Built to support real-time communication, caregiver awareness, and safety for individuals with communication challenges.
              </p>

              {/* Hero Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact-us"
                  className="bg-[#E95F21] hover:bg-orange-600 transition-all duration-300 font-sans font-extrabold uppercase tracking-wider py-3.5 px-8 rounded-full text-center text-xs text-white shadow-md hover:shadow-lg hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Join Waitlist
                </Link>
              </div>
            </div>

            {/* Right Watch image column */}
            <div className="lg:col-span-5 hidden lg:flex justify-center">
              <div className="relative w-full max-w-[280px] aspect-square transition-transform hover:scale-105 duration-500">
                <Image
                  src="/images/vocasafe watch prototype1.png"
                  alt="VocaSafe Watch Prototype"
                  fill
                  priority
                  sizes="280px"
                  className="object-contain filter drop-shadow-[0_20px_50px_rgba(233,95,33,0.15)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — The Real Problem */}
      <section className="py-16 bg-[#121F36] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white leading-tight">
            The Communication Gap That Still Exists
          </h2>
          <div className="w-12 h-1 bg-[#E95F21] mx-auto rounded-full" />
          <div className="space-y-4 text-white/90 text-xs sm:text-sm font-light leading-relaxed max-w-3xl mx-auto text-left sm:text-center pt-2">
            <p>
              Millions of individuals with communication disabilities struggle to express their needs in real time — not in therapy sessions or structured classrooms, but in the moments that matter most.
            </p>
            <p className="font-semibold text-white">
              At the grocery store. At the park. During a medical emergency. In a crowded, unfamiliar environment.
            </p>
            <p>
              Caregivers are left guessing. Responses are delayed. Urgent needs go unexpressed. And the communication tools that exist today were not built for these moments.
            </p>
            <p className="text-base sm:text-lg font-bold text-[#E95F21] text-center pt-2">
              VocaSafe Watch was.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — How VocaSafe Supports Real-World Moments */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#121F36] leading-tight">
              Built for the Moments That Matter
            </h2>
            <div className="w-12 h-1 bg-[#E95F21] mx-auto rounded-full mt-2" />
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
            {/* Pillar 1 — Communicate */}
            <div className="bg-[#F5F5F5] border border-gray-200/60 rounded-[14px] p-6 space-y-4 hover:shadow-sm transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#E95F21] flex items-center justify-center">
                <MessageSquare className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="font-sans font-bold text-base text-[#121F36]">
                Communicate
              </h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Real-time AAC communication designed to work in any environment — familiar or unfamiliar, calm or urgent.
              </p>
            </div>

            {/* Pillar 2 — Alert */}
            <div className="bg-[#F5F5F5] border border-gray-200/60 rounded-[14px] p-6 space-y-4 hover:shadow-sm transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                <Bell className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="font-sans font-bold text-base text-[#121F36]">
                Alert
              </h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Instant SOS alerts and caregiver notifications when communication breaks down or safety is at risk.
              </p>
            </div>

            {/* Pillar 3 — Stay Connected */}
            <div className="bg-[#F5F5F5] border border-gray-200/60 rounded-[14px] p-6 space-y-4 hover:shadow-sm transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#121F36] flex items-center justify-center">
                <Share2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="font-sans font-bold text-base text-[#121F36]">
                Stay Connected
              </h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Seamless connection between the individual, their caregivers, and the people around them — wherever they are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Current Development Status */}
      <section className="py-16 bg-[#1A263E] text-white">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white leading-tight">
              Where We Are Today
            </h2>
            <div className="w-12 h-1 bg-[#E95F21] mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-white/80 font-light max-w-xl mx-auto">
              VocaSafe Watch is in active development. We are not yet shipping — and we are being intentional about every step. Here is what is actively underway:
            </p>
          </div>

          {/* Clean Vertical List */}
          <div className="space-y-6 max-w-2xl mx-auto pt-2">
            <div className="border-l-4 border-[#E95F21] pl-5 py-1">
              <strong className="block text-xs sm:text-sm font-bold text-white">
                Co-design conversations with caregivers, educators, and clinicians
              </strong>
              <span className="block text-xs text-white/70 font-light mt-1">
                ↳ Actively gathering insight from the communities this platform serves.
              </span>
            </div>

            <div className="border-l-4 border-[#E95F21] pl-5 py-1">
              <strong className="block text-xs sm:text-sm font-bold text-white">
                Prototype workflow planning
              </strong>
              <span className="block text-xs text-white/70 font-light mt-1">
                ↳ Translating co-design learnings into device architecture decisions.
              </span>
            </div>

            <div className="border-l-4 border-[#E95F21] pl-5 py-1">
              <strong className="block text-xs sm:text-sm font-bold text-white">
                Clinical and caregiver input integration
              </strong>
              <span className="block text-xs text-white/70 font-light mt-1">
                ↳ Incorporating feedback from speech-language pathologists and AAC specialists.
              </span>
            </div>

            <div className="border-l-4 border-[#E95F21] pl-5 py-1">
              <strong className="block text-xs sm:text-sm font-bold text-white">
                Pilot program development
              </strong>
              <span className="block text-xs text-white/70 font-light mt-1">
                ↳ Building the framework for early pilot partnerships with schools and therapy programs.
              </span>
            </div>
          </div>

          <div className="text-center pt-4 space-y-4">
            <p className="text-xs text-white/80 max-w-md mx-auto leading-relaxed font-light">
              If you are a caregiver, clinician, school district, or investor who wants to be part of what comes next — we want to hear from you.
            </p>
            <div className="pt-2">
              <Link
                href="/contact-us"
                className="inline-flex bg-[#E95F21] hover:bg-orange-600 transition-all font-sans font-extrabold uppercase tracking-wider py-3.5 px-8 rounded-full text-center text-xs text-white shadow-md active:scale-[0.98]"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Guided by Lived Experience */}
      <section className="py-12 bg-[#F5F5F5] border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Image column (span 6) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-[18px] overflow-hidden shadow-md border border-gray-200 bg-white">
                <Image
                  src="/images/togetherness.avif"
                  alt="VocaSafe Lived Experience Support Group"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Story column (span 6) */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl font-sans font-bold text-[#121F36] leading-tight">
                Guided by Lived Experience <br className="hidden sm:inline" />
                and Professional Insight
              </h2>
              <div className="w-12 h-1 bg-[#E95F21] rounded-full" />
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                VocaSafe is developed through close collaboration with families, caregivers, clinicians, educators, and technologists who understand the everyday realities of communication challenges. Their active perspectives directly guide how our platform is built, evaluated, and refined. Feedback is gathered continuously through open co-design panels and community sessions.
              </p>
              
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#121F36] hover:text-[#E95F21] transition-colors"
                >
                  <span>Learn more about our journey</span>
                  <span>➔</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — Waitlist / Get Involved */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#121F36]">
              Be Part of What's Coming
            </h2>
            <div className="w-12 h-1 bg-[#E95F21] mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-gray-500 font-light">
              Join a growing community of caregivers, clinicians, educators, and advocates helping shape the future of assistive communication.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/contact-us"
              className="inline-flex bg-[#121F36] hover:bg-slate-800 transition-all font-sans font-extrabold uppercase tracking-wider py-3.5 px-8 rounded-full text-center text-xs text-white shadow-md active:scale-[0.98]"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
