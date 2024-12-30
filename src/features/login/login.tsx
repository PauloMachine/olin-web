import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "../auth/auth.context";
import type { TLogin } from "./login.types";
import Logo from "src/components/logo";
import Button from "src/components/ui/button";
import Flex from "src/components/ui/flex";
import Input from "src/components/ui/input";
import Typography from "src/components/ui/typography";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated, isLoading } = useAuth();
  const {
    control,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<TLogin>();

  const onSubmit = async (data: TLogin) => {
    await login(data);
    if (isAuthenticated) {
      navigate("/releases");
    } else {
      toast.error(
        "Ocorreu um erro durante o acesso. Por favor, tente novamente."
      );
    }
  };

  return (
    <Flex gap="50" style={{ maxWidth: "300px" }}>
      <Logo color="#ffffff" size="85" />
      <Flex gap="5">
        <Controller
          name="username"
          control={control}
          rules={{
            required: "* o usuário é obrigatório",
          }}
          render={({ field }) => (
            <Input
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
              icon="MdPassword"
              placeholder="senha"
              type="password"
              value={field.value}
              onChange={(e) => {
                field.onChange(e);
                clearErrors("password");
              }}
              onClear={() => setValue("password", "")}
            />
          )}
        />
        <Flex align="flex-start" gap="5">
          {errors.username && (
            <Typography>{errors.username.message}</Typography>
          )}
          {errors.password && (
            <Typography>{errors.password.message}</Typography>
          )}
        </Flex>
      </Flex>
      <Button
        size="large"
        variant="primary"
        isLoading={isLoading}
        onClick={handleSubmit(onSubmit)}
        style={{ maxWidth: 300 }}
      >
        acessar
      </Button>
    </Flex>
  );
};

export default Login;
