import { ReactElement } from "react";

import {
  PaginationWrapper,
  ArrowButton,
  PageButton,
} from "./Components.styled";

type Props = {
  currentPage: number;
  handleOnPageClick: (selectedPage: number) => void;
  totalPages: number;
};

export const Pagination = ({
  currentPage,
  handleOnPageClick,
  totalPages,
}: Props): ReactElement => {
  return (
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
            aria-current={currentPage === idx + 1 ? "page" : undefined}
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
  );
};
