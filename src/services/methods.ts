import api from "./api";

export const get = async <T>(
  url: string,
  params?: Record<string, any>
): Promise<T> => {
  const { data } = await api.get<T>(url, { params });
  return data;
};

export const post = async <T, R>(url: string, payload?: R): Promise<T> => {
  const { data } = await api.post<T>(url, payload);
  return data;
};

export const put = async <T, R>(url: string, payload?: R): Promise<T> => {
  const { data } = await api.put<T>(url, payload);
  return data;
};
