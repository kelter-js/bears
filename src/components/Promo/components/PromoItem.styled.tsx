import styled from "styled-components";

import { device } from "../../../helpers";

export const Container = styled("li")`
  display: flex;
  justify-content: space-between;
  height: 103px;
  width: 100%;
  padding: 21px 27px 22px 30px;
  background-color: var(--promo);

  cursor: pointer;

  & .promo-interier,
  & .promo-toy {
    opacity: 0.5;
  }

  &:nth-child(even) {
    background-color: var(--promo-secondary);
  }

  &:hover .promo-interier,
  &:hover .promo-toy {
    opacity: 0.7;
  }

  &:active .promo-interier,
  &:active .promo-toy {
    opacity: 0.3;
  }

  & .promoDescription {
    width: 130px;
    font-weight: 700;
    font-size: 19px;

    line-height: 24px;
    color: var(--white);
    font-family: "Open Sans", sans-serif;
  }

  @media ${device.tablet} and ${device.maxTablet} {
    height: 119px;
    &:hover {
      height: 124px;
      padding-bottom: 27px;
    }
  }

  @media ${device.desktop} {
    height: 119px;
    &:hover {
      height: 124px;
      padding-bottom: 27px;
    }
  }
`;
