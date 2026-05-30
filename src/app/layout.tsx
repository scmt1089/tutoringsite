import type { Metadata } from "next";
import Script from "next/script";
import "../styles/globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Mind's Eye Education | Oxford-founded tutoring and admissions",
    template: "%s | Mind's Eye Education",
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
        <Script
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
