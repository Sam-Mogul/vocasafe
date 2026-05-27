import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Compass, ShieldAlert, Award, FileText, CheckCircle2, Share2, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Support VocaSafe Watch™: Augmentative Communication Devices for Everyone | VocaSafe",
  description: "Discover augmentative communication devices designed for safety and accessibility. Support VocaSafe Watch™ to empower every voice.",
  alternates: {
    canonical: "https://www.vocasafewatch.net/crowdfunding",
  },
  openGraph: {
    title: "Support VocaSafe Watch™: Augmentative Communication Devices for Everyone | VocaSafe",
    description: "Discover augmentative communication devices designed for safety and accessibility. Support VocaSafe Watch™ to empower every voice.",
    url: "https://www.vocasafewatch.net/crowdfunding",
    siteName: "Vocasafewatch",
    images: [
      {
        url: "https://www.vocasafewatch.net/images/og/f376fd_a930a4ca467b43a9ad80e71f7d2ca638~mv2.jpg",
        width: 612,
        height: 408,
        alt: "Support VocaSafe Watch Crowdfunding",
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
    description: "Branded VocaSafe sensory strap merchandise, direct progress updates, an official backer certificate, and impact roll recognition.",
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
    <div className="flex flex-col min-h-screen bg-neutral-light/50">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-primary-navy to-slate-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10 space-y-6">
          <span className="text-accent-orange uppercase font-bold tracking-widest text-xs">
            Community-Backed Action
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight">
            Help Bring the VocaSafe Watch™ to Life
          </h1>
          <p className="text-base sm:text-lg text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            Support early-stage engineering, safety testing, and co-design workshops to give autistic children and non-verbal individuals a durable, wearable voice.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Link
              href="/contact-us?type=Join%20waitlist"
              className="gradient-orange hover:shadow-lg font-bold uppercase tracking-wider py-4 px-8 rounded-full text-xs shadow-md text-white text-center transition-all cursor-pointer"
            >
              BACK VOCASAFE
            </Link>
            <a
              href="/pdfs/vocasafe-crowdfunding-faq.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/15 border border-white/20 font-bold uppercase tracking-wider py-4 px-8 rounded-full text-xs text-white text-center transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText size={14} />
              <span>Download Campaign FAQ</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Social Share Bar */}
      <section className="py-4 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-xl mx-auto px-4 flex items-center justify-between gap-2 text-xs text-gray-500 font-bold">
          <span className="flex items-center gap-1.5 text-primary-navy">
            <Share2 size={14} className="text-accent-orange" />
            <span>SHARE:</span>
          </span>
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-50 rounded text-blue-600 transition-colors"
              aria-label="Share on Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H7v3h2v9h3v-9h3.6L16 8h-4V6c0-.5.5-1 1-1h3V2h-3c-3 0-5 2-5 5v1z" />
              </svg>
            </a>
            {/* X (formerly Twitter) */}
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-50 rounded text-black transition-colors"
              aria-label="Share on X"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href={`https://api.whatsapp.com/send/?text=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-50 rounded text-green-500 transition-colors"
              aria-label="Share on WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.375 3.469 2.235 2.235 3.465 5.212 3.465 8.381 0 6.536-5.325 11.86-11.859 11.86-2.007-.001-3.98-.513-5.736-1.489L0 24zm6.59-4.846c1.66.988 3.284 1.488 4.962 1.49 5.333 0 9.67-4.332 9.67-9.664 0-2.584-1.004-5.012-2.827-6.837A9.617 9.617 0 0 0 11.86 1.34c-5.338 0-9.673 4.333-9.673 9.667 0 1.761.472 3.48 1.365 5.013l-.973 3.55 3.633-.952zm10.748-6.195c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.669.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-50 rounded text-blue-700 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* Pinterest */}
            <a
              href={`https://pinterest.com/pin/create/button/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-50 rounded text-red-600 transition-colors"
              aria-label="Share on Pinterest"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.017 0c-6.627 0-12 5.373-12 12 0 5.077 3.146 9.426 7.613 11.217-.102-.947-.195-2.408.04-3.443.213-.932 1.377-5.83 1.377-5.83s-.351-.703-.351-1.743c0-1.633.947-2.853 2.126-2.853.999 0 1.482.75 1.482 1.65 0 1.004-.639 2.508-.969 3.899-.276 1.165.584 2.114 1.732 2.114 2.079 0 3.677-2.193 3.677-5.361 0-2.803-2.015-4.764-4.891-4.764-3.33 0-5.286 2.498-5.286 5.08 0 1.005.387 2.083.871 2.67.095.116.109.217.08.334-.088.367-.284 1.157-.323 1.312-.05.212-.172.257-.397.153-1.484-.691-2.409-2.862-2.409-4.606 0-3.753 2.727-7.202 7.863-7.202 4.127 0 7.335 2.94 7.335 6.873 0 4.103-2.588 7.404-6.177 7.404-1.205 0-2.337-.626-2.726-1.369l-.744 2.829c-.269 1.025-.998 2.309-1.486 3.107 1.127.349 2.321.537 3.559.537 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Founder Story (Roy Narrative) */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              A Mother's Vision for Safety & Speech
            </h2>
            <div className="w-12 h-1 bg-accent-orange mx-auto rounded-full" />
          </div>

          <div className="bg-neutral-light border border-gray-100 rounded-2xl p-8 space-y-6">
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              When my son Roy, who is non-verbal and on the autism spectrum, ran ahead of me during a crowded playground outing, I experienced an paralyzing fear. He had no way to say he was lost, no way to ask for help, and no way to locate me. standard communication tablets are too fragile to take on the swings or near sandbox mud, leaving him entirely without a voice when he wanders independently.
            </p>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              That day, I committed to building the device he needed. VocaSafe Watch™ is engineered to place symbol-based speech right on his wrist in a durable, waterproof shell, adding real-time GPS boundary alerts and secure caregiver listener feeds. We are bypassing clinical standard setups and corporate lag. By backing VocaSafe, you directly fund our independent pre-seed hardware validation and help us deliver this vital lifeline to families everywhere.
            </p>
            <strong className="block text-xs text-primary-navy uppercase tracking-wider">
              — Catherine Katambo, Founder & Mother
            </strong>
          </div>
        </div>
      </section>

      {/* 4. Bridging the Gap: Problem vs Solution */}
      <section className="py-16 bg-neutral-light border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              Bridging the Communication Gap
            </h2>
            <p className="text-xs text-gray-500 font-medium">
              Moving Speech from Fragile Tablets to Durable Wearables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-red-100 p-8 rounded-2xl shadow-sm space-y-4">
              <span className="text-xs font-bold text-red-500 uppercase tracking-wider block">
                The Core Problem
              </span>
              <h3 className="text-lg font-bold text-primary-navy">Fragile & Tethered Devices</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Standard speech tablets are easily broken, dropped, or forgotten in lockers. Caregivers face constant anxiety during park outings, sensory playgrounds, and pool visits, where children roam without communication tools. If separated, the user cannot state their name or ask for help, resulting in high panic levels.
              </p>
            </div>

            <div className="bg-white border border-green-100 p-8 rounded-2xl shadow-sm space-y-4">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
                The VocaSafe Solution
              </span>
              <h3 className="text-lg font-bold text-primary-navy">Waterproof Wrist-Worn Lifelines</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                A rugged, waterproof wearable that stays attached all day. Converts visual taps to clear synthesized speech on-the-go. Continuous silent GPS check pings caregivers, triggering immediate phone notifications if the user crosses geo-boundaries, reducing resolution speeds to mere seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How Your Contribution Helps (6 use-of-funds items) */}
      <section className="py-20 bg-white">
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
                className="bg-neutral-light border border-gray-100 p-6 rounded-2xl hover:shadow-sm transition-all"
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

      {/* 6. Reward Tiers */}
      <section className="py-20 bg-neutral-light border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              Campaign Reward Tiers
            </h2>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">
              Back VocaSafe to Unlock Special Milestones
            </p>
          </div>

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

      {/* 7. Project Timeline */}
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

      {/* 8. Transparency Notice */}
      <section className="py-16 bg-neutral-light border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-4">
          <h3 className="text-base font-bold text-primary-navy uppercase tracking-wider flex items-center justify-center gap-1.5">
            <ShieldAlert size={18} className="text-accent-orange" />
            <span>Transparency & Compliance Statement</span>
          </h3>
          <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            VocaSafe Watch™ is a patent-pending product currently undergoing active prototype design, industrial engineering, and testing. It is not currently shipping or certified by regulatory boards. All crowdfunding backer rewards represent waitlist designations to contribute towards pre-production certifications.
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
