"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { countries, getEmojiFlag } from "countries-list";
import { ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

// Build a sorted flat list of { code, dialCode, flag, name }
const COUNTRY_OPTIONS = Object.entries(countries)
  .flatMap(([code, data]) =>
    (data.phone as number[]).map((dial) => ({
      code,
      dialCode: `+${dial}`,
      flag: getEmojiFlag(code as any),
      name: data.name,
    }))
  )
  .sort((a, b) => {
    // USA first
    if (a.code === "US") return -1;
    if (b.code === "US") return 1;
    return a.name.localeCompare(b.name);
  });

interface PhoneInputProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  countryCode: string; // ISO 2-letter country code, e.g. "US"
  onChangeCountryCode: (code: string) => void;
  placeholder?: string;
  inputClassName?: string;
}

export default function PhoneInput({
  id,
  value,
  onChange,
  countryCode,
  onChangeCountryCode,
  placeholder = "Phone number",
  inputClassName = "",
}: PhoneInputProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Focus search when dropdown opens
  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
  }, [open]);

  const filtered = useMemo(
    () =>
      search.trim()
         ? COUNTRY_OPTIONS.filter(
            (c) =>
              c.name.toLowerCase().includes(search.toLowerCase()) ||
              c.dialCode.includes(search) ||
              c.code.toLowerCase().includes(search.toLowerCase())
          )
        : COUNTRY_OPTIONS,
    [search]
  );

  const selected = useMemo(() => {
    return COUNTRY_OPTIONS.find((c) => c.code.toUpperCase() === countryCode.toUpperCase()) ?? COUNTRY_OPTIONS[0];
  }, [countryCode]);

  const handleSelect = (opt: (typeof COUNTRY_OPTIONS)[number]) => {
    onChangeCountryCode(opt.code);
    setOpen(false);
    setSearch("");
  };

  return (
    <div className="flex items-stretch gap-0 relative w-full font-sans" ref={dropdownRef}>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select country code"
        className={cn(
          "flex items-center gap-1 px-3 border border-r-0 rounded-l-[8px] bg-white hover:bg-gray-50 transition-colors cursor-pointer",
          "text-xs text-gray-700 font-medium whitespace-nowrap border-gray-200/80 focus:outline-none focus:ring-1 focus:ring-accent-orange flex-shrink-0"
        )}
        style={{ minHeight: "42px" }}
      >
        <span className="text-base leading-none mr-0.5">{selected.flag}</span>
        <span className="tracking-wide text-xs">{selected.dialCode}</span>
        <ChevronDown
          size={11}
          className={cn("text-gray-400 transition-transform ml-0.5", open && "rotate-180")}
        />
      </button>

      {/* Number input */}
      <input
        id={id}
        type="tel"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "flex-grow min-w-0 rounded-r-[8px] border border-gray-200/80 py-2.5 px-3.5 text-sm text-gray-855 focus:outline-none focus:ring-1 focus:ring-accent-orange focus:border-accent-orange transition-all",
          inputClassName
        )}
      />

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          className="absolute left-0 top-full mt-1.5 z-50 bg-white border border-gray-200/80 rounded-xl shadow-xl w-72 overflow-hidden"
        >
          {/* Search */}
          <div className="p-2 border-b border-gray-100">
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-2.5 py-1.5">
              <Search size={12} className="text-gray-400 flex-shrink-0" />
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country or code…"
                className="flex-1 bg-transparent text-xs text-gray-750 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>
          {/* List */}
          <ul className="max-h-56 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <li className="px-4 py-3 text-xs text-gray-400 text-center font-sans">No results</li>
            ) : (
              filtered.map((opt) => (
                <li key={`${opt.code}-${opt.dialCode}`}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={opt.code === selected.code}
                    onClick={() => handleSelect(opt)}
                    className={cn(
                      "w-full flex items-center gap-2.5 px-3 py-2 text-left hover:bg-gray-50 transition-colors font-sans",
                      opt.code === selected.code && "bg-orange-50/50"
                    )}
                  >
                    <span className="text-base w-5 flex-shrink-0">{opt.flag}</span>
                    <span className="flex-1 text-xs text-gray-700 truncate">{opt.name}</span>
                    <span className="text-xs font-mono text-gray-400 flex-shrink-0">{opt.dialCode}</span>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

// Helper to get the dial code for an ISO country code
export function getDialCode(isoCode: string): string {
  const country = countries[isoCode as keyof typeof countries];
  if (!country) return "+1";
  const phones = country.phone as number[];
  return `+${phones[0]}`;
}

