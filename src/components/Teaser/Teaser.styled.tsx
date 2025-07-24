import styled from "styled-components";
import { device } from "../../helpers";

export const Container = styled("section")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 177px;
  width: 100%;
  background-color: var(--darkest-grey);

  & .teaser {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 26px;

    line-height: 30px;
    text-align: center;
    color: var(--black);
  }

  @media ${device.tablet} and ${device.maxTablet} {
    height: 216px;

    & .teaser {
      margin: 0 auto;
      line-height: 50px;
      font-size: 42px;
    }
  }

  @media ${device.desktop} {
    height: 255px;

    & .teaser {
      line-height: 57px;
      font-size: 52px;
    }
  }
`;

export const Pattern = styled.img`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  width: 100%;
`;
