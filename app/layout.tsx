import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Providers from "@/app/providers";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guilherme M. Toso",
  description: "Software | AI Engineer",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Guilherme M. Toso",
    description: "Software | AI Engineer",
    url: "https://guilhermetoso.dev",
    siteName: "guihermetoso.dev",
    images: [
      {
        url: "/guilherme-toso.png",
        width: 600,
        height: 666,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-y-scroll`}>
        <Providers>{children}</Providers>
        <GoogleAnalytics gaId="G-8C6EFPM7L8" />
      </body>
    </html>
  );
}
