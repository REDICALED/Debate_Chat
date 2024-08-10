import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoilRootWrapper from "@/components/Recoil/RecoilWrapper";
import { Noto_Sans_KR } from 'next/font/google';
const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "rediMaid",
  description: "redicaled rockbottom",
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
