/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "@/axios";
import FormContainer from "@/components/FormContainer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AddProductPage } from "../components";
import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";

const AddProduct = () => {
  const navigate = useNavigate();
  const [compressedBase64, setCompressedBase64] = useState("");
  console.log("compressedBase64 :", compressedBase64);
  const formCtx = useForm({
    mode: "onChange",
    delayError: 500,
  });

  const onSubmit = (data: any) => {
    const fromData = {
      ...data,
      price: parseInt(data.price),
      image: compressedBase64,
    };
    console.log('fromData :', fromData);
    if (fromData.image) {
      axiosInstance
        .post("/products", fromData)
        .then((res) => {
          console.log(res);
          navigate("/products");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("no image");
    }
  };

  return (
    <div>
      <Breadcrumb header="Add Products" />
      <div className="flex flex-col mt-5 bg-white shadow-md bg-clip-border rounded-xl p-5">
        <FormContainer methods={formCtx} onSubmit={onSubmit}>
          <AddProductPage setCompressedBase64={setCompressedBase64} />
        </FormContainer>
      </div>
    </div>
  );
};

export default AddProduct;
