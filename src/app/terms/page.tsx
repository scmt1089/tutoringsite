import type { Metadata } from "next";
import { Section, HeadingBlock, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms and conditions",
  description: "The terms that govern your use of Mind's Eye Education's tutoring services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero heading="Terms and conditions." subheading="Last updated: January 2025" />

      <Section>
        <div className="max-w-2xl space-y-10">

          <div>
            <HeadingBlock label="Overview" heading="Plain English first." />
            <p className="section-body leading-loose mt-2">
              These terms govern the relationship between Mind's Eye Education (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;, &ldquo;our&rdquo;) and any client (&ldquo;you&rdquo;) who
              engages our tutoring or admissions services. By booking a session or package,
              you agree to these terms. If anything is unclear, please get in touch before
              booking.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Our services</h2>
            <p className="section-body leading-loose">
              Mind's Eye Education provides one-to-one online tutoring, admissions preparation, and related
              educational services. All sessions are delivered via video call. We match each
              student personally; if for any reason a match is not working, we will find an
              alternative tutor at no additional charge.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Booking and payment</h2>
            <p className="section-body leading-loose">
              Sessions are confirmed upon receipt of payment or a signed package agreement.
              Invoices are issued in advance and are due within seven days of the invoice
              date. We accept payment by bank transfer and major debit and credit cards.
              International clients may be invoiced in their local currency; the GBP
              equivalent is calculated at the prevailing exchange rate at the time of
              invoicing.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Cancellation policy</h2>
            <p className="section-body leading-loose">
              We understand that things come up. Our cancellation policy is designed to be
              fair to both families and tutors.
            </p>
            <ul className="mt-4 space-y-3 section-body leading-loose list-disc list-inside">
              <li>
                <strong>More than 48 hours&rsquo; notice:</strong> Full credit or refund.
                No charge.
              </li>
              <li>
                <strong>24–48 hours&rsquo; notice:</strong> 50% of the session fee is
                charged. The remaining 50% is credited to your account.
              </li>
              <li>
                <strong>Less than 24 hours&rsquo; notice, or no-show:</strong> The full
                session fee is charged. No credit is issued.
              </li>
            </ul>
            <p className="section-body leading-loose mt-4">
              Cancellations must be made by email to{" "}
              <span className="text-navy-700">info@mindseye.education</span>. The time of receipt
              of your email is used to determine which tier applies. In exceptional
              circumstances (serious illness, bereavement), we will consider a waiver at
              our discretion. Please get in touch as soon as possible.
            </p>
            <p className="section-body leading-loose mt-4">
              Tutors also commit to giving at least 48 hours&rsquo; notice for cancellations.
              Where a tutor cancels with less than 48 hours&rsquo; notice, you will receive
              a full credit for the affected session.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Packages</h2>
            <p className="section-body leading-loose">
              Session packages are valid for six months from the date of purchase unless
              otherwise agreed in writing. Unused sessions after this period are
              non-refundable. Packages are non-transferable between students. If you wish
              to pause a package due to illness or other circumstances, please contact us
              and we will do our best to accommodate.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Conduct</h2>
            <p className="section-body leading-loose">
              We expect all sessions to be conducted respectfully by all parties. We reserve
              the right to end the relationship with a client, with a pro-rata refund for
              unused sessions, if a student or family member behaves in a way that is
              abusive, threatening, or otherwise unacceptable toward a tutor.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Intellectual property</h2>
            <p className="section-body leading-loose">
              Any materials prepared by tutors for sessions remain the intellectual property
              of Mind's Eye Education and the relevant tutor. You may use these materials for your child&rsquo;s
              personal study only. They may not be reproduced, shared, or distributed without
              our written consent.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Limitation of liability</h2>
            <p className="section-body leading-loose">
              We take the quality of our tutoring seriously and stand behind our work. However,
              we cannot guarantee specific academic outcomes, as results depend on many factors
              outside our control. Our liability to you is limited to the total fees paid for
              sessions in the three months preceding any claim. We are not liable for indirect
              or consequential losses.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Governing law</h2>
            <p className="section-body leading-loose">
              These terms are governed by the laws of England and Wales. Any disputes will
              be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Changes to these terms</h2>
            <p className="section-body leading-loose">
              We may update these terms from time to time. The current version is always on
              this page. Continued use of our services after an update constitutes acceptance
              of the revised terms.
            </p>
          </div>

        </div>
      </Section>
    </>
  );
}
