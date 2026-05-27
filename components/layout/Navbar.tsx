"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Product Features", href: "/features" },
  { label: "Impact", href: "/impact" },
  { label: "Partners & Investors", href: "/partner" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Resources", href: "/resources" },
  { label: "Crowdfunding", href: "/crowdfunding" },
  { label: "Co-Design", href: "/co-design" },
  {
    label: "Insights",
    href: "/blog",
    dropdown: [
      { label: "All Posts", href: "/blog" },
      { label: "Company Insights", href: "/blog/categories/company-insights" },
    ],
  },
  { label: "Share Your Voice", href: "/shareyourvoice" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Handle click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <header className="w-full z-50">
      {/* Top Contact Bar */}
      <div className="bg-primary-navy text-white text-xs py-2 px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-white/10">
        <div className="flex items-center gap-4 sm:gap-6 font-light">
          <a
            href="tel:+19786015097"
            className="flex items-center gap-1.5 hover:text-accent-light transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-orange rounded"
          >
            <Phone size={12} className="text-accent-orange" />
            <span>+1 (978) 601-5097</span>
          </a>
          <a
            href="mailto:catherine@vocasafewatch.net"
            className="flex items-center gap-1.5 hover:text-accent-light transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-orange rounded"
          >
            <Mail size={12} className="text-accent-orange" />
            <span>catherine@vocasafewatch.net</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-white/70 font-light text-[11px] uppercase tracking-wider">
            Assistive Wearable Technology
          </span>
          <Link
            href="/contact-us"
            className="text-[11px] font-semibold bg-accent-orange hover:bg-orange-600 transition-colors uppercase tracking-wider py-1 px-3 rounded-full text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav className="sticky top-0 bg-white shadow-sm border-b border-gray-100 py-3 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy rounded-lg p-1"
          >
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image
                src="/images/logo-icon.png"
                alt="VocaSafe Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight text-primary-navy">
                VocaSafe Watch™
              </span>
              <span className="text-[9px] uppercase tracking-widest text-gray-500 -mt-0.5">
                Communication & Safety
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              if (link.dropdown) {
                const isDropdownActive = pathname.startsWith(link.href);
                return (
                  <div key={link.label} className="relative group" ref={dropdownRef}>
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className={cn(
                        "flex items-center gap-1 text-xs xl:text-[13px] font-semibold px-2 xl:px-3 py-2 rounded-md transition-colors",
                        isDropdownActive
                          ? "text-primary-navy bg-gray-50"
                          : "text-gray-600 hover:text-primary-navy hover:bg-gray-50"
                      )}
                      aria-expanded={activeDropdown === link.label}
                      aria-haspopup="true"
                    >
                      <span>{link.label}</span>
                      <ChevronDown size={14} className={cn("transition-transform", activeDropdown === link.label && "rotate-180")} />
                    </button>
                    {/* Hover Dropdown card */}
                    <div
                      className={cn(
                        "absolute left-0 mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-lg py-2 transition-all duration-200 z-50 origin-top-left",
                        activeDropdown === link.label
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
                      )}
                    >
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.label}
                          href={subLink.href}
                          className="block text-xs font-medium text-gray-600 hover:text-primary-navy hover:bg-gray-50 px-4 py-2"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-xs xl:text-[13px] font-semibold px-2.5 xl:px-3 py-2 rounded-md transition-colors",
                    isActive
                      ? "text-primary-navy bg-gray-50 border-b-2 border-primary-navy rounded-b-none"
                      : "text-gray-600 hover:text-primary-navy hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Quick Actions & Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact-us?type=Join%20waitlist"
              className="hidden sm:inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider py-2.5 px-5 rounded-full text-white bg-accent-orange hover:bg-orange-600 transition-colors shadow-sm hover:shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-orange"
            >
              Join Waitlist
            </Link>

            {/* Hamburger Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Out Drawer Navigation */}
        <div
          className={cn(
            "fixed inset-0 top-[96px] bg-white z-40 flex flex-col lg:hidden border-t border-gray-100 transition-all duration-300 ease-in-out",
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          )}
        >
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {NAV_LINKS.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.label} className="space-y-2">
                    <div className="font-semibold text-sm text-gray-500 uppercase tracking-wider">
                      {link.label}
                    </div>
                    <div className="pl-4 space-y-2 border-l border-gray-100">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.label}
                          href={subLink.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block py-2 text-base font-medium text-gray-700 hover:text-primary-navy",
                            pathname === subLink.href && "text-primary-navy font-bold"
                          )}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-3 border-b border-gray-50 text-base font-bold text-gray-800 hover:text-primary-navy transition-colors",
                    isActive && "text-primary-navy border-l-4 border-primary-navy pl-3 bg-gray-50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          {/* Mobile waitlist CTA */}
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <Link
              href="/contact-us?type=Join%20waitlist"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center text-center font-bold bg-accent-orange text-white uppercase tracking-wider py-3.5 px-6 rounded-full shadow hover:bg-orange-600 transition-colors"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
