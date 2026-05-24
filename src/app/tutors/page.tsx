import type { Metadata } from "next";
import { tutors } from "@/data/tutors";
import { Section, HeadingBlock, CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our tutors",
  description: "Oxford and Russell Group graduates with real subject depth. Every tutor in the [name] network is known to us personally.",
};

export default function TutorsPage() {
  return (
    <>
      <PageHero
        heading="Our tutors."
        subheading="Every tutor in the [name] network is known to us personally. Oxford and Russell Group graduates with real subject depth and real teaching experience."
      />

      <Section>
        <HeadingBlock label="The network" heading="Who we work with." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {tutors.map((tutor) => (
            <div key={tutor.id} className="card flex flex-col gap-3">
              <div className="w-12 h-12 rounded-full bg-cream-300 flex items-center justify-center text-navy-400 text-xs">
                Photo
              </div>
              <div>
                <p className="font-serif text-navy-900 text-base">{tutor.name}</p>
                <p className="text-gold-500 text-xs tracking-wide mt-0.5">
                  {tutor.subjects.join(" · ")}
                </p>
              </div>
              <p className="text-navy-600 text-sm leading-relaxed">{tutor.bio}</p>
              <div className="flex flex-wrap gap-1 mt-auto pt-2">
                {tutor.levels.map((level) => (
                  <span
                    key={level}
                    className="bg-cream-200 text-navy-600 text-xs px-2 py-0.5 rounded-full"
                  >
                    {level}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        heading="Not sure which tutor is right?"
        body="We'll match you. Book a free call and we'll do the work."
      />
    </>
  );
}
