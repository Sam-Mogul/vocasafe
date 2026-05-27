import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, Shield, Droplets, Heart, Cpu, Globe, VolumeX, Eye, Signal, Music, HeartHandshake, CloudLightning, Calendar, HelpCircle, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Discover VocaSafe Watch™: The Wearable AAC Device for Safety & Communication",
  description: "Explore the wearable AAC device VocaSafe Watch™—a perfect blend of communication tools and safety features designed for everyone.",
  alternates: {
    canonical: "https://www.vocasafewatch.net/features",
  },
  openGraph: {
    title: "Discover VocaSafe Watch™: The Wearable AAC Device for Safety & Communication",
    description: "Explore the wearable AAC device VocaSafe Watch™—a perfect blend of communication tools and safety features designed for everyone.",
    url: "https://www.vocasafewatch.net/features",
    siteName: "Vocasafewatch",
    images: [
      {
        url: "https://www.vocasafewatch.net/images/og/f376fd_676a051384cd456b9d7a3d2f779ea722~mv2.png",
        width: 500,
        height: 500,
        alt: "VocaSafe Watch Features",
      },
    ],
    type: "website",
  },
};

export default function Features() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header Section */}
      <section className="bg-gradient-to-br from-primary-navy to-slate-900 text-white py-16 lg:py-20 text-center relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-4">
          <span className="text-accent-orange uppercase font-bold tracking-widest text-xs">
            Product Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight">
            Built for Connection. <br className="sm:hidden" />
            Designed for Every Environment.
          </h1>
          <p className="text-base sm:text-lg text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            VocaSafe Watch™ merges Augmentative and Alternative Communication (AAC) with smart safety layers in a rugged, sensory-friendly wearable device.
          </p>
        </div>
      </section>

      {/* 2. Core 8 Feature List Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              Eight Core Pillars of VocaSafe Watch™
            </h2>
            <div className="w-12 h-1 bg-accent-orange mx-auto rounded-full" />
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Every detail is engineered from lived experience and therapist collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <div className="bg-neutral-light border border-gray-100 p-6 rounded-2xl space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-accent-orange flex items-center justify-center">
                <MessageSquare size={20} />
              </div>
              <h3 className="font-bold text-primary-navy text-base">Seamless AAC</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Symbol-based grids and text-to-speech keypads converting taps to crystal-clear localized voice output, designed to prevent communication barriers.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-neutral-light border border-gray-100 p-6 rounded-2xl space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-primary-navy flex items-center justify-center">
                <Droplets size={20} />
              </div>
              <h3 className="font-bold text-primary-navy text-base">Waterproof & Durable</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Engineered with IP68 waterproof chassis and impact-resistant materials to support swings, mud play, sensory water toys, and swimming outings.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-neutral-light border border-gray-100 p-6 rounded-2xl space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-green-100 text-emerald-600 flex items-center justify-center">
                <Shield size={20} />
              </div>
              <h3 className="font-bold text-primary-navy text-base">Smart Safety</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Continuous silent GPS checks, secure safe zone boundaries, and real-time mapping for parents, educators, and developmental caregivers.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-neutral-light border border-gray-100 p-6 rounded-2xl space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                <Heart size={20} />
              </div>
              <h3 className="font-bold text-primary-navy text-base">Sensory Comfort</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Lightweight, sensory-safe medical silicone strap engineered specifically for sensitive neurodivergent skin or physical tactile defensiveness.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="bg-neutral-light border border-gray-100 p-6 rounded-2xl space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <Cpu size={20} />
              </div>
              <h3 className="font-bold text-primary-navy text-base">AI-Powered Prediction</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Next-generation semantic context analysis, smart environment-level vocabulary suggestions, and automatic predictive word lists to speed up communication.
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="bg-neutral-light border border-gray-100 p-6 rounded-2xl space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center">
                <Globe size={20} />
              </div>
              <h3 className="font-bold text-primary-navy text-base">Multilingual Speech</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Instantly toggle speech boards and voice synthesis outputs across multiple languages (e.g. English, Spanish, French) to support diverse households.
              </p>
            </div>

            {/* Pillar 7 */}
            <div className="bg-neutral-light border border-gray-100 p-6 rounded-2xl space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
                <VolumeX size={20} />
              </div>
              <h3 className="font-bold text-primary-navy text-base">Adaptive Modes</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Unique sensory presets (Quiet, Sensory-Friendly, Safety, Outdoor, Night Modes) that modify screens, volume, pings, and battery draw dynamically.
              </p>
            </div>

            {/* Pillar 8 */}
            <div className="bg-neutral-light border border-gray-100 p-6 rounded-2xl space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Eye size={20} />
              </div>
              <h3 className="font-bold text-primary-navy text-base">Model Mode</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Allows parents or speech-language therapists to model vocabulary from their smartphones directly onto the user's watch screen in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deep-Dive: Adaptive Environment Modes details */}
      <section className="py-16 bg-neutral-light border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              Adaptive Environment Modes
            </h2>
            <p className="text-xs text-gray-500 font-medium">
              Hardware and UI settings that reshape the device to protect sensory preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Mode 1 */}
            <div className="bg-white border border-gray-100 p-6 rounded-xl space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <strong className="block text-sm font-bold text-primary-navy uppercase tracking-wider">
                🤫 Quiet Mode
              </strong>
              <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                Mutes speakers entirely, utilizing discrete haptic vibrations and brief visual flash triggers to confirm keyboard selections in quiet rooms.
              </p>
            </div>
            {/* Mode 2 */}
            <div className="bg-white border border-gray-100 p-6 rounded-xl space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <strong className="block text-sm font-bold text-primary-navy uppercase tracking-wider">
                ✨ Sensory-Friendly
              </strong>
              <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                Lowers screen contrast, uses warmer lighting, softens alarms, and switches the UI to simplified visual symbol grids to prevent overwhelm.
              </p>
            </div>
            {/* Mode 3 */}
            <div className="bg-white border border-gray-100 p-6 rounded-xl space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <strong className="block text-sm font-bold text-primary-navy uppercase tracking-wider">
                🛡️ Safety Mode
              </strong>
              <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                Increases GPS ping frequency to maximum, locks the watch settings interface with caregiver pin, and optimizes background battery draw.
              </p>
            </div>
            {/* Mode 4 */}
            <div className="bg-white border border-gray-100 p-6 rounded-xl space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <strong className="block text-sm font-bold text-primary-navy uppercase tracking-wider">
                ☀️ Outdoor Mode
              </strong>
              <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                Boosts screen brightness for direct sunlight visibility, engages wind-noise cancellation mic, and boosts audio speaker output.
              </p>
            </div>
            {/* Mode 5 */}
            <div className="bg-white border border-gray-100 p-6 rounded-xl space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <strong className="block text-sm font-bold text-primary-navy uppercase tracking-wider">
                🌙 Night/Low-Stim
              </strong>
              <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                Warm amber filter, displays calming visual sleep indicators, and locks all non-essential communication boards to support sleep routines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Planned Capabilities (4-item icon grid) */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              Planned Hardware Capabilities
            </h2>
            <div className="w-12 h-1 bg-accent-orange mx-auto rounded-full" />
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Advanced engineering targets currently in prototyping and laboratory evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start p-6 border border-gray-100 rounded-2xl bg-neutral-light">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-accent-orange flex items-center justify-center flex-shrink-0">
                <Signal size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-primary-navy text-sm">Cellular Independence</h4>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  Independent LTE cellular antennas permitting watch-to-phone calls, text relays, and SOS triggers completely phone-free, without requiring an iPad tether.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 border border-gray-100 rounded-2xl bg-neutral-light">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-primary-navy flex items-center justify-center flex-shrink-0">
                <Music size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-primary-navy text-sm">Ambient Audio stressed detection</h4>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  Caregiver-triggered environmental audio streams, coupled with onboard decibel checks, designed to evaluate stress spikes or vocal calls during developmental crises.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 border border-gray-100 rounded-2xl bg-neutral-light">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <HeartHandshake size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-primary-navy text-sm">Biometric Vitals Checks</h4>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  Advanced skin-temperature and galvanic response sensors targeting somatic stress spikes and tachycardia, warning parents of potential sensory meltdowns.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 border border-gray-100 rounded-2xl bg-neutral-light">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                <CloudLightning size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-primary-navy text-sm">Offline TTS fallback</h4>
                <p className="text-xs text-gray-500 font-light leading-relaxed">
                  Fully localized hardware-level text synthesis models so voice output operates in valleys, flights, subways, or remote wilderness completely off the grid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. And Much More section */}
      <section className="py-16 bg-neutral-light border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-navy">
              Comprehensive Supporting Platform
            </h2>
            <p className="text-xs text-gray-500 font-medium">
              VocaSafe extends far beyond hardware, linking caretakers and therapists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <strong className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
                Therapist Dashboard
              </strong>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Web-based diagnostic software allowing Speech-Language Pathologists (SLPs) to track usage charts, edit vocabulary boards, and evaluate speech progression.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <strong className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
                Privacy First
              </strong>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                HIPAA-compliant, end-to-end encrypted biometric logs and audio feeds to guarantee all family data remains strictly secure and private.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <strong className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
                Family Connection
              </strong>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Connect multiple caregiver smartphones so mom, dad, grandparents, and school helpers can access real-time notifications simultaneously.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <strong className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
                Cellular & Bluetooth
              </strong>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Dual connectivity mode utilizing low-energy Bluetooth when near caregiver's phone, switching instantly to cellular when roaming independently.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <strong className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
                Progress Logs
              </strong>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                View weekly and monthly logs of used vocabulary concepts, helping therapists coordinate therapy lessons to matches in daily routine.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <strong className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
                Cloud Synchronisation
              </strong>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Real-time configuration syncing so updates to a student's communication boards automatically deploy to the watch screen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Product Variants & App Concept */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              Planned Product Models
            </h2>
            <div className="w-12 h-1 bg-accent-orange mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Variant A */}
            <div className="bg-neutral-light border border-gray-100 rounded-2xl p-6 text-center space-y-4">
              <span className="inline-block py-1 px-3 bg-orange-100 text-[10px] font-bold text-accent-orange uppercase rounded-full">
                Edition A
              </span>
              <h3 className="font-bold text-primary-navy text-lg">Youth Edition</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Engineered with ultra-soft sensory-friendly materials, compact 38mm chassis, reinforced corner bumpers, and high-visibility colorful strap options.
              </p>
            </div>
            {/* Variant B */}
            <div className="bg-neutral-light border border-gray-100 rounded-2xl p-6 text-center space-y-4">
              <span className="inline-block py-1 px-3 bg-blue-100 text-[10px] font-bold text-primary-navy uppercase rounded-full">
                Edition B
              </span>
              <h3 className="font-bold text-primary-navy text-lg">Adult Edition</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Featuring a classic 44mm chassis, neutral leather-feel sensory-safe straps, expanded high-contrast text keypads, and professional styling options.
              </p>
            </div>
            {/* Variant C */}
            <div className="bg-neutral-light border border-gray-100 rounded-2xl p-6 text-center space-y-4">
              <span className="inline-block py-1 px-3 bg-green-100 text-[10px] font-bold text-emerald-700 uppercase rounded-full">
                Edition C
              </span>
              <h3 className="font-bold text-primary-navy text-lg">Lanyard / Lapel Edition</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                A non-wearable variant featuring heavy-duty clasp clips, ideal for wheelchair mounts, classroom trays, lapels, or backpack harnesses.
              </p>
            </div>
          </div>

          <div className="p-8 bg-neutral-light rounded-2xl border border-gray-100 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-accent-orange flex items-center justify-center flex-shrink-0">
              <Cpu size={32} />
            </div>
            <div className="space-y-2 flex-grow text-center md:text-left">
              <h4 className="font-bold text-primary-navy text-base">Coming Soon: The VocaSafe Caregiver App</h4>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Our team is actively mapping layouts for the VocaSafe Mobile App. It will allow you to see current location, change watch configurations, adjust sensory levels, review vocabulary logs, and open emergency SOS channels directly from your iPhone or Android device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTAs & Pricing info */}
      <section className="py-20 bg-gradient-to-br from-primary-navy to-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 space-y-6">
          <span className="text-accent-orange font-bold uppercase tracking-widest text-xs">
            Collaboration & Development
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Interested in VocaSafe Watch™?
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto font-light leading-relaxed">
            Pricing will be announced close to public production schedules. We are seeking early-stage pilots and institutional partners.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact-us?type=Request%20Pitch%20Deck"
              className="gradient-orange hover:shadow-lg font-bold uppercase tracking-wider py-3.5 px-8 rounded-full text-xs shadow-md text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText size={14} />
              <span>Request Pitch Deck</span>
            </Link>
            <Link
              href="/contact-us?type=General%20Inquiry"
              className="bg-transparent border border-white/40 hover:bg-white/5 font-bold uppercase tracking-wider py-3.5 px-8 rounded-full text-xs text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar size={14} />
              <span>Book Partnership Meeting</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
