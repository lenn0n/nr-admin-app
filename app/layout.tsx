import type { Metadata } from "next";
import { AR_One_Sans } from "next/font/google";
import { ThemeProvider } from 'next-themes'

import PrelineScript from "@components/PrelineScript";
import PageWrapper from "@components/PageWrapper/PageWrapper";
import StoreProvider from "@store/StoreProvider";

import "./globals.css";

const inter = AR_One_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NR Realty",
  description: "Web Application for NR Realty",
  generator: "Next.js",
  manifest: "/manifest.json",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="root-modal"></div>
        <StoreProvider>
          <ThemeProvider attribute="class">
            <PageWrapper>
              {children}
            </PageWrapper>
          </ThemeProvider>
        </StoreProvider>
      </body>
      <PrelineScript />
    </html>
  );
}
