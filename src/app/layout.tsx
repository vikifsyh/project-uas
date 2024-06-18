"use client";
import "./globals.css";
import { usePathname } from "next/navigation";
import { myFontAlliance } from "./fonts";
import Navbar from "./components/layouts/Navbar/Navbar";
import { SessionProvider } from "next-auth/react";

const disableNavbar = ["/login", "/register", "/dashboard"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <title>UMP Culinary - Platform UMKM Lokal</title>
        <meta name="description" content="UMP Culinary - Platform UMKM Lokal" />
        <link rel="icon" href="/img/ump-culinary.png" />
      </head>
      <body className={`bg-baseWhite ${myFontAlliance.className}`}>
        <SessionProvider>
          {!disableNavbar.includes(pathname) && <Navbar />}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
