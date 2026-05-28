import type { Metadata } from "next";
import { Section, HeadingBlock, CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "How it works",
  description: "How Mind's Eye Education matches students with the right tutor, from first call to first session.",
};

const steps = [
  {
    number: "01",
    title: "Schedule a free call with a founder.",
    body: "Not a sales call. A genuine conversation. We want to understand your child, what they are finding difficult and what they need to achieve. This takes fifteen minutes and costs nothing. It also means that by the time we suggest a tutor, we know exactly what to look for, informed by years of making these matches.",
  },
  {
    number: "02",
    title: "Let us find the right tutor.",
    body: "We match your child with someone from our network of Oxford and Russell Group graduates, people we know personally. We share the tutor's background, and you approve before anything is booked. We have done the vetting; you make the call.",
  },
  {
    number: "03",
    title: "Begin taking lessons and seeing progress.",
    body: "Sessions run online via video call, at times that suit your family. We accommodate UK and international timezones. Most students start with weekly sessions; the frequency adjusts to what is needed, especially around exam periods.",
  },
];

const faqs = [
  {
    q: "How long are sessions?",
    a: "Most sessions run for sixty or ninety minutes, depending on the student's age and the subject. We recommend sixty minutes for younger students and ninety for A-level and university-level work.",
  },
  {
    q: "What if my child does not get on with their tutor?",
    a: "It happens rarely, and when it does we handle it immediately. We will find an alternative tutor at no extra cost. No awkward conversations required.",
  },
  {
    q: "Are your tutors DBS checked?",
    a: "Yes. All tutors working with students under eighteen hold a current DBS certificate, or equivalent police clearance for tutors based outside the UK.",
  },
  {
    q: "What platform do you use for sessions?",
    a: "Sessions run on Zoom or Google Meet, whichever the family prefers. Both are already familiar to most students and require no additional setup.",
  },
  {
    q: "Can I pay in a currency other than GBP?",
    a: "Yes. International families can pay in their local currency. We will confirm the equivalent rate at the time of booking.",
  },
  {
    q: "How quickly can we get started?",
    a: "In most cases we can match a student and confirm a first session within 48 to 72 hours of the initial call.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        heading="How it works."
        subheading="We have thought this through so you do not have to. Here is how it works."
      />

      <Section>
        <HeadingBlock label="The process" heading="Three steps." />
        <div className="mt-10 space-y-6">
          {steps.map((s) => (
            <div
              key={s.number}
              className="border-l-2 border-l-gold-500 pl-6 py-2"
            >
              <p className="text-gold-500 text-xs tracking-widest mb-2">Step {s.number}</p>
              <h3 className="font-serif text-navy-900 text-h3 mb-3">{s.title}</h3>
              <p className="section-body max-w-2xl leading-loose">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-cream-100">
        <HeadingBlock label="FAQ" heading="Common questions." />
        <div className="mt-8 divide-y divide-cream-300 max-w-2xl">
          {faqs.map((f) => (
            <div key={f.q} className="py-6">
              <p className="font-sans font-medium text-navy-900 mb-2">{f.q}</p>
              <p className="section-body leading-loose">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        heading="Ready to take the first step?"
        body="Book a free fifteen-minute call. We will handle everything from there."
      />
    </>
  );
}
