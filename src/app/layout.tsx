import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoilRootWrapper from "@/components/Recoil/RecoilWrapper";
import { Noto_Sans_KR } from 'next/font/google';
const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Debatato!",
  description: "Debatato! A simple debate Web that allows you to debate with AI.",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={notoSansKr.className}>
      <RecoilRootWrapper>
                	{children}
				</RecoilRootWrapper>
      </body>
    </html>
  );
}
