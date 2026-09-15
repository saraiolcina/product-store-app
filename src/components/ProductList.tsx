import { ReactElement } from "react";

import { Product } from "../types/types";

import {
  ProductListWrapper,
  ProductWrapper,
  ProductTitle,
  ImageWrapper,
  PriceWrapper,
} from "./Components.styled";

type Props = {
  displayItems: Product[];
};

export const ProductList = ({ displayItems }: Props): ReactElement => {
  return (
    <ProductListWrapper id="product-list" aria-label="Product List">
      {displayItems?.map((product: Product) => {
        return (
          <li key={product.id}>
            <ProductWrapper id={`product-${product.id}`}>
              <ProductTitle>{product.title}</ProductTitle>
              <p>{product.description}</p>
              <ImageWrapper
                src={product.images[0] ?? "/placeholder.png"}
                alt={`Photo of ${product.title}`}
              />
              <PriceWrapper aria-label="Price Section">
                Price: {product.price}
              </PriceWrapper>
            </ProductWrapper>
          </li>
        );
      })}
    </ProductListWrapper>
  );
};
