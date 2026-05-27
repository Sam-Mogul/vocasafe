import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, ExternalLink, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Share Your Voice | Vocasafe Watch™ — Communication Anywhere. Anytime.",
  description: "Join the Vocasafe Watch™ community and share why inclusive, portable communication matters. Your story helps shape the future of our intelligent wearable assistive communication platform for non-verbal and autistic individuals.",
  alternates: {
    canonical: "https://www.vocasafewatch.net/shareyourvoice",
  },
  openGraph: {
    title: "Share Your Voice | Vocasafe Watch™ — Communication Anywhere. Anytime.",
    description: "Join the Vocasafe Watch™ community and share why inclusive, portable communication matters. Your story helps shape the future of our intelligent wearable assistive communication platform for non-verbal and autistic individuals.",
    url: "https://www.vocasafewatch.net/shareyourvoice",
    siteName: "Vocasafewatch",
    images: [
      {
        url: "https://www.vocasafewatch.net/images/og/nsplsh_1758ffd0f8324c1fa4b2331cbed2a9a5~mv2.jpg",
        width: 2500,
        height: 1666,
        alt: "Share Your Voice Vocasafe",
      },
    ],
    type: "website",
  },
};

export default function ShareYourVoice() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-light/20 justify-center">
      {/* 1. Main visual block */}
      <section className="relative py-20 lg:py-24 bg-primary-navy text-white text-center overflow-hidden border-b border-gray-100">
        {/* Background Image */}
        <Image
          src="/images/disp- vocasafe.webp"
          alt="Vocasafe Share Your Voice"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-8 relative z-10">

          <h1 className="text-4xl sm:text-5xl font-sans font-extrabold text-white leading-tight">
            Share Your Voice
          </h1>
          <div className="w-12 h-1 bg-accent-orange mx-auto rounded-full" />

          <p className="text-base sm:text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            Your personal story directly influences our platform development. Tell us how a waterproof wrist-worn communication keyboard and real-time safe zone tracking will impact your student's, patient's, or child's life.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left max-w-lg mx-auto space-y-3">
            <h3 className="font-bold text-sm text-accent-orange flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-accent-orange flex-shrink-0" />
              <span className="text-white">What We Ask</span>
            </h3>
            <ul className="text-xs text-white/80 font-light space-y-1.5 list-disc pl-4">
              <li>How fragile standard tablet systems are for your outings.</li>
              <li>Your experience regarding sensory band preferences.</li>
              <li>Which language configurations your household relies on.</li>
              <li>Specific safe zone coordinates that matter to your SLP lessons.</li>
            </ul>
          </div>

          <div className="pt-4">
            <a
              href="https://forms.gle/DXV65VAbd2ojdHQU7"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-orange hover:shadow-lg font-bold uppercase tracking-wider py-4 px-10 rounded-full text-xs text-white text-center transition-all inline-flex items-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-orange"
            >
              <span>Take Community Survey</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <p className="text-[10px] text-gray-400">
            *Filling out this Google Form questionnaire takes roughly 4 minutes. Your data is analyzed privately.
          </p>
        </div>
      </section>

      {/* 2. Direct contact footer banner */}
      <section className="py-16 text-center max-w-xl mx-auto space-y-4">
        <h2 className="text-base font-bold text-primary-navy">
          Prefer a direct discussion?
        </h2>
        <p className="text-xs text-gray-500 font-light leading-relaxed">
          If you have complex feedback, pilot coordination queries, or are an assistive technology SLP researcher, reach out to founder Catherine Katambo directly via email at <a href="mailto:info@vocasafewatch.net" className="text-accent-orange font-semibold hover:underline">info@vocasafewatch.net</a>.
        </p>
        <div className="pt-2">
          <Link
            href="/co-design"
            className="text-xs text-primary-navy font-bold hover:underline"
          >
            ← View other audience specific surveys
          </Link>
        </div>
      </section>
    </div>
  );
}
