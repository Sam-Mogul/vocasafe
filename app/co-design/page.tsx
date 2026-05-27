import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, Users, HelpCircle, FileText, ExternalLink, QrCode, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Co-Design With Us | VocaSafe Watch™ – Building Inclusive Communication Together",
  description: "Join the VocaSafe Watch™ co-design community for families, therapists, and partners. Share your insights to help shape an AI-powered, accessible communication platform that empowers every voice — anywhere, anytime.",
  alternates: {
    canonical: "https://www.vocasafewatch.net/co-design",
  },
  openGraph: {
    title: "Co-Design With Us | VocaSafe Watch™ – Building Inclusive Communication Together",
    description: "Join the VocaSafe Watch™ co-design community for families, therapists, and partners. Share your insights to help shape an AI-powered, accessible communication platform that empowers every voice — anywhere, anytime.",
    url: "https://www.vocasafewatch.net/co-design",
    siteName: "Vocasafewatch",
    images: [
      {
        url: "https://www.vocasafewatch.net/images/og/nsplsh_1758ffd0f8324c1fa4b2331cbed2a9a5~mv2.jpg",
        width: 2500,
        height: 1666,
        alt: "VocaSafe Watch Co-Design Community",
      },
    ],
    type: "website",
  },
};

const SURVEYS = [
  {
    title: "Families & Caregivers Survey",
    description: "For parents, family members, and direct legal guardians supporting non-verbal or neurodivergent children. Share sensory preferences and safety criteria.",
    href: "https://forms.cloud.microsoft/r/zYmBQBqJtm",
    btnLabel: "Take Caregiver Survey",
  },
  {
    title: "Therapists & Educators Survey",
    description: "For speech-language pathologists, therapists, and classroom teachers. Help us design tracking analytics and vocabulary boards.",
    href: "https://forms.cloud.microsoft/r/AWcN44Asq0",
    btnLabel: "Take Educator Survey",
  },
  {
    title: "Community Partners Survey",
    description: "For institutional directors, clinic managers, and B2B developers looking to coordinate bulk pre-orders or strategic research pilots.",
    href: "https://forms.cloud.microsoft/r/4EF9c7bN7b",
    btnLabel: "Take Partner Survey",
  },
];

export default function CoDesign() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-light/50">
      {/* 1. Header Area */}
      <section className="bg-gradient-to-br from-primary-navy to-slate-900 text-white py-16 text-center relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-3 relative z-10">
          <span className="text-accent-orange uppercase font-bold tracking-widest text-xs">
            Inclusive Development
          </span>
          <h1 className="text-4xl font-display font-bold">Co-Design With Us</h1>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-xl mx-auto">
            VocaSafe is built on lived experience. We invite families, speech therapists, and partners to share their perspectives to guide our engineering milestones.
          </p>
        </div>
      </section>

      {/* 2. Three Microsoft Survey Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl font-bold text-primary-navy">
              Targeted Stakeholder Surveys
            </h2>
            <div className="w-12 h-1 bg-accent-orange rounded-full" />
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Select the survey matching your context. Responses are stored securely via Microsoft Forms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SURVEYS.map((survey, idx) => (
              <div
                key={idx}
                className="bg-neutral-light border border-gray-100 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-accent-orange flex items-center justify-center">
                    <Users size={20} />
                  </div>
                  <h3 className="font-bold text-primary-navy text-base">
                    {survey.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    {survey.description}
                  </p>
                </div>

                <a
                  href={survey.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-primary-navy hover:bg-slate-800 transition-colors text-white font-bold rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy"
                >
                  <span>{survey.btnLabel}</span>
                  <ExternalLink size={12} className="text-accent-orange" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. General Google Survey and QR Card */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
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
      <section className="py-16 bg-white border-t border-gray-100 text-center">
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
