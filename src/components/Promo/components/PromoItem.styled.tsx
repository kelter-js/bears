import styled from "styled-components";

import { device } from "../../../helpers";

export const Container = styled("li")`
  display: flex;
  justify-content: space-between;
  height: 103px;
  width: 100%;
  padding: 21px 27px 22px 30px;
  background-color: var(--promo);

  &:nth-child(even) {
    background-color: var(--promo-secondary);
  }

  & .promoDescription {
    width: 130px;
    font-weight: 700;
    font-size: 19px;

    line-height: 24px;
    color: var(--white);
    font-family: "Open Sans", sans-serif;
  }
`;
