import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import HeaderElement from "./HeaderElement";

const RootLayout = () => {
  return (
    <div className="bg-gray-300 min-h-screen flex">
      {/* Fixed Header Wrapper */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <HeaderElement />
      </div>

      {/* Fixed Sidebar Wrapper */}
      <div className="fixed top-[60px] left-0 h-[calc(100vh-60px)] w-[250px] z-40">
        <SideBar />
      </div>

      {/* Main Content Wrapper */}
      <div className="flex-1 ml-[250px] mt-[60px] h-[calc(100vh-60px)] overflow-auto px-3">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
