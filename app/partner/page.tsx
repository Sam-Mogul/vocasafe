import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Handshake, TrendingUp, BarChart2, School, FileText, Calendar, Mail, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Partner with Vocasafe Watch™ | Collaborate in Assistive Technology Innovation",
  description: "Join us in advancing communication accessibility. Vocasafe Watch™ partners with therapists, schools, clinics, and organizations to deliver cutting-edge AAC and safety technology that empowers real-world independence.",
  alternates: {
    canonical: "https://www.vocasafewatch.net/partner",
  },
  openGraph: {
    title: "Partner with Vocasafe Watch™ | Collaborate in Assistive Technology Innovation",
    description: "Join us in advancing communication accessibility. Vocasafe Watch™ partners with therapists, schools, clinics, and organizations to deliver cutting-edge AAC and safety technology that empowers real-world independence.",
    url: "https://www.vocasafewatch.net/partner",
    siteName: "Vocasafewatch",
    images: [
      {
        url: "https://www.vocasafewatch.net/images/og/f376fd_e5d956ac453942a9927f60674b069ce3~mv2.jpeg",
        width: 2500,
        height: 1330,
        alt: "Vocasafe Watch Investment & Partners",
      },
    ],
    type: "website",
  },
};

export default function Partner() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header Section */}
      <section className="relative bg-gradient-to-br from-primary-navy to-slate-900 text-white py-16 lg:py-20 text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/disp- vocasafe.webp"
          alt="Vocasafe Partner"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-4 relative z-10">
          <span className="text-accent-orange uppercase font-bold tracking-widest text-xs">
            B2B & Investor Relations
          </span>
          <h1 className="text-4xl sm:text-5xl font-sans font-extrabold text-white">
            Partnering for Innovation and Inclusion
          </h1>
          <p className="text-base sm:text-lg text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            Join Vocasafe Watch™ as a strategic investor, clinical researcher, distributor, or school pilot partner to reshape speech accessibility.
          </p>
        </div>
      </section>

      {/* 2. Ways to Collaborate Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              Ways to Collaborate
            </h2>
            <div className="w-12 h-1 bg-accent-orange mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Way 1 */}
            <div className="bg-neutral-light border border-gray-100 p-8 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-accent-orange flex items-center justify-center">
                <TrendingUp size={20} />
              </div>
              <h3 className="text-lg font-bold text-primary-navy">Investment & Strategic Partnerships</h3>
              <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                Vocasafe is opening early pre-seed and strategic seed-round conversations to accelerate hardware certifications (IP68, FCC, CE), expand our patent-pending hardware designs, and scale the HIPAA-compliant cloud analytics dashboards.
              </p>
            </div>
            {/* Way 2 */}
            <div className="bg-neutral-light border border-gray-100 p-8 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-primary-navy flex items-center justify-center">
                <Handshake size={20} />
              </div>
              <h3 className="text-lg font-bold text-primary-navy">Distribution & Assistive Retail</h3>
              <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                We seek discussions with major durable medical equipment (DME) distributors, specialty neurodivergent retail hubs, and global assistive technology brokers to streamline our manufacturing-to-retail channels.
              </p>
            </div>
            {/* Way 3 */}
            <div className="bg-neutral-light border border-gray-100 p-8 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <BarChart2 size={20} />
              </div>
              <h3 className="text-lg font-bold text-primary-navy">Clinical Trials & Speech Research</h3>
              <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                Partner with us to lead outcomes-based research. We aim to run validation studies with academic SLP research groups and speech clinics to evaluate vocabulary development using wrist-worn symbol boards.
              </p>
            </div>
            {/* Way 4 */}
            <div className="bg-neutral-light border border-gray-100 p-8 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <School size={20} />
              </div>
              <h3 className="text-lg font-bold text-primary-navy">Institutional Field Pilots</h3>
              <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                Introduce Vocasafe Watch™ to your special education classrooms, private clinics, and community support centers. We provide heavy-duty clasp kits, sensory hardware settings, and custom SLP usage trackers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Investment Opportunity Deep Dive */}
      <section className="py-16 bg-neutral-light border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              The Investment Opportunity
            </h2>
            <p className="text-xs text-gray-500 font-medium">
              Scaling Assistive Wearables Globally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm space-y-4">
              <span className="text-xs font-bold text-accent-orange uppercase block">
                Growing Market Scale
              </span>
              <h3 className="text-lg font-bold text-primary-navy">Market Opportunity</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                The global Augmentative and Alternative Communication (AAC) market is projected to reach <strong className="font-bold text-gray-800">$5.8 Billion by 2030</strong>, expanding at a robust <strong className="font-bold text-gray-800">CAGR of 8.2%</strong>. Rapid growth in autism awareness, expanded developmental school budgets, and favorable Medicaid/insurance codes drive this demand.
              </p>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm space-y-4">
              <span className="text-xs font-bold text-accent-orange uppercase block">
                Unique Features
              </span>
              <h3 className="text-lg font-bold text-primary-navy">Competitive Advantage</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Vocasafe is the first waterproof smartwatch created specifically to bridge symbol-based speech with critical parent tracking. Unlike standard tablet computers, it cannot be dropped, operates in playgrounds, and offers a non-stigmatizing, premium watch layout.
              </p>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm space-y-4">
              <span className="text-xs font-bold text-accent-orange uppercase block">
                Robust Financial Model
              </span>
              <h3 className="text-lg font-bold text-primary-navy">Revenue Streams</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Vocasafe Watch™ operates on a high-margin, dual-stream revenue model:
              </p>
              <ul className="text-xs text-gray-500 font-light space-y-2 pl-4 list-disc">
                <li><strong>Hardware:</strong> Durable smartwatch sales and wearable sensory straps.</li>
                <li><strong>SaaS Subscriptions:</strong> Secure cloud SLP metrics, continuous route logs, and caregiver SOS features.</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm space-y-4">
              <span className="text-xs font-bold text-accent-orange uppercase block">
                Three-Phase Growth Plan
              </span>
              <h3 className="text-lg font-bold text-primary-navy">Growth Strategy</h3>
              <ul className="text-xs text-gray-500 font-light space-y-2">
                <li><strong>Phase 01:</strong> Hardware engineering, patent filings, and clinical SLP lab testings (In Progress).</li>
                <li><strong>Phase 02:</strong> Regional school district pilots, academic clinical trials, and early-pre-order list rollout.</li>
                <li><strong>Phase 03:</strong> Direct-to-consumer digital channels, national school board supply, and insurance/Medicaid listing.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Schools & Districts segment */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-gradient-to-br from-primary-navy to-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <span className="text-accent-orange uppercase font-bold tracking-widest text-xs">
                Educational Programs
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold leading-tight">
                Vocasafe For Schools & Districts
              </h3>
              <p className="text-sm text-white/80 font-light leading-relaxed max-w-2xl">
                We support special education teams and administrative school boards with tax-exempt bulk purchasing, dedicated onboarding classrooms workshops, customized vocabulary configurations, and specialized playground mounts.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light text-white/70 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent-orange flex-shrink-0" />
                  <span>Tax-Exempt Bulk Ordering Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent-orange flex-shrink-0" />
                  <span>Onsite SLP & Teacher Setup Workshops</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact-us?type=General%20Inquiry"
                  className="inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-full text-white bg-accent-orange hover:bg-orange-600 transition-colors shadow-sm cursor-pointer"
                >
                  Request School Pilot Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact / Booking Section */}
      <section className="py-16 bg-neutral-light border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              Let's Coordinate a Meeting
            </h2>
            <p className="text-sm text-gray-500 font-light">
              Connect with Vocasafe Watch™ Founder Catherine Katambo directly to discuss seed-funding rounds, clinical partnerships, or school trials.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-xl mx-auto pt-4">
            <Link
              href="/contact-us?type=Request%20Pitch%20Deck"
              className="w-full sm:w-auto gradient-orange hover:shadow-lg font-bold uppercase tracking-wider py-4 px-8 rounded-full text-xs shadow-md text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText size={14} />
              <span>Request Pitch Deck</span>
            </Link>
            <Link
              href="/contact-us?type=General%20Inquiry"
              className="w-full sm:w-auto bg-white border border-gray-200 hover:bg-gray-50 font-bold uppercase tracking-wider py-4 px-8 rounded-full text-xs text-primary-navy shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar size={14} />
              <span>Book Strategic Session</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-semibold text-gray-600">
            <div className="flex items-center gap-1.5">
              <Mail size={16} className="text-accent-orange" />
              <span>Direct B2B Line:</span>
              <a href="mailto:partner@vocasafewatch.net" className="text-primary-navy hover:underline">
                partner@vocasafewatch.net
              </a>
            </div>
            <span className="hidden sm:inline text-gray-300">|</span>
            <div className="flex items-center gap-1.5">
              <Mail size={16} className="text-accent-orange" />
              <span>Media & Press:</span>
              <a href="mailto:info@vocasafewatch.net" className="text-primary-navy hover:underline">
                info@vocasafewatch.net
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
