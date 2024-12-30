import styled from "styled-components";
import Flex from "../flex";
import Typography from "../typography";

export const StyledFlex = styled(Flex)<{ route: string }>`
  width: 150px;
  height: 100%;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${({ route }) =>
    Boolean(route === "true") ? "#ffffff" : "transparent"};
`;

export const StyledTypography = styled(Typography)<{ route: string }>`
  color: ${({ route }) => (Boolean(route === "true") ? "#8800f0" : "#ffffff")};
`;
