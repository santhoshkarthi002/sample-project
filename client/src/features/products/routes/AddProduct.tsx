/* eslint-disable @typescript-eslint/no-explicit-any */
import FormContainer from "@/components/FormContainer";
import { useForm } from "react-hook-form";
import { axiosInstance } from "@/axios";
import { useNavigate } from "react-router-dom";
import { ProductsElements } from "../components";

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
        navigate("/");
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
      </div>
      <FormContainer methods={formCtx} onSubmit={onSubmit}>
        <ProductsElements />
      </FormContainer>
    </div>
  );
};

export default AddProduct;
