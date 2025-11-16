"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, LogOut, Wallet } from "lucide-react";
import { useWallet } from "@/providers/WalletProvider";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { celebrateTicket } from "@/utils/confetti";
import { TicketStamp } from "@/components/ui/TicketStamp";

export function WalletConnect() {
  const { accounts, selectedAccount, isConnecting, error, connect, disconnect, selectAccount } = useWallet();
  const [showAccountList, setShowAccountList] = useState(false);
  const [isStamping, setIsStamping] = useState(false);

  useEffect(() => {
    if (!selectedAccount) return;
    celebrateTicket();
  }, [selectedAccount]);

  if (isConnecting) {
    return (
      <GlassPanel tone="steel" padding="sm" className="text-sm text-steel-200">
        Connecting wallet...
      </GlassPanel>
    );
  }

  if (error) {
    return (
      <GlassPanel tone="ink" padding="sm" className="space-y-3 text-sm text-steel-200">
        <p className="font-semibold text-neon-pink">Connection failed</p>
        <p className="text-xs text-steel-200/80">{error}</p>
        <button type="button" onClick={connect} className="btn-brass w-full justify-center text-xs tracking-[0.3em]">
          Retry connection
        </button>
      </GlassPanel>
    );
  }

  const handleConnect = async () => {
    try {
      setIsStamping(true);
      await connect();
    } finally {
      window.setTimeout(() => setIsStamping(false), 1000);
    }
  };

  if (!selectedAccount) {
    return (
      <GlassPanel tone="chrome" padding="md" interactive className="space-y-4 text-left">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-steel-200/80 font-data">
          Stamp your midway ticket
        </div>

        <TicketStamp
          ticketId="ECHO-777"
          description="Link your Polkadot wallet to stamp the ticket and unlock the midway."
          stamping={isStamping}
        />

        <button
          type="button"
          onClick={handleConnect}
          className="btn-brass w-full justify-center text-xs font-data uppercase tracking-[0.35em]"
        >
          Connect Wallet
        </button>
      </GlassPanel>
    );
  }

  const activeLabel = selectedAccount.meta.name || "Account";

  return (
    <div className="relative">
      <GlassPanel tone="chrome" padding="md" interactive className="space-y-3 text-left">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[0.6rem] font-data uppercase tracking-[0.4em] text-steel-200/80">Ticket stamped</p>
            <p className="text-sm font-semibold text-chrome-50">{activeLabel}</p>
            <p className="text-xs text-steel-200/70">
              {selectedAccount.address.slice(0, 8)}...{selectedAccount.address.slice(-6)}
            </p>
          </div>
          <motion.button
            type="button"
            onClick={() => setShowAccountList((prev) => !prev)}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 rounded-full border border-chrome-400/40 px-4 py-2 text-xs font-data uppercase tracking-[0.3em] text-chrome-200"
          >
            Switch
            <ChevronDown className={`h-3 w-3 transition-transform ${showAccountList ? "rotate-180" : ""}`} />
          </motion.button>
        </div>
        <button
          type="button"
          className="text-xs text-neon-pink/80 underline underline-offset-4 transition hover:text-neon-pink"
          onClick={() => disconnect()}
        >
          Disconnect
        </button>
      </GlassPanel>

      <AnimatePresence>
        {showAccountList && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute right-0 mt-3 w-72 rounded-2xl border border-chrome-400/30 bg-chrome-950/90 p-3 shadow-[0_35px_70px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          >
            <div className="mb-2 flex items-center gap-2 text-xs font-data uppercase tracking-[0.35em] text-steel-200/70">
              <Wallet className="h-4 w-4 text-brass-300" />
              Accounts
            </div>
            <div className="space-y-2">
              {accounts.map((account) => {
                const isActive = account.address === selectedAccount.address;
                return (
                  <button
                    type="button"
                    key={account.address}
                    onClick={() => {
                      selectAccount(account);
                      setShowAccountList(false);
                    }}
                    className={`w-full rounded-2xl border px-3 py-2 text-left text-sm transition ${
                      isActive
                        ? "border-brass-400/50 bg-brass-500/10 text-brass-100"
                        : "border-transparent bg-chrome-900/30 text-chrome-50 hover:border-brass-300/30"
                    }`}
                  >
                    <p className="font-semibold">{account.meta.name || "Unnamed"}</p>
                    <p className="text-xs font-mono text-steel-200/80">
                      {account.address.slice(0, 10)}...{account.address.slice(-6)}
                    </p>
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              onClick={() => {
                disconnect();
                setShowAccountList(false);
              }}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-neon-pink/40 bg-neon-pink/10 px-4 py-2 text-sm text-neon-pink transition hover:bg-neon-pink/20"
            >
              <LogOut className="h-4 w-4" />
              Disconnect
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
