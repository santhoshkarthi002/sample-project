import { Column } from "./Table";

const TableHeader = <T,>({ columns }: { columns: Column<T>[] }) => {
  return (
    <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {columns.map((column) => (
          <th
            key={column.name}
            style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
            className="px-4 py-2 text-left text-sm font-medium text-gray-300"
          >
            {column.header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
