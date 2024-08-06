import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoilRootWrapper from "@/components/Recoil/RecoilWrapper";


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
      <body>
      <RecoilRootWrapper>
                	{children}
				</RecoilRootWrapper>
      </body>
    </html>
  );
}
