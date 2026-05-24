import type { Metadata } from "next";
import "../styles/globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "[name] | Oxford-founded tutoring and admissions",
    template: "%s | [name]",
  },
  description:
    "A boutique tutoring and admissions practice founded by Oxford graduates. Serving students across the UK and internationally, from GCSE to university entry.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
