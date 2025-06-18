import type { ReactNode } from 'react';
import { WalletConnectionProvider } from '@/components/WalletConnectionProvider';
import './globals.css';

export const metadata = {
  title: 'Phantom Devnet Demo',
  description: 'A simple Solana dApp using Phantom Wallet on Devnet',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WalletConnectionProvider>{children}</WalletConnectionProvider>
      </body>
    </html>
  );
}
