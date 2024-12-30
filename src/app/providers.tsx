import { type ReactNode } from "react";
import { PaginationProvider } from "src/components/pagination/pagination.context";
import { ModalProvider } from "src/components/ui/modal/modal.context";
import { AuthProvider } from "src/features/auth/auth.context";
import { FuelsProvider } from "src/features/fuels/filters/fuels.context";
import { GasStationsProvider } from "src/features/gas-stations/filters/gas-stations.context";

const providers = [
  { component: AuthProvider },
  { component: FuelsProvider },
  { component: GasStationsProvider },
  { component: PaginationProvider },
  { component: ModalProvider },
];

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {providers.reduceRight((acc, { component: Component }) => {
        return <Component>{acc}</Component>;
      }, children)}
    </>
  );
};

export default Providers;
