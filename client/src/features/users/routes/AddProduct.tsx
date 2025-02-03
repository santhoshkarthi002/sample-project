/* eslint-disable @typescript-eslint/no-explicit-any */
import FormContainer from "@/components/FormContainer";
import { useForm } from "react-hook-form";
import { AddProductPage } from "../components";

const AddProduct = () => {
  const formCtx = useForm({
    mode: "onChange",
    delayError: 500,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">Add Product</h1>
        <p className="text-gray-500">Add a new product to the store</p>
      </div>
      <FormContainer methods={formCtx} onSubmit={onSubmit}>
        <AddProductPage />
      </FormContainer>
    </div>
  );
};

export default AddProduct;
