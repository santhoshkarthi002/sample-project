import ButtonElement from "@/components/ButtonElement";
import InputElement from "@/components/InputElement";

export const AddProductPage = () => {
  return (
    <div className="w-[500px]">
      <div className="flex flex-col items-center justify-center">
        <InputElement
          label="Product name"
          placeholder="Product name"
          name="name"
          required
        />
        <InputElement label="Color" placeholder="Color" name="color" required />
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
        <ButtonElement type="submit">Add Product</ButtonElement>
      </div>
    </div>
  );
};
