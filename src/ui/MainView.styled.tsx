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

export const MainViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Verdana;
  font-size: 15px;
  padding: 15px;
  text-align: center;

  li {
    list-style-type: none;
  }

  ${media.tablet} {
    #product-list {
      display: flex;
    }

    #product-list li {
      display: inline;
    }
  }
`;

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
