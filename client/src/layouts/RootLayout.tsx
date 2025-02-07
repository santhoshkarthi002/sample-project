import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import HeaderElement from "./HeaderElement";

const RootLayout = () => {
  return (
    <div className=" flex flex-col">
      <HeaderElement />
      <div className="flex flex-row justify-center">
        <SideBar />
        <div className=" flex flex-col mx-auto w-[1200px] h-[720px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
