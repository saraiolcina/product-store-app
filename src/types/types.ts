export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

export enum Status {
  INITIAL = "INITIAL",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  LOADING = "LOADING",
}

export type useProductsReturnType = {
  products: Product[];
  status: Status;
  refetch: () => Promise<void>;
};

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
