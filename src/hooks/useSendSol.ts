import type { Connection } from '@solana/web3.js';
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import { useCallback } from 'react';

export function useSendSol(
  connection: Connection,
  publicKey: PublicKey | null,
  signTransaction: ((tx: Transaction) => Promise<Transaction>) | undefined,
  onResult: (message: string) => void,
) {
  return useCallback(async (to: string, amount: string) => {
    if (!publicKey || !signTransaction) {
      return;
    }
    try {
      const toPubkey = new PublicKey(to);
      const lamports = Number.parseFloat(amount) * LAMPORTS_PER_SOL;
      const tx = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey,
          lamports,
        }),
      );
      const { blockhash } = await connection.getLatestBlockhash();
      tx.recentBlockhash = blockhash;
      tx.feePayer = publicKey;
      const signed = await signTransaction(tx);
      const sig = await connection.sendRawTransaction(signed.serialize());
      onResult(`Signature: ${sig}`);
    } catch (e: any) {
      let msg = 'Transaction failed.';
      if (e.getLogs) {
        const logs = await e.getLogs();
        msg += `\n${logs ? logs.join('\n') : 'No logs available.'}`;
      } else if (e?.message) {
        msg += `\n${e.message}`;
      }
      onResult(msg);
    }
  }, [connection, publicKey, signTransaction, onResult]);
}
