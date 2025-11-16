import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Space_Grotesk, Oxanium } from "next/font/google";

export const bodySans = GeistSans;
export const bodyMono = GeistMono;

export const headingDisplay = Oxanium({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const dataGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-data",
  display: "swap",
});
