"use client";

import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/app/contact-us/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5] font-sans">
      
      {/* 1. Hero Section matching Screenshot 1 */}
      <section className="relative w-full h-[600px] sm:h-[680px] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero voccasafe.jpeg"
          alt="Vocasafe Watch Landing Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Semi-transparent overlay to ensure Sora Bold text is crisp */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white leading-tight">
              Designed to Give Every <br />
              Voice a Way to Be Heard
            </h1>

            <p className="text-sm sm:text-base text-white/95 font-light leading-relaxed max-w-2xl">
              Vocasafe Watch™ is being developed as a waterproof, AI-powered communication smartwatch designed for future AAC use. <br />
              It is designed to combine AAC communication tools with real-time safety tracking in a single wearable device — aiming to empower users with safety, speech, and connection on the go.
            </p>

            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/contact-us?type=Join%20waitlist"
                className="bg-[#E95F21] hover:bg-orange-600 transition-all duration-300 font-sans font-extrabold uppercase tracking-wider py-4 px-10 rounded-full text-center text-xs text-white shadow-md hover:shadow-lg hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Join Waitlist
              </Link>
              
              {/* White pill with inline black right arrow circle mirroring Screenshot 1 */}
              <Link
                href="/contact-us?type=Request%20Pitch%20Deck"
                className="group bg-white hover:bg-gray-50 text-neutral-dark font-sans font-bold uppercase tracking-wider py-2 pl-8 pr-2 rounded-full flex items-center justify-between gap-6 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98] sm:self-auto"
              >
                <span className="text-[10px] sm:text-xs">Request Pitch Deck</span>
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold transition-transform duration-300 group-hover:translate-x-1">
                  ➔
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Communication Meets Safety Section matching Screenshot 2 */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header & Subtitle */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-[38px] font-sans font-bold text-[#121F36] leading-tight">
              Communication Meets Safety
            </h2>
            <p className="text-sm sm:text-base text-gray-500 font-light max-w-2xl mx-auto">
              Assistive technology designed for individuals with communication challenges
            </p>
            
            {/* Center Slider Dot divider */}
            <div className="relative flex items-center justify-center pt-3">
              <div className="w-full max-w-[600px] h-[1px] bg-gray-200" />
              <div className="absolute w-1.5 h-1.5 rounded-full bg-black" />
            </div>
          </div>

          {/* Grid Layout containing Product and Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4">
            {/* Left Watch Prototype display (span 4) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[280px] aspect-square transition-transform hover:scale-105 duration-300">
                <Image
                  src="/images/vocasafe watch prototype1.png"
                  alt="Vocasafe Smartwatch Prototype Display"
                  fill
                  sizes="(max-width: 1024px) 100vw, 280px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Three Columns (span 8) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* 01 AAC Integration */}
              <div className="bg-[#F5F5F5] border border-gray-200/60 rounded-[14px] p-6 space-y-4 hover:shadow-sm transition-shadow">
                <span className="inline-block text-xs font-bold text-white bg-[#E95F21] rounded-md px-2 py-0.5">
                  01
                </span>
                <h3 className="font-sans font-bold text-base text-[#121F36]">
                  AAC Integration
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-500 font-light leading-relaxed">
                  Vocasafe Watch™ is intended to integrate with leading AAC systems once fully developed, allowing users to access their customized vocabulary sets right from their wrist. Support for symbol-based communication, predictive text, and voice output will ensure users can express complex thoughts quickly and naturally.
                </p>
              </div>

              {/* 02 GPS Safety Tracking */}
              <div className="bg-[#F5F5F5] border border-gray-200/60 rounded-[14px] p-6 space-y-4 hover:shadow-sm transition-shadow">
                <span className="inline-block text-xs font-bold text-white bg-[#E95F21] rounded-md px-2 py-0.5">
                  02
                </span>
                <h3 className="font-sans font-bold text-base text-[#121F36]">
                  GPS Safety Tracking
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-500 font-light leading-relaxed">
                  Advanced GPS technology is planned to provide accurate location tracking in future releases. Set up multiple safe zones for home, school, and therapy centers. Planned to provide notifications when your loved one arrives or leaves designated areas, with complete location history available through the caregiver app.
                </p>
              </div>

              {/* 03 SOS Alerts */}
              <div className="bg-[#F5F5F5] border border-gray-200/60 rounded-[14px] p-6 space-y-4 hover:shadow-sm transition-shadow">
                <span className="inline-block text-xs font-bold text-white bg-[#E95F21] rounded-md px-2 py-0.5">
                  03
                </span>
                <h3 className="font-sans font-bold text-base text-[#121F36]">
                  SOS Alerts
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-500 font-light leading-relaxed">
                  Emergency alerts are intended to include precise GPS location, timestamp, and optional audio recording once released. Notifications will be sent simultaneously to all designated emergency contacts, aiming to ensure help arrives as quickly as possible.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. Designed to Work Section matching Screenshot 3 */}
      <section className="py-20 bg-[#F5F5F5] border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-[38px] font-sans font-bold text-[#121F36] leading-tight">
              How Vocasafe Watch™ is Designed to Work
            </h2>
            <p className="text-sm sm:text-base text-gray-500 font-light max-w-2xl mx-auto">
              Simple, seamless communication and safety in four steps
            </p>
            
            {/* Center Slider divider */}
            <div className="relative flex items-center justify-center pt-3">
              <div className="w-full max-w-[600px] h-[1px] bg-gray-300" />
              <div className="absolute w-1.5 h-1.5 rounded-full bg-black" />
            </div>
          </div>

          {/* Steps 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto pt-4">
            
            {/* 01 Wear It */}
            <div className="bg-white border border-gray-100 rounded-[14px] p-6 sm:p-8 space-y-3 hover:shadow-sm transition-all">
              <div className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#E95F21] text-white text-xs font-bold">
                01
              </div>
              <h3 className="font-sans font-bold text-lg text-[#121F36]">Wear It</h3>
              <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                When released, users will be able to put on the Vocasafe Watch™ Designed for comfort and simplicity. Expected design is to stay active all day, tracking location and enabling communication when needed.
              </p>
            </div>

            {/* 02 Communicate */}
            <div className="bg-white border border-gray-100 rounded-[14px] p-6 sm:p-8 space-y-3 hover:shadow-sm transition-all">
              <div className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#E95F21] text-white text-xs font-bold">
                02
              </div>
              <h3 className="font-sans font-bold text-lg text-[#121F36]">Communicate</h3>
              <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                When available, users will be able to use voice or touch to express needs using planned AAC tools. The planned AAC tools are designed to make it easy for users with speech challenges to send quick phrases, alerts, or custom messages to caregivers.
              </p>
            </div>

            {/* 03 Stay Safe */}
            <div className="bg-white border border-gray-100 rounded-[14px] p-6 sm:p-8 space-y-3 hover:shadow-sm transition-all">
              <div className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#E95F21] text-white text-xs font-bold">
                03
              </div>
              <h3 className="font-sans font-bold text-lg text-[#121F36]">Stay Safe</h3>
              <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                Smart safety that never sleeps. Planned GPS and motion sensors are designed to help caregivers once the system is deployed to stay informed of movement and activity, providing peace of mind in real time.
              </p>
            </div>

            {/* 04 Stay Connected */}
            <div className="bg-white border border-gray-100 rounded-[14px] p-6 sm:p-8 space-y-3 hover:shadow-sm transition-all">
              <div className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#E95F21] text-white text-xs font-bold">
                04
              </div>
              <h3 className="font-sans font-bold text-lg text-[#121F36]">Stay Connected</h3>
              <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                Designed for real-time insights once fully launched for family and therapists. Future updates plan to enable sharing of activity logs and communication charts summaries through the Vocasafe Care App, anywhere, anytime.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Text Callout & Orange Marquee Ticker Section matching Screenshot 4 */}
      <section className="bg-white py-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          {/* Bold text callout */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-[#121F36] leading-tight tracking-tight max-w-4xl mx-auto">
            Designed to empower AAC users with safety, speech, and connection on the go.
          </h2>

          {/* Premium Infinite-Scroll Orange Marquee Ticker */}
          <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw] bg-[#E95F21] py-4 select-none rotate-[0.5deg]">
            <div className="flex whitespace-nowrap gap-8 animate-[marquee_24s_linear_infinite]">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="inline-flex items-center gap-6 text-sm sm:text-base font-sans font-bold uppercase tracking-widest text-white">
                  <span>Every voice matters - and every voice deserves to be heard.</span>
                  <span className="text-[12px] opacity-80">♦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Guided by Lived Experience Section matching Screenshot 5 */}
      <section className="py-20 bg-[#F5F5F5] border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image column (span 6) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-[18px] overflow-hidden shadow-md border border-gray-200 bg-white">
                <Image
                  src="/images/togetherness.avif"
                  alt="Vocasafe Lived Experience Support Group"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Story column (span 6) */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl font-sans font-bold text-[#121F36] leading-tight">
                Guided by Lived Experience <br className="hidden sm:inline" />
                and Professional Insight
              </h2>
              <div className="w-12 h-1 bg-[#E95F21] rounded-full" />
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                Vocasafe is being designed through collaboration with families, caregivers, clinicians, educators, and technologists who understand the everyday realities of communication challenges. Their perspectives aim to inform how the platform is planned to be developed, tested, and refined over time. Feedback has been gathered through informational conversations and co-design.
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

      {/* 6. Embedded Mini Form to support seamless actions */}
      <section id="waitlist-form" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-10">
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#121F36]">
              Join the Vocasafe Movement
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-light">
              Connect with us to receive milestone updates, requests for pilots, or strategic updates.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

    </div>
  );
}
