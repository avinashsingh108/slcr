import type { Metadata } from "next";
import { Outfit, EB_Garamond } from "next/font/google"; 
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"], 
  variable: "--font-outfit",
});


const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: [ "400", "500", "600", "700", "800"], 
  variable: "--font-garamond",
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
      <body className={`${outfit.variable} ${garamond.variable} antialiased`}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
