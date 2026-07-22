import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";
import { PageHero, Section, CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blog | Mind’s Eye Education",
  description: "Thinking on tutoring, exams and getting the most out of education, from the Mind’s Eye team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        heading="From the team."
        subheading="Thinking on tutoring, exams and getting the most out of education."
      />

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border border-cream-300 rounded p-6 hover:border-gold-500 transition-colors"
            >
              <p className="text-gold-500 text-xs tracking-widest uppercase mb-3">
                {post.category}
              </p>
              <h2 className="font-serif text-navy-900 text-lg leading-snug mb-3 group-hover:text-gold-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-navy-500 text-sm leading-relaxed mb-5">
                {post.excerpt}
              </p>
              <p className="text-xs text-navy-400">{post.date}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        heading="Ready to find the right tutor?"
        body="Book a free fifteen-minute call and we will match your child with the right person."
      />
    </>
  );
}
