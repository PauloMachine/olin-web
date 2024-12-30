import type { CSSProperties, ReactNode } from "react";

export type TTypography = {
  children: ReactNode;
  color?: string;
  size?: string;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  style?: CSSProperties;
};
