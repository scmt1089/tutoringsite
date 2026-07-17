"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "About",         href: "/about" },
  { label: "Subjects",      href: "/subjects" },
  { label: "How it works",  href: "/how-it-works" },
  { label: "Reviews",       href: "/reviews" },
  { label: "Blog",          href: "/blog" },
  // { label: "Our tutors",    href: "/tutors" },
  // { label: "Admissions",    href: "/admissions" },
  // { label: "Pricing",       href: "/pricing" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-navy-850 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-white font-serif text-lg tracking-wide">
          Mind's Eye Education
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/book" className="btn-primary text-sm py-2 px-4">
            Book a free call
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-950 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white text-sm"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/book" className="btn-primary text-sm py-2 px-4 text-center" onClick={() => setOpen(false)}>
            Book a free call
          </Link>
        </div>
      )}
    </nav>
  );
}
