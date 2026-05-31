import type { Metadata } from "next";
import Link from "next/link";
import { subjects } from "@/data/subjects";
import { Section, HeadingBlock, CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Subjects",
  description: "Online tutoring across GCSE, A-level, IB, 11-plus, and university admissions. UK and international.",
};

const groups = [
  { key: "entrance",   label: "Entrance exams",  sublabel: "7-plus to 13-plus" },
  { key: "school",     label: "School-age",       sublabel: "GCSE and below" },
  { key: "sixthform",  label: "Sixth form",       sublabel: "A-level and IB" },
  { key: "university", label: "University",       sublabel: "Degree level and admissions" },
] as const;

export default function SubjectsPage() {
  return (
    <>
      <PageHero
        heading="What are you preparing for?"
        subheading="Every subject page links to tutors we know personally, people with the right depth of knowledge and a track record of getting results."
      />

      {groups.map((group) => {
        const groupSubjects = subjects.filter((s) => s.group === group.key);
        return (
          <Section key={group.key} className={group.key === "sixthform" ? "bg-cream-100" : ""}>
            <HeadingBlock label={group.label} heading={group.sublabel} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
              {groupSubjects.map((s) => (
                <Link
                  key={s.id}
                  href={`/subjects/${s.slug}`}
                  className="card text-center hover:border-gold-500 transition-colors group"
                >
                  <p className="font-sans text-sm font-medium text-navy-900 group-hover:text-gold-600 transition-colors">
                    {s.name}
                  </p>
                </Link>
              ))}
              {group.key === "university" && (
                <Link
                  href="/admissions"
                  className="card text-center hover:border-gold-500 transition-colors group"
                >
                  <p className="font-sans text-sm font-medium text-navy-900 group-hover:text-gold-600 transition-colors">
                    Admissions
                  </p>
                </Link>
              )}
            </div>
          </Section>
        );
      })}

      <CtaBand
        heading="Not sure which subject you need?"
        body="Book a free call and we will tell you exactly what your child needs, and who can help."
      />
    </>
  );
}
