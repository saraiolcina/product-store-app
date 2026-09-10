import { type ReactElement } from "react";

import { useProducts } from "../hooks/useFetchData";

import {
  MainViewWrapper,
  TitleWrapper,
  ProductWrapper,
  ProductTitle,
  ImageWrapper,
  PriceWrapper,
} from "./MainView.styled";

import { Product, Status } from "../types/types";

export const MainView = (): ReactElement => {
  const { products, status, refetch } = useProducts();

  if (status === Status.INITIAL || status === Status.LOADING) {
    return <p role="status">It's loading!</p>;
  }

  if (status === Status.ERROR) {
    return (
      <>
        <p role="alert">There's an error, please retry</p>
        <button type="button" onClick={refetch}>
          Retry
        </button>
      </>
    );
  }

  return (
    <MainViewWrapper role="main">
      <TitleWrapper>Product List</TitleWrapper>
      <h2>Here is a list of all our products</h2>
      <ul id="product-list" aria-label="product-list">
        {products?.map((product: Product) => {
          return (
            <li key={product.id}>
              <ProductWrapper id={`product-${product.id}`}>
                <ProductTitle>{product.title}</ProductTitle>
                <p>{product.description}</p>
                <ImageWrapper
                  src={product.images[0] ?? "/placeholder.png"}
                  alt={`Photo of ${product.title}`}
                />
                <PriceWrapper>Price: {product.price}</PriceWrapper>
              </ProductWrapper>
            </li>
          );
        })}
      </ul>
    </MainViewWrapper>
  );
};
