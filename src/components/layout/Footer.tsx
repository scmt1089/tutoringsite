import Link from "next/link";
import TrustpilotWidget from "@/components/ui/TrustpilotWidget";

const footerLinks = {
  "Explore": [
    { label: "Subjects",     href: "/subjects" },
    { label: "Our tutors",   href: "/tutors" },
    { label: "Admissions",   href: "/admissions" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Pricing",      href: "/pricing" },
  ],
  "Company": [
    { label: "About",          href: "/about" },
    { label: "Reviews",        href: "/reviews" },
    { label: "Join as a tutor", href: "/join-as-a-tutor" },
    { label: "Contact",        href: "/book" },
  ],
  "Locations": [
    { label: "UK families",    href: "/uk" },
    { label: "International families", href: "/international" },
  ],
  "Legal": [
    { label: "Safeguarding policy", href: "/safeguarding" },
    { label: "Privacy policy",      href: "/privacy" },
    { label: "Terms",               href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/50">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-white text-lg mb-2">Mind's Eye Education</p>
            <p className="text-xs leading-relaxed">
              Oxford-founded tutoring and admissions. UK and international.
            </p>
          </div>
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-white/80 text-xs font-medium tracking-widest uppercase mb-4">
                {group}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-6 pb-4">
          <TrustpilotWidget />
        </div>
        <div className="text-xs mt-4">
          © {new Date().getFullYear()} Mind's Eye Education. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
