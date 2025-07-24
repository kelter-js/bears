import styled from "styled-components";
import { device } from "../../helpers";

export const Container = styled("section")`
  padding: 17px 30px 55px 30px;

  & .form-description {
    display: block;
    margin-bottom: 29px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 13px;

    line-height: 24px;
    color: var(--dark-grey);
  }

  & .form-annotation {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;

    line-height: 16px;
    color: var(--dark-grey);
  }

  & .create-order-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 52px;
    width: 100%;
    margin-top: 30px;
  }

  @media ${device.tablet} and ${device.maxTablet} {
    padding: 54px 50px 50px 50px;

    & .form-description {
      font-size: 17px;
      line-height: 30px;
      margin-bottom: 13px;
    }

    & .create-order-btn {
      max-width: 34.5%;
      margin-top: 0;
    }

    & .form-annotation {
      line-height: 30px;
      font-size: 17px;
    }
  }

  @media ${device.desktop} {
    padding: 98.5px 223px 50px 225px;

    & .create-order-btn {
      max-width: 32.8%;
      margin-top: 9px;
    }

    & .form-description {
      font-size: 17px;
      line-height: 30px;
      margin-bottom: 12.5px;
    }

    & .form-annotation {
      line-height: 30px;
      font-size: 17px;
    }
  }
`;

export const FieldSetContainer = styled("div").withConfig({
  shouldForwardProp: (prop) => prop !== "gap" && prop !== "accented",
})<{ gap: number; accented?: number }>`
  @media ${device.tablet} and ${device.maxTablet} {
    position: relative;
    display: flex;
    align-items: flex-start;
    padding-top: 50px;
    padding-bottom: 50px;
    gap: ${({ gap }) => `${gap}px`};

    &::before {
      display: ${({ accented }) => (accented ? "block" : "none")};
      content: "";
      position: absolute;
      top: 0px;
      left: -50px;
      width: 100vw;
      height: ${({ accented }) => `${accented}px`};
      background-color: var(--darkest-grey);
      z-index: -1;
    }
  }

  @media ${device.desktop} {
    position: relative;
    display: flex;
    align-items: flex-start;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-left: -100px;
    width: calc(100vw - 348px);
    gap: ${({ gap }) => `${gap}px`};

    &::before {
      display: ${({ accented }) => (accented ? "block" : "none")};
      content: "";
      position: absolute;
      top: 0px;
      left: -125px;
      width: calc(100vw - var(--scrollbar-width, 0px));
      height: ${({ accented }) => `${accented}px`};
      background-color: var(--darkest-grey);
      z-index: -1;
    }
  }
`;

export const TypeFieldset = styled("div")`
  margin-top: 30px;
  margin-bottom: 31px;

  @media ${device.tablet} and ${device.maxTablet} {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 0;
  }

  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 0;
  }
`;

export const ColorFieldset = styled("div")`
  margin-top: 25px;
  margin-bottom: 33px;

  @media ${device.tablet} and ${device.maxTablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 24px;
    column-gap: 63px;
    margin: 0;
  }

  @media ${device.desktop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 24px;
    column-gap: 96px;
    margin: 0;
  }
`;

export const MainInfoContainer = styled("div")`
  margin-top: 28.85px;
  margin-bottom: 34.5px;

  @media ${device.tablet} and ${device.maxTablet} {
    width: 100%;
    margin: 0;
  }

  @media ${device.desktop} {
    width: 100%;
    margin: 0;
  }
`;

export const CredentialsFieldContainer = styled("div")`
  margin-top: 4.5px;
  margin-bottom: 34.5px;

  & .phone-icon,
  & .email-icon {
    position: absolute;
    top: 11px;
    right: 11px;
  }

  & .email-icon {
    top: 16px;
    right: 3px;
  }

  @media ${device.tablet} and ${device.maxTablet} {
    width: 100%;
    margin: 0;

    & input {
      background-color: transparent;
    }
  }

  @media ${device.desktop} {
    width: 100%;
    margin: 0;

    & input {
      background-color: transparent;
    }
  }
`;

export const FeedbackContainer = styled("div")`
  margin-top: 22.5px;
  margin-bottom: 17px;

  @media ${device.tablet} and ${device.maxTablet} {
    width: 100%;
    margin: 0;
  }

  @media ${device.desktop} {
    width: 100%;
    margin: 0;
  }
`;

export const ContactsContainer = styled("div")`
  @media ${device.tablet} and ${device.maxTablet} {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
  }

  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
  }
`;

export const ContactsHolder = styled("div")`
  @media ${device.tablet} and ${device.maxTablet} {
    display: flex;

    &:first-of-type {
      gap: 128px;
    }

    &:last-of-type {
      gap: 105px;
    }
  }

  @media ${device.desktop} {
    display: flex;

    &:first-of-type {
      gap: 71px;
    }

    &:last-of-type {
      gap: 48px;
    }
  }
`;

export const SubmitContainer = styled("div")`
  @media ${device.tablet} and ${device.maxTablet} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }

  @media ${device.desktop} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;
