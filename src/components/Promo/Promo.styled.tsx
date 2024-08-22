import styled from "styled-components";

import { device } from "../../helpers";

export const PromoImage = styled.img`
  object-position: 0 -17px;
  margin: 0 auto;
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
  }
`;
