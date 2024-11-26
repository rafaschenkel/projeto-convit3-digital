import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fonte = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Convit3 Digital",
  description: "Crie seu convite aqui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={fonte.className}>{children}</body>
    </html>
  );
}
