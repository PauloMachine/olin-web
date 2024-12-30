export const formatNumber = (value?: string): string => {
  if (!value) return "";

  const numberValue = parseFloat(value);

  if (isNaN(numberValue)) {
    throw new Error("Incorrect value");
  }

  return numberValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
