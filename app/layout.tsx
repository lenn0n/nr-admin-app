import type { Metadata } from "next";
import { AR_One_Sans } from "next/font/google";
import "./globals.css";

import PrelineScript from "./components/PrelineScript";
const inter = AR_One_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NR Realty",
  description: "A confidential data of NR Realty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <PrelineScript/>
    </html>
  );
}
