import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FileText, Download, Lock, HelpCircle } from "lucide-react";
import ResourceFormFaq from "./ResourceFormFaq";

export const metadata: Metadata = {
  title: "Vocasafe Resources | Download and Share Official Documents & Forms",
  description: "Access Vocasafe Watch™ resources including product guides, pilot forms, and brand documents. Download official files or upload your own materials.",
  alternates: {
    canonical: "https://www.vocasafewatch.net/resources",
  },
  openGraph: {
    title: "Vocasafe Resources | Download and Share Official Documents & Forms",
    description: "Access Vocasafe Watch™ resources including product guides, pilot forms, and brand documents. Download official files or upload your own materials.",
    url: "https://www.vocasafewatch.net/resources",
    siteName: "Vocasafewatch",
    images: [
      {
        url: "https://www.vocasafewatch.net/images/og/f376fd_676a051384cd456b9d7a3d2f779ea722~mv2.png",
        width: 500,
        height: 500,
        alt: "Vocasafe Resources",
      },
    ],
    type: "website",
  },
};

const DOWNLOADS = [
  {
    title: "Product Overview Sheet",
    description: "Detailed engineering specifications, dimensions, waterproof certifications, and planned capabilities of Vocasafe Watch™.",
    href: "/pdfs/vocasafe-product-overview.pdf",
    isGated: false,
    btnLabel: "Download PDF",
  },
  {
    title: "Pilot Interest Form",
    description: "Strategic form for schools, special educators, and speech clinics looking to coordinate regional pilot cohorts.",
    href: "/pdfs/vocasafe-pilot-interest-form.pdf",
    isGated: false,
    btnLabel: "Download PDF",
  },
  {
    title: "Brand Story One-Pager",
    description: "Our founder's story, vision, core values, and developmental roadmaps compiled for community advocates.",
    href: "/pdfs/vocasafe-brand-story.pdf",
    isGated: false,
    btnLabel: "Download PDF",
  },
  {
    title: "Crowdfunding Campaign FAQ",
    description: "Complete list of campaign questions, reward details, use of funds timelines, and manufacturing roadmaps.",
    href: "/pdfs/vocasafe-crowdfunding-faq.pdf",
    isGated: false,
    btnLabel: "Download PDF",
  },
  {
    title: "Investor Pitch Deck",
    description: "Pre-seed market valuations, revenue configurations, SaaS dashboard metrics, and hardware pipelines.",
    href: "/contact-us?type=Request%20Pitch%20Deck",
    isGated: true,
    btnLabel: "Request Gated Access",
  },
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-light/50">
      {/* 1. Header Area */}
      <section className="relative bg-gradient-to-br from-primary-navy to-slate-900 text-white py-16 text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/disp- vocasafe.webp"
          alt="Vocasafe Resources"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-3 relative z-10">
          <span className="text-accent-orange uppercase font-bold tracking-widest text-xs">
            Documents & Secure Submissions
          </span>
          <h1 className="text-4xl font-sans font-extrabold text-white">Resources & Downloads</h1>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-xl mx-auto">
            Access official product manuals, brand materials, and crowdfunding sheets. Securely upload clinical referrals or IEP requirements to our team.
          </p>
        </div>
      </section>

      {/* 2. Main Downloads Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl font-bold text-primary-navy">
              Available Documents
            </h2>
            <div className="w-12 h-1 bg-accent-orange rounded-full" />
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Files are hosted on secure local servers. Click to view or download instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOWNLOADS.map((doc, idx) => (
              <div
                key={idx}
                className="bg-neutral-light border border-gray-100 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
              >
                {doc.isGated && (
                  <div className="absolute top-3 right-3 text-xs bg-orange-100 text-accent-orange font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <Lock size={10} />
                    <span>Gated</span>
                  </div>
                )}
                
                <div className="space-y-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-accent-orange flex items-center justify-center">
                    <FileText size={20} />
                  </div>
                  <h3 className="font-bold text-primary-navy text-base">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                <a
                  href={doc.href}
                  target={doc.isGated ? undefined : "_blank"}
                  rel={doc.isGated ? undefined : "noopener noreferrer"}
                  className="w-full py-2.5 bg-primary-navy hover:bg-slate-800 transition-colors text-white font-bold rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy"
                >
                  {doc.isGated ? <Lock size={12} /> : <Download size={12} />}
                  <span>{doc.btnLabel}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Secure Submissions & Accordion Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <ResourceFormFaq />
        </div>
      </section>
    </div>
  );
}
