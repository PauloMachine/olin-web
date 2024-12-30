import { post, get, put } from "src/services/methods";
import type { TFuel, TFuelParams, TFuelStatus } from "./fuels.types";

export const postFuel = async (data: TFuel): Promise<TFuel> => {
  return await post<TFuel, TFuel>("/v1/fuels", data);
};

export const getFuels = async (params?: TFuelParams): Promise<TFuel[]> => {
  const { fuels } = await get<{ fuels: TFuel[] }>("/v1/fuels", params);
  return fuels;
};

export const putFuelStatus = async (data: TFuelStatus): Promise<TFuel> => {
  const { fuel } = await put<{ fuel: TFuel }, TFuelStatus>(
    "/v1/fuels/status",
    data
  );
  return fuel;
};
