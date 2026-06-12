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
  GoogleReviewsButton,
} from "@/components/ui";

const testimonials = [
  {
    quote: "I have only been using this service for a month now and I feel like I have a much clearer understanding of my subjects. Habiba explains topics in a very simplified way and she is very interactive which makes the lessons interesting so I always look forward to them.",
    attribution: "Karina, A-level student",
  },
  {
    quote: "My daughter was not sure how to approach vast syllabus of A level Biology, but Habiba made it simpler and less scary to tackle it. Her teaching style is fun and precise and my daughter made a good progress. We added Chemistry as well. It is all up to my daughter to deliver the grades she needs for medical school. We are all grateful for how Habiba supported my daughter academically and emotionally. We highly recommend Habiba!",
    attribution: "Toko, parent",
  },
  {
    quote: "I've been having tuition with Habiba for a few months now for A-level Biology and Chemistry and she's amazing! After the first lesson with Habiba, I knew it would be her. She explains topics that I used to not understand so clearly and goes through exam questions with you so you can be confident on what the mark scheme would expect. She also makes a document for you that contains all your mistakes after doing exam questions so you can keep looking back to make sure you don't make the same mistake. Besides being an amazing tutor, she is so friendly and kind which makes asking questions not scary at all :)",
    attribution: "Charlaine, A-level student",
  },
];

const steps = [
  {
    number: "Step 01",
    title: "Tell us about what you need.",
    body: "Book a free fifteen-minute call with one of the founders. We want to understand your child properly, where they are now and what they need to achieve.",
  },
  {
    number: "Step 02",
    title: "Let us advise on the right approach.",
    body: "We think through what your child actually needs and match them with the right person from our network, people we know and have worked with directly. You hear about the tutor before anything is booked.",
  },
  {
    number: "Step 03",
    title: "Receive ongoing, collaborative support.",
    body: "We stay involved throughout the whole process. Sessions run online at times that suit your family, and we check in to make sure everything is on track.",
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
  { name: "Primary education",     href: "/subjects/primary" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-navy-850 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-display text-white leading-tight mb-5">
            Family-founded, family-focused.
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            We have spent years inside the education system, as students, tutors and advisors. We know what gets results, and we are here to make sure your family does not have to figure it out alone.
          </p>
          <Btn href="/book">Book a free consultation</Btn>
          <div className="mt-4">
            <Link href="/subjects" className="text-white/50 text-sm hover:text-white/80 transition-colors">
              Or browse our subjects →
            </Link>
          </div>
          <div className="mt-8">
            <GoogleReviewsButton className="text-white/70 hover:text-white" />
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
              heading="Proven strategies backed by data and experience."
              body="We have developed a deep knowledge of what works for students and their families, based on years of research, observation and pattern analysis. We apply this knowledge with every student, personalising our approach to enable them to truly learn and flourish."
            />
            <Link href="/about" className="text-link mt-5 inline-block">
              Meet the founders →
            </Link>
          </div>
          <Image
            src="/founder-photo.jpg"
            alt="The founders of Mind's Eye Education, Sam Thyr (right) and Habiba al-Khatib (left), wearing mortar boards, hoods and graduation gowns."
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
            body="The admissions process can be complex, but we know exactly how best to prepare for it, having been through it ourselves and helped many students since. Our admissions programme is led by an Oxford first-class law graduate whose personal statement work has become a core specialism."
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
