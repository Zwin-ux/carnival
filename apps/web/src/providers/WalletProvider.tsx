"use client";

import { createContext, useCallback, useContext, useEffect, useState, ReactNode, useRef } from "react";
import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { stringToHex } from "@polkadot/util";

// Dynamic imports to defer window access until client-side
let web3Accounts: typeof import("@polkadot/extension-dapp")["web3Accounts"];
let web3Enable: typeof import("@polkadot/extension-dapp")["web3Enable"];
let web3FromSource: typeof import("@polkadot/extension-dapp")["web3FromSource"];

const initPolkadot = async () => {
  if (!web3Accounts) {
    const extensionModule = await import("@polkadot/extension-dapp");
    web3Accounts = extensionModule.web3Accounts;
    web3Enable = extensionModule.web3Enable;
    web3FromSource = extensionModule.web3FromSource;
  }
};

interface WalletContextType {
  accounts: InjectedAccountWithMeta[];
  selectedAccount: InjectedAccountWithMeta | null;
  isConnecting: boolean;
  isAuthenticating: boolean;
  error: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
  selectAccount: (account: InjectedAccountWithMeta) => void;
  ensureAuthenticated: () => Promise<string>;
  authToken: string | null;
  getAuthHeaders: () => Record<string, string>;
  signMessage: (message: string) => Promise<string>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const persistAuthState = (token: string | null, account?: InjectedAccountWithMeta | null) => {
    if (token) {
      localStorage.setItem("auth_token", token);
    } else {
      localStorage.removeItem("auth_token");
    }

    if (account !== undefined) {
      if (account) {
        localStorage.setItem("selected_account", account.address);
      } else {
        localStorage.removeItem("selected_account");
      }
    }
  };

  const signMessageWithAccount = useCallback(async (
    message: string,
    account: InjectedAccountWithMeta
  ): Promise<string> => {
    await initPolkadot();
    const injector = await web3FromSource(account.meta.source);

    if (!injector?.signer?.signRaw) {
      throw new Error("Wallet signer does not support raw signing");
    }

    const signed = await injector.signer.signRaw({
      address: account.address,
      data: stringToHex(message),
      type: "bytes",
    });

    return signed.signature;
  }, []);

  const signMessage = useCallback(async (message: string): Promise<string> => {
    if (!selectedAccount) {
      throw new Error("No wallet connected");
    }

    return signMessageWithAccount(message, selectedAccount);
  }, [selectedAccount, signMessageWithAccount]);

  const authenticate = useCallback(async (account: InjectedAccountWithMeta): Promise<string> => {
    setIsAuthenticating(true);
    try {
      const challengeRes = await fetch(`${apiUrl}/v1/auth/challenge`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ walletAddress: account.address }),
      });

      if (!challengeRes.ok) {
        const data = await challengeRes.json().catch(() => ({}));
        throw new Error(data.error || "Failed to request challenge");
      }

      const { message, nonce } = await challengeRes.json();

      const verifyRes = await fetch(`${apiUrl}/v1/auth/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          walletAddress: account.address,
          nonce,
          signature: await signMessageWithAccount(message, account),
        }),
      });

      if (!verifyRes.ok) {
        const data = await verifyRes.json().catch(() => ({}));
        throw new Error(data.error || "Failed to verify signature");
      }

      const { token } = await verifyRes.json();

      setAuthToken(token);
      persistAuthState(token, account);
      return token;
    } finally {
      setIsAuthenticating(false);
    }
  }, [apiUrl, signMessageWithAccount]);

  const ensureAuthenticated = async (): Promise<string> => {
    if (!selectedAccount) {
      throw new Error("No wallet connected");
    }

    if (authToken) {
      return authToken;
    }

    return authenticate(selectedAccount);
  };

  const connect = useCallback(async () => {
    try {
      setIsConnecting(true);
      setError(null);

      await initPolkadot();

      // Request access to Polkadot extension
      const extensions = await web3Enable("EchoID Carnival");

      if (extensions.length === 0) {
        throw new Error("No Polkadot extension found. Please install Polkadot.js extension.");
      }

      // Get all accounts
      const allAccounts = await web3Accounts();

      if (allAccounts.length === 0) {
        throw new Error("No accounts found. Please create an account in your Polkadot extension.");
      }

      const storedAddress = localStorage.getItem("selected_account");
      const initialAccount =
        allAccounts.find((account) => account.address === storedAddress) ?? allAccounts[0];

      setAccounts(allAccounts);
      setSelectedAccount(initialAccount);
      setAuthToken(null);

      // Store initial selection and clear stale token
      persistAuthState(null, initialAccount);

      // Store in localStorage
      localStorage.setItem("wallet_connected", "true");

      // Authenticate with the first account
      try {
        await authenticate(initialAccount);
      } catch (authError) {
        const message = authError instanceof Error ? authError.message : "Failed to authenticate wallet";
        setError(message);
        console.error("Wallet authentication error:", authError);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to connect wallet";
      setError(message);
      console.error("Wallet connection error:", err);
    } finally {
      setIsConnecting(false);
    }
  }, [authenticate]);

  const disconnect = () => {
    setAccounts([]);
    setSelectedAccount(null);
    localStorage.removeItem("wallet_connected");
    localStorage.removeItem("selected_account");
    localStorage.removeItem("auth_token");
    setAuthToken(null);
  };

  const selectAccount = useCallback((account: InjectedAccountWithMeta) => {
    setSelectedAccount(account);
    setAuthToken(null);
    persistAuthState(null, account);
    authenticate(account).catch((err) => {
      const message = err instanceof Error ? err.message : "Failed to authenticate wallet";
      setError(message);
      console.error("Wallet authentication error:", err);
    });
  }, [authenticate]);

  const connectRef = useRef(connect);
  useEffect(() => {
    connectRef.current = connect;
  }, [connect]);

  // Auto-reconnect on mount
  useEffect(() => {
    const wasConnected = localStorage.getItem("wallet_connected");
    if (wasConnected === "true") {
      void connectRef.current();
    }
  }, []);

  // Restore persisted token
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      setAuthToken(token);
    }
  }, []);

  const getAuthHeaders = (): Record<string, string> => {
    if (!authToken) {
      return {};
    }

    return {
      Authorization: `Bearer ${authToken}`,
    };
  };

  return (
    <WalletContext.Provider
      value={{
        accounts,
        selectedAccount,
        isConnecting,
        isAuthenticating,
        error,
        connect,
        disconnect,
        selectAccount,
        ensureAuthenticated,
        authToken,
        getAuthHeaders,
        signMessage,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
}


