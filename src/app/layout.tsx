import type { Metadata } from "next";
import Header from "@/components/layout/header/header";
import "../app/styles/App.scss";
import { ReactNode } from "react";
import Footer from "@/components/layout/footer/footer";

export const metadata: Metadata = {
  title: "Positivus",
  description: "Pet project",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
