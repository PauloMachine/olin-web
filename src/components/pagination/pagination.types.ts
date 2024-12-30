import type { ReactNode } from "react";
import type { TSelectOption } from "../ui/select/select.types";

export type TPaginationContext = {
  pageSize: TSelectOption;
  setPageSize: (pageSize: TSelectOption) => void;
};

export type TPaginationProvider = {
  children: ReactNode;
};
