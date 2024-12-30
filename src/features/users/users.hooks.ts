import {
  useMutation,
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";
import type { TUser, TUserStatus } from "./users.types";
import { getUsers, postUser, putUserStatus } from "./users.services";

export const usePostUser = () => {
  return useMutation({
    mutationFn: (data: TUser) => postUser(data),
    onError: () => {
      console.error("An error occurred during post user");
    },
  });
};

export const useGetUsers = () => {
  const queryKey = ["users"];

  return useQuery<TUser[], Error>({
    queryKey,
    queryFn: () => getUsers(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    onError: () => {
      console.error("An error occurred during get users");
    },
  } as UseQueryOptions<TUser[], Error, TUser[]>);
};

export const usePutUserStatus = () => {
  return useMutation({
    mutationFn: (data: TUserStatus) => putUserStatus(data),
    onError: () => {
      console.error("An error occurred during put user status");
    },
  });
};
