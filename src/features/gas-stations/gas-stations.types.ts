export type TGasStation = {
  _id: string;
  name: string;
  status?: boolean;
};

export type TGasStationStatus = {
  _id: string;
  status?: boolean;
};

export type TGasStationParams = {
  status: boolean;
};
