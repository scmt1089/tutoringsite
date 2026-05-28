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
    quote: "We tried two other tutoring services before finding Mind's Eye Education. The difference in quality and personal attention was immediate.",
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
    body: "A free fifteen-minute call with a founder. We want to understand your child properly, where they are now and what they need to achieve. A proper conversation about what they need.",
  },
  {
    number: "Step 02",
    title: "We advise on the right approach",
    body: "We think through what your child actually needs and match them with the right person from our network, people we know and have worked with directly. You hear about the tutor before anything is booked.",
  },
  {
    number: "Step 03",
    title: "Ongoing support, not just sessions",
    body: "We stay involved. Sessions run online at times that suit your family, and we check in to make sure things are on track. If something is not working, we adapt.",
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
            We have spent years inside this system, as students and as tutors. We know what gets results, and we are here to make sure your family does not have to figure it out alone.
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
              body="Most families come to us having already tried a platform or two. What they did not get was someone who had actually thought carefully about what their child needed. We have done the research and know the tutors personally. You should not have to manage that yourself."
            />
            <Link href="/about" className="text-link mt-5 inline-block">
              Meet the founders →
            </Link>
          </div>
          <Image
            src="/founder-photo.jpg"
            alt="The founders of Mind's Eye Education"
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
            Do not see what you need? Get in touch →
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
            body="The admissions process rewards preparation, and we know exactly what that looks like, having been through it ourselves and helped many students since. Our admissions programme is led by an Oxford first-class law graduate whose personal statement work has become a genuine specialism."
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
              body="We work with British-curriculum families worldwide. Our tutors know the curriculum and the demands of the schools, and sessions run in your timezone."
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
        body="Book a free fifteen-minute call with a founder. An honest conversation about what your child needs, with no obligation to proceed."
      />
    </>
  );
}
