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
