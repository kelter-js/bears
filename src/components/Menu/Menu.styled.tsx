import styled from "styled-components";

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

export const MenuItem = styled("li")`
  position: relative;
  display: flex;
  align-items: center;
  height: 79px;
  width: 100%;
  box-shadow: 0 1px 0 0 var(--grey-shadow), inset 0 1px 0 0 var(--grey-shadow);

  & .catalog-item {
    margin-left: 76px;
    font-weight: 700;
    font-size: 17px;
    line-height: 24px;
    color: var(--black);
  }

  & .search-icon,
  & .cart-icon {
    position: absolute;
    left: 31px;
    height: 18px;
  }

  & .search-icon {
    width: 18px;
  }

  & .cart-icon {
    width: 21px;
  }
`;
