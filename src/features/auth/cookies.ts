import Cookies from "js-cookie";

export const setCookie = (
  key: string,
  value: any,
  options?: Cookies.CookieAttributes
): void => {
  Cookies.set(key, JSON.stringify(value), { expires: 7, ...options });
};

export const getCookie = <T>(key: string): T | null => {
  const item = Cookies.get(key);
  return item ? JSON.parse(item) : null;
};

export const removeCookie = (key: string): void => {
  Cookies.remove(key);
};
