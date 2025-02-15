import Breadcrumb from "@/components/Breadcrumb";
import { useGetData } from "@/hooks/useGetData";
import { useParams } from "react-router-dom";
import { ViewProductPage } from "../components";
import { Product } from "../types";

const ViewProduct = () => {
  const { id } = useParams();

  const { data } = useGetData<Product>({
    url: 'products/:id',
    isEnabled: id !== undefined && id !== null,
    pathParams: { id : String(id) },
  });

  const products = data  || {} as Product;
  console.log('products :', products);

  return (
    <div>
      <Breadcrumb header=" Product Details" />
      <ViewProductPage data={products} />
    </div>
  );
};

export default ViewProduct;
