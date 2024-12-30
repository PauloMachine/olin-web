import {
  createContext,
  useState,
  useContext,
  type ReactNode,
  useEffect,
  useCallback,
} from "react";
import type { TAuthContext, TUser } from "./auth.types";
import { useGetAuthenticatedUser, useLogin } from "./auth.hooks";
import type { TLogin } from "../login/login.types";
import { getCookie, removeCookie, setCookie } from "./cookies";

const AuthContext = createContext<TAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(getCookie("user"));
  const { mutateAsync: loginMutate, status, error: isErrorLogin } = useLogin();
  const { data: authUser, isError: isErrorAuthUser } =
    useGetAuthenticatedUser(user);

  const login = async (data: TLogin) => {
    try {
      const { token, user } = await loginMutate(data);
      setCookie("token", token, { secure: true, sameSite: "strict" });
      setCookie("user", JSON.stringify(user), {
        secure: true,
        sameSite: "strict",
      });
      setUser(user);
    } catch {
      console.error("An error occurred during login. Please try again.");
    }
  };

  const logout = useCallback(() => {
    removeCookie("token");
    removeCookie("user");
    setUser(null);
  }, []);

  useEffect(() => {
    const user = getCookie("user");
    const token = getCookie("token");

    if (user && token) {
      if (authUser) {
        setUser(authUser);
      } else if (isErrorAuthUser) {
        logout();
      }
    }
  }, [authUser, isErrorAuthUser, logout]);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoading: status === "pending",
        isError: !!isErrorLogin || isErrorAuthUser,
        isAuthenticated: !!user && !!getCookie("token"),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
