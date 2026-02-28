import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Debug Challenge - Les 3",
  description: "Fix alle fouten in dit project!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="min-h-screen bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
