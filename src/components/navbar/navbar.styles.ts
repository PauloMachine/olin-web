import styled from "styled-components";
import Flex from "../ui/flex";

export const StyledNavbar = styled(Flex)`
  gap: 20px;
  padding: 25px 100px;
  background-color: #8800f0;

  @media (max-width: 950px) {
    gap: 40px;
    padding: 30px 25px 60px 25px;
  }

  @media (max-width: 800px) {
    gap: 40px;
    padding: 30px 25px 90px 25px;
  }

  @media (max-width: 350px) {
    gap: 40px;
    padding: 30px 25px 140px 25px;
  }
`;
