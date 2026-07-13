import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haokun Liu — USTC · DDL Lab",
  description:
    "Haokun Liu is an M.S. student at USTC and a member of Data Darkness Lab, interested in post-training, Graph4LLM, and efficient AI.",
  metadataBase: new URL("https://ability66.github.io"),
  openGraph: {
    title: "Haokun Liu — USTC · DDL Lab",
    description: "Post-training, Graph4LLM, and efficient learning and inference.",
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
