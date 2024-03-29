import clsx from 'clsx';
import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";
import Header from "./components/Header";


export const metadata: Metadata = {
  title: "var株式会社",
  description: "var株式会社",
};

const inter = Inter({
  subsets: ["latin"]
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp" className={clsx(inter.className, notoSansJP.className, 'font-sans')}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
