import type { Metadata } from "next";
import { AR_One_Sans } from "next/font/google";
import { ThemeProvider } from 'next-themes'

import PrelineScript from "@/app/components/PrelineScript";
import PageWrapper from "@/app/components/PageWrapper/PageWrapper";
import "./globals.css";

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
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <PageWrapper>
            {children}
          </PageWrapper>
        </ThemeProvider>
      </body>
      <PrelineScript />
    </html>
  );
}
