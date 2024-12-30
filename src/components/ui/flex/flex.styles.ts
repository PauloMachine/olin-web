import styled from "styled-components";
import type { TFlex } from "./flex.types";

export const Flex = styled.div<TFlex>`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  gap: ${({ gap }) => (gap ? `${gap}px` : "0px")};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  padding-top: ${({ py }) => (py ? `${py}px` : "0px")};
  padding-bottom: ${({ py }) => (py ? `${py}px` : "0px")};
  padding-left: ${({ px }) => (px ? `${px}px` : "0px")};
  padding-right: ${({ px }) => (px ? `${px}px` : "0px")};
  box-sizing: border-box;

  @media (max-width: 830px) {
    padding-left: ${({ px }) => (px ? "20px" : "0px")};
    padding-right: ${({ px }) => (px ? "20px" : "0px")};
  }
`;
