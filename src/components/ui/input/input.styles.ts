import type { CSSProperties } from "react";
import styled from "styled-components";
import Flex from "../flex";

interface TStyledInput {
  style?: CSSProperties;
}

export const StyledFlex = styled(Flex)`
  width: 300px;
  justify-content: flex-start;

  @media (max-width: 830px) {
    width: 100%;
  }

  background-color: #ffffff;

  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
  }

  &:focus-within {
    svg {
      color: #8800f0 !important;
    }
  }

  svg {
    margin: 0px 0px 0px 15px;
  }
`;

export const StyledInput = styled.input<TStyledInput>`
  border: 0;
  width: 200px;
  box-sizing: border-box;
  padding: 0.75rem 1.5rem;
  background-color: #ffffff;
  outline: none;
  font-size: 16px;
  color: #8800f0;
  ${({ style }) => style && { ...style }}
`;

export const StyledContainer = styled(Flex)`
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;
