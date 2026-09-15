import styled from "styled-components";

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
};

const media = {
  mobile: `@media (min-width: ${breakpoints.mobile})`,
  tablet: `@media (min-width: ${breakpoints.tablet})`,
  laptop: `@media (min-width: ${breakpoints.laptop})`,
};

export const TitleWrapper = styled.h1`
  color: #5b6dcd;
`;

export const ProductWrapper = styled.div`
  padding: 10px;
  margin: 10px;
  overflow: hidden;
  border-radius: 15px;
  border: 3px solid #5b6dcd;

  ${media.tablet} {
    min-height: 580px;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 25px;
  font-weight: 500;
`;

export const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;

  ${media.tablet} {
    width: 250px;
    height: 250px;
  }
`;

export const PriceWrapper = styled.p`
  font-weight: 600;
`;

export const ProductListWrapper = styled.ul`
  padding: 0px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px;
`;

export const PageButton = styled.button<{ $isActive: boolean }>`
  background-color: ${(props) => (props.$isActive ? "#d2d8f7" : "transparent")};
  padding: 8px 12px;
  border: 1px solid gray;
  color: black;
  margin: 0 4px;
  border-radius: 5px;
`;

export const ArrowButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#e4e6f0" : "transparent")};
  color: ${(props) => (props.disabled ? "#9ca3af" : "black")};
  padding: 8px 12px;
  border: 1px solid gray;
  margin: 0 4px;
  border-radius: 5px;
`;

export const CategoryAndSortingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 50px;

  ${media.tablet} {
    position: relative;
  }
`;

export const CategoryFilterWrapper = styled.div`
  display: inline-grid;
  justify-content: center;
  position: static;
  border: 5px solid #d2d8f7;

  label {
    font-size: 20px;
  }

  select {
    padding: 10px;
    margin: 10px;
    font-size: 15px;
    border-radius: 5px;
  }

  ${media.tablet} {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 0;
    margin-right: auto;
    padding: 5px;
    border-radius: 5px;
    border: 5px solid #d2d8f7;
  }
`;

export const SortDropdownWrapper = styled.div`
  display: inline-grid;
  justify-content: center;
  position: static;

  border: 5px solid #d2d8f7;

  label {
    font-size: 20px;
  }

  select {
    padding: 10px;
    margin: 10px;
    font-size: 15px;
    border-radius: 5px;
  }

  ${media.tablet} {
    position: absolute;
    top: 0;
    right: 0;
    margin-left: auto;
    margin-right: 0;
    padding: 5px;
    border-radius: 5px;
    border: 5px solid #d2d8f7;
  }
`;
