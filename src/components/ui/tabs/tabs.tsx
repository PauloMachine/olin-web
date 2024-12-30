import { useLocation, useNavigate } from "react-router-dom";
import type { TTab, TTabs } from "./tabs.types";
import { StyledFlex, StyledTypography } from "./tabs.styles";
import Flex from "../flex";

const Tabs = ({ tabs }: TTabs) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Flex direction="row" wrap="wrap" style={{ height: "30px" }}>
      {tabs.map((tab: TTab, index: number) => (
        <StyledFlex
          key={index}
          onClick={() => navigate(`/${tab.route}`)}
          route={String(location.pathname.includes(`/${tab.route}`))}
        >
          <StyledTypography
            route={String(location.pathname.includes(`/${tab.route}`))}
          >
            {tab.name}
          </StyledTypography>
        </StyledFlex>
      ))}
    </Flex>
  );
};

export default Tabs;
