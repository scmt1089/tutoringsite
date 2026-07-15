import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import { Section, CtaBand } from "@/components/ui";
import OneToOneTutoring from "@/content/posts/one-to-one-tutoring";

const postContent: Record<string, React.ComponentType> = {
  "one-to-one-tutoring": OneToOneTutoring,
};

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Mind's Eye Education`,
    description: post.excerpt,
  };
}

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const Content = postContent[params.slug];
  if (!Content) notFound();

  return (
    <>
      <div className="bg-navy-850 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-gold-500 text-xs tracking-widest uppercase mb-3">
              {post.category}
            </p>
            <h1 className="font-serif text-h1 text-white leading-snug mb-5">
              {post.title}
            </h1>
            <p className="text-white/50 text-sm">
              {post.author} &middot; {post.date}
            </p>
          </div>
        </div>
      </div>

      <Section>
        <div className="max-w-2xl
          [&_p]:text-navy-700 [&_p]:leading-loose [&_p]:mb-6
          [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-navy-900 [&_h2]:mt-10 [&_h2]:mb-4
          [&_h3]:font-serif [&_h3]:text-lg [&_h3]:text-navy-900 [&_h3]:mt-8 [&_h3]:mb-3
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6
          [&_li]:text-navy-700 [&_li]:leading-loose [&_li]:mb-1
          [&_blockquote]:border-l-4 [&_blockquote]:border-gold-500 [&_blockquote]:pl-6 [&_blockquote]:my-8 [&_blockquote]:text-navy-500 [&_blockquote]:italic [&_blockquote]:leading-loose
        ">
          <Content />
        </div>
      </Section>

      <CtaBand
        heading="Ready to find the right tutor?"
        body="Book a free fifteen-minute call and we will match your child with the right person."
      />
    </>
  );
}
