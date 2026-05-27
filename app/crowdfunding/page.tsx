import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShieldAlert } from "lucide-react";
import ShareButtons from "./ShareButtons";

export const metadata: Metadata = {
  title: "Support Vocasafe Watch™: Augmentative Communication Devices for Everyone | Vocasafe",
  description: "Discover augmentative communication devices designed for safety and accessibility. Support Vocasafe Watch™ to empower every voice.",
  alternates: {
    canonical: "https://www.vocasafewatch.net/crowdfunding",
  },
  openGraph: {
    title: "Support Vocasafe Watch™: Augmentative Communication Devices for Everyone | Vocasafe",
    description: "Discover augmentative communication devices designed for safety and accessibility. Support Vocasafe Watch™ to empower every voice.",
    url: "https://www.vocasafewatch.net/crowdfunding",
    siteName: "Vocasafewatch",
    images: [
      {
        url: "https://www.vocasafewatch.net/images/og/f376fd_a930a4ca467b43a9ad80e71f7d2ca638~mv2.jpg",
        width: 612,
        height: 408,
        alt: "Support Vocasafe Watch Crowdfunding",
      },
    ],
    type: "website",
  },
};

const REWARDS = [
  {
    tier: "Supporter",
    amount: "$25",
    description: "Digital thank-you from founder Catherine, your name listed on our website impact roll, and early-access email newsletters.",
    btnLabel: "Select Tier",
    tag: "digital",
  },
  {
    tier: "Early Backer",
    amount: "$49",
    description: "Branded Vocasafe sensory strap merchandise, direct progress updates, an official backer certificate, and impact roll recognition.",
    btnLabel: "Select Tier",
    tag: "merch",
  },
  {
    tier: "Pilot Supporter",
    amount: "$249",
    description: "Early access to regional pilot firmware updates, behind-the-scenes engineering webinars, and a direct line to our co-design team.",
    btnLabel: "Select Tier",
    tag: "pilot",
  },
  {
    tier: "Community Champion",
    amount: "$499",
    description: "Impact Page recognition, a custom personal thank-you video from the founder and Roy, an official sponsor badge, and pilot prioritization.",
    btnLabel: "Select Tier",
    tag: "champion",
  },
];

const FUNDS = [
  {
    title: "Prototype Refinement",
    description: "Sourcing compact tactile panels, high-clarity microphones, and boosting audio amplifiers for high-stimulation environments."
  },
  {
    title: "Waterproof Testing",
    description: "Running rigorous lab evaluations to guarantee complete IP68 enclosures that withstand mud play and pool sessions."
  },
  {
    title: "GPS Integration",
    description: "Optimizing high-frequency LTE cellular antennas and mapping secure geo-zones boundaries within our caregiver app layout."
  },
  {
    title: "Clinical Validation",
    description: "Underwriting initial speech-language pathology (SLP) outcome studies to evaluate vocabulary expansion rates."
  },
  {
    title: "Manufacturing & Certification",
    description: "Initiating plastic tooling setups, FCC filings, CE safety marks, and medical-grade materials approval processes."
  },
  {
    title: "Community Co-Design",
    description: "Funding cooperative workshops to build sensory and language symbol templates alongside neurodivergent advisors."
  }
];

