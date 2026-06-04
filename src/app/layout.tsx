import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar  from "../components/NavBar";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
      <html className = "Dark">
        <body>
      
      {children}
      <div className = "relative w-full flex items-center justify-center bg-black">
      <NavBar />
      </div>
       </body>
      </html>
      </>

       
     
  );
}
