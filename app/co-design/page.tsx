import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Users, HelpCircle, FileText, ExternalLink, QrCode, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Co-Design With Us | Vocasafe Watch™ – Building Inclusive Communication Together",
  description: "Join the Vocasafe Watch™ co-design community for families, therapists, and partners. Share your insights to help shape an AI-powered, accessible communication platform that empowers every voice — anywhere, anytime.",
  alternates: {
    canonical: "https://www.vocasafewatch.net/co-design",
  },
  openGraph: {
    title: "Co-Design With Us | Vocasafe Watch™ – Building Inclusive Communication Together",
    description: "Join the Vocasafe Watch™ co-design community for families, therapists, and partners. Share your insights to help shape an AI-powered, accessible communication platform that empowers every voice — anywhere, anytime.",
    url: "https://www.vocasafewatch.net/co-design",
    siteName: "Vocasafewatch",
    images: [
      {
        url: "https://www.vocasafewatch.net/images/og/nsplsh_1758ffd0f8324c1fa4b2331cbed2a9a5~mv2.jpg",
        width: 2500,
        height: 1666,
        alt: "Vocasafe Watch Co-Design Community",
      },
    ],
    type: "website",
  },
};

const SURVEYS = [
  {
    title: "Families & Caregivers",
    description: "Share your daily experiences and needs as you support AAC users in the community.",
    href: "https://forms.cloud.microsoft/r/zYmBQBqJtm",
    btnLabel: "Take Caregiver Survey",
    image: "/images/families& Caregivers.avif",
  },
  {
    title: "Therapists & Educators",
    description: "Help us understand professional insights on outdoor and community communication barriers.",
    href: "https://forms.cloud.microsoft/r/AWcN44Asq0",
    btnLabel: "Take Educator Survey",
    image: "/images/therapists&caregivers.avif",
  },
  {
    title: "Community Partners",
    description: "Explore collaboration opportunities and share how we can support your organization's mission.",
    href: "https://forms.cloud.microsoft/r/4EF9c7bN7b",
    btnLabel: "Take Partner Survey",
    image: "/images/community partners.avif",
  },
];

export default function CoDesign() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Header Section matching Screenshot */}
      <section className="relative w-full py-16 flex items-center overflow-hidden bg-primary-navy text-white">
        {/* Background Image */}
        <Image
          src="/images/disp- vocasafe.webp"
          alt="Vocasafe Co-Design"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-primary-navy/85 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 space-y-6 text-left w-full">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white leading-tight tracking-tight max-w-4xl">
            Your feedback helps us improve — together.
          </h1>

          {/* Arrow bullet badge */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-accent-orange flex items-center justify-center flex-shrink-0 rounded-sm">
              <span className="text-white text-lg font-bold">→</span>
            </div>
            <p className="text-xs sm:text-sm text-white/90 font-sans font-medium">
              Building trust through real voices from families, therapists, and partners.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Stakeholder Cards Grid Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SURVEYS.map((survey, idx) => (
              <div key={idx} className="flex flex-col space-y-4 group">
                {/* Full-bleed Card Image */}
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-neutral-light border border-gray-100/50 shadow-sm">
                  <Image
                    src={survey.image}
                    alt={survey.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                
                {/* Text Content */}
                <div className="space-y-2 flex-grow">
                  <h3 className="text-lg sm:text-xl font-display font-extrabold text-[#111111] tracking-tight">
                    {survey.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                    {survey.description}
                  </p>
                </div>

                {/* Inline Action Link */}
                <div className="pt-2">
                  <a
                    href={survey.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary-navy hover:text-accent-orange transition-colors"
                  >
                    <span>{survey.btnLabel}</span>
                    <ExternalLink size={12} className="text-accent-orange" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. General Google Survey and QR Card */}
      <section className="py-16 bg-neutral-light/20 border-t border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Google Survey block */}
            <div className="lg:col-span-8 bg-white border border-gray-100 p-8 rounded-2xl shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold text-accent-orange uppercase block tracking-wider">
                  Primary Feedback Link
                </span>
                <h3 className="text-xl font-bold text-primary-navy">
                  General Community Questionnaire
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                  If you don't fit directly into the cards above but still want to share why portable, inclusive communication and safety tracking matter to your household, fill out our main general community survey. It takes less than 4 minutes.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="https://forms.gle/DXV65VAbd2ojdHQU7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-orange hover:shadow-lg font-bold uppercase tracking-wider py-4 px-8 rounded-full text-xs text-white text-center transition-all inline-flex items-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-orange"
                >
                  <span>Open Google Survey Form</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* QR flyer Card */}
            <div className="lg:col-span-4 bg-primary-navy text-white p-8 rounded-2xl shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <QrCode size={20} className="text-accent-orange" />
                </div>
                <h3 className="text-base font-bold text-accent-orange uppercase tracking-wider">
                  Co-Design flyer
                </h3>
                <p className="text-[11px] text-white/80 font-light leading-relaxed">
                  Download our official co-design campaign QR flyer sheet. Print and post it in speech clinics, special education classrooms, and support therapy lobbies.
                </p>
              </div>

              <a
                href="/pdfs/vocasafe-qr-code.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 transition-colors text-white font-bold rounded-lg text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <FileText size={12} className="text-accent-orange" />
                <span>Download QR Flyer</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Why Lived Feedback Matters */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-navy">
            Why Share Your Voice?
          </h2>
          <div className="w-12 h-1 bg-accent-orange mx-auto rounded-full" />
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left pt-6 text-xs text-gray-500 font-light leading-relaxed">
            <div className="space-y-2 p-5 bg-neutral-light border border-gray-50 rounded-xl">
              <strong className="block text-primary-navy font-bold">Adjust Screen Contrast</strong>
              <span>Your feedback on visual triggers directly guides our sensory-friendly lower contrast visual presets.</span>
            </div>
            <div className="space-y-2 p-5 bg-neutral-light border border-gray-50 rounded-xl">
              <strong className="block text-primary-navy font-bold">Refine Haptic Pings</strong>
              <span>SLPs guide our tactile vibrations maps to replace high-pitched warnings buzzers.</span>
            </div>
            <div className="space-y-2 p-5 bg-neutral-light border border-gray-50 rounded-xl">
              <strong className="block text-primary-navy font-bold">Lock Watch Screens</strong>
              <span>Parent co-design inputs resulted in our automatic caregiver PIN settings locking panels.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
