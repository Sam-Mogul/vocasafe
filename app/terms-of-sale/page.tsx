import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Sale | VocaSafe Watch™",
  description: "Read the VocaSafe Watch™ Terms of Sale. Information regarding waitlist pre-orders, crowdfunding tiers, and institutional school purchases.",
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 text-sm sm:text-base text-gray-600 font-light leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-primary-navy">1. Pre-Order Waitlist Phase</h2>
            <div className="w-10 h-1 bg-accent-orange rounded-full" />
            <p>
              Please note that VocaSafe Watch™ is currently in active prototype engineering, certification, and co-design phases. **No transactions are live, no items are ready to ship, and no payment card data is captured on this website.**
            </p>
            <p>
              By submitting your name to our early access waitlist, you reserve a priority position to participate in our regional pilot cohorts or order early-production runs when commercial manufacturing begins. Submitting to the waitlist does not constitute a binding sales contract.
            </p>
          </div>

          <div className="space-y-4 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-primary-navy">2. Crowdfunding Tiers</h2>
            <div className="w-10 h-1 bg-accent-orange rounded-full" />
            <p>
              Our crowdfunding campaign is designed to fund pre-seed tooling assemblies, IP68 waterproofing certifications, and SLP clinical studies. All selections on our Crowdfunding page represent non-binding reservations. When pre-order manufacturing launches, backers who reserved tiers will receive email instructions to finalize their backing contributions and secure their respective rewards.
            </p>
          </div>

          <div className="space-y-4 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-primary-navy">3. Institutional & School Procurement</h2>
            <div className="w-10 h-1 bg-accent-orange rounded-full" />
            <p>
              We accommodate special education school boards and districts with formal written price quotes, tax-exempt institutional licensing, and bulk purchase agreement options. To request a custom quote, please submit your requirements through our secure uploader on the **Resources** page or email us at <a href="mailto:info@vocasafewatch.net" className="text-accent-orange font-semibold hover:underline">info@vocasafewatch.net</a>.
            </p>
          </div>

          <div className="space-y-4 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-primary-navy">4. Sales Taxes & Shipping</h2>
            <div className="w-10 h-1 bg-accent-orange rounded-full" />
            <p>
              When commercial production commences, state and local sales taxes will be calculated and applied at final checkout, based on the shipping destination. All shipping costs, delivery times, and returns policy guidelines will be published in full detail prior to checkout launching.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
