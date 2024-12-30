import { createContext, useContext, useState } from "react";
import type {
  TPaginationContext,
  TPaginationProvider,
} from "./pagination.types";
import type { TSelectOption } from "../ui/select/select.types";

const PaginationContext = createContext<TPaginationContext | undefined>(
  undefined
);

export const PaginationProvider = ({ children }: TPaginationProvider) => {
  const [pageSize, setPageSize] = useState<TSelectOption>({
    _id: "",
    name: "",
  });

  return (
    <PaginationContext.Provider value={{ pageSize, setPageSize }}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePaginationContext = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error(
      "usePaginationContext must be used within a PaginationProvider"
    );
  }
  return context;
};
