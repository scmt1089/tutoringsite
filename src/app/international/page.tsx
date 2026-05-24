import type { Metadata } from "next";
import Link from "next/link";
import { Btn, TrustStrip, HeadingBlock, Section, CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "Online tutoring for international families on a British curriculum",
  description: "Expert online tutoring for international British-curriculum students from Oxford graduates. Flexible timezones, sessions available worldwide.",
};

export default function InternationalPage() {
  return (
    <>
      <div className="bg-navy-900 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
          <span className="inline-block bg-gold-500/20 text-gold-400 text-xs px-3 py-1 rounded-full tracking-widest uppercase mb-5">
            International families
          </span>
          <h1 className="font-serif text-display text-white leading-tight mb-5">
            British-curriculum tutoring and admissions prep for international students.
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            [name] works with British-curriculum families worldwide. Our tutors know
            the curriculum, understand the schools, and work across timezones.
          </p>
          <Btn href="/book">Book a free consultation</Btn>
          <div className="flex gap-2 flex-wrap mt-6">
            {["British curriculum", "Online sessions", "Flexible timezones", "Global families", "UK admissions"].map((tag) => (
              <span key={tag} className="bg-white/10 text-white/65 text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          </div>
        </div>
      </div>

      <TrustStrip />

      <Section>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <HeadingBlock
              label="For international families"
              heading="Your child is on a British curriculum. Their tutor should know it inside out."
              body="British-curriculum schools worldwide are academically demanding, and finding a tutor who genuinely knows the curriculum, the exam boards, and the university admissions process can be difficult from abroad. [name] solves that problem: Oxford-founded, British-curriculum focused, and available across timezones."
            />
            <Link href="/book" className="text-link mt-5 inline-block">
              Book a free call →
            </Link>
          </div>
          <div className="bg-cream-200 rounded-lg h-64 flex items-center justify-center text-navy-400 text-sm">
            Image placeholder
          </div>
        </div>
      </Section>

      <Section className="bg-cream-100">
        <HeadingBlock
          label="University admissions"
          heading="Planning a UK university pathway?"
          body="Many international families are planning for UK university from early in their child's secondary school career. Our admissions programme covers every stage: personal statements, Oxbridge preparation, LNAT, and interview coaching. We know what UK universities are looking for, because we went through the process and now help others navigate it."
        />
        <Link href="/admissions" className="text-link mt-5 inline-block">
          Explore admissions preparation →
        </Link>
      </Section>

      <Section>
        <HeadingBlock label="Pricing" heading="International billing available." />
        <p className="section-body max-w-2xl leading-loose mt-2">
          All packages can be billed in your local currency at the prevailing rate at
          the time of booking. Sessions are scheduled to suit your timezone, with early
          morning and evening slots available to fit around school schedules worldwide.
        </p>
        <Link href="/pricing" className="text-link mt-5 inline-block">
          See full pricing →
        </Link>
      </Section>

      <CtaBand
        heading="Ready to find the right tutor?"
        body="Book a free call with a founder. We'll find the right match for your child, wherever you are in the world."
      />

      <div className="bg-cream-200 py-4 px-6 text-center">
        <Link href="/uk" className="text-navy-500 text-sm hover:text-navy-700 transition-colors">
          Based in the UK instead? See our UK offer →
        </Link>
      </div>
    </>
  );
}
