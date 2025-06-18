import React from 'react';
import { Button } from '../ui/Button';

type SignMessageCardProps = {
  onSign: () => void;
  loading?: boolean;
};

export const SignMessageCard: React.FC<SignMessageCardProps> = ({ onSign, loading }) => (
  <>
    <p className="text-gray-600 text-sm mb-2">
      <strong>What is Sign Message?</strong>
      <br />
      "Sign Message" lets you cryptographically sign a message with your wallet's private key. This proves ownership of the wallet and is often used for authentication or verifying actions off-chain. The signature can be verified by others using your public key, but it does not reveal your private key or spend any SOL.
    </p>
    <Button type="button" onClick={onSign} className="w-full" disabled={loading} aria-label="Sign a message with your wallet">
      {loading ? 'Signing...' : 'Sign Message'}
    </Button>
  </>
);
