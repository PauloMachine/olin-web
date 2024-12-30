import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Modal from "src/components/ui/modal/modal";
import Input from "src/components/ui/input";
import Select from "src/components/ui/select";
import Flex from "src/components/ui/flex";
import { useModal } from "src/components/ui/modal/modal.context";
import {
  useGetReleaseOptions,
  useGetReleases,
  usePostRelease,
} from "./releases.hooks";
import { useGetFuels } from "../fuels/fuels.hooks";
import { useGetGasStations } from "../gas-stations/gas-stations.hooks";
import { useAuth } from "../auth/auth.context";
import { useGasStationsContext } from "../gas-stations/filters/gas-stations.context";
import { useFuelsContext } from "../fuels/filters/fuels.context";
import { usePaginationContext } from "src/components/pagination/pagination.context";
import type { TRelease } from "./releases.types";
import type { TSelectOption } from "src/components/ui/select/select.types";
import { formatSelect } from "src/components/ui/select/select.utils";

const ReleasesModal = () => {
  const { user, isLoading: isLoadingUser } = useAuth();
  const { closeModal } = useModal();

  const { data: releaseOptions, isLoading: isLoadingReleaseOptions } =
    useGetReleaseOptions();
  const { data: gasStations, isLoading: isLoadingGasStations } =
    useGetGasStations({ status: true });
  const { data: fuels, isLoading: isLoadingFuels } = useGetFuels({
    status: true,
  });

  const { gasStation } = useGasStationsContext();
  const { fuel } = useFuelsContext();
  const { pageSize } = usePaginationContext();

  const { refetch } = useGetReleases({
    fuelId: fuel?._id,
    gasStationId: gasStation?._id,
    pageSize: pageSize?._id,
  });

  const { mutateAsync: postReleaseMutate, status } = usePostRelease();
  const { control, handleSubmit, setValue, clearErrors, reset, watch } =
    useForm<TRelease>();

  const onClear = () => {
    reset();
    clearErrors();
    closeModal();
  };

  const onSubmit = async (data: TRelease) => {
    try {
      const payload = {
        ...data,
        name: user?.name || data.name,
        gasStation,
      };

      await postReleaseMutate(payload);
      refetch();
      onClear();
      toast.success("Lançamento salvo com sucesso!");
    } catch (error: any) {
      const status = error.response?.status;
      const errorMessages: Record<number, string> = {
        400: "Não é possível realizar um lançamento de saída e fechamento sem um lançamento de entrada anterior",
        422: "O último lançamento contém uma diferença, realize um lançamento do tipo correção",
      };
      toast.error(
        errorMessages[status] ||
          "Ocorreu um erro durante o lançamento. Por favor, tente novamente"
      );
    }
  };

  const watchReleaseType = watch("type", releaseOptions?.[0]);

  return (
    <Modal
      onClose={onClear}
      title="novo Lançamento"
      onSave={handleSubmit(onSubmit)}
      isLoading={status === "pending" || isLoadingUser}
    >
      <Flex gap="25">
        <Controller
          name="type"
          control={control}
          rules={{ required: "* o tipo é obrigatório" }}
          render={({ field }) => (
            <Select
              label="tipo de lançamento"
              value={field.value}
              isLoading={isLoadingReleaseOptions}
              options={formatSelect(releaseOptions)}
              onChange={(options: TSelectOption) => field.onChange(options)}
            />
          )}
        />
        <Controller
          name="gasStation"
          control={control}
          rules={{ required: "* o posto é obrigatório" }}
          render={({ field }) => (
            <Select
              label="posto de combustível"
              value={field.value}
              isLoading={isLoadingGasStations}
              options={formatSelect(gasStations)}
              onChange={(options: TSelectOption) => field.onChange(options)}
            />
          )}
        />
        <Controller
          name="fuel.type"
          control={control}
          rules={{ required: "* o tipo do combustível é obrigatório" }}
          render={({ field }) => (
            <Select
              label="tipo do combustível"
              value={field.value}
              isLoading={isLoadingFuels}
              options={formatSelect(fuels)}
              onChange={(options: TSelectOption) => field.onChange(options)}
            />
          )}
        />
        {watchReleaseType?.name === "entrada" && (
          <>
            <Controller
              name="fuel.inlet"
              control={control}
              rules={{ required: watchReleaseType?.name === "entrada" }}
              render={({ field }) => (
                <Input
                  value={field.value}
                  icon="MdArrowUpward"
                  placeholder="entrada"
                  label="quatidade em litros"
                  onChange={(e) => field.onChange(e)}
                  onClear={() => setValue("fuel.inlet", "")}
                />
              )}
            />
            <Controller
              name="fuel.cost"
              control={control}
              rules={{ required: watchReleaseType?.name === "entrada" }}
              render={({ field }) => (
                <Input
                  placeholder="custo"
                  value={field.value}
                  icon="MdAttachMoney"
                  label="custo por litro"
                  onChange={(e) => field.onChange(e)}
                  onClear={() => setValue("fuel.cost", "")}
                />
              )}
            />
            <Controller
              name="fuel.price"
              control={control}
              rules={{ required: watchReleaseType?.name === "entrada" }}
              render={({ field }) => (
                <Input
                  placeholder="preço"
                  value={field.value}
                  icon="MdAttachMoney"
                  label="preço por litro"
                  onChange={(e) => field.onChange(e)}
                  onClear={() => setValue("fuel.price", "")}
                />
              )}
            />
          </>
        )}
        {(watchReleaseType?.name === "saída" ||
          watchReleaseType?.name === "fechamento") && (
          <Controller
            name="fuel.outlet"
            control={control}
            rules={{
              required:
                watchReleaseType?.name === "saída" ||
                watchReleaseType?.name === "fechamento",
            }}
            render={({ field }) => (
              <Input
                placeholder="saída"
                value={field.value}
                icon="MdArrowDownward"
                onChange={(e) => field.onChange(e)}
                onClear={() => setValue("fuel.outlet", "")}
              />
            )}
          />
        )}
      </Flex>
    </Modal>
  );
};

export default ReleasesModal;
