import { createBrowserRouter } from "react-router-dom";
import AddProduct from "./features/products/routes/AddProduct";
import EditProduct from "./features/products/routes/EditProduct";
import ProductList from "./features/products/routes/ProductList";
import RootLayout from "./layouts/RootLayout";

// import { ProtectedRoute } from "./layouts/ProtectedRoute";

export const routes = createBrowserRouter([
    
  {
    path: "/",
    element: (
    //   <ProtectedRoute>
        <RootLayout />
    //   </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: < ProductList/>,
      },
      {
        path: "/add-product",
        element: < AddProduct/>,
      },
      {
        path: "/edit-product/:id",
        element: <EditProduct />,
      },
     
    ],
  },
]);
