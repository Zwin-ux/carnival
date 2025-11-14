"use client";

import Link from "next/link";
import { WalletConnect } from "./WalletConnect";
import { CarnivalLights } from "./CarnivalLights";
import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="relative border-b-2 border-brass-600/30 backdrop-blur-sm sticky top-0 z-40 overflow-hidden">
      {/* Carnival striped banner background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: 'repeating-linear-gradient(45deg, #b8860b 0px, #b8860b 20px, #b04b3a 20px, #b04b3a 40px)',
        }}
      />

      {/* Solid overlay for readability */}
      <div className="absolute inset-0 bg-ink-900/90" />

      {/* Tent peak shape decorative element */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gradient-to-b from-brass-500 to-transparent opacity-60" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />

      {/* Main header content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Ticket stub logo */}
            <motion.div
              whileHover={{ rotate: -5, scale: 1.1 }}
              className="w-12 h-12 bg-gradient-to-br from-brass-400 to-brass-600 flex items-center justify-center font-carnival text-2xl text-ink-900 border-2 border-brass-600 shadow-lg"
              style={{
                clipPath: 'polygon(4px 0%, calc(100% - 4px) 0%, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0% calc(100% - 4px), 0% 4px)',
              }}
            >
              EC
            </motion.div>
            <div>
              <div className="text-xl font-carnival text-brass-400 group-hover:text-brass-300 transition-colors tracking-wide">
                EchoID Carnival
              </div>
              <div className="text-xs text-candy-200/60 font-medium tracking-wider">RENT-A-BRAIN</div>
            </div>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/booths"
              className="text-candy-200 hover:text-brass-400 transition-colors font-medium"
            >
              Booths
            </Link>
            <Link
              href="/dashboard"
              className="text-candy-200 hover:text-brass-400 transition-colors font-medium"
            >
              Dashboard
            </Link>
            <WalletConnect />
          </nav>
        </div>

        {/* Carnival lights below navigation */}
        <div className="border-t border-brass-600/20">
          <CarnivalLights count={30} size="sm" className="justify-center overflow-x-auto pb-1" />
        </div>
      </div>
    </header>
  );
}
