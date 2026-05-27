"use client";

import { useState, useEffect, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import PhoneInput, { getDialCode } from "@/components/ui/PhoneInput";
import { isValidEmail } from "@/lib/utils";

const INQUIRY_OPTIONS = [
  "General Inquiry",
  "Join waitlist",
  "Request Pitch Deck",
  "Media / Press",
  "Product Support",
  "Investor Relations",
  "Career Opportunities",
  "Other"
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
    consent: false,
  });

  const [countryCode, setCountryCode] = useState("US");

  const [selectedTypes, setSelectedTypes] = useState<string[]>(["General Inquiry"]);
  const [file, setFile] = useState<File | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMessage, setErrMessage] = useState("");

  // Pre-fill Inquiry Type from URL params
  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam) {
      // Handle custom spacer match e.g. "Join waitlist"
      const decodedParam = decodeURIComponent(typeParam);
      const matches = INQUIRY_OPTIONS.find(
        (opt) => opt.toLowerCase().trim() === decodedParam.toLowerCase().trim()
      );
      if (matches) {
        setSelectedTypes([matches]);
      }
    }
  }, [searchParams]);

  const handleCheckboxChange = (type: string) => {
    setSelectedTypes((prev) => {
      if (prev.includes(type)) {
        // Don't allow empty selections
        if (prev.length === 1) return prev;
        return prev.filter((t) => t !== type);
      } else {
        return [...prev, type];
      }
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 10 * 1024 * 1024) {
        setErrMessage("File size exceeds the 10MB limit.");
        setFormStatus("error");
        setFile(null);
        return;
      }
      setFile(selectedFile);
      setErrMessage("");
      if (formStatus === "error") setFormStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
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
      let finalAttachmentUrl = "";

      // Step 1: Upload file if present
      if (file) {
        const uploadData = new FormData();
        uploadData.append("file", file);
        uploadData.append("name", `${formData.firstName} ${formData.lastName}`);
        uploadData.append("email", formData.email);
        uploadData.append("message", "Contact Us file attachment");

        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: uploadData,
        });

        if (!uploadRes.ok) {
          const uploadErr = await uploadRes.json();
          throw new Error(uploadErr.error || "File upload failed.");
        }

        const uploadResult = await uploadRes.json();
        finalAttachmentUrl = uploadResult.fileUrl || "";
      }

      // Step 2: Post data to contact API
      const contactRes = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone ? `${getDialCode(countryCode)} ${formData.phone}` : "",
          organization: formData.organization,
          inquiryType: selectedTypes.join(", "), // Join selected types for database rows
          message: formData.message,
          consent: formData.consent,
          attachmentUrl: finalAttachmentUrl,
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
        phone: "",
        organization: "",
        message: "",
        consent: false,
      });
      setSelectedTypes(["General Inquiry"]);
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err: any) {
      setFormStatus("error");
      setErrMessage(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200/80 p-6 sm:p-8 rounded-[18px] shadow-sm space-y-6">
      
      {/* Centered Form Header */}
      <div className="text-center pb-4 border-b border-gray-100">
        <h3 className="text-[17px] font-sans font-bold text-gray-800 leading-snug">
          Have questions? Want to get involved? We'd love to hear from you.
        </h3>
      </div>

      {/* Grid: First and Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

      {/* Grid: Email and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        <div>
          <label htmlFor="form-phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
            Phone
          </label>
          <PhoneInput
            id="form-phone"
            value={formData.phone}
            onChange={(val) => setFormData((prev) => ({ ...prev, phone: val }))}
            countryCode={countryCode}
            onChangeCountryCode={setCountryCode}
            placeholder="Phone number"
            inputClassName="bg-[#F5F5F5] border-gray-200/80"
          />
        </div>
      </div>

      {/* Organization */}
      <div>
        <label htmlFor="form-org" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
          Organization
        </label>
        <input
          id="form-org"
          type="text"
          value={formData.organization}
          onChange={(e) => setFormData((prev) => ({ ...prev, organization: e.target.value }))}
          className="w-full bg-[#F5F5F5] border border-gray-200/80 rounded-[8px] py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange transition-all"
        />
      </div>

      {/* Flat Orange Block Upload File Button */}
      <div className="flex flex-col items-start pt-2">
        <div className="relative">
          <input
            ref={fileInputRef}
            id="form-file"
            type="file"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
          />
          <div className="bg-[#E95F21] hover:bg-orange-600 active:scale-[0.98] transition-all text-white font-extrabold rounded-[6px] py-2.5 px-6 text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm cursor-pointer select-none">
            <span>+ Upload File</span>
          </div>
        </div>
        {file && (
          <span className="text-xs font-medium text-emerald-600 mt-2 bg-emerald-50 border border-emerald-100 rounded px-2.5 py-1">
            ✓ Attached: {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
          </span>
        )}
      </div>

      {/* Inquiry Type Checkboxes */}
      <div className="space-y-3">
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider border-t border-gray-100 pt-4">
          Inquiry Type
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {INQUIRY_OPTIONS.map((option) => {
            const isChecked = selectedTypes.includes(option);
            return (
              <label
                key={option}
                className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer select-none py-1 hover:text-primary-navy"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleCheckboxChange(option)}
                  className="rounded border-gray-300 text-accent-orange focus:ring-accent-orange cursor-pointer w-4 h-4"
                />
                <span>{option}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Message textarea */}
      <div className="space-y-2">
        <label htmlFor="form-message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider border-t border-gray-100 pt-4">
          Message
        </label>
        <textarea
          id="form-message"
          rows={5}
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
        <label htmlFor="form-consent" className="text-xs text-gray-500 select-none cursor-pointer">
          I consent to Vocasafe storing my information for the purpose of responding to my inquiry. View our{" "}
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
        className="w-full py-3.5 bg-[#121F36] hover:bg-slate-800 disabled:bg-gray-400 text-white font-extrabold rounded-[8px] uppercase tracking-wider text-xs shadow-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
      >
        {formStatus === "loading" ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <span>Submit</span>
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
            Your note has been received by the Vocasafe Watch team. We will contact you soon.
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
