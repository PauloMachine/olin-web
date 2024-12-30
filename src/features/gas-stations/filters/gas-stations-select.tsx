import Select from "src/components/ui/select";
import { formatSelect } from "src/components/ui/select/select.utils";
import { useGetGasStations } from "../gas-stations.hooks";
import { useGasStationsContext } from "./gas-stations.context";
import type { TSelectOption } from "src/components/ui/select/select.types";

const GasStationsSelect = () => {
  const { data: gasStations, isLoading } = useGetGasStations({ status: true });
  const { gasStation, setGasStation } = useGasStationsContext();

  return (
    <Select
      value={gasStation}
      isLoading={isLoading}
      label="posto de combustível"
      options={formatSelect(gasStations)}
      onChange={(options: TSelectOption) => setGasStation(options)}
    />
  );
};

export default GasStationsSelect;
