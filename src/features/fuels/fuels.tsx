import Flex from "src/components/ui/flex";
import FuelsActions from "./fuels-actions";
import Table from "src/components/ui/table";
import Button from "src/components/ui/button";
import type { TFuelStatus } from "./fuels.types";
import { useGetFuels, usePutFuelStatus } from "./fuels.hooks";
import FuelsModal from "./fuels-modal";
import { toast } from "react-toastify";
import { useInvalidateCache } from "src/hooks/invalidate-cache-hook";

const Fuels = () => {
  const { invalidate } = useInvalidateCache("fuels");
  const { mutateAsync: putFuelStatus } = usePutFuelStatus();
  const { data: fuels, refetch, isFetching } = useGetFuels();

  const onStatus = async ({ _id, status }: TFuelStatus) => {
    try {
      await putFuelStatus({ _id, status: !status });
      invalidate();
      refetch();
    } catch (error) {
      toast.error(
        "Erro ao atualizar o status do combustível. Por favor, tente novamente."
      );
    }
  };

  const columns = [
    { header: "nome", accessor: "name" },
    {
      header: "status",
      accessor: "status",
      render: (row: TFuelStatus) => (row.status ? "ativo" : "inativo"),
    },
    {
      header: "ações",
      accessor: "actions",
      render: (row: TFuelStatus) => (
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
      <FuelsModal />
      <FuelsActions />
      <Table data={fuels} columns={[...columns]} isLoading={isFetching} />
    </Flex>
  );
};

export default Fuels;
