import type { Connection, PublicKey } from '@solana/web3.js';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useEffect, useState } from 'react';

export function useBalance(connection: Connection, publicKey: PublicKey | null) {
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    if (!publicKey) {
      return;
    }
    let mounted = true;
    connection.getBalance(publicKey).then((lamports) => {
      if (mounted) {
        setBalance(lamports / LAMPORTS_PER_SOL);
      }
    });
    const subId = connection.onAccountChange(publicKey, (info) => {
      if (mounted) {
        setBalance(info.lamports / LAMPORTS_PER_SOL);
      }
    });
    return () => {
      mounted = false;
      connection.removeAccountChangeListener(subId);
    };
  }, [publicKey, connection]);

  return balance;
}
