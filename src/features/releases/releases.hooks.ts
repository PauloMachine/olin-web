import {
  useMutation,
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";
import {
  getReleaseOptions,
  getReleases,
  postRelease,
} from "./releases.services";
import type {
  TRelease,
  TReleaseOptions,
  TReleaseParams,
} from "./releases.types";

export const usePostRelease = () => {
  return useMutation({
    mutationFn: (data: TRelease) => postRelease(data),
    onError: () => {
      console.error("An error occurred during post release");
    },
  });
};

export const useGetReleases = (params: TReleaseParams) => {
  const { fuelId, gasStationId, pageSize } = params;
  const queryKey = ["releases", String(fuelId + gasStationId + pageSize)];

  return useQuery<TRelease[], Error>({
    queryKey,
    queryFn: () => getReleases(params),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    enabled: !!fuelId && !!gasStationId && !!pageSize,
    onError: () => {
      console.error("An error occurred during get releases");
    },
  } as UseQueryOptions<TRelease[], Error, TRelease[]>);
};

export const useGetReleaseOptions = () => {
  const queryKey = ["release-options"];

  return useQuery<TReleaseOptions[], Error>({
    queryKey,
    queryFn: () => getReleaseOptions(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    onError: () => {
      console.error("An error occurred during get release options");
    },
  } as UseQueryOptions<TReleaseOptions[], Error, TReleaseOptions[]>);
};
