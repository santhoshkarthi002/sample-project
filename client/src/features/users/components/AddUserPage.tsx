import ButtonElement from "@/components/ButtonElement";
import InputElement from "@/components/InputElement";

export const AddUserPage = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center">
        <InputElement
          label="Product name"
          placeholder="Product name"
          name="ProductName"
        />
        <InputElement
          label="Color"
          placeholder="Color"
          name="Color"
          type="color"
        />
        <InputElement label="Category" placeholder="Category" name="Category" />
        <InputElement
          label="Price"
          placeholder="Price"
          name="Price"
          type="number"
        />
        <ButtonElement type="submit">Add Product</ButtonElement>
      </div>
    </div>
  );
};

