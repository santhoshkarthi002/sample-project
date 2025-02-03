import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="mx-auto  w-[1200px] h-[720px] flex flex-col">
      <div className="flex flex-col items-center justify-center p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
