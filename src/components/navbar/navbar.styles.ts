import styled from "styled-components";
import Flex from "../ui/flex";

export const StyledNavbar = styled(Flex)`
  gap: 20px;
  padding: 25px 100px;
  background-color: #8800f0;

  @media (max-width: 830px) {
    gap: 40px;
    padding: 70px 25px;
  }
`;