export default function Crowdfunding() {
  const shareUrl = "https://www.vocasafewatch.net/crowdfunding";
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section matching Screenshot 1 */}
      <section className="relative w-full h-[450px] sm:h-[550px] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/disp- vocasafe.webp"
          alt="Help Bring the Vocasafe Watch to Life"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-black/65 z-10" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px] z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-left pt-20">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight tracking-tight">
              Help Bring the Vocasafe Watch to Life
            </h1>
            
            <p className="text-sm sm:text-lg text-white/90 font-sans font-light leading-relaxed max-w-2xl">
              Designing a durable, water-resistant smartwatch designed to support AAC communication and safety for individuals with autism and speech differences.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:items-center">
              {/* Dynamic split rounded button */}
              <Link
                href="/contact-us?type=Join%20waitlist"
                className="flex items-center rounded-full overflow-hidden border border-white/20 shadow-md max-w-xs cursor-pointer group"
              >
                <span className="bg-accent-orange px-4 py-3 flex items-center justify-center text-white">
                  <span className="text-xs">→</span>
                </span>
                <span className="bg-[#1A1A1A] hover:bg-neutral-light hover:text-black text-white text-xs font-bold uppercase tracking-widest px-6 py-3 flex-grow text-center transition-all">
                  Back Vocasafe
                </span>
              </Link>

              {/* Orange action button */}
              <a
                href="/pdfs/vocasafe-crowdfunding-faq.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-orange hover:shadow-lg font-bold uppercase tracking-wider py-3.5 px-8 rounded-full text-xs shadow-md text-white text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer max-w-xs"
              >
                <span>Download Campaign</span>
                <span className="text-white text-[13px]">✦</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Story Behind Vocasafe Section matching Screenshot 2 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image of Girl on Couch */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-sm overflow-hidden bg-neutral-light border border-gray-100 shadow-md">
                <Image
                  src="/images/disp- vocasafe.webp"
                  alt="Vocasafe Watch Lived Experience"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary-navy tracking-tight leading-tight">
                The Story Behind Vocasafe
              </h2>
              
              {/* Badge item */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#1A1A1A] flex items-center justify-center rounded-sm text-white">
                  <span className="text-[8px] font-sans">▶</span>
                </div>
                <span className="text-[10px] font-sans font-bold text-gray-500 uppercase tracking-widest">
                  About Vocasafe Watch™
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-gray-600 font-sans font-light leading-relaxed">
                <p>
                  Vocasafe Watch™ was born from lived experience. As a mother to Roy, who uses AAC to communicate, I often saw his voice disappear when near water or outdoors. Tablets couldn't go everywhere — and that meant communication couldn't either.
                </p>
                <p>
                  I decided to change that.
                </p>
                <p>
                  Vocasafe Watch™ is designed to make communication accessible anywhere, anytime — through a durable, waterproof, sensory-friendly design that will keep AAC communication on the wrist.
                </p>
                <p className="text-accent-orange font-bold">
                  This campaign helps us move from prototype to pilot, turning a lived experience into a solution for families around the world.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Share Our Campaign Section matching Screenshot 2 footer */}
      <section className="py-8 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-4">
          <h3 className="text-base font-sans font-bold text-[#111111] tracking-tight">
            Share Our Campaign
          </h3>
          <ShareButtons shareUrl={shareUrl} />
        </div>
      </section>

      {/* 4. Vocasafe Watch Features Section matching Screenshot 3 & 4 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          
          {/* Section title & line with square indicator */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary-navy tracking-tight text-left">
              Vocasafe Watch Features
            </h2>
            
            {/* Premium Divider */}
            <div className="w-full h-[1px] bg-gray-200 relative mb-12">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black" />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            {/* Card 01 */}
            <div className="bg-neutral-light/35 border border-gray-100/60 rounded-xl p-8 sm:p-10 space-y-6 flex flex-col justify-between hover:shadow-sm transition-all duration-300">
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-sm bg-accent-orange text-white text-[11px] font-bold font-sans flex items-center justify-center">
                  01
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-primary-navy tracking-tight leading-snug">
                  Seamless AAC Communication
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-sans font-light leading-relaxed">
                  Vocasafe Watch™ is designed to bring communication to the wrist— aiming to make every moment accessible. Through planned compatibility with leading AAC systems, it aims to empower users to express themselves using personalized phrases, visual symbols, and text-to-speech features wherever they go. Designed to complement existing AAC tools, Vocasafe aims to extend the freedom to communicate anywhere, anytime.
                </p>
              </div>
            </div>

            {/* Card 02 */}
            <div className="bg-neutral-light/35 border border-gray-100/60 rounded-xl p-8 sm:p-10 space-y-6 flex flex-col justify-between hover:shadow-sm transition-all duration-300">
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-sm bg-accent-orange text-white text-[11px] font-bold font-sans flex items-center justify-center">
                  02
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-primary-navy tracking-tight leading-snug">
                  Durable and Waterproof
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-sans font-light leading-relaxed">
                  Built for real life — from the pool to the playground, Vocasafe Watch™ is designed with durability and water resistance in mind, aiming to ensure that speech access never stops due to weather, spills, or water activities. Every detail is engineered for everyday adventures, aiming to give users confidence to communicate without limits.
                </p>
              </div>
            </div>

            {/* Card 03 */}
            <div className="bg-neutral-light/35 border border-gray-100/60 rounded-xl p-8 sm:p-10 space-y-6 flex flex-col justify-between hover:shadow-sm transition-all duration-300">
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-sm bg-accent-orange text-white text-[11px] font-bold font-sans flex items-center justify-center">
                  03
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-primary-navy tracking-tight leading-snug">
                  Smart Safety for Peace of Mind
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-sans font-light leading-relaxed">
                  Designed to be more than communication — aiming for peace of mind. With planned GPS tracking and safety alerts, Vocasafe Watch™ is designed to help caregivers, parents, and professionals stay connected. Planned location updates and customizable safe-zone notifications are designed to provide added security wherever users go.
                </p>
              </div>
            </div>

            {/* Card 04 */}
            <div className="bg-neutral-light/35 border border-gray-100/60 rounded-xl p-8 sm:p-10 space-y-6 flex flex-col justify-between hover:shadow-sm transition-all duration-300">
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-sm bg-accent-orange text-white text-[11px] font-bold font-sans flex items-center justify-center">
                  04
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-primary-navy tracking-tight leading-snug">
                  Comfort That Adapts to Every User
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-sans font-light leading-relaxed">
                  Designed for comfort, built for inclusion. The soft, interchangeable silicone straps are designed to reduce sensory discomfort while allowing self-expression through color and texture choices. Whether in school, therapy, or community settings, Vocasafe Watch™ is designed to adapt to each user's unique sensory needs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. The Impact Section matching Screenshot 5 */}
      <section className="py-20 bg-primary-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 relative z-10 text-left">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
            The Impact
          </h2>
          
          <div className="w-full h-[1px] bg-white/10 relative" />

          <div className="max-w-4xl space-y-6 text-sm sm:text-base text-white/80 font-sans font-light leading-relaxed">
            <p>
              Vocasafe Watch™ aims to create transformative impact across multiple stakeholder groups: aiming to help individuals with communication differences gain unprecedented independence and environmental access; designed to help families experience reduced anxiety and enhanced safety monitoring; and planned to provide educators and therapists with powerful new tools for AAC implementation in diverse settings.
            </p>
            <p>
              Our technology is designed to empower participation in activities previously inaccessible to AAC users — swimming lessons, water parks, outdoor recreation, rainy-day outings — with the goal of fundamentally expanding quality of life and social inclusion.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/impact"
              className="inline-flex items-center gap-2 bg-accent-orange hover:bg-orange-600 text-white font-bold uppercase tracking-wider py-3.5 px-8 rounded-full text-xs transition-all shadow-md cursor-pointer"
            >
              <span>READ MORE</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. How Your Contribution Helps matching Screenshot 5 Bottom */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-16">
          <div className="space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary-navy tracking-tight">
              How Your Contribution Helps
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-sans font-medium">
              Assistive technology designed for individuals with communication challenges
            </p>
            
            {/* Slider bar style divider */}
            <div className="w-full h-[1px] bg-gray-200 relative mb-8 pt-1">
              <div className="absolute left-[35%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#111111]" />
            </div>
          </div>

          {/* Reward Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {REWARDS.map((reward, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg hover:border-accent-orange/30 transition-all duration-300"
              >
                <div className="space-y-4 mb-6">
                  <span className="inline-block py-1 px-3 bg-orange-50 text-[10px] font-bold text-accent-orange uppercase rounded-full">
                    {reward.tier}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-primary-navy font-display">{reward.amount}</span>
                    <span className="text-xs text-gray-400 font-light">Contribution</span>
                  </div>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    {reward.description}
                  </p>
                </div>

                <Link
                  href={`/contact-us?type=Join%20waitlist&reward=${reward.tier}`}
                  className="w-full py-2.5 bg-primary-navy hover:bg-slate-800 text-white text-center font-bold rounded-lg text-xs uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy"
                >
                  {reward.btnLabel}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-[10px] text-gray-400 max-w-md mx-auto leading-relaxed">
            Note: Selecting a tier routes you to our secure Waitlist form with the pre-filled inquiry. No payments are charged during this developmental waitlist stage.
          </p>
        </div>
      </section>

      {/* 7. Use of Campaign Funds */}
      <section className="py-20 bg-neutral-light/35 border-t border-b border-gray-100/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              Use of Campaign Funds
            </h2>
            <div className="w-12 h-1 bg-accent-orange mx-auto rounded-full" />
            <p className="text-sm text-gray-500 font-light">
              We allocate every backer dollar directly to hardware certifications and validation trials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FUNDS.map((fund, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-sm transition-all"
              >
                <span className="block text-xs font-black text-accent-orange mb-2">
                  0{idx + 1}
                </span>
                <h3 className="font-bold text-primary-navy text-sm mb-2">
                  {fund.title}
                </h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  {fund.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Project Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              Development Timeline
            </h2>
            <div className="w-12 h-1 bg-accent-orange mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 relative">
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-600 block">✓ Completed</span>
              <strong className="block text-sm font-bold text-primary-navy">Concept & Design</strong>
              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                Hardware mapping, parent co-design panel launches, and localized speech testing.
              </p>
            </div>
            <div className="space-y-2 border-t-2 border-dashed border-accent-orange pt-4 sm:pt-0 sm:border-t-0 sm:border-l sm:pl-4">
              <span className="text-xs font-bold text-accent-orange block animate-pulse">● Active Phase</span>
              <strong className="block text-sm font-bold text-primary-navy">Prototype Refinement</strong>
              <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                Lab testing waterproofing (IP68), fine-tuning GPS antennas, and refining visual software layouts.
              </p>
            </div>
            <div className="space-y-2 border-t-2 border-dashed border-gray-200 pt-4 sm:pt-0 sm:border-t-0 sm:border-l sm:pl-4">
              <span className="text-xs font-semibold text-gray-400 block">Planned 2026</span>
              <strong className="block text-sm font-bold text-primary-navy">Pilot Launch</strong>
              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                Deploying initial cohorts to participating schools, private SLP speech clinics, and co-design families.
              </p>
            </div>
            <div className="space-y-2 border-t-2 border-dashed border-gray-200 pt-4 sm:pt-0 sm:border-t-0 sm:border-l sm:pl-4">
              <span className="text-xs font-semibold text-gray-400 block">Target 2026</span>
              <strong className="block text-sm font-bold text-primary-navy">Manufacturing</strong>
              <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                Tooling setups, FCC safety filings, CE markings, and scaled regional shipments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Transparency Notice */}
      <section className="py-16 bg-neutral-light border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-4">
          <h3 className="text-base font-bold text-primary-navy uppercase tracking-wider flex items-center justify-center gap-1.5">
            <ShieldAlert size={18} className="text-accent-orange" />
            <span>Transparency & Compliance Statement</span>
          </h3>
          <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            Vocasafe Watch™ is a patent-pending product currently undergoing active prototype design, industrial engineering, and testing. It is not currently shipping or certified by regulatory boards. All crowdfunding backer rewards represent waitlist designations to contribute towards pre-production certifications.
          </p>
          <div className="pt-2">
            <Link
              href="/contact-us?type=General%20Inquiry"
              className="text-xs text-accent-orange font-bold hover:underline"
            >
              Contact our team with campaign questions →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
