import type { TLogin } from "../login/login.types";
import type { TProfile } from "../profiles/profiles.types";

export type TUser = {
  _id: string;
  name: string;
  profile: TProfile;
  status: boolean;
};

export type TAuthContext = {
  user: TUser | null;
  login: ({ username, password }: TLogin) => Promise<void>;
  logout: () => void;
  isError: boolean;
  isLoading: boolean;
  isAuthenticated: boolean;
};

export type TAuth = {
  token: string;
  user: TUser;
};

export type TAuthResponse = {
  data: TAuth;
};
