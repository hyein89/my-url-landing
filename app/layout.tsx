// app/layout.tsx
import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "800"],
});

export const metadata = {
  title: "QuickShort - Shorten URL",
  description: "Layanan untuk memperpendek tautan secara cepat dan gratis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}

