import React from 'react';
import { Modal } from '../ui/Modal';

type NotificationModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  message: string;
};

export const NotificationModal: React.FC<NotificationModalProps> = props => <Modal {...props} />;
