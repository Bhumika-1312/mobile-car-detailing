"use client";

import ThemeRegistry from "@/lib/ThemeRegistry";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navbar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}