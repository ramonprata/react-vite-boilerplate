import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles/index.scss";
import { HomePage } from "@features/Home";
import { ProductsPage } from "@features/Products";
import RootLayout from "./RootLayout";
import { ROUTES } from "../utils/constants";
import { useInitializeApp } from "../hooks/useInitializeApp";

const queryClient = new QueryClient();

const AppRoutes = () => {
  useInitializeApp();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path={ROUTES.HOME} element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
