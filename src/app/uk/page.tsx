import type { Metadata } from "next";
import Link from "next/link";
import { Btn, TrustStrip, HeadingBlock, Section, CtaBand, SubjectCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Online tutoring for UK students",
  description: "Expert online tutoring for UK students from Oxford graduates. GCSE, A-level, 11-plus, and Oxbridge admissions.",
};

const ukSubjects = [
  { name: "11-plus",            href: "/subjects/11-plus" },
  { name: "Common entrance",    href: "/subjects" },
  { name: "GCSE all subjects",  href: "/subjects" },
  { name: "A-level all subjects", href: "/subjects" },
  { name: "Oxbridge prep",      href: "/admissions" },
  { name: "Personal statements", href: "/admissions" },
  { name: "LNAT",               href: "/admissions" },
  { name: "Interview coaching", href: "/admissions" },
];

export default function UKPage() {
  return (
    <>
      <div className="bg-navy-900 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
          <span className="inline-block bg-gold-500/20 text-gold-400 text-xs px-3 py-1 rounded-full tracking-widest uppercase mb-5">
            UK families
          </span>
          <h1 className="font-serif text-display text-white leading-tight mb-5">
            Expert online tutoring for UK students, from Oxford graduates.
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            From the 11-plus to A-levels and Oxbridge applications, [name] works with
            UK families who want more than the standard tutoring marketplace can offer.
          </p>
          <Btn href="/book">Book a free consultation</Btn>
          <div className="flex gap-2 flex-wrap mt-6">
            {["AQA", "Edexcel", "OCR", "11-plus", "13-plus", "Oxbridge"].map((tag) => (
              <span key={tag} className="bg-white/10 text-white/65 text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          </div>
        </div>
      </div>

      <TrustStrip />

      <Section>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <HeadingBlock
              label="For UK families"
              heading="The tutoring market is full. Quality is harder to find."
              body="Most tutoring platforms are marketplaces with hundreds of profiles and no curation. [name] is different: a small, personally managed practice where every tutor is known to us and every match is made deliberately. We work with all major UK exam boards across every key stage."
            />
            <Link href="/book" className="text-link mt-5 inline-block">
              Book a free call →
            </Link>
          </div>
          <div className="bg-cream-200 rounded-lg h-64 flex items-center justify-center text-navy-400 text-sm">
            Image placeholder
          </div>
        </div>
      </Section>

      <Section className="bg-cream-100">
        <HeadingBlock label="Subjects" heading="What we cover for UK students." />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
          {ukSubjects.map((s) => (
            <SubjectCard key={s.name} name={s.name} href={s.href} />
          ))}
        </div>
      </Section>

      <CtaBand
        heading="Ready to find the right tutor?"
        body="Book a free call with a founder and we'll match your child with the right person."
      />

      <div className="bg-cream-200 py-4 px-6 text-center">
        <Link href="/international" className="text-navy-500 text-sm hover:text-navy-700 transition-colors">
          Based outside the UK? See our international offer →
        </Link>
      </div>
    </>
  );
}
