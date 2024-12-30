import { MdExitToApp } from "react-icons/md";
import Logo from "../logo";
import type { TTab } from "../ui/tabs/tabs.types";
import Flex from "../ui/flex";
import Tabs from "../ui/tabs";
import Typography from "../ui/typography";
import { useAuth } from "src/features/auth/auth.context";
import { StyledNavbar } from "./navbar.styles";

const Navbar = () => {
  const { user, logout } = useAuth();

  const privateTabs: TTab[] = [];
  if (user?.profile?.name === "administrador") {
    privateTabs.push(
      {
        name: "finanças",
        route: "finances",
      },
      {
        name: "postos",
        route: "gasStations",
      },
      {
        name: "combustíveis",
        route: "fuels",
      },
      {
        name: "usuários",
        route: "users",
      }
    );
  }

  const tabs: TTab[] = [
    {
      name: "lançamentos",
      route: "releases",
    },
    ...privateTabs,
  ];

  return (
    <StyledNavbar>
      <Flex direction="row" justify="space-between">
        <Flex align="flex-start">
          <Logo color="#ffffff" size="30" />
          {user && (
            <Typography
              size="10"
              style={{
                marginLeft: 20,
                marginTop: -10,
                textTransform: "capitalize",
              }}
            >
              Olá, {user.name}!
            </Typography>
          )}
        </Flex>

        <MdExitToApp
          color="#ffffff"
          size={30}
          onClick={() => logout()}
          style={{ cursor: "pointer" }}
        />
      </Flex>
      <Tabs tabs={tabs} />
    </StyledNavbar>
  );
};

export default Navbar;
