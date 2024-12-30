import Typography from "../ui/typography";
import type { TLogo } from "./logo.types";

const Logo = ({ size, color }: TLogo) => {
  return (
    <Typography size={size} color={color}>
      olin
    </Typography>
  );
};

export default Logo;
