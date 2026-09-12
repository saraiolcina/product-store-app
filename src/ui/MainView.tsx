import { useState, useEffect, type ReactElement } from "react";

import { useProducts } from "../hooks/useFetchData";

import {
  MainViewWrapper,
  TitleWrapper,
  ProductWrapper,
  ProductTitle,
  ImageWrapper,
  PriceWrapper,
  PaginationWrapper,
  PageButton,
  ArrowButton,
} from "./MainView.styled";

import { Product, Status } from "../types/types";

export const MainView = (): ReactElement => {
  const { products, status, refetch } = useProducts();

  const itemsPerPage: number = 4;
  const totalPages: number = Math.ceil(products.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const startIndex: number = (currentPage - 1) * itemsPerPage;

  const displayItems: Product[] = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  const handleOnPageClick = (selectedPage: number): void => {
    setCurrentPage(selectedPage);
  };

  if (status === Status.INITIAL || status === Status.LOADING) {
    return <p role="status">Product list is loading!</p>;
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
      <ul id="product-list" aria-label="Product List">
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
      </ul>
      <PaginationWrapper aria-label="Pagination">
        <ArrowButton
          type="button"
          aria-label="Previous Page Button"
          onClick={() => handleOnPageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<<"}
        </ArrowButton>
        {Array.from({ length: totalPages }, (_, idx) => {
          return (
            <PageButton
              type="button"
              aria-label={`Page Number ${idx + 1}`}
              key={idx + 1}
              onClick={() => handleOnPageClick(idx + 1)}
              $isActive={currentPage === idx + 1}
            >
              {idx + 1}
            </PageButton>
          );
        })}
        <ArrowButton
          type="button"
          aria-label="Next Page Button"
          onClick={() => handleOnPageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {">>"}
        </ArrowButton>
      </PaginationWrapper>
    </MainViewWrapper>
  );
};
