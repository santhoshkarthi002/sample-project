import ButtonElement from "@/components/ButtonElement";
import FileUploadElement from "@/components/FileUploadElement";
import InputElement from "@/components/InputElement";
import TextareaElement from "@/components/TextareaElement";
import { handleImageChange } from "../utils";

export const AddProductPage = ({
  setCompressedBase64,
}: {
  setCompressedBase64: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div>
      <div className="flex gap-x-6 mb-6">
        <div className="w-[500px]">
          <InputElement
            label="Product name"
            placeholder="Product name"
            name="name"
            required
          />
          <InputElement
            label="Brand name"
            placeholder="Product name"
            name="brand"
            required
          />
          <InputElement
            label="Category"
            placeholder="Category"
            name="category"
            required
          />
          <InputElement
            label="Device Type"
            placeholder="Device Type"
            name="devicetype"
            required
          />
          <TextareaElement
            label="Info"
            placeholder="Info"
            name="info"
            required
          />
        </div>
        <div className="w-[500px]">
          <InputElement
            label="Price"
            placeholder="Price"
            name="price"
            type="number"
            required
          />
          <InputElement
            label="Color"
            placeholder="Color"
            name="color"
            required
          />
          <FileUploadElement
            label="Image"
            name="image"
            required
            onChange={(e)=>{
              handleImageChange(e, setCompressedBase64);
            }}
          />
          <TextareaElement
            label="Description"
            placeholder="Description"
            name="description"
            required
          />
        </div>
        <div className="flex flex-col items-center justify-center"></div>
      </div>

      <ButtonElement type="submit" label="Add Product" />
    </div>
  );
};
