import { toast } from "react-toastify";
import Flex from "src/components/ui/flex";
import UsersActions from "./users-actions";
import Table from "src/components/ui/table";
import Button from "src/components/ui/button";
import type { TUser, TUserStatus } from "./users.types";
import { useGetUsers, usePutUserStatus } from "./users.hooks";
import UsersModal from "./users-modal";

const Users = () => {
  const { data: users, refetch, isFetching } = useGetUsers();
  const { mutateAsync: putUserStatus, status } = usePutUserStatus();

  const onStatus = async ({ _id, status }: TUserStatus) => {
    try {
      await putUserStatus({ _id, status: !status });
      refetch();
    } catch (error) {
      toast.error(
        "Erro ao atualizar o status do usuário. Por favor, tente novamente."
      );
    }
  };

  const columns = [
    { header: "nome", accessor: "name" },
    { header: "usuário", accessor: "username" },
    { header: "perfil", accessor: "profile.name" },
    {
      header: "status",
      accessor: "status",
      render: (row: TUser) => (row.status ? "ativo" : "inativo"),
    },
    {
      header: "ações",
      accessor: "actions",
      render: (row: TUser) => (
        <Flex direction="row" gap="24">
          <Button
            onClick={() => onStatus(row)}
            isLoading={status === "pending"}
            variant={row.status ? "failed" : "success"}
          >
            {row.status ? "inativar" : "ativar"}
          </Button>
        </Flex>
      ),
    },
  ] as const;

  return (
    <Flex gap="50">
      <UsersModal />
      <UsersActions />
      <Table data={users} columns={[...columns]} isLoading={isFetching} />
    </Flex>
  );
};

export default Users;
