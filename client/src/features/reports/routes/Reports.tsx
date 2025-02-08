import { useHeader } from "@/contexts/HeaderContext";
import React, { useLayoutEffect } from "react";

const Reports = () => {
  const { setHeader } = useHeader();

  useLayoutEffect(() => {
    setHeader("Reports");
  }, [setHeader]);

  return <div>Reports</div>;
};

export default Reports;
