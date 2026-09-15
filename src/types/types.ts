export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
}

export enum Status {
  INITIAL = "INITIAL",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  LOADING = "LOADING",
}

export enum SortingOptionsEnum {
  PRICE_DESC = "PRICE_DESC",
  PRICE_ASC = "PRICE_ASC",
  NAME_DESC = "NAME_DESC",
  NAME_ASC = "NAME_ASC",
}

export interface SortingOptionsType {
  value: SortingOptionsEnum;
  label: string;
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
