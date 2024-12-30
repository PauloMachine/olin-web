import {
  useMutation,
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";
import { getFuels, postFuel, putFuelStatus } from "./fuels.services";
import type { TFuel, TFuelParams, TFuelStatus } from "./fuels.types";

export const usePostFuel = () => {
  return useMutation({
    mutationFn: (data: TFuel) => postFuel(data),
    onError: () => {
      console.error("An error occurred during post fuel");
    },
  });
};

export const useGetFuels = (params?: TFuelParams) => {
  const queryKey = ["fuels"];
  if (params) queryKey.push(String(params.status));

  return useQuery<TFuel[], Error>({
    queryKey,
    queryFn: () => getFuels(params),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    onError: () => {
      console.error("An error occurred during get fuels");
    },
    placeholderData: [],
  } as UseQueryOptions<TFuel[], Error, TFuel[]>);
};

export const usePutFuelStatus = () => {
  return useMutation({
    mutationFn: (data: TFuelStatus) => putFuelStatus(data),
    onError: () => {
      console.error("An error occurred during put fuel status");
    },
  });
};
