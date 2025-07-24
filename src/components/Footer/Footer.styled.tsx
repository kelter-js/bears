import styled from "styled-components";
import { device } from "../../helpers";

export const Container = styled("section")`
  display: flex;
  flex-direction: column;
  padding: 25px 30px 23px 30px;
  background-color: var(--darkest-grey);

  & svg:hover {
    color: var(--teal);
  }

  & svg:active {
    color: var(--teal);
    opacity: 0.3;
  }

  @media ${device.tablet} and ${device.maxTablet} {
    flex-direction: row;
    justify-content: space-between;
    padding: 51px 50px 58px 50px;

    & .logo {
      height: 34px;
      width: 84px;
    }
  }

  @media ${device.desktop} {
    flex-direction: row;
    justify-content: space-between;
    padding: 51px 50px 58px 50px;

    & .logo {
      height: 34px;
      width: 84px;
    }
  }
`;

export const Divider = styled("div")`
  height: 1px;
  width: 100%;
  margin-top: 27px;
  margin-bottom: 22px;
  background-color: var(--divider-color);
`;

export const IconsContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 142px;
  margin: 0 auto;

  & .insta {
    width: 22px;
    height: 21px;
  }

  & .fb {
    width: 15px;
    height: 28px;
  }

  & .twitter {
    width: 23px;
    height: 20px;
  }

  & img {
    cursor: pointer;
  }

  @media ${device.tablet} and ${device.maxTablet} {
    margin: 0;
  }

  @media ${device.desktop} {
    margin: 0;
  }
`;

export const ContactsContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 182px;
  margin: 0 auto;

  &:hover svg {
    color: var(--teal);
  }

  &:active svg {
    color: var(--teal);
    opacity: 0.3;
  }

  & .html {
    width: 27px;
    height: 34px;
    cursor: pointer;
  }

  & .develop-by-title {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 19px;

    line-height: 18px;
    color: var(--black);
  }

  @media ${device.tablet} and ${device.maxTablet} {
    width: 178px;
    margin: 0;
  }

  @media ${device.desktop} {
    width: 178px;
    margin: 0;
  }
`;
