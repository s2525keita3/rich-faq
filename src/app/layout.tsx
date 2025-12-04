import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "訪問看護 起業塾 & 経営研究協会 | よくある質問",
  description: "訪問看護ステーション開業・経営のよくある質問。5店舗・年商5億・スタッフ50名の実績をもとに、あなたの不安にすべてお答えします。",
  keywords: ["訪問看護", "起業", "開業", "経営", "ステーション", "FAQ"],
  openGraph: {
    title: "訪問看護 起業塾 & 経営研究協会 | よくある質問",
    description: "訪問看護ステーション開業・経営のよくある質問",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${inter.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-noto-sans-jp), var(--font-inter), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
