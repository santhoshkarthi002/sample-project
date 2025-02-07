import { useState } from "react";
import { AiFillProduct } from "react-icons/ai";
import { FaDiagramProject } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi2";
import { MdAnalytics, MdDashboardCustomize } from "react-icons/md";
import { RiMenuFold3Fill } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import InboxIcon from "../../public/InboxIcon";
import Logout from "../../public/Logout";
import Profile from "../../public/Profile";
import Settings from "../../public/Settings";
import Tooltip from "@/components/Tooltip";
import { RiMenuFold4Fill } from "react-icons/ri";

const sideBarItemsMain = [
  {
    name: "Dashboard",
    icon: MdDashboardCustomize,
    link: "/admin/dashboard",
    key: "dashboard",
  },
  {
    name: "Analytics",
    icon: MdAnalytics,
    link: "/admin/analytics",
    key: "analytics",
  },
  {
    name: "Reporting",
    icon: TbReportAnalytics,
    link: "/admin/reporting",
    key: "reporting",
  },
  {
    name: "Projects",
    icon: FaDiagramProject,
    link: "/admin/projects",
    key: "projects",
  },
  {
    name: "Orders",
    icon: HiShoppingBag,
    link: "/admin/orders",
    key: "orders",
  },
  {
    name: "Products",
    icon: AiFillProduct,
    link: "/admin/products/list",
    key: "products",
  },
];

const sideBarItemsSub = [
  {
    name: "Inbox",
    icon: InboxIcon,
    link: "/admin/inbox",
    badge: 14,
    key: "inbox",
  },
  {
    name: "Profile",
    icon: Profile,
    link: "/admin/profile",
    key: "profile",
  },
  {
    name: "Settings",
    icon: Settings,
    link: "/admin/settings",
    key: "settings",
  },
  {
    name: "Log Out",
    icon: Logout,
    link: "#",
    key: "logout",
  },
];

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isUpdate = false;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative flex h-[93vh] w-full p-2 ${
        isOpen ? "max-w-[20rem] " : "max-w-[4.5rem] items-center mt-2"
      } flex-col rounded-xl bg-white bg-clip-border  text-gray-700 shadow-xl shadow-blue-gray-900/5`}
    >
      {isOpen ? (
        <div className="py-2 mb-2 flex items-center justify-between">
          <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Sidebar
          </h5>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleClick}
          >
            <Tooltip text="Close Sidebar" position="left">
              <RiMenuFold3Fill size={25} />
            </Tooltip>
          </div>
        </div>
      ) : (
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleClick}
        >
          <Tooltip text="Open Sidebar" position="right">
            <RiMenuFold4Fill size={25} />
          </Tooltip>
        </div>
      )}
      <nav
        className={`flex ${
          isOpen ? "min-w-[240px]" : "min-w-[20px] "
        } flex-col gap-1 font-sans text-base font-normal text-blue-gray-700`}
      >
        <div className="w-full">
          <div className={`${isOpen ? "overflow-hidden" : "mt-5"}`}>
            <div className="w-full py-1 font-sans text-sm  font-light leading-normal text-gray-700">
              <nav className="flex flex-col gap-1 font-sans text-base font-normal ">
                {sideBarItemsMain.map((item, index) => {
                  const isActiveMain = location.pathname === item.link; // Check active route
                  const isActive = location.pathname.includes(item.key); // Check active route

                  return (
                    <Link to={item.link} key={index} className="w-full">
                      <div
                        role="button"
                        className={`flex items-center w-full p-3 gap-5 transition-all rounded-lg outline-none text-start 
                          ${
                            isActiveMain
                              ? `text-white bg-gray-800 ${isOpen ? "pl-6" : ""}`
                              : isActive
                              ? `text-white bg-gray-500 ${isOpen ? "pl-6" : ""}`
                              : "hover:bg-blue-gray-50 hover:text-blue-gray-900"
                          } 
                          focus:bg-blue-gray-50 active:bg-blue-gray-50`}
                      >
                        <Tooltip
                          text={item.name}
                          position="right"
                          enabled={!isOpen}
                        >
                          <div className="flex items-center">
                            <item.icon size={20} />
                          </div>
                        </Tooltip>

                        {isOpen && item.name}
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
        <hr className="my-2 border-blue-gray-50" />
        {sideBarItemsSub.map((item, index) => {
          const isActiveMain = location.pathname === item.link; // Check active route
          const isActive = location.pathname.includes(item.key); // Check active route
          return (
            <Link to={item.link} key={index} className="w-full">
              <div
                role="button"
                className={`flex items-center w-full p-3 gap-5 transition-all rounded-lg outline-none text-start 
                          ${
                            isActiveMain
                              ? `text-white bg-gray-800 ${isOpen ? "pl-6" : ""}`
                              : isActive
                              ? `text-white bg-gray-500 ${isOpen ? "pl-6" : ""}`
                              : "hover:bg-blue-gray-50 hover:text-blue-gray-900"
                          } 
                          focus:bg-blue-gray-50 active:bg-blue-gray-50`}
              >
                <Tooltip text={item.name} position="right" enabled={!isOpen}>
                  <div className="flex items-center">
                    <item.icon />
                  </div>
                </Tooltip>
                {isOpen && item.name}
                {isOpen && item.badge && (
                  <div className="grid ml-auto place-items-center justify-self-end">
                    <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-full select-none whitespace-nowrap bg-blue-gray-500/20 text-blue-gray-900">
                      <span className="">{item.badge}</span>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </nav>
      {isUpdate && isOpen && (
        <div
          role="alert"
          className="relative flex w-full px-4 py-4 mt-auto text-base text-white bg-gray-900 rounded-lg font-regular"
        >
          <div className="mr-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-12 h-12 mb-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              ></path>
            </svg>
            <h6 className="block mb-1 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit">
              Upgrade to PRO
            </h6>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-inherit opacity-80">
              Upgrade to Material Tailwind PRO and get even more components,
              plugins, advanced features and premium.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="block font-sans text-sm antialiased font-medium leading-normal text-inherit opacity-80"
              >
                Dismiss
              </a>
              <a
                href="#"
                className="block font-sans text-sm antialiased font-medium leading-normal text-inherit"
              >
                Upgrade Now
              </a>
            </div>
          </div>
          <button
            className="!absolute  top-3 right-3 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SideBar;
