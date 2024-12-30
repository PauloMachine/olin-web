import type { TTypography } from "./typography.types";
import { Typography as StyledTypography } from "./typography.styles";

const Typography = ({ children, ...props }: TTypography) => {
  return <StyledTypography {...props}>{children}</StyledTypography>;
};

export default Typography;
