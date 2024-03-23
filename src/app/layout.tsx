import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const SourceSansFont = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sobat Bangun",
  description: "DOT Slicer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={SourceSansFont.className}>{children}</body>
    </html>
  );
}
