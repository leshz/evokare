/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import { Hind, Josefin_Sans, Spectral, Montserrat } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";


const primary = Montserrat({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const secondary = Spectral({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Evokare - Apoyo en Salud Mental y Bienestar",
  description: "Te ayudamos a reconectar con tu verdadero ser a través de apoyo profesional en salud mental y sesiones de terapia personalizadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${primary.variable} ${secondary.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
