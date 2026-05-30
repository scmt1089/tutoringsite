import type { Metadata } from "next";
import { Section, PageHero } from "@/components/ui";
import GoogleReviewsButton from "@/components/ui/GoogleReviewsButton";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Read reviews from families who have worked with Mind's Eye Education.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        heading="What families say."
        subheading="Reviews from families across the UK and internationally."
      />

      <Section>
        <div className="max-w-2xl">
          <p className="section-body leading-loose mb-8">
            Mind's Eye Education is listed on Google Reviews. Read what families have said
            about working with us, or leave a review of your own.
          </p>
          <GoogleReviewsButton />
        </div>
      </Section>
    </>
  );
}
