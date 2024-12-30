import styled from "styled-components";
import Flex from "src/components/ui/flex";

export const StyledFilters = styled(Flex)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
  flex: 1;

  @media (max-width: 830px) {
    flex: none;
  }
`;
