import { ReactNode } from "react";
import { Column } from "./Table";

const TableBody = <T,>({
  columns,
  data,
}: {
  columns: Column<T>[];
  data: T[];
}) => {
  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <tr
          key={rowIndex}
          className=" odd:dark:bg-gray-900  even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 h-12"
        >
          {columns.map((column) => (
            <td
              key={column.accessorKey as string}
              className="px-4 py-2 text-sm text-gray-700"
              style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
            >
              {column.renderCell
                ? column.renderCell({ row })
                : (row[column.accessorKey] as ReactNode)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
