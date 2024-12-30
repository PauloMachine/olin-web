import Skeleton from "react-loading-skeleton";
import { SkeletonButton, StyledButton } from "./button.styles";
import type { TButton } from "./button.types";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  isLoading = false,
  disabled = false,
  style,
}: TButton) => {
  if (isLoading) {
    return (
      <SkeletonButton variant="transparent" size={size} style={style}>
        <Skeleton style={{ height: 34.4 }} />
      </SkeletonButton>
    );
  }

  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
