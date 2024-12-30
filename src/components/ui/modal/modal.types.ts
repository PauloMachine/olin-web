import type { ReactNode } from "react";

export type TModal = {
  title?: string;
  children: ReactNode;
  isLoading?: boolean;
  onClose?: () => void;
  onSave?: () => void;
};

export type TModalContext = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export type TModalProvider = {
  children: ReactNode;
};
