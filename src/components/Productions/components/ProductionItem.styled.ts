import styled from "styled-components";

export const ContentContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 24.5px 20px 26.5px 28px;
  border: 1px solid var(--grey-shadow);
`;

export const TitleContainer = styled("div")`
  display: flex;
  flex-direction: column;

  & .title {
    margin-bottom: 5px;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 17px;

    line-height: 24px;
    color: --black;
  }

  & .description {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 13px;

    line-height: 30px;
    color: var(--dark-grey);
  }
`;

export const Divider = styled("div")`
  width: 100%;
  height: 1px;
  margin-top: 17.5px;
  margin-bottom: 22px;
  background-color: var(--grey-shadow);
`;

export const Container = styled("div")`
  margin-bottom: 30px;

  &:last-of-type {
    margin-bottom: 0px;
  }
`;

export const PriceContainer = styled("div")`
  display: flex;
  justify-content: space-between;

  & .price {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 15px;

    line-height: 24px;
    color: var(--black);
  }

  & .buy-button {
    border: none;
    cursor: pointer;
  }
`;
