import type { Metadata } from 'next';
import { Spectral, Montserrat } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ShoppingCart } from '@/components/products/ShoppingCart';
import { getGeneralService } from '@/services/general';
import { generateMetadataFromSEO, getStructuredData } from '../services/seo';
import { SITE_URL } from '@/lib/site';
import { JsonLd } from '@/components/shared/JsonLd';

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
  const {
    data: { seo },
  } = await getGeneralService();
  return {
    ...generateMetadataFromSEO(seo),
    metadataBase: new URL(SITE_URL),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    data: { pie_de_pagina: footer, navegacion: topbar, menu, seo },
  } = await getGeneralService();

  const structuredData = getStructuredData(seo);

  return (
    <html lang="es">
      <body className={`${primary.variable} ${secondary.variable} antialiased`} suppressHydrationWarning>
        {structuredData && <JsonLd data={structuredData} />}
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
