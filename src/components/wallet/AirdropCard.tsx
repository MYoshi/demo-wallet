import React from 'react';
import { Button } from '../ui/Button';

type AirdropCardProps = {
  onAirdrop: () => void;
  loading?: boolean;
};

export const AirdropCard: React.FC<AirdropCardProps> = ({ onAirdrop, loading }) => (
  <>
    <p className="text-gray-600 text-sm mb-2">
      <strong>What is an Airdrop?</strong>
      <br />
      On Solana devnet, an airdrop is a way to receive free test SOL tokens from the network faucet. This is useful for developers to test sending, receiving, and interacting with SOL without using real money. You can request an airdrop to your wallet address, and the devnet will send you a small amount of SOL for testing.
    </p>
    <Button type="button" onClick={onAirdrop} className="mb-4 w-full" disabled={loading} aria-label="Request airdrop of 1 SOL">
      {loading ? 'Requesting...' : 'Airdrop 1 SOL'}
    </Button>
  </>
);
