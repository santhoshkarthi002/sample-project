import InboxIcon from "../public/InboxIcon";
import Logout from "../public/Logout";
import Profile from "../public/Profile";
import Settings from "../public/Settings";
import { AiFillProduct } from "react-icons/ai";
import { FaDiagramProject } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi2";
import { MdAnalytics, MdDashboardCustomize } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

export const sideBarItemsMain = [
  {
    name: "Dashboard",
    icon: MdDashboardCustomize,
    link: "/dashboard",
    key: "dashboard",
  },
  {
    name: "Products",
    icon: AiFillProduct,
    link: "/products",
    key: "products",
  },
  {
    name: "Analytics",
    icon: MdAnalytics,
    link: "/analytics",
    key: "analytics",
  },
  {
    name: "Reporting",
    icon: TbReportAnalytics,
    link: "/reporting",
    key: "reporting",
  },
  {
    name: "Projects",
    icon: FaDiagramProject,
    link: "/projects",
    key: "projects",
  },
  {
    name: "Orders",
    icon: HiShoppingBag,
    link: "/orders",
    key: "orders",
  },
];

export const sideBarItemsSub = [
  {
    name: "Inbox",
    icon: InboxIcon,
    link: "/inbox",
    badge: 14,
    key: "inbox",
  },
  {
    name: "Profile",
    icon: Profile,
    link: "/profile",
    key: "profile",
  },
  {
    name: "Settings",
    icon: Settings,
    link: "/settings",
    key: "settings",
  },
  {
    name: "Log Out",
    icon: Logout,
    link: "#",
    key: "logout",
  },
];
