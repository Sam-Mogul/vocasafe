import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | VocaSafe Watch™",
  description: "Read the VocaSafe Watch™ Privacy Policy. Learn about our commitment to HIPAA compliance, data encryption, and protecting user and children's information.",
  alternates: {
    canonical: "https://www.vocasafewatch.net/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-navy to-slate-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-3">
          <h1 className="text-4xl font-display font-bold">Privacy Policy</h1>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-xl mx-auto">
            We value your family's trust. Learn how we collect, store, and safeguard your personal and sensitive data.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 text-sm sm:text-base text-gray-600 font-light leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-primary-navy">Introduction</h2>
            <div className="w-10 h-1 bg-accent-orange rounded-full" />
            <p>
              VocaSafe Watch™ ("we," "us," or "our") respects the privacy of our visitors, waitlist members, and co-design participants. This Privacy Policy describes how we handle information collected through our website, forms, and file upload systems.
            </p>
          </div>

          <div className="space-y-4 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-primary-navy">Information We Collect</h2>
            <div className="w-10 h-1 bg-accent-orange rounded-full" />
            <p>
              We collect information that you voluntarily provide to us when submitting inquiries or downloading resources, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Contact Information:</strong> First and Last name, Email address, phone number, and organization name.</li>
              <li><strong>Form Selections:</strong> Waitlist pre-order choices, rewards tier designations, or pilot program coordinates.</li>
              <li><strong>Uploaded Materials:</strong> Document attachments (such as school paperwork, referral notes, SLP reports) that you choose to upload to our secure storage.</li>
            </ul>
          </div>

          <div className="space-y-4 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-primary-navy">Biometric & GPS Safety Data</h2>
            <div className="w-10 h-1 bg-accent-orange rounded-full" />
            <p>
              Please note that during our pre-order waitlist phase, no continuous GPS tracking or biometric vitals sensor diagnostics are active on this website. Our planned mobile caregiver apps and hardware services will operate strictly on a **HIPAA-compliant, end-to-end encrypted** database, and will require explicit guardian opt-in before any tracking commences.
            </p>
          </div>

          <div className="space-y-4 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-primary-navy">How We Use Information</h2>
            <div className="w-10 h-1 bg-accent-orange rounded-full" />
            <ul className="list-disc pl-5 space-y-2">
              <li>To respond to waitlist pre-orders, partnerships, or pitch deck requests.</li>
              <li>To notify you about engineering milestones, pilot cohort schedules, and crowdfunding milestones.</li>
              <li>To refine our smartwatch configuration layouts based on community survey co-design replies.</li>
            </ul>
          </div>

          <div className="space-y-4 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-primary-navy">Children's Privacy (COPPA Compliance)</h2>
            <div className="w-10 h-1 bg-accent-orange rounded-full" />
            <p>
              We are dedicated to protecting children's privacy. We do not knowingly solicit or collect personal information from children under the age of 13 through this website. All waitlist requests and pilot trial applications must be submitted by adult guardians, therapists, or school representatives.
            </p>
          </div>

          <div className="space-y-4 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-primary-navy">Contact Privacy Office</h2>
            <div className="w-10 h-1 bg-accent-orange rounded-full" />
            <p>
              If you have any questions about this Privacy Policy, your saved contact records, or wish to request data deletions, email us at <a href="mailto:info@vocasafewatch.net" className="text-accent-orange font-semibold hover:underline">info@vocasafewatch.net</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
