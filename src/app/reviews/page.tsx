import type { Metadata } from "next";
import { Section, PageHero } from "@/components/ui";
import TrustpilotWidget from "@/components/ui/TrustpilotWidget";

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
          <TrustpilotWidget />
        </div>
      </Section>
    </>
  );
}
