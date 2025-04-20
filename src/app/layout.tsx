import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { inter, bebasNeue } from "@/assets/fonts";

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
            className={`${inter.variable} ${bebasNeue.variable} antialiased flex min-h-screen flex-col font-inter`}
         >
            <Header />
            <main className='flex-grow'>{children}</main>
            <Footer />
         </body>
      </html>
   );
}
