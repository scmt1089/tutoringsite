# [name] — Tutoring & Educational Consultancy

Website for [name], an Oxford-founded educational consultancy and tutoring practice.

Built with Next.js 14, Tailwind CSS, and TypeScript. Backend via Supabase.

## Getting started

**Install dependencies:**
```bash
npm install
```

**Set up environment variables:**

Create a `.env.local` file at the project root:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

**Run the dev server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Database:** Supabase (PostgreSQL)
- **Hosting:** Vercel

## Project structure

```
src/
  app/          # Pages (Next.js App Router)
  components/   # Shared UI components and layout
  data/         # Static data (subjects, tutors — to be migrated to Supabase)
  styles/       # Global CSS
public/         # Static assets (images)
```

## Deployment

Deployed via Vercel. Pushes to `main` deploy automatically. Add the Supabase environment variables under **Vercel → Project → Settings → Environment Variables**.

## Database

Supabase tables: `tutors`, `reviews`. SQL for both tables is in the project documentation. Row-level security is enabled — public read, authenticated write.
# tutoringsite
