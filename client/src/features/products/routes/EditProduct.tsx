import { useGetData } from "@/hooks/useGetData";
import { useParams } from "react-router-dom";
import { Product } from "../types";
import { EditProductsPage } from "../components";

const EditProduct = () => {
  const { id } = useParams();

  const { data, loading } = useGetData<Product>({
    url: `/products/${id}`,
    pathParams: { id: String(id) },
  });

 
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">Edit Product</h1>
        <p className="text-gray-500">Edit your product here</p>
      </div>

      {loading ? <p>Loading...</p> : <EditProductsPage data={data as Product} />}
    </div>
  );
};

export default EditProduct;
