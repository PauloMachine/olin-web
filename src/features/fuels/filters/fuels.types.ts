import type { TSelectOption } from "src/components/ui/select/select.types";

export type TFuelsContext = {
  fuel: TSelectOption;
  setFuel: (fuel: TSelectOption) => void;
};
