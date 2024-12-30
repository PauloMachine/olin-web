import { toast } from "react-toastify";
import Flex from "src/components/ui/flex";
import Table from "src/components/ui/table";
import Button from "src/components/ui/button";
import GasStationsActions from "./gas-stations-actions";
import type { TGasStationStatus } from "./gas-stations.types";
import {
  useGetGasStations,
  usePutGasStationStatus,
} from "./gas-stations.hooks";
import GasStationsModal from "./gas-stations-modal";
import { useInvalidateCache } from "src/hooks/invalidate-cache-hook";

const GasStations = () => {
  const { invalidate } = useInvalidateCache("gasStations");
  const { mutateAsync: putGasStationStatus } = usePutGasStationStatus();
  const { data: gasStations, refetch, isFetching } = useGetGasStations();

  const onStatus = async ({ _id, status }: TGasStationStatus) => {
    try {
      await putGasStationStatus({ _id, status: !status });
      invalidate();
      refetch();
    } catch (error) {
      toast.error(
        "Erro ao atualizar o status do posto. Por favor, tente novamente."
      );
    }
  };

  const columns = [
    { header: "nome", accessor: "name" },
    {
      header: "status",
      accessor: "status",
      render: (row: TGasStationStatus) => (row.status ? "ativo" : "inativo"),
    },
    {
      header: "ações",
      accessor: "actions",
      render: (row: TGasStationStatus) => (
        <Button
          variant={row.status ? "failed" : "success"}
          onClick={() => onStatus(row)}
        >
          {row.status ? "inativar" : "ativar"}
        </Button>
      ),
    },
  ] as const;

  return (
    <Flex gap="50">
      <GasStationsModal />
      <GasStationsActions />
      <Table data={gasStations} columns={[...columns]} isLoading={isFetching} />
    </Flex>
  );
};

export default GasStations;
