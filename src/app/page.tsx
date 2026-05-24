import Image from "next/image";
import Link from "next/link";
import {
  Btn,
  TrustStrip,
  HeadingBlock,
  TestimonialCard,
  StepCard,
  SubjectCard,
  CtaBand,
  Section,
} from "@/components/ui";

const testimonials = [
  {
    quote: "We tried two other tutoring services before finding [name]. The difference in quality and personal attention was immediate.",
    attribution: "Parent, Dubai",
  },
  {
    quote: "My daughter went from a predicted B to an A* in A-level Chemistry. More importantly she actually started enjoying the subject.",
    attribution: "Parent, London",
  },
  {
    quote: "The personal statement support was exceptional. My son got into his first choice.",
    attribution: "Parent, Surrey",
  },
];

const steps = [
  {
    number: "Step 01",
    title: "Tell us about your child's education",
    body: "A free fifteen-minute call with a founder. We want to understand the full picture — where your child is, where they need to get to, and what's standing in the way. This is a proper conversation, not a sales call.",
  },
  {
    number: "Step 02",
    title: "We advise on the right approach",
    body: "We think through what your child actually needs — subject support, admissions preparation, or both — and match them with the right person from our network. You approve everything before it's booked.",
  },
  {
    number: "Step 03",
    title: "Ongoing support, not just sessions",
    body: "We stay involved. Sessions run online at times that suit your family, and we check in to make sure things are on track. If something isn't working, we adapt.",
  },
];

const featuredSubjects = [
  { name: "GCSE",                  href: "/subjects/gcse-maths" },
  { name: "A-levels",              href: "/subjects/a-level-maths" },
  { name: "11-plus",               href: "/subjects/11-plus" },
  { name: "IB",                    href: "/subjects" },
  { name: "Oxbridge admissions",   href: "/admissions" },
  { name: "Personal statements",   href: "/admissions" },
  { name: "Interview preparation", href: "/admissions" },
  { name: "Primary",               href: "/subjects" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-navy-900 py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-display text-white leading-tight mb-5">
            Educational consultancy and tutoring, founded at Oxford.
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            We work with families who want real guidance on their child's academic journey — not just a marketplace match. Strategy, subject support, and admissions preparation, from people who've been through the system.
          </p>
          <Btn href="/book">Book a free consultation</Btn>
          <div className="mt-4">
            <Link href="/subjects" className="text-white/50 text-sm hover:text-white/80 transition-colors">
              Or browse our subjects →
            </Link>
          </div>
        </div>
      </div>

      <TrustStrip />

      {/* Proposition */}
      <Section>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <HeadingBlock
              label="Our approach"
              heading="Strategy before tutoring."
              body="Most families come to us with a specific problem. Our first job isn't to assign a tutor — it's to understand the bigger picture and make sure we're solving the right problem. The tutoring follows from that. Every student is matched personally, every tutor is known to us, and nothing is booked until we're confident it's the right fit."
            />
            <Link href="/about" className="text-link mt-5 inline-block">
              Meet the founders →
            </Link>
          </div>
          <Image
            src="/founder-photo.jpg"
            alt="The founders of [name]"
            width={600}
            height={288}
            className="rounded-lg w-full h-72 object-cover object-top"
          />
        </div>
      </Section>

      {/* Subjects */}
      <Section className="bg-cream-100">
        <HeadingBlock label="Subjects" heading="What are you preparing for?" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
          {featuredSubjects.map((s) => (
            <SubjectCard key={s.name} name={s.name} href={s.href} />
          ))}
        </div>
        <div className="mt-6">
          <Link href="/book" className="text-link">
            Don't see what you need? Get in touch →
          </Link>
        </div>
      </Section>

      {/* Steps */}
      <Section>
        <HeadingBlock label="Process" heading="How we work." />
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {steps.map((s) => (
            <StepCard key={s.number} {...s} />
          ))}
        </div>
      </Section>

      {/* Admissions banner */}
      <Section className="bg-navy-800">
        <div className="max-w-2xl">
          <HeadingBlock
            label="Admissions"
            heading="Getting into the right university starts earlier than you think."
            body="From personal statements to Oxbridge interviews, the admissions process is one of the most high-stakes pieces of preparation your child will face. Our admissions programme is led by an Oxford first-class law graduate with a specialism in personal statements."
            light
          />
          <Link href="/admissions" className="text-gold-500 text-sm mt-5 inline-block hover:underline">
            Explore admissions preparation →
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <HeadingBlock label="Testimonials" heading="What families say." />
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.attribution} {...t} />
          ))}
        </div>
      </Section>

      {/* International callout */}
      <Section className="bg-cream-200">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <HeadingBlock
              label="International"
              heading="Based outside the UK?"
              body="We work with British-curriculum families worldwide. Sessions run in your timezone, tutors know the curriculum your child is on, and we understand the demands of top British-curriculum schools wherever you are."
            />
            <Link href="/international" className="text-link mt-5 inline-block">
              See our international offer →
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            {["British curriculum", "Flexible timezones", "Online sessions", "Global families"].map((s) => (
              <span key={s} className="inline-block bg-cream-300 text-navy-600 text-sm px-4 py-2 rounded-full w-fit">
                {s}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        heading="Ready to talk about your child's education?"
        body="Book a free fifteen-minute call with a founder. No commitment, no pressure — just an honest conversation about what your child needs."
      />
    </>
  );
}
