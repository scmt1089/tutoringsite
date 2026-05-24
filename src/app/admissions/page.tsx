import type { Metadata } from "next";
import { Section, HeadingBlock, CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Admissions preparation",
  description: "Personal statements, Oxbridge prep, LNAT, and interview coaching from Oxford graduates.",
};

const strands = [
  {
    tag: "Lead specialism",
    title: "Personal statements",
    body: "The personal statement is one of the most difficult pieces of writing a seventeen-year-old will face: high stakes, deeply personal, and entirely unlike anything taught in school. Our personal statement work is led by an Oxford first-class law graduate with years of experience helping students find and articulate what makes them worth paying attention to. We work with students at every stage, from the blank page to the final draft.",
  },
  {
    tag: "Oxbridge",
    title: "Oxbridge preparation",
    body: "Getting into Oxford or Cambridge requires more than strong grades. It requires the ability to think on your feet, engage critically with unfamiliar material, and hold a genuine intellectual conversation. We prepare students for every stage of the Oxbridge application: personal statement, admissions tests, and interview.",
  },
  {
    tag: "Law",
    title: "LNAT preparation",
    body: "The Law National Aptitude Test is one of the most demanding admissions assessments in the UK. Our LNAT preparation covers both the multiple-choice and essay sections, with particular attention to the kind of analytical reading and structured argumentation the test rewards.",
  },
  {
    tag: "Interviews",
    title: "Interview coaching",
    body: "University interviews, and Oxbridge interviews in particular, reward students who can think under pressure and engage genuinely with difficult questions. We run mock interviews, identify weaknesses, and build the kind of intellectual confidence that comes across in the room.",
  },
  {
    tag: "General",
    title: "UCAS guidance",
    body: "For students and families navigating UCAS for the first time, we offer full guidance through the process: course selection, university shortlisting, application strategy, and timeline management.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        heading="Admissions preparation."
        subheading="Getting into the right university is one of the highest-stakes processes a student will go through. We've been through it, and we know how to prepare for it."
      />

      <Section>
        <HeadingBlock label="Our offer" heading="What we cover." />
        <div className="mt-8 divide-y divide-cream-300">
          {strands.map((s) => (
            <div key={s.title} className="py-8">
              <span className="inline-block bg-cream-200 text-navy-700 text-xs px-3 py-1 rounded-full mb-3 tracking-wide">
                {s.tag}
              </span>
              <h3 className="font-serif text-navy-900 text-h3 mb-3">{s.title}</h3>
              <p className="section-body max-w-2xl leading-loose">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        heading="Ready to get started?"
        body="Book a free call to discuss your child's application and find out how we can help."
      />
    </>
  );
}
