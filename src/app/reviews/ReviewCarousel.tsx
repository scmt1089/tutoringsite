"use client";

import { useState } from "react";

const reviews = [
  {
    quote: "I have only been using this service for a month now and I feel like I have a much clearer understanding of my subjects. Habiba explains topics in a very simplified way and she is very interactive which makes the lessons interesting so I always look forward to them.",
    name: "Karina",
    descriptor: "A-level student",
    rating: 5,
  },
  {
    quote: "My daughter has been having online lessons with Habiba for several months now. My daughter was not sure how to approach vast syllabus of A level Biology, but Habiba made it simpler and less scary to tackle it. Her teaching style is fun and precise and my daughter made a good progress. We added Chemistry as well. It is all up to my daughter to deliver the grades she needs for medical school. We are all grateful for how Habiba supported my daughter academically and emotionally. We highly recommend Habiba!",
    name: "Toko",
    descriptor: "Parent",
    rating: 5,
  },
  {
    quote: "I've been having tuition with Habiba for a few months now for A-level Biology and Chemistry and she's amazing! I remember when my parents and I were having taster sessions with different tutors so I could find the best one for me and after the first lesson with Habiba, I knew it would be her. She explains topics that I used to not understand so clearly and goes through exam questions with you so you can be confident on what the mark scheme would expect. She also makes a document for you that contains all your mistakes after doing exam questions so you can keep looking back to make sure you don't make the same mistake. Besides being an amazing tutor, she is so friendly and kind which makes asking questions not scary at all :) I definitely recommend Habiba!",
    name: "Charlaine",
    descriptor: "A-level student",
    rating: 5,
  },
  {
    quote: "We are so grateful to Habiba for helping our daughter prepare for A level exams. She has gone above and beyond to help our daughter understand Biology and Chemistry in a simpler way. She has a calm, reassuring and systematic approach that made complex topics easy for her to digest. She is very flexible, approachable and friendly. Thank you Habiba for creating such a positive learning environment, my daughter's confidence has definitely increased.",
    name: "Thesara",
    descriptor: "Parent",
    rating: 5,
  },
  {
    quote: "Habiba is incredibly helpful and knowledgeable, both on content and its application in exam questions. She has created a Google Drive with common mistakes tailored specifically to me, which is great to keep referring back to. She knows exactly what the examiners want to see.",
    name: "Aleena",
    descriptor: "A-level student",
    rating: 5,
  },
  {
    quote: "Habiba is a fantastic tutor who has really helped me improve my understanding and confidence in Biology. Her teaching style is very effective, encouraging active recall and building on previous knowledge from lesson to lesson. She is also incredibly kind and approachable, which makes lessons comfortable and enjoyable.",
    name: "Erin",
    descriptor: "GCSE student",
    rating: 5,
  },
  {
    quote: "I have been studying A-level Chemistry and Biology with Habiba for a couple of months and her lessons have been incredibly beneficial for my exam technique. As a neurodivergent student with ADHD and ASD, I have never found a teacher as accommodating to my learning style. Her past paper reviews and feedback have also been particularly useful outside of lessons. I would highly recommend her, especially for neurodivergent students.",
    name: "Alex",
    descriptor: "A-level student",
    rating: 5,
  },
  {
    quote: "The teaching has been amazing. I got a lot of support in understanding how to approach exam questions based on patterns found across mark schemes, which has boosted my confidence and performance in Biology. I would certainly recommend.",
    name: "Mae",
    descriptor: "A-level student",
    rating: 5,
  },
  {
    quote: "I have only been working with Habiba for a few weeks for my LNAT preparation, but she is absolutely incredible at what she does. Her specialised feedback and advice has been invaluable and I cannot recommend her enough.",
    name: "Grace",
    descriptor: "LNAT student",
    rating: 5,
  },
  {
    quote: "Before working with Habiba, my daughter had another biology tutor she found quite intimidating. Habiba has completely changed that. She is kind, patient, highly knowledgeable, and has a wonderful ability to break down challenging concepts clearly. Her focus on exam-style questions has strengthened both my daughter's understanding and her confidence. We would highly recommend her to anyone looking for an exceptional biology tutor.",
    name: "Ewa",
    descriptor: "Parent",
    rating: 5,
  },
  {
    quote: "Habiba has been helping me prepare for the LNAT for just over a month. She really understands the requirements of the examination and her way of explaining how to approach each question boosts confidence significantly. Her lessons are clear and structured, and I would recommend her to anyone looking for a tutor.",
    name: "Vedaant",
    descriptor: "LNAT student",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);

  const review = reviews[index];

  return (
    <div className="max-w-2xl">
      <div className="min-h-64">
        <Stars count={review.rating} />
        <p className="text-navy-700 leading-loose text-base italic mb-6">
          &ldquo;{review.quote}&rdquo;
        </p>
        <p className="font-serif text-navy-900 text-base">{review.name}</p>
        <p className="text-navy-400 text-sm">{review.descriptor}</p>
      </div>

      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={prev}
          aria-label="Previous review"
          className="w-9 h-9 rounded-full border border-cream-300 flex items-center justify-center text-navy-600 hover:border-navy-400 hover:text-navy-900 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Review ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === index ? "bg-navy-900" : "bg-cream-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next review"
          className="w-9 h-9 rounded-full border border-cream-300 flex items-center justify-center text-navy-600 hover:border-navy-400 hover:text-navy-900 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
