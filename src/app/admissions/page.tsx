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
    body: "The personal statement is one of the most difficult pieces of writing a student will produce. It is high-stakes and deeply personal, and nothing in school prepares them for it. Our personal statement work is led by an Oxford first-class law graduate who has spent years helping students find and articulate what makes them worth paying attention to. We work with students at every stage of the drafting process.",
  },
  {
    tag: "Oxbridge",
    title: "Oxbridge preparation",
    body: "Getting into Oxford or Cambridge requires more than strong grades. It requires the ability to think on your feet and engage genuinely with difficult ideas. We know what the process demands, having been through it ourselves, and we prepare students for each stage of the application.",
  },
  {
    tag: "Law",
    title: "LNAT preparation",
    body: "The Law National Aptitude Test is one of the most demanding admissions assessments in the UK. Our preparation covers both sections: the multiple-choice and the essay. The focus is on the analytical reading and structured argumentation the test rewards.",
  },
  {
    tag: "Interviews",
    title: "Interview coaching",
    body: "University interviews, Oxbridge interviews in particular, reward students who can think under pressure and engage genuinely with difficult questions. We run mock interviews to identify the areas that need work and build the intellectual confidence that comes across in the room.",
  },
  {
    tag: "General",
    title: "UCAS guidance",
    body: "UCAS is genuinely confusing the first time, and the decisions made early in the process matter more than most families realise. We have navigated it ourselves and guided many students through it since. We take families through the full process, making sure everything is in place before the deadline.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        heading="Admissions preparation."
        subheading="Getting into the right university is one of the highest-stakes things a student will face. We have been through it ourselves and helped many others since. You do not need to research this; we have done that for you."
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
        body="Book a free call to discuss your child’s application and find out how we can help."
      />
    </>
  );
}
