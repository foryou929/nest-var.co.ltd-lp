import clsx from 'clsx';
import type { Metadata } from "next";

import "./globals.css";

import Footer from "@/app/components/shared/footer";
import Header from "@/app/components/shared/header";
import { notoSansJP } from '@/app/constants/font';

import TRANSLATION from '@/app/constants/translates';

export const metadata: Metadata = {
  title: TRANSLATION.TITLE,
  description: TRANSLATION.DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp" className={clsx(notoSansJP.className, 'font-sans')}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}