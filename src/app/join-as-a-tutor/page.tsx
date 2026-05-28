import type { Metadata } from "next";
import { Section, HeadingBlock, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Join as a tutor",
  description: "Join the Mind's Eye Education tutor network. Oxford and Russell Group graduates with a genuine love of teaching.",
};

const criteria = [
  "Oxford or Russell Group degree, minimum 2:1",
  "Current DBS certificate or willingness to obtain one",
  "Demonstrable teaching or tutoring experience",
  "Reliable availability for regular weekly sessions",
];

export default function JoinPage() {
  return (
    <>
      <PageHero
        heading="Join the Mind's Eye Education network."
        subheading="We work with Oxford and Russell Group graduates who take teaching seriously. If that sounds like you, we would like to hear from you."
      />

      <Section>
        <HeadingBlock label="What we look for" heading="Our standards." />
        <p className="section-body max-w-2xl leading-loose mt-2 mb-8">
          We only work with tutors we know personally or can verify through trusted
          referral. A strong academic background is expected; what we are looking for
          beyond that is someone who finds genuine pleasure in teaching and can
          demonstrate it.
        </p>
        <ul className="space-y-3 max-w-lg">
          {criteria.map((c) => (
            <li key={c} className="flex gap-3 items-start">
              <span className="text-gold-500 mt-0.5">+</span>
              <span className="text-navy-700 text-sm leading-relaxed">{c}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-cream-100">
        <HeadingBlock label="Apply" heading="Tell us about yourself." />
        <form className="mt-8 max-w-lg space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full border border-cream-300 rounded-md px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-navy-400 transition-colors"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-cream-300 rounded-md px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-navy-400 transition-colors"
            />
          </div>
          <input
            type="text"
            placeholder="University attended"
            className="w-full border border-cream-300 rounded-md px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-navy-400 transition-colors"
          />
          <input
            type="text"
            placeholder="Degree and subject"
            className="w-full border border-cream-300 rounded-md px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-navy-400 transition-colors"
          />
          <input
            type="text"
            placeholder="Subjects you tutor"
            className="w-full border border-cream-300 rounded-md px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-navy-400 transition-colors"
          />
          <input
            type="text"
            placeholder="Levels (GCSE, A-level, university...)"
            className="w-full border border-cream-300 rounded-md px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-navy-400 transition-colors"
          />
          <textarea
            placeholder="A few sentences about your teaching experience and approach"
            rows={4}
            className="w-full border border-cream-300 rounded-md px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-navy-400 transition-colors resize-none"
          />
          <button
            type="submit"
            className="btn-primary w-full text-center"
          >
            Submit application
          </button>
        </form>
      </Section>
    </>
  );
}
