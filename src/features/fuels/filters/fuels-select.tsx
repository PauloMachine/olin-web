import Select from "src/components/ui/select";
import { useFuelsContext } from "./fuels.context";
import { formatSelect } from "src/components/ui/select/select.utils";
import { useGetFuels } from "../fuels.hooks";
import type { TSelectOption } from "src/components/ui/select/select.types";

const FuelsSelect = () => {
  const { data: fuels, isLoading } = useGetFuels({ status: true });
  const { fuel, setFuel } = useFuelsContext();

  return (
    <Select
      value={fuel}
      isLoading={isLoading}
      label="tipo do combustível"
      options={formatSelect(fuels)}
      onChange={(option: TSelectOption) => setFuel(option)}
    />
  );
};

export default FuelsSelect;
