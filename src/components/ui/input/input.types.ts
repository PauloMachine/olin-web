import type { CSSProperties } from "react";
import * as MdIcons from "react-icons/md";

export type TInput = {
  label?: string;
  value?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  placeholder?: string;
  debounceDelay?: number;
  style?: CSSProperties;
  icon?: keyof typeof MdIcons;
};
