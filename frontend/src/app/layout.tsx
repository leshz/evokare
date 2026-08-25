import type { Metadata } from 'next';
import { Spectral, Montserrat } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ShoppingCart } from '@/components/products/ShoppingCart';
import { getGeneralService } from '@/services/general';
import { GENERAL_FALLBACK } from '@/services/general/fallback';
import { generateMetadataFromSEO } from '../services/seo';

import './globals.css';

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
  try {
    const {
      data: { seo },
    } = await getGeneralService();
    return generateMetadataFromSEO(seo);
  } catch (error) {
    console.warn('[layout] Strapi no respondió, usando metadata por defecto:', error);
    return generateMetadataFromSEO(null);
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let general = GENERAL_FALLBACK;
  try {
    const { data } = await getGeneralService();
    general = data;
  } catch (error) {
    console.warn('[layout] Strapi no respondió, renderizando layout degradado:', error);
  }

  const { pie_de_pagina: footer, navegacion: topbar, menu } = general;

  return (
    <html lang="es">
      <body className={`${primary.variable} ${secondary.variable} antialiased`} suppressHydrationWarning>
        <Header content={topbar} menu={menu} />
        {children}
        <div className="bg-surface-soft">
          <Footer footer={footer} />
        </div>
        <ShoppingCart />
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
}
