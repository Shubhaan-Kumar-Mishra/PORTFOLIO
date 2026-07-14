import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubhaan Kumar Mishra — Backend Engineer",
  description:
    "Backend Engineer & Full-Stack Developer specialising in Java, Node.js, Spring Boot, and scalable cloud systems. Open to internship and full-time opportunities.",
  keywords: [
    "Shubhaan Kumar Mishra",
    "Backend Developer",
    "Java Developer",
    "Node.js Developer",
    "Spring Boot",
    "Full Stack Developer",
    "Software Engineer",
    "B.Tech Computer Science",
  ],
  authors: [{ name: "Shubhaan Kumar Mishra" }],
  creator: "Shubhaan Kumar Mishra",
  metadataBase: new URL("https://skm.dev"),
  openGraph: {
    title: "Shubhaan Kumar Mishra — Backend Engineer",
    description:
      "Backend Engineer building scalable systems with Java, Node.js & cloud tech.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubhaan Kumar Mishra — Backend Engineer",
    description:
      "Backend Engineer building scalable systems with Java, Node.js & cloud tech.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
