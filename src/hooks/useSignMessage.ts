import type { PublicKey } from '@solana/web3.js';
import { useCallback } from 'react';

export function useSignMessage(
  publicKey: PublicKey | null,
  signMessage: ((msg: Uint8Array) => Promise<Uint8Array>) | undefined,
  onResult: (success: boolean, message: string) => void,
) {
  return useCallback(async () => {
    if (!publicKey || !signMessage) {
      return;
    }
    try {
      const msg = new TextEncoder().encode('Test message from Phantom demo');
      const sig = await signMessage(msg);
      onResult(true, `Signature: ${Array.from(sig).map(b => b.toString(16).padStart(2, '0')).join('')}`);
    } catch (e: any) {
      onResult(false, e?.message || 'Failed to sign message.');
    }
  }, [publicKey, signMessage, onResult]);
}
