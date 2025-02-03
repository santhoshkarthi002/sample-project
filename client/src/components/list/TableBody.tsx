import { ReactNode } from "react";
import { Column } from "./DataTable";

const TableBody = <T,>({ columns, data }: { columns: Column<T>[]; data: T[] }) => {
  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <tr
          key={rowIndex}
          className="odd:dark:bg-gray-900 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 h-12"
        >
          {columns.map((column) => {
            const cellKey = column.accessorKey as keyof T | undefined;
            return (
              <td
                key={`${rowIndex}-${cellKey?.toString()}`}
                className="px-4 py-2 text-sm text-gray-700"
                style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
              >
                {column.renderCell
                  ? column.renderCell({ row })
                  : cellKey !== undefined
                  ? (row[cellKey] as ReactNode)
                  : null}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
