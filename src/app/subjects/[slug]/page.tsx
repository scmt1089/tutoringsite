import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { subjects } from "@/data/subjects";
import { tutors } from "@/data/tutors";
import { Section, HeadingBlock, CtaBand, Btn } from "@/components/ui";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return subjects.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const subject = subjects.find((s) => s.slug === params.slug);
  if (!subject) return {};
  return {
    title: subject.metaTitle,
    description: subject.metaDescription,
  };
}

export default function SubjectPage({ params }: Props) {
  const subject = subjects.find((s) => s.slug === params.slug);
  if (!subject) notFound();

  const relatedTutors = tutors.filter((t) =>
    t.subjects.some((sub) => subject.name.toLowerCase().includes(sub.toLowerCase()))
  );

  return (
    <>
      <div className="bg-navy-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-gold-500 text-xs tracking-widest uppercase mb-3">
              {subject.level}
            </p>
            <h1 className="font-serif text-h1 text-white leading-snug mb-4">
              {subject.name} tutoring.
            </h1>
            <Btn href="/book">Book a free consultation</Btn>
          </div>
        </div>
      </div>

      <Section>
        <HeadingBlock label="About this subject" heading={`What we cover in ${subject.name}.`} />
        <p className="section-body max-w-2xl leading-loose mt-2">{subject.description}</p>
        {subject.examBoards && (
          <div className="flex gap-2 mt-6 flex-wrap">
            {subject.examBoards.map((board) => (
              <span key={board} className="bg-cream-200 text-navy-600 text-xs px-3 py-1 rounded-full">
                {board}
              </span>
            ))}
          </div>
        )}
      </Section>

      {relatedTutors.length > 0 && (
        <Section className="bg-cream-100">
          <HeadingBlock label="Tutors" heading={`Our ${subject.name} tutors.`} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {relatedTutors.map((tutor) => (
              <div key={tutor.id} className="card">
                <p className="font-serif text-navy-900 text-base mb-1">{tutor.name}</p>
                <p className="text-gold-500 text-xs tracking-wide mb-3">
                  {tutor.university} · {tutor.degree}
                </p>
                <p className="text-navy-600 text-sm leading-relaxed">{tutor.bio}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      <CtaBand
        heading={`Ready to find a tutor for ${subject.name}?`}
        body="Book a free fifteen-minute call and we will match your child with the right person."
      />
    </>
  );
}
