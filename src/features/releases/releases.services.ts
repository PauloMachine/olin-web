import { post, get } from "src/services/methods";
import type {
  TRelease,
  TReleaseOptions,
  TReleaseParams,
} from "./releases.types";

export const postRelease = async (data: TRelease): Promise<TRelease> => {
  return await post<TRelease, TRelease>("/v1/releases", data);
};

export const getReleases = async (
  params: TReleaseParams
): Promise<TRelease[]> => {
  const { releases } = await get<{ releases: TRelease[] }>(
    "/v1/releases",
    params
  );
  return releases;
};

export const getReleaseOptions = async (): Promise<TReleaseOptions[]> => {
  const { releaseOptions } = await get<{ releaseOptions: TReleaseOptions[] }>(
    "/v1/releases/options"
  );
  return releaseOptions;
};
