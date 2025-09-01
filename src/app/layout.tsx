"use client";

import { Geologica, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "./Background";
import Block from "./Block";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const geologica = Geologica({
  variable: "--font-geologica",
  display: "swap",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showBlock, setShowBlock] = useState(false);

  useEffect(() => {
    setShowBlock(pathname !== "/register");
  }, [pathname]);

  return (
    <html lang="ru">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body
        className={`${geologica.variable} ${geistMono.variable} antialiased bg-black h-[100vh]`}
      >
        <Link href="/">
          <div
            className="flex gap-[18px] absolute z-2 top-[55px] left-[52px] w-auto"
            style={{ color: "var(--Typography-secondary, #FFFFFFB2)" }}
          >
            <ArrowLeft className="stroke-current" />
            <p
              className="
              font-[Geologica]        
              font-normal              
              text-[20.45px]           
              leading-[100%]          
              tracking-[-0.05em]      
              align-middle  
              mt-auto
              mb-auto
            "
            >
              Вернуться назад
            </p>
          </div>
        </Link>

        <Background />
        {showBlock && <Block />}
        {children}
      </body>
    </html>
  );
}
