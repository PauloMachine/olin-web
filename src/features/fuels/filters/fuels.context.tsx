import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { TFuelsContext } from "./fuels.types";
import type { TSelectOption } from "src/components/ui/select/select.types";

const FuelsContext = createContext<TFuelsContext | undefined>(undefined);

export const FuelsProvider = ({ children }: { children: ReactNode }) => {
  const [fuel, setFuel] = useState<TSelectOption>({
    _id: "",
    name: "",
  });

  return (
    <FuelsContext.Provider value={{ fuel, setFuel }}>
      {children}
    </FuelsContext.Provider>
  );
};

export const useFuelsContext = () => {
  const context = useContext(FuelsContext);
  if (!context) {
    throw new Error("useFuelContext must be used within a FuelProvider");
  }
  return context;
};
