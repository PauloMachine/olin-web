import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Modal from "src/components/ui/modal/modal";
import Input from "src/components/ui/input";
import { useModal } from "src/components/ui/modal/modal.context";
import Flex from "src/components/ui/flex";
import { useGetGasStations, usePostGasStation } from "./gas-stations.hooks";
import type { TGasStation } from "./gas-stations.types";

const GasStationsModal = () => {
  const { refetch } = useGetGasStations();
  const { mutateAsync: postGasStation, status } = usePostGasStation();
  const { closeModal } = useModal();
  const { control, handleSubmit, setValue, clearErrors, reset } =
    useForm<TGasStation>();

  const onSubmit = async (data: TGasStation) => {
    try {
      await postGasStation(data);
      refetch();
      onClear();
      toast.success("Posto salvo com sucesso!");
    } catch {
      toast.error(
        "Ocorreu um erro durante o cadastro. Por favor, tente novamente."
      );
    }
  };

  const onClear = () => {
    reset();
    clearErrors();
    closeModal();
  };

  return (
    <Modal
      onClose={onClear}
      title="novo posto"
      onSave={handleSubmit(onSubmit)}
      isLoading={status === "pending"}
    >
      <Flex gap="25">
        <Controller
          name="name"
          control={control}
          rules={{
            required: "* o nome é obrigatório",
          }}
          render={({ field }) => (
            <Input
              label="nome"
              icon="MdOutlinePersonOutline"
              placeholder="nome"
              value={field.value}
              onChange={(e) => {
                field.onChange(e);
                clearErrors("name");
              }}
              onClear={() => setValue("name", "")}
            />
          )}
        />
      </Flex>
    </Modal>
  );
};

export default GasStationsModal;
