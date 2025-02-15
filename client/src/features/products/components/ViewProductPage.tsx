import { Product } from "../types";

export const ViewProductPage = ({ data }: { data: Product }) => {

  const dataList = [
    { id: 1, label: "Name", value: data.name },
    { id: 2, label: "Brand", value: data.brand },
    { id: 3, label: "Price", value: data.price },
    { id: 4, label: "Device Type", value: data.devicetype },
    { id: 5, label: "Category", value: data.category },
    { id: 6, label: "Color", value: data.color },
    { id: 7, label: "Description", value: data.description },
    { id: 8, label: "Information", value: data.info },
  ];

  return (
    <div className="flex mt-6 ">
      <div className="flex flex-row h-fit  gap-14">
        <img src={data.image} alt="product-image"  className="w-1/2 " />

        <div className="flex flex-col bg-white p-6 h-fit rounded-lg shadow-md w-full ">
          <div className="grid gap-6">
            {dataList.map((item) => (
              <div key={item.id} className="flex gap-4">
                <span className="text-gray-500 font-semibold font-mono text-[20px] w-[140px] ">
                  {item.label}
                </span>
                <span className="text-gray-700 font-semibold text-lg">:</span>
                <span className="text-gray-700 font-semibold font-mono text-[20px]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
