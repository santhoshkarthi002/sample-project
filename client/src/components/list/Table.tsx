import { ReactNode } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

export interface Column<T> {
  name: string;
  header: string;
  accessorKey: keyof T;
  minWidth: number;
  maxWidth: number;
  renderCell?: (props: { row: T }) => ReactNode;
}

const Table = <T,>({
  tableData,
  columns,
}: {
  tableData: T[];
  columns: Column<T>[];
}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full align-middle text-dark border-neutral-900">
        <TableHeader columns={columns} />
        <TableBody columns={columns} data={tableData} />
      </table>
    </div>
  );
};

export default Table;
