// app/page.tsx
'use client';

import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { useCallback, useState } from 'react';
import { Card } from '../components/ui/Card';
import { AirdropCard } from '../components/wallet/AirdropCard';
import { NotificationModal } from '../components/wallet/NotificationModal';
import { SendSolCard } from '../components/wallet/SendSolCard';
import { SignMessageCard } from '../components/wallet/SignMessageCard';
import { WalletInfo } from '../components/wallet/WalletInfo';
import { useAirdrop } from '../hooks/useAirdrop';
import { useBalance } from '../hooks/useBalance';
import { useSendSol } from '../hooks/useSendSol';
import { useSignMessage } from '../hooks/useSignMessage';

export default function Home() {
  const { publicKey, signTransaction, signMessage } = useWallet();
  const { connection } = useConnection();
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  const [airdropLoading, setAirdropLoading] = useState(false);
  const [sendLoading, setSendLoading] = useState(false);
  const [signLoading, setSignLoading] = useState(false);

  const balance = useBalance(connection, publicKey);
  const airdrop = useAirdrop(connection, publicKey, msg => setModalMessage(msg));
  const sendSol = useSendSol(connection, publicKey, signTransaction, msg => setModalMessage(msg));
  const signMsg = useSignMessage(publicKey, signMessage, (_success, message) => setModalMessage(message));

  const handleAirdrop = useCallback(async () => {
    setAirdropLoading(true);
    try {
      await airdrop();
    } finally {
      setAirdropLoading(false);
    }
  }, [airdrop]);

  const handleSendSol = useCallback(async (to: string, amount: string) => {
    setSendLoading(true);
    try {
      await sendSol(to, amount);
    } finally {
      setSendLoading(false);
    }
  }, [sendSol]);

  const handleSignMsg = useCallback(async () => {
    setSignLoading(true);
    try {
      await signMsg();
    } finally {
      setSignLoading(false);
    }
  }, [signMsg]);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Phantom Devnet Demo</h1>
      <WalletMultiButton />
      {publicKey && (
        <div className="mt-8 max-w-md w-full space-y-6">
          <Card title="Wallet Info">
            <WalletInfo
              publicKey={publicKey.toBase58()}
              balance={balance !== null ? `${balance.toFixed(4)} SOL` : '...'}
              onCopy={() => navigator.clipboard.writeText(publicKey.toBase58())}
            />
          </Card>
          <Card title="Airdrop SOL">
            <AirdropCard onAirdrop={handleAirdrop} loading={airdropLoading} />
          </Card>
          <Card title="Send SOL">
            <SendSolCard
              to={to}
              amount={amount}
              onToChange={setTo}
              onAmountChange={setAmount}
              onSend={() => handleSendSol(to, amount)}
              sending={sendLoading}
            />
          </Card>
          <Card title="Sign Message">
            <SignMessageCard onSign={handleSignMsg} loading={signLoading} />
          </Card>
        </div>
      )}
      <NotificationModal
        open={!!modalMessage}
        onClose={() => setModalMessage(null)}
        message={modalMessage || ''}
      />
    </main>
  );
}
