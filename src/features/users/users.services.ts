import { post, get, put } from "src/services/methods";
import type { TUser, TUserStatus } from "./users.types";

export const postUser = async (data: TUser): Promise<TUser> => {
  return await post<TUser, TUser>("/v1/users", data);
};

export const getUsers = async (): Promise<TUser[]> => {
  const { users } = await get<{ users: TUser[] }>("/v1/users");
  return users;
};

export const putUserStatus = async (data: TUserStatus): Promise<TUser> => {
  const { user } = await put<{ user: TUser }, TUserStatus>(
    "/v1/users/status",
    data
  );
  return user;
};
