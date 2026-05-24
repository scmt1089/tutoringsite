export type Tutor = {
  id: string;
  name: string;
  subjects: string[];
  levels: string[];
  university: string;
  degree: string;
  bio: string;
  featured: boolean;
};

export const tutors: Tutor[] = [
  {
    id: "tutor-1",
    name: "[Tutor name]",
    subjects: ["Maths"],
    levels: ["GCSE", "A-level"],
    university: "Oxford",
    degree: "BA Mathematics",
    bio: "Oxford Mathematics graduate with five years tutoring experience. Particular strength with students who find the jump to A-level challenging.",
    featured: true,
  },
  {
    id: "tutor-2",
    name: "[Tutor name]",
    subjects: ["Biology", "Chemistry"],
    levels: ["GCSE", "A-level"],
    university: "Imperial College London",
    degree: "BSc Biochemistry",
    bio: "Imperial College graduate, currently completing a PhD in biochemistry. Works with GCSE and A-level students across both sciences.",
    featured: true,
  },
  {
    id: "tutor-3",
    name: "[Tutor name]",
    subjects: ["English"],
    levels: ["GCSE", "11-plus", "13-plus"],
    university: "UCL",
    degree: "BA English Literature",
    bio: "English Literature graduate, UCL. Experienced with entrance exam preparation and close-reading skills at GCSE and A-level.",
    featured: true,
  },
  {
    id: "tutor-4",
    name: "[Tutor name]",
    subjects: ["Law"],
    levels: ["A-level", "University", "LNAT"],
    university: "Oxford",
    degree: "BA Law (First Class)",
    bio: "Oxford Law graduate with first-class degree. Specialist in LNAT preparation and law school admissions alongside A-level Law teaching.",
    featured: true,
  },
  {
    id: "tutor-5",
    name: "[Tutor name]",
    subjects: ["Music"],
    levels: ["GCSE", "A-level", "Music Theory"],
    university: "Royal College of Music",
    degree: "BMus",
    bio: "Royal College of Music graduate. Teaches music theory from Grade 1 to diploma level and supports GCSE and A-level students across all exam boards.",
    featured: false,
  },
  {
    id: "tutor-6",
    name: "[Tutor name]",
    subjects: ["Admissions"],
    levels: ["Personal Statements", "Oxbridge"],
    university: "Oxford",
    degree: "BA PPE",
    bio: "Oxford PPE graduate who now specialises exclusively in university admissions. Has supported over 40 successful Oxbridge applications.",
    featured: false,
  },
];
