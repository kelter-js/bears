import styled from "styled-components";

import { device } from "../../helpers";

export const HeaderContainer = styled("div").withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  box-shadow: 0 1px 0 0 var(--grey-shadow), inset 0 1px 0 0 var(--grey-shadow);

  @media ${device.mobile} and ${device.maxMobile} {
    height: ${(props) => (props.isOpen ? "395px" : "79px")};

    & .svg-icon {
      margin-top: 22px;
      height: 35px;
      width: 86px;
    }
  }
`;
