import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { routes } from "./AppRoute";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
     <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}></RouterProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App