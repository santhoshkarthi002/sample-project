import ButtonElement from "@/components/ButtonElement";
import HeaderElement from "@/components/HeaderElement";
import DataTable, { Column } from "@/components/list/DataTable";
import { Link, useNavigate } from "react-router-dom";

export interface Product {
  id: number;
  name: string;
  color: string;
  category: string;
  price: string;
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
    },
    {
      id: 2,
      name: "hb",
      color: "Black",
      category: "Laptop",
      price: "$2989",
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
        <Link
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          to={`/edit-product/${row.id}`}
        >
          {row.name}
        </Link>
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
      minWidth: 100,
      maxWidth: 100,
      renderCell: ({ row }: { row: Product }) => (        
        <div className="flex justify-start">
          <ButtonElement size="medium" onClick={() => navigate(`/edit-product/${row.id}`)}>
            Edit
          </ButtonElement>
        </div>
      ),
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
        <DataTable columns={columns} tableData={data} />
      </div>
    </div>
  );
};

export default UserList;
