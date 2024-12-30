import Typography from "../typography";
import { StyledContainer, StyledFlex, StyledInput } from "./input.styles";
import type { TInput } from "./input.types";
import * as MdIcons from "react-icons/md";
import { MdClose } from "react-icons/md";

const Input = ({
  label,
  value = "",
  onChange,
  onClear,
  style,
  placeholder = "",
  debounceDelay = 300,
  icon = "MdSearch",
  ...props
}: TInput) => {
  const IconComponent = MdIcons[icon];

  return (
    <StyledContainer>
      {label && (
        <Typography size="10" color={value ? "#8800f0" : "#000"}>
          {label}
        </Typography>
      )}
      <StyledFlex
        direction="row"
        align="center"
        justify="flex-start"
        wrap="wrap"
      >
        {IconComponent && (
          <IconComponent size={20} color={value ? "#8800f0" : "#aaa"} />
        )}

        <StyledInput
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          style={style}
          {...props}
        />

        {value && (
          <MdClose
            size={16}
            color="#8800f0"
            onClick={onClear}
            style={{ cursor: "pointer", marginLeft: 30 }}
          />
        )}
      </StyledFlex>
    </StyledContainer>
  );
};

export default Input;
