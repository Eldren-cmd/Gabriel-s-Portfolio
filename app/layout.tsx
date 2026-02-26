import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const heading = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gabriel Adegboyega | Full Stack Developer",
  description:
    "Bold, conversion-focused portfolio for Gabriel Adegboyega: full stack developer building real products for web, clients, and teams.",
  metadataBase: new URL("https://gabriel-portfolio.vercel.app"),
  openGraph: {
    title: "Gabriel Adegboyega | Full Stack Developer",
    description:
      "Portfolio featuring projects, skills, and contact details for freelance and full-time opportunities.",
    url: "https://gabriel-portfolio.vercel.app",
    siteName: "Gabriel Adegboyega Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Adegboyega | Full Stack Developer",
    description:
      "I build practical web products with modern frontend and backend stacks.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
