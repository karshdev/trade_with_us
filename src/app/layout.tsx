import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trade With Us",
  description: "Connect with businesses and grow your network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="min-h-screen bg-white text-gray-900 antialiased">
            <div className="max-w-md mx-auto">
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
