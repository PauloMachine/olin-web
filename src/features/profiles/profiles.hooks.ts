import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { getProfiles } from "./profiles.services";
import type { TProfile } from "./profiles.types";

export const useGetProfiles = () => {
  const queryKey = ["profiles"];

  return useQuery<TProfile[], Error>({
    queryKey,
    queryFn: () => getProfiles(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    onError: () => {
      console.error("An error occurred during get profiles");
    },
  } as UseQueryOptions<TProfile[], Error, TProfile[]>);
};
