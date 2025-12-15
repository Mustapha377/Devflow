import type { Metadata } from "next";
import type { ReactNode } from "react";
import localfont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers";

const Inter = localfont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600",
});

const spacegrotesk = localfont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: " 300 400 500 600 700",
});

export const metadata: Metadata = {
  title: "DevFlow ",
  description: "A platform for answering development questions quickly.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${Inter.className} ${spacegrotesk.variable} antialiased`}
      >
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
