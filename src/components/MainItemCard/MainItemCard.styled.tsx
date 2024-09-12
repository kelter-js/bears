import styled from "styled-components";

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
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 0px 30px 36px 30px;
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
`;

export const List = styled("ul")`
  margin-bottom: 28px;
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
`;

export const BuyButton = styled("button")`
  height: 52px;
  width: 100%;
  border: 2px solid var(--dark-grey);

  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;

  line-height: 20px;
  text-transform: uppercase;
  text-align: center;
  color: var(--dark-grey);
  cursor: pointer;
`;
