/* eslint-disable @typescript-eslint/no-explicit-any */
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

export interface Product {
  id: number;
  name: string;
  color: string;
  category: string;
  price: string;
  action: string;
}

const Table = () => {
  const data: Product[] = [
    {
      id: 1,
      name: "Apple MacBook Pro 17",
      color: "Silver",
      category: "Laptop",
      price: "$2999",
      action: "Edit",
    },
    {
      id: 2,
      name: "hb",
      color: "Black",
      category: "Laptop",
      price: "$2989",
      action: "Edit",
    },
  ];

  const columns: Column<Product>[] = [
    {
      name: "Product name",
      header: "Product name",
      accessorKey: "name",
      minWidth: 200,
      maxWidth: 200,
      renderCell: ({ row }: any) => (
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          {row.name}
        </a>
      ),
    },
    {
      name: "Color",
      header: "Color",
      accessorKey: "color",
      minWidth: 100,
      maxWidth: 100,
    },
    {
      name: "Category",
      header: "Category",
      accessorKey: "category",
      minWidth: 100,
      maxWidth: 100,
    },
    {
      name: "Price",
      header: "Price",
      accessorKey: "price",
      minWidth: 100,
      maxWidth: 100,
    },
    {
      name: "Action",
      header: "Action",
      accessorKey: "action",
      minWidth: 100,
      maxWidth: 100,
    },
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full my-0 align-middle text-dark border-neutral-900">
        <TableHeader columns={columns} />
        <TableBody columns={columns} data={data} />
      </table>
    </div>
  );
};

export default Table;
