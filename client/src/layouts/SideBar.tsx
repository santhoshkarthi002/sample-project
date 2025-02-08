import Tooltip from "@/components/Tooltip";
import { sideBarItemsMain, sideBarItemsSub } from "@/menuItems";
import { useState } from "react";
import { RiMenuFold3Fill, RiMenuFold4Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isUpdate = false;

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div
      className={`sticky top-0 h-screen flex flex-col w-full p-2 transition-all duration-300
      ${isOpen ? "max-w-[20rem]" : "max-w-[4.5rem] items-center"}
      bg-white shadow-xl shadow-blue-gray-900/5 rounded-xl`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between py-2 mb-2">
        {isOpen && (
          <h5 className="text-xl font-semibold text-blue-gray-900">Sidebar</h5>
        )}
        <div className="cursor-pointer" onClick={handleClick}>
          <Tooltip
            text={isOpen ? "Close Sidebar" : "Open Sidebar"}
            position="right"
            enabled={!isOpen}
          >
            {isOpen ? (
              <RiMenuFold3Fill size={25} />
            ) : (
              <RiMenuFold4Fill size={25} />
            )}
          </Tooltip>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`flex flex-col gap-1 font-sans text-base`}>
        {/* Main Menu */}
        <div className="w-full">
          {sideBarItemsMain.map((item, index) => {
            const isActiveMain = location.pathname === item.link;
            const isActive = location.pathname.includes(item.key);

            return (
              <Link to={item.link} key={index} className="w-full">
                <div
                  role="button"
                  className={`flex items-center p-3 gap-5 transition-all rounded-lg 
                    ${
                      isActiveMain
                        ? "bg-gray-800 text-white"
                        : isActive
                        ? "bg-gray-500 text-white"
                        : "hover:bg-gray-100"
                    } 
                    ${isOpen ? "pl-6" : "justify-center"}`}
                >
                  <Tooltip text={item.name} position="right" enabled={!isOpen}>
                    <item.icon size={20} />
                  </Tooltip>
                  {isOpen && item.name}
                </div>
              </Link>
            );
          })}
        </div>

        <hr className="my-2 border-gray-200" />

        {/* Sub Menu */}
        {sideBarItemsSub.map((item, index) => {
          const isActiveMain = location.pathname === item.link;
          const isActive = location.pathname.includes(item.key);

          return (
            <Link to={item.link} key={index} className="w-full">
              <div
                role="button"
                className={`flex items-center p-3 gap-5 transition-all rounded-lg
                    ${
                      isActiveMain
                        ? "bg-gray-800 text-white"
                        : isActive
                        ? "bg-gray-500 text-white"
                        : "hover:bg-gray-100"
                    }
                    ${isOpen ? "pl-6" : "justify-center"}`}
              >
                <Tooltip text={item.name} position="right" enabled={!isOpen}>
                  <item.icon />
                </Tooltip>
                {isOpen && item.name}
                {isOpen && item.badge && (
                  <div className="ml-auto px-2 py-1 text-xs font-bold uppercase rounded-full bg-gray-200">
                    {item.badge}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Upgrade Message (Only visible when sidebar is open) */}
      {isUpdate && isOpen && (
        <div className="mt-auto p-4 bg-gray-900 text-white rounded-lg">
          <h6 className="text-base font-semibold">Upgrade to PRO</h6>
          <p className="text-sm opacity-80">
            Get premium features and more components.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="text-sm font-medium opacity-80">
              Dismiss
            </a>
            <a href="#" className="text-sm font-medium">
              Upgrade Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
