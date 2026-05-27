import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Users, Smile, School, ShieldAlert, CheckCircle2, Heart, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Impact of Vocasafe Watch™ | Empowering Voices, Ensuring Safety",
  description: "See how Vocasafe Watch™ is transforming lives — supporting individuals with autism, speech delays, and mobility challenges. Real stories of independence, connection, and peace of mind for families and caregivers.",
  alternates: {
    canonical: "https://www.vocasafewatch.net/impact",
  },
  openGraph: {
    title: "The Impact of Vocasafe Watch™ | Empowering Voices, Ensuring Safety",
    description: "See how Vocasafe Watch™ is transforming lives — supporting individuals with autism, speech delays, and mobility challenges. Real stories of independence, connection, and peace of mind for families and caregivers.",
    url: "https://www.vocasafewatch.net/impact",
    siteName: "Vocasafewatch",
    images: [
      {
        url: "https://www.vocasafewatch.net/images/og/f376fd_e5d956ac453942a9927f60674b069ce3~mv2.jpeg",
        width: 2500,
        height: 1330,
        alt: "Vocasafe Watch Impact and Inclusion",
      },
    ],
    type: "website",
  },
};

export default function Impact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header Section */}
      <section className="relative bg-gradient-to-br from-primary-navy to-slate-900 text-white py-16 lg:py-20 text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/disp- vocasafe.webp"
          alt="Vocasafe Impact"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-4 relative z-10">
          <span className="text-accent-orange uppercase font-bold tracking-widest text-xs">
            Our Social Vision
          </span>
          <h1 className="text-4xl sm:text-5xl font-sans font-extrabold text-white">
            Creating Impact, One Voice at a Time.
          </h1>
          <p className="text-base sm:text-lg text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            See how wrist-worn AAC and intelligent GPS tracking will empower neurodivergent children, support speech SLPs, and reassure families.
          </p>
        </div>
      </section>

      {/* 2. Three Audience Callout Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              Who We Support
            </h2>
            <div className="w-12 h-1 bg-accent-orange mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-neutral-light border border-gray-100 rounded-2xl p-8 space-y-6 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-accent-orange flex items-center justify-center">
                <Smile size={24} />
              </div>
              <h3 className="text-lg font-bold text-primary-navy">Caregivers & Families</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Vocasafe is designed to replace constant hyper-vigilance with deep peace of mind. By providing secure GPS safe-zones and emergency auditory feeds alongside a wearable AAC keyboard, families can confidently support their loved ones in running, playing, and joining community outings.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-neutral-light border border-gray-100 rounded-2xl p-8 space-y-6 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-primary-navy flex items-center justify-center">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-primary-navy">Therapists & SLPs</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                We empower Speech-Language Pathologists by ensuring vocabulary targets travel *with* the patient, moving therapy from isolated clinical rooms to the playground. Integrated cloud dashboards will track used vocabulary, streamlining speech assessments.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-neutral-light border border-gray-100 rounded-2xl p-8 space-y-6 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-emerald-600 flex items-center justify-center">
                <School size={24} />
              </div>
              <h3 className="text-lg font-bold text-primary-navy">Schools & Districts</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Help special educators and school administrators support inclusive learning. Rugged clasp accessories, sensory-friendly screens, and automated school-hour safe bounds ensure students can fully participate in recess and physical education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Forthcoming Impact (case studies) */}
      <section className="py-16 bg-neutral-light border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              Real-World Scenarios
            </h2>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">
              Illustrating the Future Lifeline of Vocasafe Watch™
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Emma */}
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm space-y-4">
              <span className="text-xs font-bold text-accent-orange uppercase block">
                Waterproof Inclusion
              </span>
              <h3 className="text-lg font-bold text-primary-navy">Emma's Pool Outing (Autism, Age 12)</h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Emma is a vibrant 12-year-old autistic child who loves pool play. Since heavy tablets are prohibited near water, she was previously left completely without a voice on outings, unable to signal when she got cold, tired, or thirsty. With Vocasafe Watch's IP68 waterproof chassis, Emma can comfortably wear her AAC on the swings and in the pool, tapping symbol boards to request juice directly from the water.
              </p>
            </div>

            {/* Case Marcus */}
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm space-y-4">
              <span className="text-xs font-bold text-accent-orange uppercase block">
                Rapid Crisis Resolution
              </span>
              <h3 className="text-lg font-bold text-primary-navy">Marcus at the Park (Speech Apraxia, Age 7)</h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Marcus, who has developmental speech apraxia, wandered off during a crowded community festival at a local park. Because he cannot say his name or address, his father faced standard panic. Vocasafe's active safety boundaries immediately pinged the father's phone as Marcus crossed the tree line. His father traced the route, used the emergency audio stream to hear Marcus laughing, and located him in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Statistics Block */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              The Communication Opportunity
            </h2>
            <div className="w-12 h-1 bg-accent-orange mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center space-y-2 p-6 border border-gray-100 rounded-xl bg-neutral-light">
              <strong className="block text-4xl sm:text-5xl font-display font-black text-accent-orange">
                1M+
              </strong>
              <span className="block text-xs font-bold text-primary-navy uppercase tracking-wider">
                People in the US
              </span>
              <p className="text-[10px] text-gray-500 font-light">
                Have significant speech challenges and could benefit from accessible wearables.
              </p>
            </div>

            <div className="text-center space-y-2 p-6 border border-gray-100 rounded-xl bg-neutral-light">
              <strong className="block text-4xl sm:text-5xl font-display font-black text-primary-navy">
                75K+
              </strong>
              <span className="block text-xs font-bold text-primary-navy uppercase tracking-wider">
                Speech Therapists
              </span>
              <p className="text-[10px] text-gray-500 font-light">
                Are actively searching for mobile, play-friendly tools that speed vocabulary targets.
              </p>
            </div>

            <div className="text-center space-y-2 p-6 border border-gray-100 rounded-xl bg-neutral-light">
              <strong className="block text-4xl sm:text-5xl font-display font-black text-accent-orange">
                100%
              </strong>
              <span className="block text-xs font-bold text-primary-navy uppercase tracking-wider">
                Committed
              </span>
              <p className="text-[10px] text-gray-500 font-light">
                To strict Universal Design, sensory comfort, affordability, and data protection rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Collaborate section */}
      <section className="py-16 bg-neutral-light border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              Why Collaborate With Vocasafe?
            </h2>
            <p className="text-xs text-gray-500 font-medium">
              We align deep technical expertise with authentic lived experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
              <strong className="block text-sm font-bold text-primary-navy">
                🚀 Cutting-Edge Tech
              </strong>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                By integrating localized voice synthesis, semantic context predictive modeling, and LTE modular cellular bands, we are building a state-of-the-art assistive wearable.
              </p>
            </div>
            <div className="space-y-3 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
              <strong className="block text-sm font-bold text-primary-navy">
                🎯 Targeted Social Impact
              </strong>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Our technology targets a deeply underserved niche: autistic children, individuals with apraxia, and neurodivergent adults who deserve portable communication support.
              </p>
            </div>
            <div className="space-y-3 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
              <strong className="block text-sm font-bold text-primary-navy">
                📈 High Scalability
              </strong>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                A combination of durable hardware sales and secure cloud SLP dashboards creates a robust, highly-scalable software-as-a-service model with high growth factors.
              </p>
            </div>
            <div className="space-y-3 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
              <strong className="block text-sm font-bold text-primary-navy">
                🤝 Dedicated Support
              </strong>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                We support institutional partners and schools with specialized class mounts, hardware orientations, custom vocabulary templates, and direct SLP lines.
              </p>
            </div>
            <div className="space-y-3 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
              <strong className="block text-sm font-bold text-primary-navy">
                🔐 HIPAA & Privacy First
              </strong>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Data security is non-negotiable. All biometric checks, caregiver audio feeds, and route mapping are protected by secure, HIPAA-compliant storage keys.
              </p>
            </div>
            <div className="space-y-3 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
              <strong className="block text-sm font-bold text-primary-navy">
                🧡 Lived Experience Driven
              </strong>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Our founder Catherine Katambo builds directly from her experience as an AAC mother. Every design choice is driven by a deep, authentic understanding of care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Partner CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-navy to-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Partner With Vocasafe Watch™
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto font-light leading-relaxed">
            We are actively seeking strategic investors, clinical SLP researchers, and developmental schools for initial field pilot programs.
          </p>
          <div className="pt-4">
            <Link
              href="/contact-us?type=Investor%20Relations"
              className="gradient-orange hover:shadow-lg font-bold uppercase tracking-wider py-4 px-8 rounded-full text-xs shadow-md text-white transition-all flex items-center justify-center gap-2 max-w-xs mx-auto cursor-pointer"
            >
              <span>Get in Touch With Our Team</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
