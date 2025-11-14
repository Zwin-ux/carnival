import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource/righteous";
import "./globals.css";
import { WalletProvider } from "@/providers/WalletProvider";
import { Header } from "@/components/Header";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "EchoID Carnival - Rent-A-Brain",
  description: "Book expert sessions in the EchoID Carnival. Get advice, audits, and coaching from Web3 professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="scanlines">
        <WalletProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            {children}
          </div>
          <Toaster position="bottom-right" richColors />
        </WalletProvider>
      </body>
    </html>
  );
}
