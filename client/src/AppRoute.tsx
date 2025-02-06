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
    element: <Register/>,
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
        path: "production-list",
        element: <ProductList />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "edit-product/:id",
        element: <EditProduct />,
      },
    ],
  },
]);
