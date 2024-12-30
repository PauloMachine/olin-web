import Select from "src/components/ui/select";
import { usePaginationContext } from "./pagination.context";
import type { TSelectOption } from "../ui/select/select.types";

const PaginationSelect = () => {
  const { pageSize, setPageSize } = usePaginationContext();
  const pageSizes = [
    {
      _id: "10",
      name: "10",
    },
    {
      _id: "50",
      name: "50",
    },
    {
      _id: "100",
      name: "100",
    },
    {
      _id: "1000",
      name: "1000",
    },
  ];

  return (
    <Select
      value={pageSize}
      options={pageSizes}
      label="quantidade de registros"
      onChange={(options: TSelectOption) => setPageSize(options)}
    />
  );
};

export default PaginationSelect;
