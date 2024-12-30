import {
  useMutation,
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";
import type {
  TGasStation,
  TGasStationParams,
  TGasStationStatus,
} from "./gas-stations.types";
import {
  getGasStations,
  postGasStation,
  putGasStation,
} from "./gas-stations.services";

export const usePostGasStation = () => {
  return useMutation({
    mutationFn: (data: TGasStation) => postGasStation(data),
    onError: () => {
      console.error("An error occurred during post gas station");
    },
  });
};

export const useGetGasStations = (params?: TGasStationParams) => {
  const queryKey = ["gasStations"];
  if (params) queryKey.push(String(params.status || "no-params"));

  return useQuery<TGasStation[], Error>({
    queryKey,
    queryFn: () => getGasStations(params),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    onError: () => {
      console.error("An error occurred during get gas stations");
    },
    placeholderData: [],
  } as UseQueryOptions<TGasStation[], Error, TGasStation[]>);
};

export const usePutGasStationStatus = () => {
  return useMutation({
    mutationFn: (data: TGasStationStatus) => putGasStation(data),
    onError: () => {
      console.error("An error occurred during put gas station status");
    },
  });
};
