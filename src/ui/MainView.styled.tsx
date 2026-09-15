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
  font-family: Verdana, Geneva, sans-serif;
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
