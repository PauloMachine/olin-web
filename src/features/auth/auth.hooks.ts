import {
  useMutation,
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";
import { getAuthenticatedUser, postLogin } from "./auth.services";
import type { TAuth, TUser } from "./auth.types";
import type { TLogin } from "../login/login.types";

export const useLogin = () => {
  return useMutation<TAuth, Error, TLogin>({
    mutationFn: (data: TLogin) => postLogin(data),
    onError: () => {
      console.error("An error occurred during login");
    },
  });
};

export const useGetAuthenticatedUser = (user: TUser | null) => {
  const queryKey = ["authenticated-user"];

  return useQuery<TUser, Error>({
    queryKey,
    queryFn: () => getAuthenticatedUser(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    enabled: !!user,
    onError: () => {
      console.error("An error occurred during get authenticated user");
    },
  } as UseQueryOptions<TUser, Error, TUser>);
};
