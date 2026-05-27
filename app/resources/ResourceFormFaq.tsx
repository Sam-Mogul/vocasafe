"use client";

import { useState } from "react";
import { Send, Upload, ChevronDown, CheckCircle2, AlertCircle, HelpCircle, Loader2 } from "lucide-react";

export default function ResourceFormFaq() {
  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // File Upload Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMessage, setErrMessage] = useState("");

  const faqs = [
    {
      question: "Why is sales tax added at checkout?",
      answer: "Sales tax is calculated based on the shipping address destination and local tax codes, as required by US state laws for electronic products. Note that during our pre-order waitlist phase, no transactions are live, but standard sales taxes will apply when sales launch."
    },
    {
      question: "Is the subscription taxed?",
      answer: "Yes, in certain jurisdictions, software-as-a-service (SaaS) and monthly cellular subscriptions are subject to state and local service taxes. We will display complete breakdowns prior to any recurring charges."
    },
    {
      question: "Can my school or insurance pay?",
      answer: "Yes! We are designing VocaSafe Watch™ to comply with school board procurement guidelines (accepting purchase orders) and are seeking insurance coverage eligibility (DME codes) to ensure families can get device coverage."
    }
  ];

  const handleFaqToggle = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, slot: 1 | 2) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 10 * 1024 * 1024) {
        setErrMessage(`File ${slot} size exceeds the 10MB limit.`);
        setFormStatus("error");
        return;
      }
      if (slot === 1) setFile1(selectedFile);
      if (slot === 2) setFile2(selectedFile);
      setErrMessage("");
      if (formStatus === "error") setFormStatus("idle");
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      setFormStatus("error");
      setErrMessage("Please fill in Email and Message fields.");
      return;
    }

    setFormStatus("loading");
    setErrMessage("");

    try {
      const uploadData = new FormData();
      uploadData.append("name", `${formData.firstName} ${formData.lastName}`);
      uploadData.append("email", formData.email);
      uploadData.append("phone", formData.phone);
      uploadData.append("organization", formData.organization);
      uploadData.append("message", formData.message);

      if (file1) uploadData.append("file1", file1);
      if (file2) uploadData.append("file2", file2);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: uploadData,
      });

      if (!res.ok) {
        const resultErr = await res.json();
        throw new Error(resultErr.error || "File submission failed.");
      }

      setFormStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
      });
      setFile1(null);
      setFile2(null);
    } catch (err: any) {
      setFormStatus("error");
      setErrMessage(err.message || "An unexpected error occurred during submission.");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Left Column: Secure Upload Form */}
      <div className="lg:col-span-7">
        <form onSubmit={handleFormSubmit} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-primary-navy">
              Secure Resource Submission
            </h2>
            <div className="w-10 h-1 bg-accent-orange rounded-full" />
            <p className="text-xs text-gray-500 font-light">
              Submit clinical evaluations, IEP guides, or referral letters to VocaSafe.
            </p>
          </div>

          {/* Grid: First and Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="res-first" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
                First Name
              </label>
              <input
                id="res-first"
                type="text"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange"
              />
            </div>
            <div>
              <label htmlFor="res-last" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
                Last Name
              </label>
              <input
                id="res-last"
                type="text"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange"
              />
            </div>
          </div>

          {/* Grid: Email and Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="res-email" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
                Email Address*
              </label>
              <input
                id="res-email"
                type="email"
                required
                placeholder="Enter email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange"
              />
            </div>
            <div>
              <label htmlFor="res-phone" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
                Phone Number
              </label>
              <input
                id="res-phone"
                type="tel"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange"
              />
            </div>
          </div>

          {/* Organization */}
          <div>
            <label htmlFor="res-org" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
              Organization Name
            </label>
            <input
              id="res-org"
              type="text"
              placeholder="Enter school, clinic, or firm name"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange"
            />
          </div>

          {/* Message Box */}
          <div>
            <label htmlFor="res-msg" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
              Message / Instructions*
            </label>
            <textarea
              id="res-msg"
              required
              rows={4}
              placeholder="Provide instructions regarding the uploaded documents..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange"
            />
          </div>

          {/* Double File Uploads */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Slot 1 */}
            <div>
              <label htmlFor="res-file1" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
                Document 1 <span className="text-gray-400 font-light">(Optional)</span>
              </label>
              <div className="relative border-2 border-dashed border-gray-200 hover:border-accent-orange rounded-xl p-4 flex flex-col items-center justify-center bg-gray-50/50 hover:bg-gray-50 transition-all group">
                <input
                  id="res-file1"
                  type="file"
                  onChange={(e) => handleFileChange(e, 1)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload size={18} className="text-gray-400 group-hover:text-accent-orange mb-1 transition-colors" />
                <span className="text-[10px] font-medium text-gray-600 text-center truncate w-full px-1">
                  {file1 ? file1.name : "Attach first document"}
                </span>
              </div>
            </div>

            {/* Slot 2 */}
            <div>
              <label htmlFor="res-file2" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
                Document 2 <span className="text-gray-400 font-light">(Optional)</span>
              </label>
              <div className="relative border-2 border-dashed border-gray-200 hover:border-accent-orange rounded-xl p-4 flex flex-col items-center justify-center bg-gray-50/50 hover:bg-gray-50 transition-all group">
                <input
                  id="res-file2"
                  type="file"
                  onChange={(e) => handleFileChange(e, 2)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload size={18} className="text-gray-400 group-hover:text-accent-orange mb-1 transition-colors" />
                <span className="text-[10px] font-medium text-gray-600 text-center truncate w-full px-1">
                  {file2 ? file2.name : "Attach second document"}
                </span>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={formStatus === "loading"}
            className="w-full py-3.5 bg-accent-orange hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold rounded-xl uppercase tracking-wider text-xs shadow-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            {formStatus === "loading" ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                <span>Uploading...</span>
              </>
            ) : (
              <>
                <span>Submit Secure files</span>
                <Send size={14} />
              </>
            )}
          </button>

          {formStatus === "success" && (
            <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" />
              <div className="text-xs">
                <strong className="block font-bold">Files Uploaded Successfully!</strong>
                Documents were stored securely in VocaSafe Storage. Catherine has been notified.
              </div>
            </div>
          )}

          {formStatus === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
              <div className="text-xs">
                <strong className="block font-bold">Upload Failed</strong>
                {errMessage}
              </div>
            </div>
          )}
        </form>
      </div>

      {/* Right Column: FAQ Accordion Section */}
      <div className="lg:col-span-5 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-primary-navy">
            Frequently Asked Questions
          </h2>
          <div className="w-10 h-1 bg-accent-orange rounded-full" />
          <p className="text-xs text-gray-500 font-light">
            Answers to standard commercial, support, and school licensing questions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => handleFaqToggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-primary-navy text-xs sm:text-sm hover:bg-gray-50/50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle size={16} className="text-accent-orange flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`accordion-content border-t border-gray-50 text-xs sm:text-sm font-light text-gray-500 leading-relaxed overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 p-5 opacity-100" : "max-h-0 p-0 opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>

        {/* Support callout card */}
        <div className="bg-primary-navy text-white rounded-2xl p-6 shadow-sm space-y-3 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-accent-orange/10 rounded-full blur-xl pointer-events-none" />
          <strong className="block text-xs uppercase tracking-wider text-accent-orange font-bold">
            Need Direct Assistance?
          </strong>
          <p className="text-xs text-white/80 font-light leading-relaxed">
            Our developmental research and special education procurement teams can coordinate meetings directly. Email us at <a href="mailto:info@vocasafewatch.net" className="font-semibold text-accent-light hover:underline">info@vocasafewatch.net</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
