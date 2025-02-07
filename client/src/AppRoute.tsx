import { createBrowserRouter } from "react-router-dom";
import EditProduct from "./features/products/routes/EditProduct";
import ProductList from "./features/products/routes/ProductList";
import RootLayout from "./layouts/RootLayout";
import AddProduct from "./features/products/routes/AddProduct";
import { ProtectedRoute } from "./layouts/ProtectedRoute";
import Login from "./auth/login/routes/Login";
import Register from "./auth/register/routes/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <div>Dashboard</div>,
      },
      {
        path: "analytics",
        element: <div>Analytics</div>,
      },
      {
        path: "reporting",
        element: <div>Reporting</div>,
      },
      {
        path: "projects",
        element: <div>Projects</div>,
      },
      {
        path: "orders",
        element: <div>Orders</div>,
      },
      {
        path: "products",
        children: [
          {
            path: "list",
            element: <ProductList />,
          },
          {
            path: "add",
            element: <AddProduct />,
          },
          {
            path: "edit/:id",
            element: <EditProduct />,
          },
        ],
      },
      {
        path: "inbox",
        element: <div>Inbox</div>,
      },
      {
        path: "profile",
        element: <div>Profile</div>,
      },
      {
        path: "settings",
        element: <div>Settings</div>,
      },
    ],
  },
]);
