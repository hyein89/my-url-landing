// Jika kamu letakkan di app/globals.css:
import "./globals.css";

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
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
