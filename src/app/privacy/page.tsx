import type { Metadata } from "next";
import { Section, HeadingBlock, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How [name] collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero heading="Privacy policy." subheading="Last updated: January 2025" />

      <Section>
        <div className="max-w-2xl space-y-10">

          <div>
            <HeadingBlock label="Overview" heading="We keep this simple." />
            <p className="section-body leading-loose mt-2">
              [name] (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to
              protecting your personal data. This policy explains what information we collect,
              how we use it, and what rights you have. We are registered as a data controller
              under UK GDPR. If you have any questions, contact us at{" "}
              <span className="text-navy-700">[privacy email]</span>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">What data we collect</h2>
            <p className="section-body leading-loose">
              When you contact us, book a consultation, or engage our services, we may collect:
            </p>
            <ul className="mt-3 space-y-2 section-body leading-loose list-disc list-inside">
              <li>Your name and contact details (email address, phone number)</li>
              <li>Your child&rsquo;s name, age, school year, and subjects of interest</li>
              <li>Payment and billing information (processed securely via our payment provider)</li>
              <li>Session notes and progress records, where you have consented to these being kept</li>
              <li>Communications between you and [name] (emails, messages)</li>
              <li>Technical data such as IP address and browser type when you visit our website</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">How we use your data</h2>
            <p className="section-body leading-loose">
              We use your data to:
            </p>
            <ul className="mt-3 space-y-2 section-body leading-loose list-disc list-inside">
              <li>Match your child with the right tutor</li>
              <li>Schedule and manage tutoring sessions</li>
              <li>Process payments and send invoices</li>
              <li>Communicate with you about your bookings</li>
              <li>Meet our legal and safeguarding obligations</li>
              <li>Improve our services (in anonymised or aggregated form only)</li>
            </ul>
            <p className="section-body leading-loose mt-4">
              We will only contact you for marketing purposes if you have given us explicit
              consent to do so. You can withdraw that consent at any time.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Legal basis for processing</h2>
            <p className="section-body leading-loose">
              We process your data on the following legal bases: performance of a contract
              (to deliver our services to you); legitimate interests (to run and improve our
              business); compliance with a legal obligation (safeguarding and financial
              record-keeping); and, where relevant, your explicit consent.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Sharing your data</h2>
            <p className="section-body leading-loose">
              We share your data only where necessary. This includes with the tutor assigned
              to your child (name, year group, subject, and session notes only), with our
              payment processor, and with any third-party tools we use to manage bookings or
              communications. We do not sell your data. We do not share it with advertisers.
              Any third party we use is required to handle your data in accordance with UK GDPR.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">How long we keep your data</h2>
            <p className="section-body leading-loose">
              We retain your personal data for as long as you are an active client, and for
              up to seven years afterwards to meet financial and legal record-keeping
              requirements. Safeguarding records may be retained for longer in line with
              statutory guidance. You may request deletion of your data at any time, subject
              to these legal obligations.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Your rights</h2>
            <p className="section-body leading-loose">
              Under UK GDPR you have the right to: access the personal data we hold about
              you; correct inaccurate data; request deletion of your data; object to or
              restrict our processing; and receive your data in a portable format. To
              exercise any of these rights, contact us at{" "}
              <span className="text-navy-700">[privacy email]</span>. You also have the right
              to lodge a complaint with the Information Commissioner&rsquo;s Office (ICO) at
              ico.org.uk.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Cookies</h2>
            <p className="section-body leading-loose">
              This website uses only essential cookies necessary for the site to function.
              We do not use advertising or tracking cookies. You can disable cookies in your
              browser settings, though this may affect how some parts of the site behave.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Changes to this policy</h2>
            <p className="section-body leading-loose">
              We may update this policy from time to time. The most current version will
              always be on this page, with the date of last update shown at the top. Material
              changes will be communicated to active clients by email.
            </p>
          </div>

        </div>
      </Section>
    </>
  );
}
