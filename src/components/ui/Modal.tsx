import React from 'react';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  message: string;
};

export const Modal: React.FC<ModalProps> = ({ open, onClose, title, message }) => {
  if (!open) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative">
        {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
        <div className="mb-4 text-gray-800 whitespace-pre-line break-all">{message}</div>
        <button
          className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors w-full"
          onClick={onClose}
          type="button"
        >
          Close
        </button>
      </div>
    </div>
  );
};
