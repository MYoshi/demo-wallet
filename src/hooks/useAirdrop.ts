import type { Connection, PublicKey } from '@solana/web3.js';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useCallback } from 'react';

export function useAirdrop(connection: Connection, publicKey: PublicKey | null, onResult: (message: string) => void) {
  return useCallback(async () => {
    if (!publicKey) {
      return;
    }
    try {
      const sig = await connection.requestAirdrop(publicKey, LAMPORTS_PER_SOL);
      onResult(`Airdrop requested! Signature: ${sig}`);
    } catch (e: any) {
      onResult(e?.message || 'Airdrop failed.');
    }
  }, [connection, publicKey, onResult]);
}
