export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
};

export const posts: Post[] = [
  {
    slug: "aqa-biology-past-papers",
    title: "We Analysed Ten Years of AQA A-level Biology Papers. Here Is What Keeps Coming Up.",
    date: "6 July 2026",
    author: "Mind's Eye Education",
    excerpt: "Most revision advice for A-level Biology is generic. We worked through ten years of AQA past papers to find where the probability is actually concentrated.",
    category: "Exam technique",
    metaTitle: "AQA Biology Past Paper Patterns | Mind's Eye Education",
    metaDescription: "We worked through ten years of AQA A-level Biology past papers to map the topic clusters that keep appearing. Here is what we found, and how to weight your revision.",
  },
  {
    slug: "mark-scheme-exam-technique",
    title: "The Mark Scheme Is the Exam. Here Is What We Mean by That.",
    date: "9 July 2026",
    author: "Mind's Eye Education",
    excerpt: "Most students use the mark scheme as a checking tool. It is the exam. Understanding what it actually contains is one of the most transferable improvements in exam technique a student can make.",
    category: "Exam technique",
    metaTitle: "How to Use Mark Schemes: A-level Exam Technique | Mind's Eye Education",
    metaDescription: "Most students treat the mark scheme as an afterthought. Understanding what it actually is, and how examiners use it, is the most transferable A-level exam technique there is.",
  },
  {
    slug: "ucas-personal-statement",
    title: "What a Strong UCAS Personal Statement Actually Looks Like",
    date: "11 July 2026",
    author: "Mind's Eye Education",
    excerpt: "The UCAS personal statement changed in September 2025. Most advice written before this cycle will send students in the wrong direction on structure.",
    category: "University admissions",
    metaTitle: "How to Write a UCAS Personal Statement: The New Three-Question Format | Mind's Eye Education",
    metaDescription: "UCAS personal statements are now three structured questions, not one essay. Here is what admissions tutors are looking for in each answer, and how to write something that lands.",
  },
  {
    slug: "lnat-preparation",
    title: "LNAT Preparation: What the Test Is Actually Assessing and How to Train for It",
    date: "13 July 2026",
    author: "Mind's Eye Education",
    excerpt: "Most students preparing for LNAT are working on the wrong thing. Here is what the test is actually assessing, and what good preparation for each section looks like.",
    category: "University admissions",
    metaTitle: "How to Prepare for LNAT: What the Test Is Really Assessing | Mind's Eye Education",
    metaDescription: "Most students approach LNAT the wrong way. Here is what the test is actually assessing, what good preparation looks like for each section, and why starting early matters.",
  },
  {
    slug: "music-theory-grade-5-topics",
    title: "Music Theory Grade 5: The Topics Students Consistently Get Wrong",
    date: "16 July 2026",
    author: "Mind's Eye Education",
    excerpt: "ABRSM Grade 5 Music Theory has a pass rate of around 60 to 65 per cent. Here are the five topics where marks are most commonly lost, and what to do about them.",
    category: "Music",
    metaTitle: "ABRSM Grade 5 Music Theory Tips: Five Topics That Catch Students Out | Mind's Eye Education",
    metaDescription: "ABRSM Grade 5 Music Theory has a higher failure rate than most people realise. Here are the five areas where marks are most commonly lost, and what good preparation looks like.",
  },
  {
    slug: "neurodivergent-tutoring",
    title: "How Neurodivergence Influences Learning Style, and What Good Tutoring Does About It",
    date: "17 July 2026",
    author: "Mind's Eye Education",
    excerpt: "Neurodivergent students are not underperforming students. They are differently wired students in a system not built for them. Here is what good tutoring does about it.",
    category: "Learning",
    metaTitle: "Tutoring for Neurodivergent Students: ADHD, Dyslexia and What Helps | Mind's Eye Education",
    metaDescription: "Neurodivergent students are not underperforming students. They are differently wired students in a system not built for them. Here is what good tutoring for neurodivergent students actually does differently.",
  },
];
