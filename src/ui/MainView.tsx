import { useState, useEffect, useMemo, type ReactElement } from "react";

import { useProducts } from "../hooks/useFetchData";

import { ProductList } from "../components/ProductList";
import { Pagination } from "../components/Pagination";
import { Header } from "../components/Header";

import { MainViewWrapper } from "./MainView.styled";

import { Product, Status, SortingOptionsEnum } from "../types/types";

export const MainView = (): ReactElement => {
  const { products, status, refetch } = useProducts();

  const categories: Set<string> = new Set(
    useMemo(() => products?.map((p) => p.category.toUpperCase()), [products])
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [sortingOption, setSortingOption] = useState<string>("");
  const productList: Product[] = useMemo(() => {
    const filteredList: Product[] = selectedCategory
      ? products.filter(
          (product) => product.category === selectedCategory?.toLowerCase()
        )
      : products;

    const sortedList: Product[] = [...filteredList];

    sortedList.sort((a, b) => {
      switch (sortingOption) {
        case SortingOptionsEnum.PRICE_DESC:
          return b.price - a.price;
        case SortingOptionsEnum.PRICE_ASC:
          return a.price - b.price;
        case SortingOptionsEnum.NAME_DESC:
          return b.title.localeCompare(a.title);
        case SortingOptionsEnum.NAME_ASC:
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return sortedList;
  }, [products, selectedCategory, sortingOption]);

  const itemsPerPage: number = 4;
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const totalPages: number = Math.ceil(productList.length / itemsPerPage);

  const displayItems: Product[] = productList.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [products, selectedCategory, sortingOption]);

  const handleOnPageClick = (selectedPage: number): void => {
    setCurrentPage(selectedPage);
  };

  const handleFilterOnChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedCategory(e.target.value);
  };

  const handleSortOnChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSortingOption(e.target.value);
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
      <Header
        selectedCategory={selectedCategory}
        handleFilterOnChange={handleFilterOnChange}
        sortingOption={sortingOption}
        handleSortOnChange={handleSortOnChange}
        categories={categories}
      />
      <ProductList displayItems={displayItems} />
      <Pagination
        currentPage={currentPage}
        handleOnPageClick={handleOnPageClick}
        totalPages={totalPages}
      />
    </MainViewWrapper>
  );
};
