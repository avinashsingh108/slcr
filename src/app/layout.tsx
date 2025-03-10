import type { Metadata } from "next";
import { Outfit } from "next/font/google"; 
import "./globals.css";
import Header from "./components/Header";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"], 
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "SLCR",
  description: "Smart Laboratory on Clean River",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
