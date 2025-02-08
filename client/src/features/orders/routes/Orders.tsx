import { useHeader } from "@/contexts/HeaderContext";
import { useLayoutEffect } from "react";

const Orders = () => {
    const { setHeader } = useHeader();

    useLayoutEffect(() => {
      setHeader("Orders");
    }, [setHeader]);
  

  return <div>Orders</div>;
};

export default Orders;
