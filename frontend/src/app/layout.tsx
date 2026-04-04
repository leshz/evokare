/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next';
import { Hind, Josefin_Sans, Spectral, Montserrat } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ShoppingCart } from '@/components/products/ShoppingCart';
import { getGeneralService } from '@/services/general';
import { generateMetadataFromSEO } from '../services/seo';

import './globals.css';

export const dynamic = 'force-dynamic';

const primary = Montserrat({
  variable: '--font-primary',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const secondary = Spectral({
  variable: '--font-secondary',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export async function generateMetadata(): Promise<Metadata> {
  const {
    data: { seo },
  } = await getGeneralService();
  return generateMetadataFromSEO(seo);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    data: { pie_de_pagina: footer, navegacion: topbar, menu },
  } = await getGeneralService();

  return (
    <html lang="es">
      <body className={`${primary.variable} ${secondary.variable} antialiased`} suppressHydrationWarning>
        <Header content={topbar} menu={menu} />
        {children}
        <Footer footer={footer} />
        <ShoppingCart />
      </body>
    </html>
  );
}
