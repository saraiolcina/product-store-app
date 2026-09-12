import { useEffect, useState, useCallback, useRef } from "react";

import {
  useProductsReturnType,
  Product,
  Status,
  ProductsResponse,
} from "../types/types";

const PRODUCTS_URL: string = "https://dummyjson.com/products";

export const useProducts = (): useProductsReturnType => {
  const [status, setStatus] = useState<Status>(Status.INITIAL);
  const [products, setProducts] = useState<Product[]>([]);
  const controllerRef = useRef<AbortController | null>(null);

  const fetchData: () => Promise<void> = useCallback(async () => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      setStatus(Status.LOADING);

      const response = await fetch(PRODUCTS_URL, { signal: controller.signal });
      if (!response.ok) {
        throw new Error(`An HTTP error occurred: ${response.status}`);
      }

      const responseData: ProductsResponse = await response.json();
      if (!controller.signal.aborted) {
        setProducts(responseData.products);
        setStatus(Status.SUCCESS);
      }
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        setStatus(Status.ERROR);
        console.error("An error occurred: ", error);
      }
    }
  }, []);

  useEffect(() => {
    fetchData();
    return () => controllerRef.current?.abort();
  }, [fetchData]);

  return {
    products,
    status,
    refetch: fetchData,
  };
};
