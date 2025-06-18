import React from 'react';
import { Button } from '../ui/Button';
import { LabelValue } from '../ui/LabelValue';

type WalletInfoProps = {
  publicKey: string;
  balance: string;
  onCopy: () => void;
};

export const WalletInfo: React.FC<WalletInfoProps> = ({ publicKey, balance, onCopy }) => (
  <div className="space-y-2">
    <LabelValue
      label="Wallet"
      value={publicKey}
      action={(
        <Button
          type="button"
          variant="secondary"
          className="ml-2 px-2 py-1 text-xs cursor-pointer"
          onClick={onCopy}
          aria-label="Copy wallet address"
          title="Copy wallet address"
        >
          Copy
        </Button>
      )}
    />
    <LabelValue
      label="Balance"
      value={balance}
    />
  </div>
);
