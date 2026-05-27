import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, HelpingHand, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement | VocaSafe Watch™",
  description: "VocaSafe Watch™ is committed to digital and physical accessibility, conforming to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA/AAA benchmarks.",
  alternates: {
    canonical: "https://www.vocasafewatch.net/accessibility-statement",
  },
};

export default function AccessibilityStatement() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-navy to-slate-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 space-y-3">
          <h1 className="text-4xl font-display font-bold">Accessibility Statement</h1>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-xl mx-auto">
            Our mission is absolute inclusion. We build all web layouts and wearable systems following strict accessibility standards.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 text-sm sm:text-base text-gray-600 font-light leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-primary-navy">Our Accessibility Goal</h2>
            <div className="w-10 h-1 bg-accent-orange rounded-full" />
            <p>
              VocaSafe Watch™ was founded on lived experience with developmental communication challenges. We believe communication is a fundamental human right, and that digital barriers should never prevent families, therapists, or partners from accessing our tools.
            </p>
            <p>
              We are actively developing this website and our future smartwatch hardware interfaces to align with the **Web Content Accessibility Guidelines (WCAG) 2.1 Level AA** standards at a minimum, targeting Level AAA where possible.
            </p>
          </div>

          <div className="space-y-4 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-primary-navy">Key Measures Implemented</h2>
            <div className="w-10 h-1 bg-accent-orange rounded-full" />
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Semantic HTML:</strong> We use appropriate semantic structures (`&lt;nav&gt;`, `&lt;main&gt;`, `&lt;section&gt;`, `&lt;footer&gt;`) to ensure assistive screen-readers evaluate the layout accurately.</li>
              <li><strong>Focus Indicators:</strong> All interactive elements feature distinct, high-visibility focus rings (`focus-visible:outline-accent-orange`) to support keyboard navigation.</li>
              <li><strong>Color Contrast:</strong> Text colors meet or exceed WCAG 2.1 Level AA contrast specifications (minimum contrast ratio of 4.5:1).</li>
              <li><strong>Alt Text:</strong> All static images feature descriptive alternative text attributes.</li>
              <li><strong>Keyboard Flow:</strong> The entire site layout, forms, dropzones, and mobile drawer buttons are fully keyboard navigable.</li>
            </ul>
          </div>

          <div className="space-y-4 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-primary-navy">Biometric & Sensory Safety</h2>
            <div className="w-10 h-1 bg-accent-orange rounded-full" />
            <p>
              Our commitment goes beyond standard web layouts. VocaSafe Watch™ hardware is designed directly for sensory comfort, avoiding steep auditory notifications (high-pitched buzzers), flickering screens, or abrasive straps that trigger sensory defensiveness.
            </p>
          </div>

          <div className="space-y-4 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-primary-navy">Reporting Barriers</h2>
            <div className="w-10 h-1 bg-accent-orange rounded-full" />
            <p>
              Digital accessibility is a continuous cycle. If you encounter any usability barriers, contrast issues, or screen-reader errors while using our site, please contact Catherine Katambo directly:
            </p>
            <div className="p-6 bg-neutral-light border border-gray-100 rounded-xl text-xs space-y-2 font-semibold">
              <span className="block text-primary-navy">VocaSafe Watch™ Accessibility Operations</span>
              <span className="block text-gray-500">Email: <a href="mailto:info@vocasafewatch.net" className="text-accent-orange hover:underline">info@vocasafewatch.net</a></span>
              <span className="block text-gray-500">Phone: <a href="tel:+19786015097" className="text-primary-navy hover:underline">+1 (978) 601-5097</a></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
