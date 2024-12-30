import { Flex as StyledFlex } from "./flex.styles";
import type { TFlex } from "./flex.types";

const Flex = ({ children, ...props }: TFlex) => {
  return <StyledFlex {...props}>{children}</StyledFlex>;
};

export default Flex;
