import { useHeader } from "@/contexts/HeaderContext";
import { useLayoutEffect } from "react";

const Dashboard = () => {
  const { setHeader } = useHeader();

  useLayoutEffect(() => {
    setHeader("Dashboard");
  }, [setHeader]);

  return <div>Dashboard</div>;
};

export default Dashboard;
