import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Sale | Vocasafe Watch™",
  description: "Read the Vocasafe Watch™ Terms of Sale. Information regarding waitlist pre-orders, crowdfunding tiers, and institutional school purchases.",
  alternates: {
    canonical: "https://www.vocasafewatch.net/terms-of-sale",
  },
};

export default function TermsOfSale() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-navy to-slate-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-3">
          <h1 className="text-4xl font-display font-bold">Terms of Sale</h1>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-xl mx-auto">
            Review waitlist rules, crowdfunding campaign tiers, and school district procurement terms.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center text-base sm:text-lg text-gray-600 font-light leading-relaxed">
          <p>
            Our Terms of Sale are being finalized. Please contact us at{" "}
            <a href="mailto:info@vocasafewatch.net" className="text-accent-orange font-semibold hover:underline">
              info@vocasafewatch.net
            </a>{" "}
            for any purchase-related questions.
          </p>
        </div>
      </section>
    </div>
  );
}
