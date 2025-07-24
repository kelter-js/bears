import styled from "styled-components";
import { device } from "../../helpers";

export const Container = styled("section")`
  margin-top: 31px;
  padding: 0 30px;

  & .features-header {
    margin-bottom: 28px;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 25px;

    line-height: 30px;
    color: var(--black);
  }

  @media ${device.tablet} and ${device.maxTablet} {
    margin-top: 55.5px;
    padding: 0 50px;

    & ul {
      display: flex;
      flex-wrap: wrap;
      column-gap: 100px;
      row-gap: 57px;
    }

    & .features-header {
      margin-bottom: 41.5px;

      font-size: 43px;
      line-height: 50px;
    }
  }

  @media ${device.desktop} {
    margin-top: 68px;
    padding: 0 49px;

    & .features-header {
      margin-bottom: 39px;
      margin-left: 176px;
      font-size: 53px;
      line-height: 57px;
    }

    & ul {
      display: flex;
      flex-wrap: wrap;
      margin-left: 176px;
      column-gap: 115px;
      row-gap: 57px;
    }
  }
`;

export const Feature = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 31px;

  &:last-of-type {
    margin-bottom: 0;
  }

  & .feature-title {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 17px;

    line-height: 20px;
    color: var(--black);
  }

  & .feature-flower {
    height: 38px;
    width: 33px;
  }

  & .feature-money {
    height: 27px;
    width: 47px;
  }

  & .feature-photo {
    height: 27px;
    width: 34px;
  }

  & .feature-ball {
    height: 34px;
    width: 35px;
  }

  & .feature-rocket {
    height: 23px;
    width: 55px;
  }

  & .feature-gift {
    height: 32px;
    width: 33px;
  }

  @media ${device.tablet} and ${device.maxTablet} {
    justify-content: space-between;
    width: 35.2%;
    margin-bottom: 0;
  }

  @media ${device.desktop} {
    justify-content: space-between;
    width: 28.1%;
    margin-bottom: 0;

    & .feature-title {
      font-family: var(--font-family);
      font-weight: 700;
      font-size: 20px;

      line-height: 22px;
      color: var(--black);
    }
  }
`;
