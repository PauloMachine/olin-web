import type { TSelectOption } from "src/components/ui/select/select.types";

export type TGasStationsContext = {
  gasStation: TSelectOption;
  setGasStation: (gasStation: TSelectOption) => void;
};
