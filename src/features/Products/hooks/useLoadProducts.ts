import { useQuery } from "@tanstack/react-query";
import productsManager from "../services";

export const useLoadProducts = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["get-all-products"],
    queryFn: () => productsManager.getProducts(),
  });

  return { data, error, isLoading };
};

export const useLoadHighlightedProducts = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["get-highlighted-products"],
    queryFn: () => productsManager.getHighlightedProducts(),
  });

  return { data, error, isLoading };
};
