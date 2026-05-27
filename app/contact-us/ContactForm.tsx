"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { isValidEmail } from "@/lib/utils";

const INQUIRY_OPTIONS = [
  "General Inquiry",
  "Join Waitlist",
  "Request Pitch Deck",
  "Media/Press",
  "Investor Relations",
  "Other"
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    inquiryType: "General Inquiry",
    message: "",
    consent: false,
  });

  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMessage, setErrMessage] = useState("");

  // Pre-fill Inquiry Type from URL params
  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam) {
      const decodedParam = decodeURIComponent(typeParam);
      const matches = INQUIRY_OPTIONS.find(
        (opt) => opt.toLowerCase().trim() === decodedParam.toLowerCase().trim()
      );
      if (matches) {
        setFormData((prev) => ({ ...prev, inquiryType: matches }));
      }
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setFormStatus("error");
      setErrMessage("Please fill in all required fields.");
      return;
    }
    if (!isValidEmail(formData.email)) {
      setFormStatus("error");
      setErrMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.consent) {
      setFormStatus("error");
      setErrMessage("You must consent to data storage.");
      return;
    }

    setFormStatus("loading");
    setErrMessage("");

    try {
      // Post data to contact API
      const contactRes = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          inquiryType: formData.inquiryType,
          message: formData.message,
          consent: formData.consent,
        }),
      });

      if (!contactRes.ok) {
        const contactErr = await contactRes.json();
        throw new Error(contactErr.error || "Form submission failed.");
      }

      setFormStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        inquiryType: "General Inquiry",
        message: "",
        consent: false,
      });
    } catch (err: any) {
      setFormStatus("error");
      setErrMessage(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200/80 p-6 sm:p-8 rounded-[18px] shadow-sm space-y-5">
      
      {/* Centered Form Header */}
      <div className="text-center pb-4 border-b border-gray-100">
        <h3 className="text-[16px] font-sans font-bold text-gray-800 leading-snug">
          Have questions? Want to get involved? We'd love to hear from you.
        </h3>
      </div>

      {/* Grid: First and Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="form-first" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
            First name *
          </label>
          <input
            id="form-first"
            type="text"
            required
            value={formData.firstName}
            onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
            className="w-full bg-[#F5F5F5] border border-gray-200/80 rounded-[8px] py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange transition-all"
          />
        </div>
        <div>
          <label htmlFor="form-last" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
            Last name *
          </label>
          <input
            id="form-last"
            type="text"
            required
            value={formData.lastName}
            onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
            className="w-full bg-[#F5F5F5] border border-gray-200/80 rounded-[8px] py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange transition-all"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="form-email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
          Email *
        </label>
        <input
          id="form-email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          className="w-full bg-[#F5F5F5] border border-gray-200/80 rounded-[8px] py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange transition-all"
        />
      </div>

      {/* Inquiry Type Select Dropdown */}
      <div>
        <label htmlFor="form-inquiry" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
          Inquiry Type *
        </label>
        <select
          id="form-inquiry"
          required
          value={formData.inquiryType}
          onChange={(e) => setFormData((prev) => ({ ...prev, inquiryType: e.target.value }))}
          className="w-full bg-[#F5F5F5] border border-gray-200/80 rounded-[8px] py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange transition-all appearance-none cursor-pointer"
        >
          {INQUIRY_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Message textarea */}
      <div className="space-y-2">
        <label htmlFor="form-message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider border-t border-gray-100 pt-3">
          Message *
        </label>
        <textarea
          id="form-message"
          rows={5}
          required
          placeholder="Please share details about your inquiry. The more information you provide, the better we can assist"
          value={formData.message}
          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
          className="w-full bg-white border border-gray-200 rounded-[8px] py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange transition-all"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-2.5 pt-2">
        <input
          id="form-consent"
          type="checkbox"
          required
          checked={formData.consent}
          onChange={(e) => setFormData((prev) => ({ ...prev, consent: e.target.checked }))}
          className="mt-0.5 rounded border-gray-300 text-accent-orange focus:ring-accent-orange cursor-pointer w-4 h-4"
        />
        <label htmlFor="form-consent" className="text-xs text-gray-500 select-none cursor-pointer leading-tight">
          I agree to VocaSafe Watch storing my information to respond to this inquiry. View our{" "}
          <Link href="/privacy-policy" className="text-accent-orange font-semibold hover:underline">
            Privacy Policy
          </Link>
          .
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={formStatus === "loading"}
        className="w-full py-3 bg-[#121F36] hover:bg-slate-800 disabled:bg-gray-400 text-white font-extrabold rounded-[8px] uppercase tracking-wider text-xs shadow-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
      >
        {formStatus === "loading" ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <Send size={14} />
          </>
        )}
      </button>

      {/* Alerts */}
      {formStatus === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-[8px] flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" />
          <div className="text-xs">
            <strong className="block font-bold">Inquiry Submitted Successfully!</strong>
            Your note has been received by the VocaSafe Watch team. We will contact you soon.
          </div>
        </div>
      )}

      {formStatus === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-[8px] flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
          <div className="text-xs">
            <strong className="block font-bold">Submission Error</strong>
            {errMessage}
          </div>
        </div>
      )}
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={
      <div className="bg-white border border-gray-200/80 p-8 rounded-[18px] shadow-sm flex items-center justify-center py-20">
        <Loader2 className="animate-spin text-accent-orange w-8 h-8" />
      </div>
    }>
      <ContactFormInner />
    </Suspense>
  );
}
