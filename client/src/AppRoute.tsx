import { createBrowserRouter } from "react-router-dom";
import AddUser from "./features/users/routes/AddUser";
import EditUser from "./features/users/routes/EditUser";
import UserList from "./features/users/routes/UserList";
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
        element: < UserList/>,
      },
      {
        path: "/add-user",
        element: < AddUser/>,
      },
      {
        path: "/edit-user/:id",
        element: <EditUser />,
      },
     
    ],
  },
]);
