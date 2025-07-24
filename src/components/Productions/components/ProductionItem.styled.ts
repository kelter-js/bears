import styled from "styled-components";
import { device } from "../../../helpers";

export const ContentContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 24.5px 20px 26.5px 28px;
  border: 1px solid var(--grey-shadow);

  @media ${device.tablet} and ${device.maxTablet} {
    justify-content: space-between;
    width: 100%;
    padding: 27px 32px 25.5px 34px;
  }

  @media ${device.desktop} {
    height: 197px;
    padding: 27px 33px 25.5px 27px;
    box-sizing: border-box;
  }
`;

export const BuyContainer = styled("div")`
  @media ${device.desktop} {
    margin-top: auto;
  }
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
    color: var(--black);
  }

  & .title:hover {
    opacity: 0.6;
  }

  & .title:active {
    opacity: 0.3;
  }

  & .description {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 13px;

    line-height: 30px;
    color: var(--dark-grey);
  }

  @media ${device.tablet} and ${device.maxTablet} {
    & .title {
      font-size: 20px;
      margin-bottom: 6.5px;
    }

    & .description {
      font-size: 15px;
    }
  }

  @media ${device.desktop} {
    & .title {
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 6px;
      width: 230px;
    }

    & .description {
      font-size: 15px;
      line-height: 30px;
    }
  }
`;

export const Divider = styled("div")`
  width: 100%;
  height: 1px;
  margin-top: 17.5px;
  margin-bottom: 22px;
  background-color: var(--grey-shadow);

  @media ${device.tablet} and ${device.maxTablet} {
    margin-top: 0;
    margin-bottom: 23.5px;
  }

  @media ${device.desktop} {
    margin-top: 0;
    margin-bottom: 23px;
  }
`;

export const Container = styled("div")`
  margin-bottom: 30px;

  @media ${device.tablet} and ${device.maxTablet} {
    display: flex;
    margin-bottom: 54px;
  }

  &:last-of-type {
    margin-bottom: 0px;
  }

  @media ${device.desktop} {
    margin-bottom: 0px;
    align-self: stretch;
  }

  &:hover {
    .content-container {
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
      background: var(--white);
    }
  }

  &:active {
    .content-container {
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      background: var(--white);
    }
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

  & .buy-icon {
    opacity: 0.2;
  }

  & .buy-icon:hover {
    color: var(--teal);
    opacity: 1;
  }

  & .buy-icon:active {
    color: var(--teal);
    opacity: 0.3;
  }

  @media ${device.tablet} and ${device.maxTablet} {
    & .price {
      font-size: 17px;
    }
  }

  @media ${device.desktop} {
    & .price {
      font-size: 17px;
    }
  }
`;
