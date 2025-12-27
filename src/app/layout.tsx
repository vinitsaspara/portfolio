import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio |Vinit Saspara",
  description:
    "Professional portfolio showcasing my work as a full-stack developer",
  keywords: "developer, portfolio, web development, react, nextjs, full-stack",
  authors: [{ name: "Alex Johnson" }],
  openGraph: {
    title: "Portfolio |Vinit Saspara",
    description:
      "Professional portfolio showcasing my work as a full-stack developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
