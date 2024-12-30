import type { CSSProperties, ReactNode } from "react";

export type TFlex = {
  children?: ReactNode;
  onClick?: () => void;
  direction?: "row" | "column";
  align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  gap?: string;
  px?: string;
  py?: string;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  style?: CSSProperties;
};
