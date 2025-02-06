import ButtonElement from "@/components/ButtonElement";
import InputElement from "@/components/InputElement";
import { axiosInstance } from "@/axios";
import FormContainer from "@/components/FormContainer";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../types";

export const EditProductsPage = ({ data }: { data: Product }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const formCtx = useForm<Product>({
    mode: "onChange",
    delayError: 500,
    defaultValues: {
      name: data?.name,
      price: data?.price,
      color: data?.color,
      category: data?.category,
    },
  });

  const onSubmit = (data: Product) => {
    axiosInstance
      .put( `/products/${id}`, data)
      .then((res) => {
        console.log(res);
        navigate("/admin/production-list");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-[500px]">
      <FormContainer
        methods={formCtx}
        onSubmit={(data: Product) => onSubmit(data)}
      >
        <div className="flex flex-col items-center justify-center">
          <InputElement
            label="Product name"
            placeholder="Product name"
            name="name"
            required
          />
          <InputElement
            label="Color"
            placeholder="Color"
            name="color"
            required
          />
          <InputElement
            label="Category"
            placeholder="Category"
            name="category"
            required
          />
          <InputElement
            label="Price"
            placeholder="Price"
            name="price"
            type="number"
            required
          />
          <ButtonElement type="submit" label="Update Product" />
        </div>
      </FormContainer>
    </div>
  );
};
