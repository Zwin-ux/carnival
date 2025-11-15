"use client";

import Link from "next/link";
import { WalletConnect } from "./WalletConnect";
import { CarnivalLights } from "./CarnivalLights";
import { motion } from "framer-motion";
import { marquee } from "@/theme/motion";

export function Header() {
  return (
    <header className="sticky top-0 z-40 overflow-hidden border-b border-chrome-800/40 bg-chrome-950/70 backdrop-blur-2xl">
      <div className="absolute inset-0 bg-gradient-to-b from-steel-900/90 via-chrome-900/65 to-chrome-950/90" />
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 50% 0%, rgba(255, 198, 26, 0.18), transparent 55%)" }} />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brass-400/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1 overflow-hidden">
        <motion.div
          className="h-full w-[200%] bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent"
          variants={marquee}
          initial="initial"
          animate="animate"
        />
      </div>

      <div className="relative z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: -4, scale: 1.05 }}
              className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-chrome-200/40 bg-gradient-to-br from-chrome-200 to-chrome-500 font-carnival text-2xl text-chrome-900 shadow-[0_10px_35px_rgba(0,0,0,0.35)]"
            >
              EC
            </motion.div>
            <div>
              <div className="text-xl font-carnival tracking-wide text-chrome-100 transition-colors group-hover:text-brass-300">
                EchoID Carnival
              </div>
              <div className="text-[0.65rem] font-data uppercase tracking-[0.5em] text-steel-200/70">Rent-a-brain</div>
            </div>
          </Link>

          <nav className="flex items-center gap-6 text-xs font-data uppercase tracking-[0.35em]">
            <Link href="/booths" className="text-steel-200 transition-colors hover:text-brass-200">
              Booths
            </Link>
            <Link href="/dashboard" className="text-steel-200 transition-colors hover:text-brass-200">
              Dashboard
            </Link>
            <WalletConnect />
          </nav>
        </div>

        <div className="border-t border-chrome-800/40 bg-chrome-950/40">
          <CarnivalLights count={30} size="sm" className="justify-center overflow-x-auto pb-1" />
        </div>
      </div>
    </header>
  );
}
