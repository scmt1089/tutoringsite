import type { Metadata } from "next";
import { Section, HeadingBlock, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Safeguarding policy",
  description: "How Mind's Eye Education keeps students safe: DBS checks, online session standards, and how to report a concern.",
};

export default function SafeguardingPage() {
  return (
    <>
      <PageHero heading="Safeguarding policy." subheading="Last updated: January 2025" />

      <Section>
        <div className="max-w-2xl space-y-10">

          <div>
            <HeadingBlock label="Our commitment" heading="Safeguarding is a baseline, not a box to tick." />
            <p className="section-body leading-loose mt-2">
              Mind's Eye Education is committed to the safety and wellbeing of every student we work with.
              This policy applies to all tutors in our network and governs how we operate
              sessions, vet staff, and respond to concerns. It is reviewed annually and
              updated whenever guidance changes.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Designated safeguarding lead</h2>
            <p className="section-body leading-loose">
              Habiba al-Khatib acts as the designated safeguarding lead (DSL) for Mind's Eye Education.
              Any safeguarding concern, however minor it may seem, should be reported to
              the DSL in the first instance. Contact: <span className="text-navy-700">safeguarding@mindseye.education</span>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Tutor vetting</h2>
            <p className="section-body leading-loose">
              All tutors working with students under the age of 18 are required to hold a
              current enhanced DBS (Disclosure and Barring Service) certificate before their
              first session. We verify certificates directly and retain records. Tutors working
              with international students are subject to an equivalent background check
              appropriate to their country of residence. No tutor is permitted to work with
              a minor until vetting is complete.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Online session standards</h2>
            <p className="section-body leading-loose">
              All sessions are conducted via video call on an approved platform. We recommend
              that parents or guardians are aware that a session is taking place and are
              reachable during it. Sessions are not recorded without the explicit written
              consent of both the parent or guardian and the student. Tutors are instructed
              never to request a private or unmonitored communication channel with a student
              outside of the agreed session platform.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Reporting a concern</h2>
            <p className="section-body leading-loose">
              If you have a safeguarding concern about a student, a tutor, or any
              aspect of how sessions are being conducted, please contact our DSL immediately.
              at <span className="text-navy-700">safeguarding@mindseye.education</span>. All concerns are
              taken seriously, treated confidentially, and escalated to statutory authorities
              where required. If you believe a child is in immediate danger, contact the
              police or children's services directly.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Tutor responsibilities</h2>
            <p className="section-body leading-loose">
              Every tutor in our network is required to read and agree to this safeguarding
              policy before working with any student. Tutors must report any concern about a
              student's welfare to the DSL without delay. They must not investigate concerns
              themselves, make promises of confidentiality to students, or take unilateral
              action without DSL guidance, except where a child is at immediate risk.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-navy-900 text-2xl mb-3">Policy review</h2>
            <p className="section-body leading-loose">
              This policy is reviewed annually by the designated safeguarding lead. Tutors
              are notified of any material changes. The most current version is always
              available on this page.
            </p>
          </div>

        </div>
      </Section>
    </>
  );
}
