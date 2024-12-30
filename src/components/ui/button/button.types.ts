import type { ReactNode } from "react";
import type { CSSProperties } from "styled-components";

export type TButton = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "failed" | "transparent";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  style?: CSSProperties;
};
