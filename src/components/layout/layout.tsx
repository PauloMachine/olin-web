import type { ReactNode } from "react";
import Navbar from "../navbar";
import Flex from "../ui/flex";
import { useAuth } from "src/features/auth/auth.context";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  const isLogged = isAuthenticated && !location.pathname.includes("/login");

  return (
    <Flex
      gap="50"
      justify={isLogged ? "flex-start" : "center"}
      style={{
        minHeight: "100vh",
        backgroundColor: isLogged ? "#ffffff" : "#8338E7",
      }}
    >
      {isLogged && <Navbar />}
      <Flex px="100" style={{ paddingBottom: 50 }}>
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
