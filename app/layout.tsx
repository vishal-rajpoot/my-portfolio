import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vishal Rajput - Senior Full-Stack Engineer",
  description:
    "Portfolio of Vishal Rajput: Senior Full-Stack Engineer with 4.5+ years of experience in React, Next.js, Node.js, AWS, and scalable architecture.",
  keywords: [
    "Full-Stack Engineer",
    "React Developer",
    "Next.js Expert",
    "Node.js",
    "AWS",
    "PostgreSQL",
    "React Native",
    "Scalable Architecture",
    "Microservices",
    "Web Development",
  ],
  authors: [{ name: "Vishal Rajput" }],
  creator: "Vishal Rajput",
  publisher: "Vishal Rajput",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Vishal Rajputportfolio.com",
    siteName: "Vishal Rajput Portfolio",
    title: "Vishal Rajput - Senior Full-Stack Engineer",
    description:
      "Portfolio showcasing 4.5+ years of full-stack development experience with modern technologies and scalable solutions.",
    images: [
      {
        url: "/images/Vishal Rajputportfolioimage.png",
        width: 1200,
        height: 630,
        alt: "Vishal Rajput - Senior Full-Stack Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Rajput - Senior Full-Stack Engineer",
    description:
      "Portfolio showcasing 4.5+ years of full-stack development experience with modern technologies and scalable solutions.",
    creator: "@Vishal Rajputengineer",
    images: ["/images/Vishal Rajputportfolioimage.png"],
  },
  alternates: {
    canonical: "https://Vishal Rajputportfolio.com",
  },
  generator: "vishal-rajput-portfolio-v1.0",
  icons: {
    icon: "/",
    shortcut: "",
    apple: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preload"
          href="/images/Vishal Rajputportfolioimage.png"
          as="image"
          type="image/png"
        />
        <link
          rel="preload"
          href="/images/profile.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/images/background.jpg"
          as="image"
          type="image/jpeg"
        />
        <link rel="dns-prefetch" href="https://medium.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://Vishal Rajputportfolio.com/#person",
                  name: "Vishal Rajput",
                  description:
                    "Senior Full-Stack Engineer with 4.5+ years of experience in React, Next.js, Node.js, AWS, and scalable architecture.",
                  jobTitle: [
                    "Senior Full-Stack Engineer",
                    "React Developer",
                    "Next.js Expert",
                  ],
                  nationality: "India",
                  birthPlace: "Delhi, India",
                  url: "https://Vishal Rajputportfolio.com",
                  image:
                    "https://Vishal Rajputportfolio.com/images/profile.jpg",
                  sameAs: [
                    "https://www.linkedin.com/in/Vishal Rajputengineer/",
                    "https://medium.com/@Vishal Rajputengineer",
                    "https://twitter.com/Vishal Rajputengineer",
                    "https://www.instagram.com/Vishal Rajputengineer/",
                    "https://v0.app/user/Vishal Rajputengineer",
                  ],
                  knowsAbout: [
                    "React",
                    "Next.js",
                    "Node.js",
                    "AWS",
                    "PostgreSQL",
                    "React Native",
                    "Scalable Architecture",
                    "Microservices",
                    "Web Development",
                  ],
                  alumniOf: "XYZ University",
                  hasOccupation: {
                    "@type": "Occupation",
                    name: "Senior Full-Stack Engineer",
                    description:
                      "Specializes in building scalable web applications using modern technologies.",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://Vishal Rajputportfolio.com/#website",
                  url: "https://Vishal Rajputportfolio.com",
                  name: "Vishal Rajput Portfolio",
                  description:
                    "Portfolio professional of Vishal Rajput - Senior Full-Stack Engineer",
                  publisher: {
                    "@id": "https://Vishal Rajputportfolio.com/#person",
                  },
                  inLanguage: ["en-US"],
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://Vishal Rajputportfolio.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
