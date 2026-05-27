import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact VocaSafe Watch™ | Join Waitlist & Request Pitch Deck",
  description: "Get in touch with VocaSafe Watch™. Join our early access waitlist, request our strategic pitch deck, coordinate pilot programs, or ask general questions.",
  alternates: {
    canonical: "https://www.vocasafewatch.net/contact-us",
  },
  openGraph: {
    title: "Contact VocaSafe Watch™ | Join Waitlist & Request Pitch Deck",
    description: "Get in touch with VocaSafe Watch™. Join our early access waitlist, request our strategic pitch deck, coordinate pilot programs, or ask general questions.",
    url: "https://www.vocasafewatch.net/contact-us",
    siteName: "Vocasafewatch",
    images: [
      {
        url: "https://www.vocasafewatch.net/images/og/f376fd_676a051384cd456b9d7a3d2f779ea722~mv2.png",
        width: 500,
        height: 500,
        alt: "Contact VocaSafe Watch",
      },
    ],
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-light/50">
      {/* 1. Header Area */}
      <section className="bg-gradient-to-br from-primary-navy to-slate-900 text-white py-16 text-center relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-3 relative z-10">
          <span className="text-accent-orange uppercase font-bold tracking-widest text-xs">
            Get in Touch
          </span>
          <h1 className="text-4xl font-display font-bold">Contact Us</h1>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-xl mx-auto">
            Submit an inquiry to join our pre-order waitlist, request a pitch deck, coordinate school pilots, or ask general questions.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Coordinates */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm space-y-6">
                <h2 className="text-xl font-bold text-primary-navy">
                  Direct Coordinates
                </h2>
                <div className="w-10 h-1 bg-accent-orange rounded-full" />

                <div className="space-y-6 text-sm text-gray-600 font-light">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-accent-orange flex items-center justify-center flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <strong className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-1">
                        General Email
                      </strong>
                      <a href="mailto:info@vocasafewatch.net" className="hover:text-accent-orange font-semibold hover:underline">
                        info@vocasafewatch.net
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-accent-orange flex items-center justify-center flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <strong className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-1">
                        Partners & B2B
                      </strong>
                      <a href="mailto:partner@vocasafewatch.net" className="hover:text-accent-orange font-semibold hover:underline">
                        partner@vocasafewatch.net
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-primary-navy flex items-center justify-center flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <strong className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-1">
                        Phone Number
                      </strong>
                      <a href="tel:+19786015097" className="hover:text-primary-navy font-semibold hover:underline">
                        +1 (978) 601-5097
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <strong className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-1">
                        Headquarters
                      </strong>
                      <span>
                        165 Middlesex Ave, #1093<br />
                        Somerville, MA 02145<br />
                        United States
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lived Experience Note */}
              <div className="bg-primary-navy text-white p-8 rounded-2xl shadow-sm space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-orange/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="font-bold text-base text-accent-orange uppercase tracking-wider">
                  Always Here to Support
                </h3>
                <p className="text-xs text-white/80 font-light leading-relaxed">
                  As parents, speech specialists, and advocates, we evaluate every incoming request personally. Whether you have a feature suggestion, a query on school procurement, or simply want to share your voice, we read and respond to every note.
                </p>
              </div>
            </div>

            {/* Right Column: Dynamic Form Block */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
