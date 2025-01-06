import type { ReactNode } from "react";
import type { TFuel } from "../fuels/fuels.types";
import type { TGasStation } from "../gas-stations/gas-stations.types";

export type TReleaseOptions = {
  _id: string;
  name: string;
};

type TReleaseFuel = {
  inlet?: string;
  outlet?: string;
  type: TFuel;
  cost?: string;
  price?: string;
};

export type TReleaseParams = {
  fuelId: string;
  gasStationId: string;
  pageSize: string;
};

export type TRelease = {
  _id: string;
  name: string;
  createdAt: string;
  type: TReleaseOptions;
  totalProfit?: string;
  fuel: TReleaseFuel;
  gasStation: TGasStation;
  totalFuel?: string;
  differenceFuel?: string;
};

export type TReleaseColumns = {
  columns: ReadonlyArray<{
    header: string;
    accessor: string;
    render?: (row: TRelease) => ReactNode;
  }>;
};
