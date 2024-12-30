import { get } from "src/services/methods";
import type { TProfile } from "./profiles.types";

export const getProfiles = async (): Promise<TProfile[]> => {
  const { profiles } = await get<{ profiles: TProfile[] }>("/v1/profiles");
  return profiles;
};
