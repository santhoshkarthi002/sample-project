import { Product } from "@/features/products/types";
import { decompressBase64 } from "@/features/products/utils";
import { useState, useEffect } from "react";
import { BsCurrencyDollar } from "react-icons/bs";

const Card1 = ({ data }: { data: Product }) => {
  const { name, image, brand, description, price } = data;

  const [decompressedImage, setDecompressedImage] = useState("");
  console.log("decompressedImage :", decompressedImage);

  useEffect(() => {
    if (image) {
      decompressBase64(image, 1000, 1000).then((resizedBase64) => {
        setDecompressedImage(resizedBase64);
      });
    }
  }, [image]);
  return (
    <div>
      <div className="max-w-[700px] mx-auto">
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-90">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={image} alt="card-image" className="w-full h-full" />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-mono text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {name} {brand}
            </h5>

            <p className="overflow-hidden h-10 text-ellipsis font-mono font-semibold break-words leading-snug tracking-normal text-gray-400 [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
              {description}
            </p>

            <p className="flex font-sans items-center font-bold text-[30px] antialiased  leading-relaxed text-inherit">
              <BsCurrencyDollar /> {price}
            </p>
          </div>
          <div className="flex p-6 pt-0  items-center justify-between">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Add to cart
            </button>
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-400 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
