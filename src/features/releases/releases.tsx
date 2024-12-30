import { formatDate } from "src/utils/formatDate";
import type { TRelease } from "./releases.types";
import Release from "./release";

const Releases = () => {
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
    { header: "diferença", accessor: "differenceFuel" },
    { header: "total no reservatório", accessor: "totalFuel" },
  ] as const;

  return <Release columns={columns} />;
};

export default Releases;
