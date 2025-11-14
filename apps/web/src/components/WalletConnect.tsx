"use client";

import { useWallet } from "@/providers/WalletProvider";
import { TicketButton } from "@echoid/ui";
import { useState } from "react";

export function WalletConnect() {
  const { accounts, selectedAccount, isConnecting, error, connect, disconnect, selectAccount } =
    useWallet();
  const [showAccountList, setShowAccountList] = useState(false);

  if (isConnecting) {
    return (
      <div className="px-4 py-2 bg-brass-600/20 text-brass-400 rounded-lg text-sm">
        Connecting...
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-2">
        <div className="px-4 py-2 bg-rust-600/20 text-rust-400 rounded-lg text-sm max-w-xs">
          {error}
        </div>
        <TicketButton onClick={connect} variant="primary">
          Retry
        </TicketButton>
      </div>
    );
  }

  if (!selectedAccount) {
    return (
      <TicketButton onClick={connect} variant="primary">
        Connect Wallet
      </TicketButton>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowAccountList(!showAccountList)}
        className="px-4 py-2 bg-mint-600/20 border-2 border-mint-400/30 hover:border-mint-400 text-mint-300 rounded-lg text-sm font-mono transition-all duration-150"
      >
        {selectedAccount.meta.name || "Account"} •{" "}
        {selectedAccount.address.slice(0, 6)}...{selectedAccount.address.slice(-4)}
      </button>

      {showAccountList && (
        <div className="absolute top-full right-0 mt-2 bg-ink-800 border-2 border-brass-600/30 rounded-lg p-2 min-w-[300px] shadow-xl z-50">
          <div className="text-xs text-candy-200/60 px-2 py-1 mb-2">Your Accounts</div>

          {accounts.map((account) => (
            <button
              key={account.address}
              onClick={() => {
                selectAccount(account);
                setShowAccountList(false);
              }}
              className={`w-full text-left px-3 py-2 rounded transition-colors ${
                account.address === selectedAccount.address
                  ? "bg-brass-600/20 text-brass-400"
                  : "hover:bg-ink-700 text-candy-200"
              }`}
            >
              <div className="text-sm font-bold">{account.meta.name || "Unnamed"}</div>
              <div className="text-xs font-mono text-candy-200/60">
                {account.address.slice(0, 8)}...{account.address.slice(-8)}
              </div>
            </button>
          ))}

          <div className="border-t border-brass-600/30 mt-2 pt-2">
            <button
              onClick={() => {
                disconnect();
                setShowAccountList(false);
              }}
              className="w-full text-left px-3 py-2 rounded hover:bg-rust-600/20 text-rust-400 text-sm"
            >
              Disconnect
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
