import { ReactElement } from "react";

import {
  TitleWrapper,
  CategoryAndSortingWrapper,
  CategoryFilterWrapper,
  SortDropdownWrapper,
} from "./Components.styled";

import { SortingOptionsType, SortingOptionsEnum } from "../types/types";

type Props = {
  selectedCategory: string;
  handleFilterOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  sortingOption: string;
  handleSortOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  categories: Set<string>;
};

export const Header = ({
  selectedCategory,
  handleFilterOnChange,
  sortingOption,
  handleSortOnChange,
  categories,
}: Props): ReactElement => {
  const sortingOptions: SortingOptionsType[] = [
    {
      value: SortingOptionsEnum.PRICE_DESC,
      label: "Price: Highest",
    },
    {
      value: SortingOptionsEnum.PRICE_ASC,
      label: "Price: Lowest",
    },
    {
      value: SortingOptionsEnum.NAME_DESC,
      label: "Name: Z to A",
    },
    {
      value: SortingOptionsEnum.NAME_ASC,
      label: "Name: A to Z",
    },
  ];

  return (
    <>
      <TitleWrapper>Product List</TitleWrapper>
      <h2>Here is a list of all our products</h2>
      <CategoryAndSortingWrapper>
        <CategoryFilterWrapper>
          <label htmlFor="category-filter">Category</label>
          <select
            name="category-filter"
            id="category-filter"
            value={selectedCategory}
            onChange={handleFilterOnChange}
          >
            <option value="">ALL CATEGORIES</option>
            {Array.from(categories, (category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </CategoryFilterWrapper>
        <SortDropdownWrapper>
          <label htmlFor="sort-dropdown">Sort</label>
          <select
            name="sort-dropdown"
            id="sort-dropdown"
            value={sortingOption}
            onChange={handleSortOnChange}
          >
            <option value="">Sort By</option>
            {sortingOptions.map((option, idx) => {
              return (
                <option key={idx} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </SortDropdownWrapper>
      </CategoryAndSortingWrapper>
    </>
  );
};
