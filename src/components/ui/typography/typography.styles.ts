import styled from "styled-components";
import type { TTypography } from "./typography.types";

export const Typography = styled.a<TTypography>`
  color: ${({ color }) => color || "#FFF"};
  font-size: ${({ size }) => (size ? `${size}px` : "14px")};
  flex-wrap: ${({ wrap }) => wrap || "wrap"};
  text-transform: lowercase;
`;
