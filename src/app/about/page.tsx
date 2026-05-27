import type { Metadata } from "next";
import Image from "next/image";
import { Section, HeadingBlock, CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind [name], and the people who built it.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        heading="We built [name] because families deserve better than a tutoring marketplace."
        subheading="We are educational consultants who happen to run a tutoring practice. The distinction matters."
      />

      {/* Opening */}
      <Section>
        <p className="section-body max-w-2xl leading-loose">
          After years working in education, tutoring students and supporting university
          applications, we kept seeing the same thing. Families were navigating some of
          the most consequential decisions of their children's academic lives without
          anyone to advise them properly. They were buying sessions on platforms without
          knowing what they actually needed. We started [name] because we had done the
          research and knew what worked, and we wanted families to have access to that
          without having to work it out themselves. We function as advisors. We work out
          the right approach, then bring in the right people to execute on it.
        </p>
      </Section>

      {/* Founders */}
      <Section className="bg-cream-100">
        <HeadingBlock label="The founders" heading="The people behind it." />
        <Image
          src="/founder-photo.jpg"
          alt="The founders of [name]"
          width={900}
          height={500}
          className="w-full rounded-lg object-cover object-top mt-10 mb-12 max-h-[40rem]"
        />
        <div className="space-y-12">

          {/* Founder 1 */}
          <div className="pb-10 border-b border-cream-300">
            <p className="font-serif text-navy-900 text-xl mb-1">[Your name]</p>
            <p className="text-gold-500 text-xs tracking-widest uppercase mb-4">
              BA Music · MSt Musicology with Distinction · Magdalen College, Oxford
            </p>
            <p className="section-body leading-loose max-w-2xl">
              He read Music at Oxford, where he held a Demyship at Magdalen College,
              one of the university's oldest and most prestigious academic scholarships,
              and went on to complete a Master's in Musicology with Distinction. He has
              been tutoring for six years across Music Theory, GCSE and A-level Music,
              university-level music, 11-plus and 13-plus entrance preparation, Maths,
              English, French, and Key Stage 3 Science. There is a particular
              satisfaction, he will tell you, in watching a student reach that moment of
              clarity. He has spent six years chasing it.
            </p>
          </div>

          {/* Founder 2 */}
          <div>
            <p className="font-serif text-navy-900 text-xl mb-1">[Her name]</p>
            <p className="text-gold-500 text-xs tracking-widest uppercase mb-4">
              BA Law, First Class · Oxford · Personal Statement Specialist
            </p>
            <p className="section-body leading-loose max-w-2xl">
              She took a First in Law at Oxford and has been teaching for longer than
              that degree took to complete. She started tutoring while still at school
              herself, which tells you something important about where this comes from
              for her. She works across Biology and Chemistry to A-level, A-level and
              university Law, LNAT preparation, and personal statements. Her personal
              statement work in particular has become something of a specialism: she
              has a rare ability to help students find and articulate the thing that
              makes them worth paying attention to, which is, when you think about it,
              the entire challenge.
            </p>
          </div>
        </div>
      </Section>

      {/* How we work */}
      <Section>
        <HeadingBlock label="How we work" heading="Advice first. Everything else follows." />
        <p className="section-body max-w-2xl leading-loose mt-2">
          Every engagement starts with a conversation. We want to understand your
          child's situation properly before we suggest anything. We have seen enough
          students to know which approaches work and when a quick fix is not the answer.
          We run no algorithms and aggregate no profiles. When we match a student with
          a tutor, it is because we know both of them well enough to be confident it
          is right.
        </p>
      </Section>

      {/* Safeguarding */}
      <Section className="bg-cream-100">
        <HeadingBlock label="Standards" heading="Safeguarding and vetting." />
        <p className="section-body max-w-2xl leading-loose mt-2">
          All tutors working with under-18s hold a current DBS certificate, or equivalent
          police clearance for tutors based outside the UK. Safeguarding is not a compliance
          exercise for us; it is a baseline condition of being part of this practice.
        </p>
      </Section>

      {/* Oxford note */}
      <Section>
        <HeadingBlock label="Our philosophy" heading="A note on Oxford." />
        <p className="section-body max-w-2xl leading-loose mt-2">
          We mention Oxford because it is relevant. The Oxford tutorial system, one hour,
          one student, complete intellectual attention in both directions, is the model
          we carry into everything we do. It is an extraordinarily effective way to learn,
          and we have spent years delivering our own version of it. That is what [name]
          is built on.
        </p>
      </Section>

      <CtaBand
        heading="Ready to talk about your child's education?"
        body="Book a free fifteen-minute call with a founder. No commitment required, just an honest conversation about what your child needs."
      />
    </>
  );
}
