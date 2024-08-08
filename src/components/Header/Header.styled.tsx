import styled from "styled-components";

import { device } from "../../helpers";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 1px 0 0 var(--grey-shadow), inset 0 1px 0 0 var(--grey-shadow);

  @media ${device.mobile} and ${device.maxMobile} {
    height: 79px;

    & .svg-icon {
      height: 35px;
      width: 86px;
    }
  }
`;

export const Menu = styled("div").withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  position: absolute;
  top: 32px;
  right: 31px;
  width: 20px;
  height: 14px;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    left: 0;
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background: #000;
  }

  &::before {
    top: ${(props) => (props.isOpen ? "6px" : 0)};
    transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "unset")};
    box-shadow: ${(props) =>
      props.isOpen ? "0 6px 0 rgba(0,0,0,0)" : "0 6px 0 #000"};
    transition: ${(props) =>
      props.isOpen
        ? "box-shadow .15s, top .1s, transform .1s .15s"
        : "box-shadow .1s .15s, top .1s .15s, transform .1s"};
  }

  &::after {
    bottom: ${(props) => (props.isOpen ? "6px" : 0)};
    transition: ${(props) =>
      props.isOpen
        ? "bottom .1s, transform .1s .15s"
        : "bottom .1s .15s, transform .1s"};
    transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "unset")};
  }
`;
