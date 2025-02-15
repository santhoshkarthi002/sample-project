import Breadcrumb from "@/components/Breadcrumb";
import ButtonElement from "@/components/ButtonElement";
import Card1 from "@/components/cards/Card1";
import { useHeader } from "@/contexts/HeaderContext";
import { useGetData } from "@/hooks/useGetData";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../types";

const ProductList = () => {
  const navigate = useNavigate();

  const { setHeader, setAction } = useHeader();

  useLayoutEffect(() => {
    setHeader("Products");
    setAction(
      <ButtonElement
        label="Add Product"
        onClick={() => navigate("/products/add")}
      />
    );
  }, [navigate, setAction, setHeader]);

  console.log('render')

  const { data, loading } = useGetData<Product[]>({
    url: "/products",
  });

  const products = data || [];

  // const handleDelete = async (id: number) => {
  //   axiosInstance
  //     .delete(`/products/${id}`)
  //     .then(() => {
  //       console.log("Deleted");
  //       refetch();
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  return (
    <div className="container">
      {loading && <div>Loading...</div>}
      <Breadcrumb
        header="Products"
        action={
          <ButtonElement
            label="Add Product"
            onClick={() => navigate("/products/add")}
          />
        }
      />

      <div className="flex flex-wrap justify-start gap-6 my-5">
        {products.map((item) => (
          <Card1 key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
