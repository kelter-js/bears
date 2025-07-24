import styled from "styled-components";

import { device } from "../../helpers";

export const HeaderContainer = styled("div").withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  box-shadow: 0 1px 0 0 var(--grey-shadow), inset 0 1px 0 0 var(--grey-shadow);

  & .svg-icon:hover {
    opacity: 0.6;
  }

  & .svg-icon:active {
    opacity: 0.3;
  }

  @media ${device.mobile} and ${device.maxMobile} {
    height: ${(props) => (props.isOpen ? "395px" : "79px")};

    & .svg-icon {
      margin-top: 22px;
      height: 35px;
      width: 86px;
    }
  }

  @media ${device.tablet} and ${device.maxTablet} {
    position: relative;
    justify-content: flex-start;
    align-items: center;
    height: 88px;
    padding-left: 48px;
    padding-right: 50px;
    border-bottom: 1px solid var(--fade-gray);

    & .svg-icon {
      height: 35px;
      width: 86px;
    }

    & .promo-text {
      position: absolute;
      bottom: -44.5px;
      right: 50px;
      z-index: 1;
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 15px;

      line-height: 24px;
      text-align: right;
      color: var(--dark-grey);
    }
  }

  @media ${device.desktop} {
    position: relative;
    justify-content: center;
    align-items: center;
    height: 88px;
    width: 100%;

    padding-left: 48px;
    padding-right: 50px;
    border-bottom: 1px solid var(--fade-gray);

    & .promo-text {
      position: absolute;
      bottom: -44.5px;
      right: 51px;
      z-index: 1;
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 15px;

      line-height: 24px;
      text-align: right;
      color: var(--dark-grey);
    }

    & .svg-icon {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      height: 72px;
      width: 149px;
    }
  }
`;
