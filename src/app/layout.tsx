import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from './components/NavBar';
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev E-commerce",
  description: "Produtos de tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <NavBar/>
      <main className="bg-zinc-900 h-screen-full p-16">
        {children}
      </main>
        
      </body>
    </html>
    </ClerkProvider>
    
  );
}
