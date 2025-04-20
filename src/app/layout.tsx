import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "GymOn - Premium Fitness Center",
   description:
      "Transform your body and life with expert trainers and state-of-the-art facilities",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='en'>
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
         >
            <Header />
            <main className='flex-grow'>{children}</main>
            <Footer />
         </body>
      </html>
   );
}
