import type { TProfile } from "../profiles/profiles.types";

export type TUser = {
  _id: string;
  name: string;
  username: string;
  password?: string;
  profile: TProfile;
  status: boolean;
};

export type TUserStatus = {
  _id: string;
  status: boolean;
};
