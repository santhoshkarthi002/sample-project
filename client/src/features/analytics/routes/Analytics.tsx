import { useHeader } from "@/contexts/HeaderContext";
import { useLayoutEffect } from "react";

const Analytics = () => {
  const { setHeader } = useHeader();

  useLayoutEffect(() => {
    setHeader("Analytics");
  }, [setHeader]);

  return <div>Analytics</div>;
};

export default Analytics;
