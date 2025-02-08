import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/login/routes/Login";
import Register from "./auth/register/routes/Register";
import Analytics from "./features/analytics/routes/Analytics";
import Dashboard from "./features/dashboard/routes/Dashboard";
import Orders from "./features/orders/routes/Orders";
import AddProduct from "./features/products/routes/AddProduct";
import EditProduct from "./features/products/routes/EditProduct";
import ProductList from "./features/products/routes/ProductList";
import Projects from "./features/projects/routes/Projects";
import Reports from "./features/reports/routes/Reports";
import { ProtectedRoute } from "./layouts/ProtectedRoute";
import RootLayout from "./layouts/RootLayout";

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
    path: "/",
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "reporting",
        element: <Reports />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "orders",
        element:  <Orders />,
      },
      {
        path: "",
        children: [
          {
            path: "products",
            element: <ProductList />,
          },
          {
            path: "products/add",
            element: <AddProduct />,
          },
          {
            path: "products/:id",
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
