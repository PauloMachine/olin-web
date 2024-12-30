import type { ReactNode } from "react";

export type TTable<T> = {
  data?: T[] | null;
  isLoading?: boolean;
  columns: ReadonlyArray<{
    header: string;
    accessor: string;
    render?: (row: T) => ReactNode;
  }>;
};
