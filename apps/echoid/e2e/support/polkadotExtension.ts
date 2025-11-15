import type { Page } from "@playwright/test";

type MockedAccount = {
  address: string;
  meta: {
    name: string;
    source: string;
  };
  type?: string;
};

export const DEFAULT_WALLET_ACCOUNT: MockedAccount = {
  address: "5FPlaywrightAccount111111111111111111111111111111111",
  meta: {
    name: "Playwright Account",
    source: "polkadot-js",
  },
  type: "sr25519",
};

export async function mockPolkadotExtension(
  page: Page,
  accounts: MockedAccount[] = [DEFAULT_WALLET_ACCOUNT]
) {
  await page.addInitScript(({ accounts }) => {
    const win = window as typeof window & {
      injectedWeb3?: Record<string, any>;
    };

    const accountPayload = accounts.map((account) => ({
      address: account.address,
      meta: account.meta,
      type: account.type ?? "sr25519",
    }));

    const buildAccountsApi = () => ({
      get: async () => accountPayload,
      subscribe: (cb: (list: typeof accountPayload) => void) => {
        cb(accountPayload);
        return () => {};
      },
    });

    win.injectedWeb3 = win.injectedWeb3 || {};

    win.injectedWeb3["polkadot-js"] = {
      version: "playwright-mock",
      accounts: buildAccountsApi(),
      enable: async () => ({
        name: "polkadot-js",
        version: "playwright-mock",
        accounts: buildAccountsApi(),
      }),
    };
  }, { accounts });
}
