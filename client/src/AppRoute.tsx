import { createBrowserRouter } from "react-router-dom";
import UserList from "./features/users/routes/UserList";
import RootLayout from "./layouts/RootLayout";
import AddProduct from "./features/users/routes/AddProduct";
import EditProduct from "./features/users/routes/EditProduct";

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
        element: < UserList/>,
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
