import styled from "styled-components";
import { device } from "../../helpers";

export const Container = styled("section")`
  margin-top: 31px;

  & .item-description,
  & .item-price {
    font-family: var(--font-family);
    line-height: 24px;
    color: var(--dark-grey);
  }

  & .item-description {
    margin-top: 17.5px;
    margin-bottom: 28px;
    font-weight: 400;
    font-size: 15px;
  }

  & .item-price {
    margin-top: 25.5px;
    margin-bottom: 24.5px;
    font-weight: 700;
    font-size: 17px;
    text-align: center;
  }

  @media ${device.tablet} and ${device.maxTablet} {
    margin-top: 15.5px;

    & .item-description {
      margin: 0;
      margin-bottom: 48px;
      font-size: 17px;
      line-height: 30px;
    }

    & .item-price {
      margin-top: 57px;
      margin-bottom: 33px;
      font-weight: 700;
      font-size: 20px;
      text-align: center;
    }
  }

  @media ${device.desktop} {
    margin-top: 37px;

    & .item-description {
      margin: 0;
      margin-bottom: 50px;
      font-size: 17px;
      line-height: 30px;
    }

    & .item-price {
      margin-top: 109px;
      margin-bottom: 33px;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
    }

    & .main-item-pattern {
      display: block;
      width: 100%;
      padding: 0 50px;
    }
  }
`;

export const DetailsContainer = styled("div")`
  position: relative;
  margin-top: 50.5px;

  @media ${device.desktop} {
    position: static;
    margin-top: 0;
  }
`;

export const DataContainer = styled("div")`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} and ${device.maxTablet} {
    width: 44%;
  }

  @media ${device.desktop} {
    width: 28%;
    margin-top: 153px;
    margin-left: 175px;
  }
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 0px 30px 36px 30px;

  @media ${device.tablet} and ${device.maxTablet} {
    padding: 0px 50px 52px 50px;

    & img {
      position: absolute;
      top: 14px;
      right: 0;
      height: 404px;
      width: 334px;
    }
  }

  @media ${device.desktop} {
    position: relative;
    padding: 0 50px;
    padding-bottom: 73px;

    & img {
      position: absolute;
      right: 50px;
      top: 0;
      height: 636px;
      width: 525px;
    }
  }
`;

export const HeaderContainer = styled("div")`
  display: flex;
  flex-direction: column;

  & .item-header,
  & .item-label {
    font-family: var(--font-family);
    font-weight: 700;
  }

  & .item-header {
    font-size: 25px;
    line-height: 30px;
    color: var(--black);
  }

  & .item-label {
    margin-top: 3.5px;
    font-size: 17px;
    line-height: 20px;
    text-transform: uppercase;
    color: var(--promo);
  }

  @media ${device.tablet} and ${device.maxTablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & .item-header {
      font-size: 43px;
      line-height: 50px;
    }

    & .item-label {
      width: 100px;
      text-align: center;
      line-height: 17px;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--promo);
    }
  }

  @media ${device.desktop} {
    position: absolute;
    top: 61px;
    left: 82px;
    flex-direction: row-reverse;
    gap: 38px;
    width: calc(100% - 82px);
    justify-content: flex-end;
    align-items: center;
    z-index: 1;

    & .item-header {
      line-height: 57px;
      font-size: 53px;
      font-weight: 700;
    }

    & .item-label {
      font-size: 17px;
      line-height: 17px;
      width: 100px;
      text-align: center;
    }
  }
`;

export const List = styled("ul")`
  margin-bottom: 28px;

  @media ${device.tablet} and ${device.maxTablet} {
    margin-bottom: 0;
  }

  @media ${device.desktop} {
    margin-bottom: 0;
  }
`;

export const ItemProperty = styled("li")`
  display: flex;
  padding: 10px 0;

  border-bottom: 1px solid var(--grey-shadow);

  & .item-property {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 15px;

    line-height: 20px;
    color: var(--dark-grey);
  }

  & .property-name {
    min-width: 100px;
  }

  @media ${device.tablet} and ${device.maxTablet} {
    &:first-of-type {
      padding-top: 0;
    }
  }
`;
