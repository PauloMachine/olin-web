import { post, get, put } from "src/services/methods";
import type {
  TGasStation,
  TGasStationParams,
  TGasStationStatus,
} from "./gas-stations.types";

export const postGasStation = async (
  data: TGasStation
): Promise<TGasStation> => {
  return await post<TGasStation, TGasStation>("/v1/gas-stations", data);
};

export const getGasStations = async (
  params?: TGasStationParams
): Promise<TGasStation[]> => {
  const { gasStations } = await get<{ gasStations: TGasStation[] }>(
    "/v1/gas-stations",
    params
  );
  return gasStations || [];
};

export const putGasStation = async (
  data: TGasStationStatus
): Promise<TGasStation> => {
  const { gasStation } = await put<
    { gasStation: TGasStation },
    TGasStationStatus
  >("/v1/gas-stations/status", data);
  return gasStation;
};
