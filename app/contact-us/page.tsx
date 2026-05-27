import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Vocasafe Watch™ | Join Waitlist & Request Pitch Deck",
  description: "Get in touch with Vocasafe Watch™. Join our early access waitlist, request our strategic pitch deck, coordinate pilot programs, or ask general questions.",
  alternates: {
    canonical: "https://www.vocasafewatch.net/contact-us",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
      
      {/* 1. Hero Banner with background image */}
      <section className="relative w-full h-[280px] sm:h-[340px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/togetherness.avif"
          alt="Vocasafe Watch Contact Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Text */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-sans font-extrabold text-white leading-tight max-w-3xl mx-auto">
            Interested in Vocasafe Watch™ as we continue development? Get in touch.
          </h1>
        </div>
      </section>

      {/* 2. Intro Text Segment */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-sans font-bold text-[#121F36]">
            Get in Touch
          </h2>
          <p className="text-sm text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            We'd love to hear from you — whether you're a family, professional, or organization interested in bringing Vocasafe Watch™ to your community in the future. Reach out with questions, collaboration ideas, or media inquiries, and a member of our team will respond promptly.
          </p>
          
          {/* Bullet/Slider divider */}
          <div className="relative flex items-center justify-center pt-4">
            <div className="w-full max-w-[600px] h-[1px] bg-gray-200" />
            <div className="absolute w-2 h-2 rounded-full bg-black" />
          </div>
        </div>
      </section>

      {/* 3. Main Form Area */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* 4. Contact Information Details under the Form */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-xl font-sans font-bold text-[#121F36] border-b border-gray-100 pb-3">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700 font-light leading-relaxed">
            {/* Left Col: Emails & Phone */}
            <div className="space-y-4">
              <p>
                <span className="font-bold text-gray-900">General Inquiries:</span>{" "}
                <a href="mailto:info@vocasafewatch.net" className="text-accent-orange font-semibold hover:underline">
                  info@vocasafewatch.net
                </a>
              </p>
              <p>
                <span className="font-bold text-gray-900">Founder:</span>{" "}
                <a href="mailto:catherine@vocasafewatch.net" className="text-accent-orange font-semibold hover:underline">
                  catherine@vocasafewatch.net
                </a>
              </p>
              <p>
                <span className="font-bold text-gray-900">Partnerships & Collaborations:</span>{" "}
                <a href="mailto:partner@vocasafewatch.net" className="text-accent-orange font-semibold hover:underline">
                  partner@vocasafewatch.net
                </a>
              </p>
              <p>
                <span className="font-bold text-gray-900">Media or Press:</span>{" "}
                <a href="mailto:media@vocasafewatch.net" className="text-accent-orange font-semibold hover:underline">
                  media@vocasafewatch.net
                </a>
              </p>
              <p>
                <span className="font-bold text-gray-900">Phone:</span>{" "}
                <a href="tel:+19786015097" className="text-accent-orange font-semibold hover:underline">
                  +1 (978) 601-5097
                </a>
              </p>
            </div>

            {/* Right Col: Address & Hours */}
            <div className="space-y-4">
              <div>
                <strong className="block text-gray-900 font-bold mb-1">Headquarters:</strong>
                <p className="text-gray-600">
                  165 Middlesex Ave, #1093<br />
                  Somerville, MA 02145<br />
                  United States
                </p>
              </div>

              <div>
                <strong className="block text-gray-900 font-bold mb-1">Business Hours:</strong>
                <p className="text-gray-600">
                  Monday – Friday: 9 AM – 5 PM EST<br />
                  Saturday & Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons matching Screenshot 4 */}
          <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
            {/* Instagram */}
            <a href="https://instagram.com/vocasafewatch" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white hover:bg-accent-orange transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com/company/vocasafe" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white hover:bg-accent-orange transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* Facebook */}
            <a href="https://facebook.com/vocasafewatch" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white hover:bg-accent-orange transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            {/* X (formerly Twitter) */}
            <a href="https://twitter.com/vocasafe" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white hover:bg-accent-orange transition-colors" aria-label="X (formerly Twitter)">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            </a>
            {/* TikTok */}
            <a href="https://tiktok.com/@vocasafe" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white hover:bg-accent-orange transition-colors" aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V0h5v4a5 5 0 0 1-5 5v3a5.002 5.002 0 0 0-4-1z"/></svg>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
