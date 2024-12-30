import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { TGasStationsContext } from "./gas-stations.types";
import type { TSelectOption } from "src/components/ui/select/select.types";

const GasStationsContext = createContext<TGasStationsContext | undefined>(
  undefined
);

export const GasStationsProvider = ({ children }: { children: ReactNode }) => {
  const [gasStation, setGasStation] = useState<TSelectOption>({
    _id: "",
    name: "",
  });

  return (
    <GasStationsContext.Provider value={{ gasStation, setGasStation }}>
      {children}
    </GasStationsContext.Provider>
  );
};

export const useGasStationsContext = () => {
  const context = useContext(GasStationsContext);
  if (!context) {
    throw new Error(
      "useGasStationContext must be used within a GasStationProvider"
    );
  }
  return context;
};
