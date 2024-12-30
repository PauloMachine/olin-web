import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Modal from "src/components/ui/modal/modal";
import type { TUser } from "./users.types";
import { useGetUsers, usePostUser } from "./users.hooks";
import Input from "src/components/ui/input";
import { useModal } from "src/components/ui/modal/modal.context";
import Button from "src/components/ui/button";
import Select from "src/components/ui/select";
import { formatSelect } from "src/components/ui/select/select.utils";
import Flex from "src/components/ui/flex";
import { useGetProfiles } from "../profiles/profiles.hooks";
import type { TSelectOption } from "src/components/ui/select/select.types";

const UsersModal = () => {
  const { refetch } = useGetUsers();
  const { closeModal } = useModal();
  const { data: profiles, isLoading } = useGetProfiles();
  const { mutateAsync: postUserMutate, status } = usePostUser();
  const { control, handleSubmit, setValue, clearErrors, reset } =
    useForm<TUser>();

  const onSubmit = async (data: TUser) => {
    try {
      await postUserMutate(data);
      refetch();
      onClear();
      toast.success("Usuário salvo com sucesso!");
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
      title="novo usuário"
      onSave={handleSubmit(onSubmit)}
      isLoading={status === "pending"}
    >
      <Controller
        name="profile"
        control={control}
        defaultValue={profiles?.[0]}
        rules={{
          required: "* o perfil é obrigatório",
        }}
        render={({ field, formState }) => (
          <Select
            label="perfil"
            value={field.value}
            isLoading={isLoading}
            options={formatSelect(profiles)}
            defaultValue={formState.defaultValues?.profile?.name}
            onChange={(options: TSelectOption) => field.onChange(options)}
          />
        )}
      />
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
      <Controller
        name="username"
        control={control}
        rules={{
          required: "* o usuário é obrigatório",
        }}
        render={({ field }) => (
          <Input
            label="usuário"
            icon="MdAccountBox"
            placeholder="usuário"
            value={field.value}
            onChange={(e) => {
              field.onChange(e);
              clearErrors("username");
            }}
            onClear={() => setValue("username", "")}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: "* a senha é obrigatória",
        }}
        render={({ field }) => (
          <Input
            label="senha"
            icon="MdPassword"
            placeholder="senha"
            value={field.value}
            onChange={(e) => {
              field.onChange(e);
              clearErrors("password");
            }}
            onClear={() => setValue("password", "")}
          />
        )}
      />
    </Modal>
  );
};

export default UsersModal;
