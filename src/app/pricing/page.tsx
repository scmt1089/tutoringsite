import type { Metadata } from "next";
import { Section, HeadingBlock, CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for tutoring and admissions preparation. UK and international.",
};

const tutoringPackages = [
  {
    label: "Flexible",
    name: "Single session",
    price: "£85",
    unit: "/ hour",
    featured: false,
    detail: "For families who want to start with one session before committing. Full access to our tutor network. Billed per session.",
  },
  {
    label: "Most popular",
    name: "Block of 10",
    price: "£775",
    unit: "/ block",
    featured: true,
    detail: "£77.50 per session. Our most popular option for students working toward a specific exam or goal. Sessions scheduled flexibly within a term.",
  },
  {
    label: "Best value",
    name: "Block of 20",
    price: "£1,400",
    unit: "/ block",
    featured: false,
    detail: "£70 per session. For students committing to sustained improvement over a full academic term or exam cycle.",
  },
];

const admissionsPackages = [
  {
    label: "Personal statement",
    name: "Statement only",
    price: "£350",
    unit: "",
    featured: false,
    detail: "Three sessions with our personal statement specialist. Covers initial brief, full draft development and final polish.",
  },
  {
    label: "Recommended",
    name: "Full admissions",
    price: "£750",
    unit: "",
    featured: true,
    detail: "Personal statement, admissions test preparation and two mock interviews. The complete package for competitive university applications.",
  },
  {
    label: "Oxbridge",
    name: "Oxbridge pathway",
    price: "£1,200",
    unit: "",
    featured: false,
    detail: "Everything in Full Admissions, plus subject-specific interview preparation, written work support, and on-call guidance through offers and results.",
  },
];

function PricingCard({
  label, name, price, unit, featured, detail,
}: typeof tutoringPackages[0]) {
  return (
    <div className={`card flex flex-col gap-4 ${featured ? "border-2 border-navy-900" : ""}`}>
      <div>
        <p className="text-gold-500 text-xs tracking-widest mb-1">{label}</p>
        <p className="font-serif text-navy-900 text-lg">{name}</p>
      </div>
      <div>
        <span className="font-serif text-navy-900 text-3xl font-medium">{price}</span>
        {unit && <span className="text-navy-500 text-sm ml-1">{unit}</span>}
      </div>
      <p className="text-navy-600 text-sm leading-relaxed">{detail}</p>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        heading="Pricing."
        subheading="No hidden rates. Clear packages, tutors we know personally, and a free consultation before you commit to anything."
      />

      <Section>
        <HeadingBlock label="Tutoring" heading="Session packages." />
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {tutoringPackages.map((p) => <PricingCard key={p.name} {...p} />)}
        </div>
        <p className="text-navy-500 text-xs mt-5 leading-relaxed">
          A-level, university, and admissions work is priced at £95 to £120 per hour
          depending on subject and tutor. International families are billed in their
          local currency at the prevailing rate.
        </p>
      </Section>

      <Section className="bg-cream-100">
        <HeadingBlock label="Admissions" heading="Admissions packages." />
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {admissionsPackages.map((p) => <PricingCard key={p.name} {...p} />)}
        </div>
      </Section>

      <CtaBand
        heading="Not sure which package is right?"
        body="Book a free call and we will tell you exactly what we would recommend, and why. No guesswork on your part."
      />
    </>
  );
}
