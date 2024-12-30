import styled from "styled-components";

export const StyledButton = styled.button<{ variant: string; size: string }>`
  ${({ style }) => style && { ...style }}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: "pointer";
  width: 100%;
  padding: ${({ size }) =>
    size === "small"
      ? "0.25rem 0.5rem"
      : size === "large"
      ? "0.75rem 1.5rem"
      : "0.5rem 1rem"};
  font-size: ${({ size }) =>
    size === "small" ? "0.8rem" : size === "large" ? "16px" : "1rem"};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 300px;

  background-color: ${({ variant }) =>
    variant === "primary"
      ? "#8800f0"
      : variant === "secondary"
      ? "#ffffff"
      : variant === "success"
      ? "#0F9D58"
      : variant === "failed"
      ? "#D84437"
      : "transparent"};
  color: ${({ variant }) =>
    variant === "primary"
      ? "#ffffff"
      : variant === "secondary"
      ? "#8800f0"
      : variant === "success"
      ? "#ffffff"
      : variant === "failed"
      ? "#ffffff"
      : "transparent"};

  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }

  @media (max-width: 830px) {
    max-width: 100%;
  }
`;

export const SkeletonButton = styled(StyledButton)`
  pointer-events: none;
  padding: 0px;
  & > span {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
