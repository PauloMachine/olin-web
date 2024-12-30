import type { TRelease } from "../releases/releases.types";
import { formatDate } from "src/utils/formatDate";
import { formatNumber } from "src/utils/formatNumber";
import Release from "../releases/release";

const Finances = () => {
  const columns = [
    {
      header: "dia",
      accessor: "createdAt",
      render: (row: TRelease) => formatDate(row.createdAt),
    },
    { header: "nome", accessor: "name" },
    { header: "tipo", accessor: "type.name" },
    { header: "entrada", accessor: "fuel.inlet" },
    { header: "saída", accessor: "fuel.outlet" },
    {
      header: "custo",
      accessor: "fuel.cost",
      render: (row: TRelease) => {
        if (!row.differenceFuel) {
          return formatNumber(row.fuel?.cost);
        }
      },
    },
    {
      header: "preço",
      accessor: "fuel.price",
      render: (row: TRelease) => {
        if (!row.differenceFuel) {
          return formatNumber(row.fuel?.price);
        }
      },
    },
    {
      header: "lucro líquido",
      accessor: "totalProfit",
      render: (row: TRelease) => {
        if (!row?.differenceFuel) {
          return formatNumber(row.totalProfit);
        }
      },
    },
  ] as const;

  return <Release columns={columns} />;
};

export default Finances;
