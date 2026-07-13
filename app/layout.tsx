import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haokun Liu — AI Research & Systems",
  description:
    "Haokun Liu is an M.S. student at USTC working on foundation models, efficient inference, and AI systems.",
  metadataBase: new URL("https://ability66.github.io"),
  openGraph: {
    title: "Haokun Liu — AI Research & Systems",
    description: "Foundation models, efficient inference, and scalable AI systems.",
    url: "https://ability66.github.io",
    siteName: "Haokun Liu",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
