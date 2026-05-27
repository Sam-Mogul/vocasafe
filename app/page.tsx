"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Shield, MessageSquare, Compass, Send, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    inquiryType: "Join waitlist",
    message: "",
    consent: false,
  });

  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMessage, setErrMessage] = useState("");

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
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          inquiryType: "Join waitlist",
          message: "",
          consent: false,
        });
      } else {
        const d = await res.json();
        setFormStatus("error");
        setErrMessage(d.error || "An error occurred. Please try again.");
      }
    } catch {
      setFormStatus("error");
      setErrMessage("Failed to connect. Check your connection and try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-navy via-primary-navy to-slate-900 text-white pt-24 pb-20 lg:pt-32 lg:pb-28">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {/* Amber glowing orb */}
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-accent-orange/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full py-1 px-4 text-xs font-medium tracking-wide text-accent-light">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-orange"></span>
                </span>
                Now in Active Co-Design Phase
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
                Designed to Give <br className="hidden sm:inline" />
                Every Voice a <br className="hidden lg:inline" />
                <span className="text-accent-orange relative inline-block">
                  Way to Be Heard
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/80 font-light max-w-2xl leading-relaxed mx-auto lg:mx-0">
                VocaSafe Watch™ is being developed as a waterproof, AI-powered communication smartwatch designed for future AAC use. It is designed to combine AAC communication tools with real-time safety tracking in a single wearable device — aiming to empower users with safety, speech, and connection on the go.
              </p>

              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-left max-w-xl mx-auto lg:mx-0">
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  ⚠️ <strong className="text-white">Important Notice:</strong> VocaSafe Watch™ is currently in active prototyping and engineering phases. Features, mockups, and designs shown are concepts under development and subject to change. No sales are live; join the waitlist below to follow our milestones.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/contact-us?type=Join%20waitlist"
                  className="gradient-orange hover:shadow-lg hover:shadow-orange-500/20 active:scale-[0.98] transition-all font-bold uppercase tracking-wider py-4 px-8 rounded-full text-center text-sm shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-orange"
                >
                  Join Waitlist
                </Link>
                <Link
                  href="/contact-us?type=Request%20Pitch%20Deck"
                  className="bg-transparent border border-white/40 hover:bg-white/5 active:scale-[0.98] transition-all font-bold uppercase tracking-wider py-4 px-8 rounded-full text-center text-sm flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>Request Pitch Deck</span>
                  <ArrowRight size={16} className="text-accent-orange" />
                </Link>
              </div>
            </div>

            {/* Hero Right Visual: High-Fidelity Smartwatch Rendering */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[320px] sm:max-w-[380px] aspect-square rounded-3xl bg-slate-800/40 p-4 border border-white/10 shadow-2xl flex items-center justify-center">
                {/* Visual Watch Mockup using nested CSS */}
                <div className="w-[85%] aspect-[1/1.1] bg-neutral-900 rounded-[48px] border-[12px] border-neutral-700 shadow-2xl relative overflow-hidden flex flex-col p-4">
                  {/* Speaker mesh / camera dot */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-black/60 rounded-full" />
                  
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[8px] text-white/50 font-bold px-1 mt-1">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span>AAC</span>
                    </div>
                  </div>

                  {/* Watch Face Grid */}
                  <div className="flex-1 grid grid-cols-3 gap-1.5 mt-3 py-1">
                    {/* AAC grid items */}
                    <div className="bg-orange-500/20 border border-orange-500/40 rounded-xl flex flex-col items-center justify-center p-1 text-center">
                      <span className="text-[14px]">🙋‍♂️</span>
                      <span className="text-[6px] text-white/80 font-bold uppercase tracking-wide mt-0.5">I want</span>
                    </div>
                    <div className="bg-sky-500/20 border border-sky-500/40 rounded-xl flex flex-col items-center justify-center p-1 text-center">
                      <span className="text-[14px]">🍎</span>
                      <span className="text-[6px] text-white/80 font-bold uppercase tracking-wide mt-0.5">Food</span>
                    </div>
                    <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-xl flex flex-col items-center justify-center p-1 text-center">
                      <span className="text-[14px]">🥛</span>
                      <span className="text-[6px] text-white/80 font-bold uppercase tracking-wide mt-0.5">Drink</span>
                    </div>
                    <div className="bg-purple-500/20 border border-purple-500/40 rounded-xl flex flex-col items-center justify-center p-1 text-center">
                      <span className="text-[14px]">🏠</span>
                      <span className="text-[6px] text-white/80 font-bold uppercase tracking-wide mt-0.5">Home</span>
                    </div>
                    <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-xl flex flex-col items-center justify-center p-1 text-center">
                      <span className="text-[14px]">🧸</span>
                      <span className="text-[6px] text-white/80 font-bold uppercase tracking-wide mt-0.5">Play</span>
                    </div>
                    <div className="bg-rose-500/20 border border-rose-500/40 rounded-xl flex flex-col items-center justify-center p-1 text-center">
                      <span className="text-[14px]">🚨</span>
                      <span className="text-[6px] text-white/80 font-bold uppercase tracking-wide mt-0.5">SOS</span>
                    </div>
                  </div>

                  {/* Active Output text */}
                  <div className="bg-black/40 border border-white/5 rounded-xl py-1.5 px-2 text-center text-[8px] font-medium text-accent-light mt-1">
                    "I want Home" (Speaker Mode)
                  </div>
                </div>

                {/* Floating tags */}
                <div className="absolute -top-4 -left-4 bg-primary-navy/90 border border-white/10 rounded-2xl py-2 px-3 shadow-lg flex items-center gap-2 text-xs font-semibold">
                  <MessageSquare size={14} className="text-accent-orange" />
                  <span>AAC Voice</span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary-navy/90 border border-white/10 rounded-2xl py-2 px-3 shadow-lg flex items-center gap-2 text-xs font-semibold">
                  <Compass size={14} className="text-green-400" />
                  <span>GPS Safe Tracking</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Communication Meets Safety: 01, 02, 03 Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-navy leading-tight">
              Communication Meets Safety
            </h2>
            <p className="text-base text-gray-500 font-light leading-relaxed">
              Assistive technology designed for individuals with communication challenges.
            </p>
            <div className="w-12 h-1 bg-accent-orange mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 01 */}
            <div className="group bg-neutral-light border border-gray-100 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:border-accent-orange/30 transition-all duration-300 relative overflow-hidden">
              <span className="absolute top-4 right-6 text-6xl font-black text-gray-200/50 select-none">
                01
              </span>
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-accent-orange flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-4">
                AAC Integration
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                VocaSafe Watch™ is intended to integrate with leading AAC systems once fully developed, allowing users to access their customized vocabulary sets right from their wrist. Support for symbol-based communication, predictive text, and voice output will ensure users can express themselves in any environment.
              </p>
            </div>

            {/* Feature 02 */}
            <div className="group bg-neutral-light border border-gray-100 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:border-accent-orange/30 transition-all duration-300 relative overflow-hidden">
              <span className="absolute top-4 right-6 text-6xl font-black text-gray-200/50 select-none">
                02
              </span>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-primary-navy flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <Compass size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-4">
                GPS Safety Tracking
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Advanced GPS technology is planned to provide accurate location tracking in future releases. Set up multiple safe zones for home, school, and therapy centers. Planned to provide notifications when your loved one arrives or leaves designated areas, with real-time route history.
              </p>
            </div>

            {/* Feature 03 */}
            <div className="group bg-neutral-light border border-gray-100 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:border-accent-orange/30 transition-all duration-300 relative overflow-hidden">
              <span className="absolute top-4 right-6 text-6xl font-black text-gray-200/50 select-none">
                03
              </span>
              <div className="w-12 h-12 rounded-xl bg-red-100 text-rose-600 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary-navy mb-4">
                SOS Alerts
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Emergency alerts are intended to include precise GPS location, timestamp, and optional audio recording once released. Notifications will be sent simultaneously to all designated caregivers via push notifications, SMS, and email. Designed to allow emergency contacts to listen in or coordinate response instantly, aiming to reduce response time in critical moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How It Is Designed to Work: 01-04 Timeline */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-navy leading-tight">
              How VocaSafe Watch is Designed to Work
            </h2>
            <p className="text-base text-gray-500 font-light leading-relaxed">
              Our engineering goal is simple: zero-friction safety and portable communication.
            </p>
            <div className="w-12 h-1 bg-accent-orange mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 01 */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm relative group hover:-translate-y-1 transition-transform">
              <div className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-accent-orange text-white text-xs font-extrabold flex items-center justify-center shadow-md">
                01
              </div>
              <h3 className="mt-4 text-base font-bold text-primary-navy mb-2">Wear It</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Lightweight, sensory-friendly, waterproof design allows individuals to wear VocaSafe Watch™ comfortably all day.
              </p>
            </div>

            {/* Step 02 */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm relative group hover:-translate-y-1 transition-transform">
              <div className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-primary-navy text-white text-xs font-extrabold flex items-center justify-center shadow-md">
                02
              </div>
              <h3 className="mt-4 text-base font-bold text-primary-navy mb-2">Communicate</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Access symbol-based or text-based communication right on the screen, converting taps into clear speech.
              </p>
            </div>

            {/* Step 03 */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm relative group hover:-translate-y-1 transition-transform">
              <div className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-accent-orange text-white text-xs font-extrabold flex items-center justify-center shadow-md">
                03
              </div>
              <h3 className="mt-4 text-base font-bold text-primary-navy mb-2">Stay Safe</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                Smart sensors and GPS keep caregivers connected, offering silent tracking and instant geo-boundary alerts.
              </p>
            </div>

            {/* Step 04 */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm relative group hover:-translate-y-1 transition-transform">
              <div className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-primary-navy text-white text-xs font-extrabold flex items-center justify-center shadow-md">
                04
              </div>
              <h3 className="mt-4 text-base font-bold text-primary-navy mb-2">Stay Connected</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                The VocaSafe caregiver app keeps families, therapists, and schools synced, sharing logs and settings in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Guided by Lived Experience ( back story callout ) */}
      <section className="py-20 bg-primary-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-8">
          <span className="text-accent-orange uppercase font-bold tracking-widest text-xs">
            Our Purpose & Vision
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold leading-tight">
            Guided by Lived Experience
          </h2>
          <div className="w-12 h-1 bg-accent-orange mx-auto rounded-full" />
          <p className="text-base sm:text-lg font-light leading-relaxed max-w-3xl mx-auto text-white/80">
            "Built out of love, driven by necessity. Created by a mother inspired by her son's communication journey, VocaSafe Watch™ is being built alongside individuals who use AAC, parents, educators, and speech therapists. We believe assistive technology should be empowering, beautiful, and accessible to all."
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60 font-semibold tracking-wider uppercase pt-4">
            <span className="bg-white/5 border border-white/10 rounded-full py-1.5 px-4">AAC Specialists</span>
            <span className="bg-white/5 border border-white/10 rounded-full py-1.5 px-4">Speech Therapists</span>
            <span className="bg-white/5 border border-white/10 rounded-full py-1.5 px-4">Autism Advocates</span>
          </div>
        </div>
      </section>

      {/* 5. Embedded Contact Mini Form */}
      <section id="waitlist-form" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-navy">
              Join the VocaSafe Movement
            </h2>
            <p className="text-sm text-gray-500 font-light">
              Connect with us to receive milestone updates, requests for pilots, or strategic updates.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-neutral-light border border-gray-100 p-8 rounded-2xl shadow-sm space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first-name" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
                  First Name*
                </label>
                <input
                  id="first-name"
                  type="text"
                  required
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
                  Last Name*
                </label>
                <input
                  id="last-name"
                  type="text"
                  required
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email-addr" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
                Email Address*
              </label>
              <input
                id="email-addr"
                type="email"
                required
                placeholder="Enter email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange"
              />
            </div>

            <div>
              <label htmlFor="inquiry-select" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
                Inquiry Type*
              </label>
              <select
                id="inquiry-select"
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Join waitlist">Join Waitlist</option>
                <option value="Request Pitch Deck">Request Pitch Deck</option>
                <option value="Investor Relations">Investor Relations</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message-box" className="block text-xs font-bold text-primary-navy uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="message-box"
                rows={4}
                placeholder="How can we support you? Tell us about your interest in VocaSafe Watch..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-lg py-2.5 px-3.5 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange"
              />
            </div>

            <div className="flex items-start gap-2.5">
              <input
                id="consent-check"
                type="checkbox"
                required
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-0.5 rounded border-gray-300 text-accent-orange focus:ring-accent-orange cursor-pointer"
              />
              <label htmlFor="consent-check" className="text-xs text-gray-500 select-none cursor-pointer">
                I consent to VocaSafe storing my information for the purpose of responding to my inquiry. See our{" "}
                <Link href="/privacy-policy" className="text-accent-orange font-semibold hover:underline">
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            <button
              type="submit"
              disabled={formStatus === "loading"}
              className="w-full py-3.5 bg-accent-orange hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold rounded-xl uppercase tracking-wider text-xs shadow-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              {formStatus === "loading" ? "Submitting..." : "Submit Inquiry"}
              <Send size={14} />
            </button>

            {formStatus === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" />
                <div className="text-xs">
                  <strong className="block font-bold">Inquiry Sent Successfully!</strong>
                  Thank you, Catherine and the team will get in touch with you shortly.
                </div>
              </div>
            )}

            {formStatus === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" />
                <div className="text-xs">
                  <strong className="block font-bold">Failed to Submit Form</strong>
                  {errMessage}
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
