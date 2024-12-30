import "jspdf-autotable";
import jsPDF from "jspdf";
import { resolvePath } from "src/components/ui/table/table.utils";
import type { ReactNode } from "react";

export const generatePDF = <T>(
  title: string,
  filename: string,
  array: T[] = [],
  columns: ReadonlyArray<{
    header: string;
    accessor: string;
    render?: (row: T) => ReactNode;
  }>
) => {
  const doc = new jsPDF();

  doc.text(title, 14, 10);

  const headers = columns?.map((col) => col.header);
  const data = array?.map((item) =>
    columns?.map((col) =>
      "render" in col && typeof col.render === "function"
        ? col.render(item)
        : resolvePath(item, String(col.accessor)) || ""
    )
  );

  doc.autoTable({
    head: [headers],
    body: data as any,
    startY: 20,
  });

  doc.save(filename);
};
