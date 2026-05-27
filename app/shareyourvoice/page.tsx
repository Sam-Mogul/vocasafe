import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, ExternalLink, ShieldCheck, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Share Your Voice | VocaSafe Watch™ — Communication Anywhere. Anytime.",
  description: "Join the VocaSafe Watch™ community and share why inclusive, portable communication matters. Your story helps shape the future of our AI-powered assistive smartwatch for non-verbal and autistic individuals.",
  alternates: {
    canonical: "https://www.vocasafewatch.net/shareyourvoice",
  },
  openGraph: {
    title: "Share Your Voice | VocaSafe Watch™ — Communication Anywhere. Anytime.",
    description: "Join the VocaSafe Watch™ community and share why inclusive, portable communication matters. Your story helps shape the future of our AI-powered assistive smartwatch for non-verbal and autistic individuals.",
    url: "https://www.vocasafewatch.net/shareyourvoice",
    siteName: "Vocasafewatch",
    images: [
      {
        url: "https://www.vocasafewatch.net/images/og/nsplsh_1758ffd0f8324c1fa4b2331cbed2a9a5~mv2.jpg",
        width: 2500,
        height: 1666,
        alt: "Share Your Voice VocaSafe",
      },
    ],
    type: "website",
  },
};

export default function ShareYourVoice() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-light/50 justify-center">
      {/* 1. Main visual block */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-accent-orange rounded-full py-1.5 px-4 text-xs font-bold uppercase tracking-wider">
            <Heart size={12} />
            <span>Community Outreach</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-navy leading-tight">
            Share Your Voice
          </h1>
          <div className="w-12 h-1 bg-accent-orange mx-auto rounded-full" />

          <p className="text-base sm:text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            Your personal story directly influences our smartwatch development. Tell us how a waterproof wrist-worn communication keyboard and real-time safe zone tracking will impact your student's, patient's, or child's life.
          </p>

          <div className="bg-neutral-light border border-gray-100 rounded-2xl p-6 text-left max-w-lg mx-auto space-y-3">
            <h3 className="font-bold text-sm text-primary-navy flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-accent-orange flex-shrink-0" />
              <span>What We Ask</span>
            </h3>
            <ul className="text-xs text-gray-500 font-light space-y-1.5 list-disc pl-4">
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
