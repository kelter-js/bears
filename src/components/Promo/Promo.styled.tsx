import styled from "styled-components";

import { device } from "../../helpers";

export const Container = styled.section`
  position: relative;
`;

export const PromoImage = styled.img`
  object-position: 0 -17px;
  margin: 0 auto;

  @media ${device.tablet} and ${device.maxTablet} {
    object-position: 0 0;
  }
`;

export const PromoContainer = styled.div`
  position: relative;
  max-height: 283px;
  overflow-y: hidden;
  background-color: var(--dark-white);

  & .promo-text {
    position: absolute;
    top: 73px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    min-width: 260px;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    text-align: center;
    color: var(--black);
    font-family: var(--font-family);

    @media ${device.tablet} and ${device.maxTablet} {
      top: 157px;
      min-width: 668px;
      font-size: 42px;
      line-height: 50px;
    }

    @media ${device.desktop} {
      top: 142px;
      min-width: 700px;
      font-size: 52px;
      line-height: 57px;
    }
  }

  @media ${device.tablet} and ${device.maxTablet} {
    max-height: 746px;
  }

  @media ${device.desktop} {
    max-height: 611px;
    overflow-x: hidden;
  }
`;

export const PromoItemsContainer = styled.div`
  width: 100%;

  & .promo-interier {
    height: 62;
    width: 40;
  }

  & .promo-toy {
    height: 60px;
    width: 60px;
  }

  @media ${device.tablet} and ${device.maxTablet} {
    position: absolute;
    bottom: 25px;
    display: flex;
    padding: 0 50px;
  }

  @media ${device.desktop} {
    display: flex;
    padding: 0 50px;
    background-color: var(--light-grey);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: cetner;
  height: 60px;
  width: 60px;
`;

export const Pattern = styled.img`
  position: relative;
  z-index: 1;
  bottom: 24px;

  @media ${device.desktop} {
    width: 100%;
    bottom: 18px;
  }
`;
