import type { Metadata } from "next";
import "./globals.css";
import { nunitoSansFont } from "@/utils/font";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSansFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
