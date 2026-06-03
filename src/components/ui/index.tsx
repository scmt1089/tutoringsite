import Link from "next/link";

/* ── Buttons ─────────────────────────────────────────────── */

type BtnProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "outline-dark";
  className?: string;
};

export function Btn({ href, children, variant = "primary", className = "" }: BtnProps) {
  const base = "inline-block font-sans font-medium text-sm tracking-wide px-6 py-3 rounded-md transition-colors duration-200";
  const variants = {
    primary:      "bg-gold-500 text-navy-900 hover:bg-gold-400",
    outline:      "border border-white/30 text-white hover:bg-white/10",
    "outline-dark": "border border-navy-300 text-navy-900 hover:bg-navy-50",
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button className={cls}>{children}</button>;
}

/* ── Page hero ───────────────────────────────────────────── */

type PageHeroProps = {
  heading: string;
  subheading?: string;
};

export function PageHero({ heading, subheading }: PageHeroProps) {
  return (
    <div className="bg-navy-850 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="font-serif text-h1 text-white leading-snug mb-4">{heading}</h1>
          {subheading && (
            <p className="text-white/65 text-base leading-relaxed">{subheading}</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Section wrapper ─────────────────────────────────────── */

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-16 px-6 border-b border-cream-300 ${className}`}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}

/* ── Label + heading block ───────────────────────────────── */

type HeadingBlockProps = {
  label?: string;
  heading: string;
  body?: string;
  centered?: boolean;
  light?: boolean;
};

export function HeadingBlock({ label, heading, body, centered, light }: HeadingBlockProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {label && (
        <p className="section-label">{label}</p>
      )}
      <h2 className={`font-serif text-h2 leading-snug mb-4 ${light ? "text-white" : "text-navy-900"}`}>
        {heading}
      </h2>
      {body && (
        <p className={`leading-relaxed text-base max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-white/70" : "text-navy-600"}`}>
          {body}
        </p>
      )}
    </div>
  );
}

/* ── Trust strip ─────────────────────────────────────────── */

const trustItems = [
  "Oxford graduates",
  "DBS checked tutors",
  "UK and international",
  "Primary to university entry",
];

export function TrustStrip() {
  return (
    <div className="trust-strip">
      {trustItems.join("  ·  ")}
    </div>
  );
}

/* ── Testimonial card ────────────────────────────────────── */

type TestimonialProps = {
  quote: string;
  attribution: string;
};

export function TestimonialCard({ quote, attribution }: TestimonialProps) {
  return (
    <div className="card flex flex-col gap-4">
      <p className="text-navy-700 leading-relaxed text-sm italic">"{quote}"</p>
      <p className="text-navy-400 text-xs">{attribution}</p>
    </div>
  );
}

/* ── Step card ───────────────────────────────────────────── */

type StepProps = {
  number: string;
  title: string;
  body: string;
};

export function StepCard({ number, title, body }: StepProps) {
  return (
    <div className="card border-l-2 border-l-gold-500 rounded-l-none">
      <p className="text-gold-500 text-xs tracking-widest mb-2">{number}</p>
      <h4 className="font-serif text-navy-900 text-base mb-2">{title}</h4>
      <p className="text-navy-600 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

/* ── Subject card ────────────────────────────────────────── */

type SubjectCardProps = {
  name: string;
  href: string;
};

export function SubjectCard({ name, href }: SubjectCardProps) {
  return (
    <Link
      href={href}
      className="card text-center hover:border-gold-500 hover:shadow-sm transition-all duration-200 group"
    >
      <span className="font-sans text-sm font-medium text-navy-900 group-hover:text-gold-600 transition-colors">
        {name}
      </span>
    </Link>
  );
}

/* ── Google reviews button ───────────────────────────────── */

export { default as GoogleReviewsButton } from "./GoogleReviewsButton";

/* ── Closing CTA band ────────────────────────────────────── */

type CtaBandProps = {
  heading: string;
  body: string;
  btnLabel?: string;
  btnHref?: string;
};

export function CtaBand({ heading, body, btnLabel = "Book a free consultation", btnHref = "/book" }: CtaBandProps) {
  return (
    <section className="bg-navy-850 py-20 px-6 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif text-h2 text-white leading-snug mb-4">{heading}</h2>
        <p className="text-white/70 leading-relaxed mb-8">{body}</p>
        <Btn href={btnHref}>{btnLabel}</Btn>
      </div>
    </section>
  );
}
