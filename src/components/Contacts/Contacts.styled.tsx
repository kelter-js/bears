import styled from "styled-components";
import { device } from "../../helpers";

export const Container = styled("section")`
  padding: 38px 30px 62px 30px;

  & .contacts-header {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 18px;

    line-height: 30px;
    color: var(--black);

    margin-bottom: 28px;
  }

  @media ${device.tablet} and ${device.maxTablet} {
    position: relative;
    padding: 68px 50px 49px 50px;

    & .contacts-header {
      font-size: 43px;
      line-height: 50px;
      margin-bottom: 49px;
    }

    & .flag {
      position: absolute;
      top: 46px;
      right: 53px;
    }
  }

  @media ${device.desktop} {
    position: relative;
    width: 100%;
    padding: 0;
    padding-top: 62px;
    padding-right: 48px;
    padding-left: 111px;

    & .contacts-header {
      font-family: var(--font-family);
      font-weight: 700;
      font-size: 53px;

      line-height: 57px;
      color: var(--black);
      margin-top: 17px;
    }

    & .flag {
      position: absolute;
      top: 62px;
      left: 0;
    }
  }
`;

export const ContactsContent = styled("div")`
  display: flex;
  flex-direction: column;
  column-gap: 34px;
  row-gap: 30px;

  & .contact {
    max-width: 183px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;

    line-height: 30px;
    color: var(--dark-grey);
  }

  & .email {
    position: relative;
    min-width: 183px;
    cursor: pointer;

    &:hover {
      color: var(--teal);
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 179px;
      height: 1px;
      background-color: var(--teal);
    }

    &:active::before {
      opacity: 0.1;
    }
  }

  @media ${device.tablet} and ${device.maxTablet} {
    flex-direction: row;
    column-gap: 66px;

    & .contact {
      max-width: unset;
      font-size: 17px;
    }

    & .email {
      &::before {
        top: 30px;
        left: 0;
        width: 204px;
      }
    }
  }

  @media ${device.desktop} {
    & .contact {
      max-width: 224px;
      font-size: 17px;
      line-height: 30px;
    }

    & .email {
      min-width: 216px;

      &::before {
        width: 204px;
      }
    }
  }
`;

export const ContactMetaContainer = styled("div")`
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} and ${device.maxTablet} {
    gap: 23px;
  }
`;
