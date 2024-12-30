import { useState } from "react";
import { MdExpandLess, MdExpandMore, MdSearch } from "react-icons/md";
import type { TSelectOption, TSelect } from "./select.types";
import {
  SkeletonSelect,
  StyledFlex,
  StyledOption,
  StyledOptions,
  StyledSelect,
  StyledSelectValue,
} from "./select.styles";
import Flex from "../flex";
import Skeleton from "react-loading-skeleton";
import Typography from "../typography";

const Select = ({
  label,
  value,
  options,
  onChange,
  defaultValue,
  isLoading = false,
  placeholder = "selecione",
}: TSelect) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (options: TSelectOption) => {
    onChange(options);
    setIsOpen(false);
  };

  const selectedLabel =
    options?.find(
      (option: TSelectOption) => String(option._id) === String(value?._id)
    )?.name ||
    defaultValue ||
    placeholder;

  if (isLoading) {
    return (
      <SkeletonSelect>
        <Skeleton style={{ height: 43.2 }} />
      </SkeletonSelect>
    );
  }

  return (
    <StyledFlex>
      {label && (
        <Typography
          size="10"
          color={value || defaultValue ? "#8800f0" : "#000"}
        >
          {label}
        </Typography>
      )}
      <StyledSelect>
        <StyledSelectValue
          role="button"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Flex direction="row" align="center" justify="flex-start" gap="25">
            <MdSearch
              size={20}
              color={value || defaultValue ? "#8800f0" : "#aaa"}
            />
            {selectedLabel}
          </Flex>
          {isOpen ? <MdExpandLess size={24} /> : <MdExpandMore size={24} />}
        </StyledSelectValue>
        {isOpen && (
          <StyledOptions role="listbox">
            {options?.map((option: TSelectOption) => (
              <StyledOption
                role="option"
                key={option._id}
                onClick={() =>
                  handleSelect({ _id: option._id, name: option.name })
                }
              >
                {option.name}
              </StyledOption>
            ))}
          </StyledOptions>
        )}
      </StyledSelect>
    </StyledFlex>
  );
};

export default Select;
