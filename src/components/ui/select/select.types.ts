export type TSelectOption = {
  _id: string;
  name: string;
};

export type TSelect = {
  label?: string;
  options: TSelectOption[] | null;
  value: TSelectOption | null;
  defaultValue?: string;
  placeholder?: string;
  isLoading?: boolean;
  onChange: (option: TSelectOption) => void;
};
