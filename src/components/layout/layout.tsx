import type { ReactNode } from "react";
import Navbar from "../navbar";
import Flex from "../ui/flex";
import { useAuth } from "src/features/auth/auth.context";

const Layout = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Flex
      gap="50"
      justify={isAuthenticated ? "flex-start" : "center"}
      style={{
        minHeight: "100vh",
        backgroundColor: isAuthenticated ? "#ffffff" : "#8338E7",
      }}
    >
      {isAuthenticated && <Navbar />}
      <Flex px="100" style={{ paddingBottom: 50 }}>
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
