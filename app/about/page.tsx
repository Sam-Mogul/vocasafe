import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Compass, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Vocasafe Watch™ | Our Mission to Redefine Safe Communication",
  description: "Vocasafe Watch™ was created to make communication and safety accessible to everyone. Learn about our mission, innovation in assistive technology, and how we're improving lives through intelligent wearable design.",
  alternates: {
    canonical: "https://www.vocasafewatch.net/about",
  },
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5] font-sans">
      
      {/* 1. Hero Section matching About Screenshot 1 */}
      <section className="relative w-full flex items-center overflow-hidden" style={{minHeight: 'clamp(240px, 35vw, 380px)'}}>
        {/* Background Image of the smiling boy */}
        <Image
          src="/images/416f3c_9e072eff0b1d4b3ab0eea598d4c8fb9a~mv2.jpg"
          alt="Vocasafe Watch About Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Text */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left">
          <div className="max-w-2xl space-y-3">
            <h1 className="text-3xl sm:text-5xl font-sans font-extrabold text-white leading-tight">
              About Vocasafe Watch™
            </h1>
            <p className="text-sm sm:text-lg text-white/90 font-light leading-relaxed">
              Where Every Voice Finds Freedom.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Our Founder's Story matching About Screenshot 2 */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-sans font-bold text-[#121F36]">
              Our Founder's Story
            </h2>
            
            {/* Center Slider Dot divider */}
            <div className="relative flex items-center justify-center pt-3">
              <div className="w-full max-w-[600px] h-[1px] bg-gray-200" />
              <div className="absolute w-1.5 h-1.5 rounded-full bg-black" />
            </div>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-4">
            {/* Left Column: Image of Mother and Son (span 5) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[18px] overflow-hidden shadow-md border border-gray-200 bg-neutral-light">
                <Image
                  src="/images/founder story.avif"
                  alt="Catherine Katambo & Son Roy - Founders"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Founder's narrative text (span 7) */}
            <div className="lg:col-span-7 space-y-6 text-sm text-gray-600 font-light leading-relaxed">
              <p>
                Vocasafe Watch™ was born from lived experience and is now being developed to address those needs—inspired by my son, Roy, who uses AAC to communicate. As a parent, I saw how speech devices often fall short in everyday life, especially near water or outdoors.
              </p>
              <p className="font-semibold text-gray-800 border-l-2 border-[#E95F21] pl-3 py-1">
                That moment sparked a mission: to create a wearable tool that keeps every voice accessible — anytime, anywhere.
              </p>
              <p>
                Watching Roy struggle with bulky communication tablets that couldn't keep up with his active life, I realized communication technology needed to be more accessible, more portable, and more human.
              </p>
              <p>
                What if communication could live on your wrist? What if safety and expression could coexist in one elegant device? What if every individual - regardless of their ability to speak - could feel heard, safe, and empowered?
              </p>
              <p>
                Vocasafe Watch™ is being developed as a wearable AAC solution designed to combine communication tools with real-time safety tracking, designed for children, teens, and adults with autism, speech delays, apraxia, cerebral palsy, and other communication challenges.
              </p>
              <p className="font-bold text-gray-900 border-t border-gray-100 pt-4">
                Because every voice matters - and every voice deserves to be heard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Stand For Section matching About Screenshot 3 */}
      <section className="py-14 bg-[#F5F5F5] border-t border-gray-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-sans font-bold text-[#121F36]">
              What We Stand For
            </h2>
            
            {/* Center Slider Dot divider */}
            <div className="relative flex items-center justify-center pt-3">
              <div className="w-full max-w-[600px] h-[1px] bg-gray-300" />
              <div className="absolute w-1.5 h-1.5 rounded-full bg-black" />
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4">
            
            {/* Left Column: Abstract outline graphic mimicking Wix vector design (span 4) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-inner">
                {/* Outward rings */}
                <div className="w-[85%] h-[85%] rounded-full border border-gray-200 flex items-center justify-center">
                  <div className="w-[80%] h-[80%] rounded-full border border-gray-100 flex items-center justify-center">
                    {/* Centered Orange Oval vector graphic */}
                    <div className="w-[60%] h-[75%] bg-[#E95F21] rounded-full rotate-[30deg] shadow-md transition-transform hover:scale-105" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 2x2 pillars grid (span 8) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Inclusion */}
              <div className="bg-white border border-gray-100 rounded-[14px] p-6 space-y-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#E95F21] flex items-center justify-center">
                  <Heart size={18} className="stroke-[2.5]" />
                </div>
                <h3 className="font-sans font-bold text-base text-[#121F36]">Inclusion</h3>
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                  Every design decision reflects our belief that every voice matters — and every person deserves to be heard.
                </p>
              </div>

              {/* Connection */}
              <div className="bg-white border border-gray-100 rounded-[14px] p-6 space-y-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#121F36] flex items-center justify-center">
                  <Users size={18} className="stroke-[2.5]" />
                </div>
                <h3 className="font-sans font-bold text-base text-[#121F36]">Connection</h3>
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                  Vocasafe builds stronger connections between families, educators, and caregivers — keeping everyone informed and in sync.
                </p>
              </div>

              {/* Innovation */}
              <div className="bg-white border border-gray-100 rounded-[14px] p-6 space-y-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center">
                  <span className="text-base font-bold">✦</span>
                </div>
                <h3 className="font-sans font-bold text-base text-[#121F36]">Innovation</h3>
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                  Technology built around real lives — with therapist collaboration and lived experience at the centre of every decision.
                </p>
              </div>

              {/* Independence */}
              <div className="bg-white border border-gray-100 rounded-[14px] p-6 space-y-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-green-50 text-emerald-600 flex items-center justify-center">
                  <Compass size={18} className="stroke-[2.5]" />
                </div>
                <h3 className="font-sans font-bold text-base text-[#121F36]">Independence</h3>
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                  Empowering users to move, communicate, and participate in daily life without barriers — wherever they are.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Mission & Vision Banners matching About Screenshot 4 */}
      <section className="bg-[#121F36] text-white py-14 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Mission Block */}
          <div className="space-y-4">
            <span className="text-[32px] sm:text-[42px] font-sans font-bold text-[#E95F21] block">
              01
            </span>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#E95F21] -mt-2">
              Our Mission
            </h3>
            <p className="text-lg sm:text-2xl font-sans font-semibold leading-relaxed text-white">
              We aim to empower individuals who rely on AAC with the freedom to communicate safely, confidently, and independently — wherever life takes them.
            </p>
            <p className="text-xs sm:text-sm text-white/70 font-light uppercase tracking-wider pt-2 border-t border-white/10 max-w-sm">
              We believe every person deserves a voice that’s always within reach.
            </p>
          </div>

          {/* Vision Block */}
          <div className="space-y-4 pt-4">
            <span className="text-[32px] sm:text-[42px] font-sans font-bold text-[#E95F21] block">
              02
            </span>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#E95F21] -mt-2">
              Our Vision
            </h3>
            <p className="text-lg sm:text-2xl font-sans font-semibold leading-relaxed text-white">
              A world where communication barriers no longer limit connection. Through innovation, inclusion, and empathy, Vocasafe Watch™ aims to redefine what assistive technology can be — bridging speech, safety, and independence in one smart, wearable device.
            </p>
          </div>

        </div>
      </section>

      {/* 5. Join the Vocasafe Movement Split Card matching About Screenshot 5 */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 rounded-[18px] overflow-hidden shadow-lg border border-gray-100 items-stretch">
            
            {/* Left: Watch Illustration */}
            <div className="relative min-h-[260px] md:min-h-[340px] bg-[#F5F5F5]">
              <Image
                src="/images/watch illustration.avif"
                alt="Vocasafe Watch Illustration"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-contain p-8 sm:p-12 animate-fade-in-up"
              />
            </div>

            {/* Right: Dark Navy Join banner */}
            <div className="bg-[#121F36] text-white p-8 sm:p-12 md:p-16 flex flex-col justify-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#E95F21]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-3 relative z-10">
                <h2 className="text-3xl sm:text-4xl font-sans font-bold leading-tight">
                  Join the Vocasafe <br />
                  Movement
                </h2>
                
                {/* Custom brush-stroke underline graphic mimicking the Wix look */}
                <div className="w-48 h-1 bg-[#E95F21] rounded-full" />
              </div>

              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed max-w-sm">
                Be part of the movement to make communication technology accessible, empowering, and inclusive for everyone.
              </p>

              <div className="pt-4">
                <Link
                  href="/contact-us?type=Join%20waitlist"
                  className="bg-[#E95F21] hover:bg-orange-600 transition-all font-sans font-extrabold uppercase tracking-wider py-3.5 pl-8 pr-2 rounded-full inline-flex items-center justify-between gap-6 text-white text-xs shadow-md active:scale-[0.98]"
                >
                  <span>Join Waitlist</span>
                  <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-white text-[10px] font-bold">
                    ➔
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
