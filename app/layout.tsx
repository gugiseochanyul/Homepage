import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Petals from "@/components/Petals";

export const metadata: Metadata = {
  title: "쏠랭이의 비밀기지",
  description: "김포에 사는 1살 강아지 쏠라(쏠랭이)의 홈페이지",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-round text-lg">
        <Petals />
        {children}
      </body>
    </html>
  );
}
