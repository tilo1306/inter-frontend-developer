import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Product } from "../pages/Product";
export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/:id", element: <Product /> },
    { path: "*", element: <NotFound /> },
  ]);
};
