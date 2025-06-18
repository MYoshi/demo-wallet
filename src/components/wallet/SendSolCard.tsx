import React from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

type SendSolCardProps = {
  to: string;
  amount: string;
  onToChange: (v: string) => void;
  onAmountChange: (v: string) => void;
  onSend: () => void;
  sending: boolean;
};

export const SendSolCard: React.FC<SendSolCardProps> = ({ to, amount, onToChange, onAmountChange, onSend, sending }) => (
  <>
    <p className="text-gray-600 text-sm mb-2">
      <strong>Send SOL</strong>
      <br />
      Transfer SOL tokens from your wallet to another address on the devnet. Enter the recipient's address and the amount of SOL you want to send. This is a real transaction on the devnet and will deduct SOL (plus a small fee) from your balance.
    </p>
    <Input
      label="Recipient address"
      placeholder="Recipient address"
      value={to}
      onChange={e => onToChange(e.target.value)}
    />
    <Input
      label="Amount in SOL"
      placeholder="Amount in SOL"
      value={amount}
      onChange={e => onAmountChange(e.target.value)}
      type="number"
      min="0"
    />
    <Button type="button" onClick={onSend} className="w-full" disabled={sending} aria-label="Send SOL to recipient address">
      {sending ? 'Sending...' : 'Send'}
    </Button>
  </>
);
