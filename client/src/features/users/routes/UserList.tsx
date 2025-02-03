import ButtonElement from "@/components/ButtonElement";
import HeaderElement from "@/components/HeaderElement";
import Table, { Column } from "@/components/list/Table";
import { useNavigate } from "react-router-dom";

export interface Product {
  id: number;
  name: string;
  color: string;
  category: string;
  price: string;
  action: string;
}

const UserList = () => {

  const navigate = useNavigate();

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
      renderCell: ({ row }: { row: Product }) => (
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
    <div className="container mt-4">
      <HeaderElement
        header="Products"
        action={
          <div className="flex justify-end">
            <ButtonElement onClick={() => navigate("/add-product")}>
              Add Products
            </ButtonElement>
          </div>
        }
      />
      <div className="my-5">
        <Table columns={columns} tableData={data} />
      </div>
    </div>
  );
};

export default UserList;
