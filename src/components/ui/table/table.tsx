import Skeleton from "react-loading-skeleton";
import Flex from "../flex";
import Typography from "../typography";
import {
  SkeletonTableRow,
  StyledTable,
  StyledTableRow,
  StyleTableScroll,
} from "./table.styles";
import type { TTable } from "./table.types";
import { resolvePath } from "./table.utils";

const Table = <T,>({ data = [], columns, isLoading = false }: TTable<T>) => {
  const getRowBackgroundColor = (row: any): string => {
    if (row.type && row.type.name === "entrada") {
      return "#0F9D58";
    } else if (row.type && row.type.name === "saída") {
      return "#FFCD46";
    } else if (row.type && row.type.name === "correção") {
      return "#FA4300";
    } else if (row.type && row.type.name === "fechamento") {
      const isRowDifferenceFuel = parseFloat(row.differenceFuel as string);
      if (!row.differenceFuel || isRowDifferenceFuel === 0) return "#4C8BF5";

      return "#D84437";
    }

    return "#ffffff";
  };

  const getRowColor = (row: any): string => {
    if (!row.type || (row.type && row.type.name === "saída")) {
      return "#000000";
    }

    return "#ffffff";
  };

  return (
    <StyleTableScroll>
      <StyledTable>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.accessor}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? columns.map((_, index) => (
                <SkeletonTableRow key={index}>
                  {columns.map((col) => (
                    <td key={col.accessor}>
                      <Skeleton style={{ height: 56 }} />
                    </td>
                  ))}
                </SkeletonTableRow>
              ))
            : data?.map((row, rowIndex) => (
                <StyledTableRow
                  key={rowIndex}
                  color={getRowColor(row)}
                  backgroundColor={getRowBackgroundColor(row)}
                >
                  {columns.map((col) => (
                    <td key={col.accessor}>
                      <Typography color={getRowColor(row)}>
                        {col.render
                          ? col.render(row)
                          : resolvePath(row, col.accessor) || ""}
                      </Typography>
                    </td>
                  ))}
                </StyledTableRow>
              ))}
        </tbody>
      </StyledTable>
      {data?.length === 0 && (
        <Flex
          py="50"
          justify="flex-end"
          style={{ border: "1px solid #eee", marginTop: -1 }}
        >
          <Typography color="#bbb">
            Sem nenhuma informação para os filtros selecionados
          </Typography>
        </Flex>
      )}
    </StyleTableScroll>
  );
};

export default Table;
