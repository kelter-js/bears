import styled from "styled-components";
import { device } from "../../helpers";

export const Menu = styled("div").withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  position: absolute;
  top: 32px;
  right: 31px;
  width: 20px;
  height: 14px;
  cursor: pointer;

  & .toggle-button {
    position: relative;
    top: -13px;
    left: -10px;
    height: 40px;
    width: 40px;
  }

  &::before,
  &::after {
    content: "";
    left: ${(props) => (props.isOpen ? "-3px" : 0)};
    position: absolute;
    display: block;
    height: 2px;
    width: ${(props) => (props.isOpen ? "26px" : "100%")};
    background: var(--black);
    pointer-events: none;
  }

  &::before {
    top: ${(props) => (props.isOpen ? "8px" : 0)};
    transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "unset")};
    box-shadow: ${(props) =>
      props.isOpen ? "0 6px 0 rgba(0,0,0,0)" : "0 6px 0 var(--black)"};
    transition: ${(props) =>
      props.isOpen
        ? "box-shadow .15s, top .1s, transform .1s .15s"
        : "box-shadow .1s .15s, top .1s .15s, transform .1s"};
  }

  &::after {
    bottom: ${(props) => (props.isOpen ? "4px" : 0)};
    transition: ${(props) =>
      props.isOpen
        ? "bottom .1s, transform .1s .15s"
        : "bottom .1s .15s, transform .1s"};
    transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "unset")};
  }
`;

export const NavContainer = styled("nav")`
  position: absolute;
  top: 79px;
  width: 100%;
`;

export const AdditionalOptionsContainer = styled("div")`
  display: flex;
  gap: 45px;

  @media ${device.desktop} {
    position: absolute;
    left: 51px;
    top: 107px;
    width: 349px;
    z-index: 1;

    & .additional-option {
      font-family: var(--font-family);
      font-weight: 700;
      font-size: 15px;

      line-height: 24px;
      color: var(--black);
      cursor: pointer;

      &:hover {
        opacity: 0.6;
      }

      &:active {
        opacity: 0.3;
      }
    }
  }
`;

export const MenuItem = styled("li").withConfig({
  shouldForwardProp: (prop) => prop !== "isButton",
})<{ isButton?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  height: 79px;
  width: 100%;
  box-shadow: 0 1px 0 0 var(--grey-shadow), inset 0 1px 0 0 var(--grey-shadow);

  @media ${device.tablet} and ${device.maxTablet} {
    height: ${(props) => (props.isButton ? "88px" : "auto")};
    min-width: ${(props) => (props.isButton ? "82px" : "auto")};
    cursor: ${(props) => (props.isButton ? "pointer" : "auto")};

    border-left: 1px solid var(--fade-gray);
    box-shadow: none;
  }

  @media ${device.desktop} {
    height: ${(props) => (props.isButton ? "88px" : "auto")};
    min-width: ${(props) => (props.isButton ? "82px" : "auto")};
    cursor: ${(props) => (props.isButton ? "pointer" : "auto")};

    border-left: 1px solid var(--fade-gray);
    box-shadow: none;
  }

  &.cart-item {
    &:hover .catalog-item {
      opacity: 0.6;
    }

    &:hover .cart-icon {
      color: #63d1bb;
    }

    &:active .cart-icon {
      color: #63d1bb;
      opacity: 0.3;
    }

    &:active .catalog-item {
      opacity: 0.3;
    }
  }

  & .search-icon,
  & .cart-icon {
    position: absolute;
    left: 31px;
    height: 18px;
    color: black;
  }

  &:hover .search-icon {
    color: #63d1bb;
  }

  &:active .search-icon {
    color: #63d1bb;
    opacity: 0.3;
  }

  & .catalog-item {
    margin-left: 76px;
    font-weight: 700;
    font-size: 17px;
    line-height: 24px;
    color: var(--black);

    @media ${device.tablet} and ${device.maxTablet} {
      min-width: 182px;
      margin-left: 82px;
      white-space: nowrap;
      text-align: end;
    }

    @media ${device.desktop} {
      min-width: 182px;
      margin-left: 82px;
      white-space: nowrap;
      text-align: end;
    }
  }

  & .search-icon {
    width: 18px;
  }

  & .cart-icon {
    width: 21px;
  }
`;

export const Actions = styled("div")`
  display: flex;
  margin-left: auto;
`;

export const LinksList = styled("div")`
  position: absolute;
  bottom: -44.5px;
  left: 50px;
  display: flex;
  z-index: 1;

  & .catalog-link {
    display: block;
    min-width: 167px;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 15px;

    line-height: 24px;
    color: var(--black);

    &:hover {
      opacity: 0.6;
    }

    &:active {
      opacity: 0.3;
    }
  }

  @media ${device.desktop} {
    bottom: unset;
    width: 358px;
    justify-content: space-between;

    &::before {
      content: "";
      position: absolute;
      top: -32px;
      left: 50%;
      display: block;
      height: 88px;
      width: 1px;
      background-color: var(--black);
      opacity: 0.1;
    }

    & .catalog-link {
      position: relative;
      display: block;
      min-width: 149px;
      font-family: var(--font-family);
      font-weight: 700;
      font-size: 17px;

      line-height: 24px;
      color: var(--black);
    }
  }
`;
