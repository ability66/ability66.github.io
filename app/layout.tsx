import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haokun Liu — USTC · DDL Lab",
  description:
    "Haokun Liu is an M.S. student at USTC and a member of Data Darkness Lab, working on Graph Foundation Models, efficient learning, and AI systems.",
  metadataBase: new URL("https://ability66.github.io"),
  openGraph: {
    title: "Haokun Liu — USTC · DDL Lab",
    description: "Graph Foundation Models, efficient learning and inference, and AI systems.",
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
