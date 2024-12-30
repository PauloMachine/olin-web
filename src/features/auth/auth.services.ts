import { get, post } from "src/services/methods";
import type { TLogin } from "../login/login.types";
import type { TAuth, TAuthResponse, TUser } from "./auth.types";

export const postLogin = async (data: TLogin): Promise<TAuth> => {
  const response = await post<TAuthResponse, TLogin>("/v1/login", data);
  return response.data;
};

export const getAuthenticatedUser = async (): Promise<TUser> => {
  try {
    const user = await get<TUser>("/v1/login");
    return user;
  } catch (error) {
    throw new Error(String(error));
  }
};
