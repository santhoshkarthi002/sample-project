import ButtonElement from "@/components/ButtonElement";
import HeaderElement from "@/components/HeaderElement";
import DataTable, { Column } from "@/components/list/DataTable";
import { useGetData } from "@/hooks/useGetData";
import { Link, useNavigate } from "react-router-dom";
import { Product } from "../types";
import { axiosInstance } from "@/axios";

const ProductList = () => {
  const navigate = useNavigate();

  const { data, refetch } = useGetData<Product[]>({
    url: "/products",
  });

  const handleDelete = async (id: number) => {
    axiosInstance
      .delete(`/products/${id}`)
      .then(() => {
        console.log("Deleted");
        refetch();
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
          to={`/admin/edit-product/${row.id}`}
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
          <ButtonElement
            size="medium"
            variant="text"
            colorVariant="danger"
            onClick={() => handleDelete(row.id)}
            label="Delete"
          />
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
            <ButtonElement
              onClick={() => navigate("/admin/add-product")}
              label="Add Product"
            />
          </div>
        }
      />
      <div className="my-5">
        <DataTable columns={columns} tableData={data || []} />
      </div>
    </div>
  );
};

export default ProductList;
