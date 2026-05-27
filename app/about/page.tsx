import type { Metadata } from "next";
import Link from "next/link";
import { Users, Heart, Lightbulb, UserCheck, ShieldAlert, Award, HelpingHand } from "lucide-react";

export const metadata: Metadata = {
  title: "About VocaSafe Watch™ | Our Mission to Redefine Safe Communication",
  description: "VocaSafe Watch™ was created to make communication and safety accessible to everyone. Learn about our mission, innovation in assistive technology, and how we're improving lives through intelligent wearable design.",
  alternates: {
    canonical: "https://www.vocasafewatch.net/about",
  },
  openGraph: {
    title: "About VocaSafe Watch™ | Our Mission to Redefine Safe Communication",
    description: "VocaSafe Watch™ was created to make communication and safety accessible to everyone. Learn about our mission, innovation in assistive technology, and how we're improving lives through intelligent wearable design.",
    url: "https://www.vocasafewatch.net/about",
    siteName: "Vocasafewatch",
    images: [
      {
        url: "https://www.vocasafewatch.net/images/og/f376fd_676a051384cd456b9d7a3d2f779ea722~mv2.png",
        width: 500,
        height: 500,
        alt: "VocaSafe Watch™ Mission logo",
      },
    ],
    type: "website",
  },
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header Section */}
      <section className="bg-gradient-to-br from-primary-navy to-slate-900 text-white py-16 lg:py-20 text-center relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-4">
          <span className="text-accent-orange uppercase font-bold tracking-widest text-xs">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold">
            About VocaSafe Watch™
          </h1>
          <p className="text-base sm:text-lg text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            Redefining communication accessibility and safety for individuals who use AAC, through compassion, lived experience, and intelligent design.
          </p>
        </div>
      </section>

      {/* 2. Our Technology summary */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
                Our Technology: A New Paradigm
              </h2>
              <div className="w-12 h-1 bg-accent-orange rounded-full" />
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                Traditional Augmentative and Alternative Communication (AAC) tools are often heavy, expensive, and limited to iPad tablets or bulky dedicated communication devices. For children and adults with neurodivergent conditions, this creates constant friction. The devices are easily dropped, forgotten in classrooms, or unusable on playgrounds and outings.
              </p>
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                VocaSafe Watch™ bridges this gap by moving symbol-based communication and keyboard-to-speech tools right to the user's wrist. Built as a durable, waterproof wearable, it integrates seamlessly with leading vocabulary software, while adding critical safety measures like GPS safe-zones and emergency SOS caregiver audio streams to protect non-verbal individuals in critical moments.
              </p>
            </div>
            
            <div className="lg:col-span-5 bg-neutral-light border border-gray-100 p-8 rounded-2xl shadow-sm space-y-4">
              <span className="text-xs font-bold text-accent-orange uppercase tracking-wider block">
                Advisors & Community
              </span>
              <h3 className="text-lg font-bold text-primary-navy">
                Community-Driven Innovation
              </h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                VocaSafe Watch™ is being developed in active collaboration with speech-language pathologists (SLPs), occupational therapists, sensory integration experts, and the very families who need these tools daily. Our advisory board guides our hardware configurations, vocabulary access speeds, and data privacy safeguards.
              </p>
              <div className="pt-2 border-t border-gray-200/80 flex items-center gap-3">
                <Users className="text-primary-navy w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-semibold text-primary-navy">
                  100+ co-design participants and therapists contributing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Founder Story */}
      <section className="py-16 bg-neutral-light border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              The Story Behind the Innovation
            </h2>
            <p className="text-xs text-accent-orange uppercase font-bold tracking-widest">
              Inspired by Roy
            </p>
          </div>

          <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm space-y-6">
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed italic">
              "As a mother of a son who is non-verbal and uses AAC to communicate, I have experienced the gut-wrenching anxiety of wondering if my child could get help if he were separated from me. Roy is vibrant, curious, and expressive, but standard communication tablets don't travel with him to the swings, the swimming pool, or during busy outings. If he runs ahead, he is left completely without a voice and without a way to signal for assistance."
            </p>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              "I searched everywhere for a solution — a rugged, waterproof wearable that combined his speech symbols with basic safety alerts. It didn't exist. That is why I founded VocaSafe. We are building this smartwatch not as a high-tech tracking gimmick, but as an indispensable lifeline. VocaSafe is a communication device first, and a safety companion second, because communication is the ultimate foundation of safety."
            </p>
            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <strong className="block text-sm font-bold text-primary-navy">Catherine Katambo</strong>
                <span className="text-xs text-gray-500">Founder & Mother, VocaSafe Watch™</span>
              </div>
              <span className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-100 text-[10px] font-bold text-accent-orange uppercase py-1 px-3 rounded-full">
                Lived Experience Focused
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Stand For */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              What We Stand For
            </h2>
            <div className="w-12 h-1 bg-accent-orange mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-accent-orange flex items-center justify-center">
                <Heart size={20} />
              </div>
              <h3 className="text-base font-bold text-primary-navy">Inclusion</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Communication is a fundamental human right. We believe no individual should be excluded from community spaces, schoolyards, or activities due to a lack of portable support.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-primary-navy flex items-center justify-center">
                <Users size={20} />
              </div>
              <h3 className="text-base font-bold text-primary-navy">Connection</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                We design our tools to foster real-time connection between children, parents, teachers, and speech therapists, sharing data and progress notes to streamline therapy goals.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
                <Lightbulb size={20} />
              </div>
              <h3 className="text-base font-bold text-primary-navy">Innovation</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                By integrating AI-powered word predictions, ambient audio assistance, and multilingual configurations, we are driving forward the state-of-the-art in assistive technology.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-green-100 text-emerald-600 flex items-center justify-center">
                <UserCheck size={20} />
              </div>
              <h3 className="text-base font-bold text-primary-navy">Independence</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Waterproof, rugged wearables give non-verbal children and neurodivergent adults the confidence to run, play, swim, and navigate outings with less restrictive supervision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mission + Vision statements */}
      <section className="py-16 bg-neutral-light border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Mission */}
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm relative overflow-hidden">
              <span className="absolute -top-6 -right-6 text-7xl font-black text-gray-100 select-none">01</span>
              <h3 className="text-lg font-bold text-primary-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                <Award size={18} className="text-accent-orange" />
                <span>Our Mission</span>
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                To build high-quality, sensory-friendly, waterproof wearable devices that integrate AAC tools and smart safety algorithms. We strive to empower non-verbal individuals, autistic children, and those with developmental speech delays to communicate anywhere, anytime, and live with absolute dignity and freedom.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm relative overflow-hidden">
              <span className="absolute -top-6 -right-6 text-7xl font-black text-gray-100 select-none">02</span>
              <h3 className="text-lg font-bold text-primary-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                <HelpingHand size={18} className="text-primary-navy" />
                <span>Our Vision</span>
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                A world where communication has no borders, classrooms have no speech rooms, and caregivers have complete peace of mind. We envision a future where assistive wearables are affordable, ubiquitous, and deeply customized to the cognitive and sensory profiles of every unique user.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Commitment to Accessibility */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              Commitment to Absolute Accessibility
            </h2>
            <div className="w-12 h-1 bg-accent-orange mx-auto rounded-full" />
          </div>

          <div className="bg-neutral-light border border-gray-100 rounded-2xl p-8 space-y-6">
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              We hold our development practices to the highest accessibility benchmarks. VocaSafe Watch™ is being engineered following **Universal Design** principles. This means accommodating physical limitations (fine-motor tremors, visual impairments, spatial delays) alongside cognitive and sensory hypersensitivities (avoiding high-pitched warning buzzers, harsh LED flickers, and restrictive straps).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-200/80">
              <div className="space-y-1">
                <span className="block text-xs font-bold text-primary-navy uppercase">Universal Design</span>
                <span className="text-[11px] text-gray-500 font-light">Adaptive motor inputs and sensory adjustments.</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-bold text-primary-navy uppercase">Affordable Target</span>
                <span className="text-[11px] text-gray-500 font-light">Committed to pricing matches that prevent device exclusion.</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xs font-bold text-primary-navy uppercase">Lifetime Support</span>
                <span className="text-[11px] text-gray-500 font-light">Dedicated to open updates and technical guides.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Community Feature: YouTube interview */}
      <section className="py-16 bg-neutral-light border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              VocaSafe in the Community
            </h2>
            <p className="text-xs text-gray-500 font-medium">
              Watch Founder Catherine Katambo discuss the pivot and vision on Lynn Community Television.
            </p>
          </div>

          {/* YouTube Video Lazy-Loading Wrapper */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.youtube.com/embed/36ieLGtr3lw"
              title="VocaSafe Watch - Lynn Community Television Interview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      {/* 8. Join Movement CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-navy to-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Join the VocaSafe Movement
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto font-light leading-relaxed">
            Whether you are a caregiver, a therapist, an educator, or an investor, your perspective helps us build a more empowering future.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact-us?type=Join%20waitlist"
              className="gradient-orange hover:shadow-lg font-bold uppercase tracking-wider py-3.5 px-8 rounded-full text-xs shadow-md text-white transition-all cursor-pointer"
            >
              Join Waitlist
            </Link>
            <Link
              href="/co-design"
              className="bg-transparent border border-white/40 hover:bg-white/5 font-bold uppercase tracking-wider py-3.5 px-8 rounded-full text-xs text-white transition-all cursor-pointer"
            >
              Get Involved in Co-Design
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
