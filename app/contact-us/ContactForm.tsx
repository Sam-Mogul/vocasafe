"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Send, Upload, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

function ContactFormInner() {
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    inquiryType: "General Inquiry",
    message: "",
    consent: false,
  });

  const [file, setFile] = useState<File | null>(null);
  const [fileUploadUrl, setFileUploadUrl] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMessage, setErrMessage] = useState("");

  // Pre-fill Inquiry Type from URL params
  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam) {
      const allowedTypes = [
        "General Inquiry",
        "Join waitlist",
        "Request Pitch Deck",
        "Media/Press",
        "Product Support",
        "Investor Relations",
        "Career Opportunities",
        "Other"
      ];
      if (allowedTypes.includes(typeParam)) {
        setFormData((prev) => ({ ...prev, inquiryType: typeParam }));
      }
    }
  }, [searchParams]);

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
    if (!formData.consent) {
      setFormStatus("error");
      setErrMessage("You must consent to data storage.");
      return;
    }

    setFormStatus("loading");
    setErrMessage("");

    try {
      let finalAttachmentUrl = "";

      // Step 1: Upload file to Supabase if present
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

      // Step 2: Post form data to contact API
      const contactRes = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
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
        inquiryType: "General Inquiry",
        message: "",
        consent: false,
      });
      setFile(null);
      setFileUploadUrl(null);
    } catch (err: any) {
      setFormStatus("error");
      setErrMessage(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm space-y-6">
      <h2 className="text-xl font-bold text-primary-navy">
        Submit An Inquiry
      </h2>
      <div className="w-10 h-1 bg-accent-orange rounded-full -mt-2" />

      {/* Grid: First and Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="form-first" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
            First Name*
          </label>
          <input
            id="form-first"
            type="text"
            required
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
            className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange"
          />
        </div>
        <div>
          <label htmlFor="form-last" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
            Last Name*
          </label>
          <input
            id="form-last"
            type="text"
            required
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
            className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange"
          />
        </div>
      </div>

      {/* Grid: Email and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="form-email" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
            Email Address*
          </label>
          <input
            id="form-email"
            type="email"
            required
            placeholder="Enter email address"
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange"
          />
        </div>
        <div>
          <label htmlFor="form-phone" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
            Phone Number <span className="text-gray-400 font-light">(Optional)</span>
          </label>
          <input
            id="form-phone"
            type="tel"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
            className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange"
          />
        </div>
      </div>

      {/* Grid: Organization and Inquiry Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="form-org" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
            Organization <span className="text-gray-400 font-light">(Optional)</span>
          </label>
          <input
            id="form-org"
            type="text"
            placeholder="Enter school/clinic name"
            value={formData.organization}
            onChange={(e) => setFormData((prev) => ({ ...prev, organization: e.target.value }))}
            className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange"
          />
        </div>
        <div>
          <label htmlFor="form-type" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
            Inquiry Type*
          </label>
          <select
            id="form-type"
            value={formData.inquiryType}
            onChange={(e) => setFormData((prev) => ({ ...prev, inquiryType: e.target.value }))}
            className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Join waitlist">Join waitlist</option>
            <option value="Request Pitch Deck">Request Pitch Deck</option>
            <option value="Media/Press">Media/Press</option>
            <option value="Product Support">Product Support</option>
            <option value="Investor Relations">Investor Relations</option>
            <option value="Career Opportunities">Career Opportunities</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* File Upload Zone */}
      <div>
        <label htmlFor="form-file" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
          File Attachment <span className="text-gray-400 font-light">(Optional, PDF/Images, Max 10MB)</span>
        </label>
        <div className="relative border-2 border-dashed border-gray-200 hover:border-accent-orange rounded-xl p-6 flex flex-col items-center justify-center bg-gray-50/50 hover:bg-gray-50 transition-all group">
          <input
            id="form-file"
            type="file"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
          />
          <Upload size={24} className="text-gray-400 group-hover:text-accent-orange mb-2 transition-colors" />
          <span className="text-xs font-medium text-gray-600">
            {file ? `Selected file: ${file.name}` : "Click or Drag to upload file"}
          </span>
          <span className="text-[10px] text-gray-400 mt-1">
            {file ? `${(file.size / (1024 * 1024)).toFixed(2)} MB` : "PDF, DOCX, PNG, JPG up to 10MB"}
          </span>
        </div>
      </div>

      {/* Message box */}
      <div>
        <label htmlFor="form-message" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
          Message <span className="text-gray-400 font-light">(Optional)</span>
        </label>
        <textarea
          id="form-message"
          rows={5}
          placeholder="How can we help? Explain your interest in our smartwatch, classroom settings, or pre-seed rounds..."
          value={formData.message}
          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
          className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-2.5">
        <input
          id="form-consent"
          type="checkbox"
          required
          checked={formData.consent}
          onChange={(e) => setFormData((prev) => ({ ...prev, consent: e.target.checked }))}
          className="mt-0.5 rounded border-gray-300 text-accent-orange focus:ring-accent-orange cursor-pointer"
        />
        <label htmlFor="form-consent" className="text-xs text-gray-500 select-none cursor-pointer">
          I consent to VocaSafe storing my information for the purpose of responding to my inquiry. View our{" "}
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
        className="w-full py-4 bg-accent-orange hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold rounded-xl uppercase tracking-wider text-xs shadow-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
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

      {/* Success Alert */}
      {formStatus === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" />
          <div className="text-xs">
            <strong className="block font-bold">Inquiry Submitted Successfully!</strong>
            Your note has been received by Catherine Katambo and the engineering team. We will contact you soon.
          </div>
        </div>
      )}

      {/* Error Alert */}
      {formStatus === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-start gap-3">
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
      <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm flex items-center justify-center py-20">
        <Loader2 className="animate-spin text-accent-orange w-8 h-8" />
      </div>
    }>
      <ContactFormInner />
    </Suspense>
  );
}
