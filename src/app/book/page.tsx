import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a free call",
  description: "Book a free fifteen-minute call with a founder. An honest conversation about what your child needs, with no obligation to proceed.",
};

const trustSignals = [
  { label: "15 minutes" },
  { label: "With a founder" },
  { label: "Flexible timezones" },
];

export default function BookPage() {
  return (
    <>
      <div className="bg-navy-900 py-20 px-6 text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-h1 text-white leading-snug mb-4">
            Book a free fifteen-minute call.
          </h1>
          <p className="text-white/65 text-base leading-relaxed">
            A genuine conversation about your child and what they need. Book at a time that suits you.
          </p>
          <div className="flex justify-center gap-10 mt-8">
            {trustSignals.map((t) => (
              <div key={t.label} className="text-center">
                <span className="text-white/60 text-xs">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking widget embed */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="bg-cream-100 border border-cream-300 rounded-lg p-12 text-center text-navy-400 text-sm min-h-60 flex items-center justify-center">
          {/* Replace this div with your TutorBird or Calendly embed snippet */}
          Booking widget (TutorBird or Calendly embed)
        </div>
      </div>
    </>
  );
}
