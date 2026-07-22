import type { Metadata } from "next";
import { Section, PageHero, CtaBand } from "@/components/ui";
import GoogleReviewsButton from "@/components/ui/GoogleReviewsButton";
import ReviewCarousel from "./ReviewCarousel";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Read reviews from families and students who have worked with Mind’s Eye Education.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        heading="What families and students say."
        subheading="All reviews are taken directly from Google."
      />

      <Section>
        <ReviewCarousel />
        <div className="mt-10">
          <GoogleReviewsButton />
        </div>
      </Section>

      <CtaBand
        heading="Ready to talk about your child’s education?"
        body="Book a free fifteen-minute call with a founder. An honest conversation about what your child needs, with no obligation to proceed."
      />
    </>
  );
}
