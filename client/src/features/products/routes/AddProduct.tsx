/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "@/axios";
import FormContainer from "@/components/FormContainer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AddProductPage } from "../components";

const AddProduct = () => {
  const navigate = useNavigate();
  const formCtx = useForm({
    mode: "onChange",
    delayError: 500,
  });

  const onSubmit = (data: any) => {
    axiosInstance
      .post("/products", data)
      .then((res) => {
        console.log(res);
        navigate("/admin/product-list");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">Add Product</h1>
        <p className="text-gray-500">Add a new product to the store</p>
        <FormContainer methods={formCtx} onSubmit={onSubmit}>
          <AddProductPage />
        </FormContainer>
      </div>
    </div>
  );
};

export default AddProduct;
