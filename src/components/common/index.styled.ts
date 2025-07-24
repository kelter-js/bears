import styled from "styled-components";
import { device } from "../../helpers";

export const FieldsetHeaderContainer = styled("div").withConfig({
  shouldForwardProp: (prop) => prop !== "customPosition",
})<{ customPosition?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  & .fieldset-header {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 17px;

    line-height: 16px;
    text-transform: uppercase;
    color: var(--teal);
    white-space: nowrap;
  }

  @media ${device.tablet} and ${device.maxTablet} {
    display: block;
    margin-top: 18px;
  }

  @media ${device.desktop} {
    display: block;
    margin-top: ${({ customPosition }) =>
      customPosition ? `${customPosition}px` : "13px"};
  }
`;

export const FieldsetHeaderFiller = styled("div")`
  height: 1px;
  width: 100%;
  margin-left: 15px;
  background-color: var(--teal);

  @media ${device.tablet} and ${device.maxTablet} {
    display: none;
  }

  @media ${device.desktop} {
    display: none;
  }
`;

export const RadioLabel = styled("label").withConfig({
  shouldForwardProp: (prop) => prop !== "isChecked",
})<{ isChecked: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 42px;
  padding-left: 61px;

  font-family: var(--font-family);
  font-weight: 700;
  font-size: 17px;

  line-height: 18px;
  color: var(--black);

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 42px;
    height: 41px;
    border: 2px solid var(--dark-grey);
    border-radius: 50%;
    box-sizing: border-box;
  }

  &:hover::before {
    border: 2px solid var(--teal);
  }

  &:active::before {
    border: 2px solid var(--dim-grey);
  }

  &::after {
    content: "";
    position: absolute;
    top: 12px;
    left: 12px;
    display: ${({ isChecked }) => (isChecked ? "block" : "none")};
    height: 17px;
    width: 17px;
    background-color: var(--teal);
    border-radius: 50%;
  }
`;

export const CheckboxLabel = styled("label").withConfig({
  shouldForwardProp: (prop) => prop !== "isChecked",
})<{ isChecked: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 42px;
  padding-left: 61px;

  font-family: var(--font-family);
  font-weight: 700;
  font-size: 17px;

  line-height: 18px;
  color: var(--black);

  &:hover::before {
    border: 2px solid var(--teal);
  }

  &:active::before {
    border: 2px solid var(--dim-grey);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 38px;
    height: 38px;
    border: 2px solid var(--dark-grey);
    box-sizing: border-box;
  }

  &::after {
    content: "";
    position: absolute;
    top: 11px;
    left: 7.5px;
    display: ${({ isChecked }) => (isChecked ? "block" : "none")};
    height: 17px;
    width: 24px;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='17' viewBox='0 0 24 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.963 1.68385L22.9687 0.692322L8.76555 14.7862L1.73497 7.77467L0.740742 8.76619L7.77132 15.7777L8.76555 16.7692L9.83079 15.7777L23.963 1.68385Z' fill='black' /%3E%3C/svg%3E");
  }

  @media ${device.tablet} and ${device.maxTablet} {
    font-size: 19px;
    min-height: 52px;

    &::before {
      width: 52px;
      height: 52px;
    }

    &::after {
      top: 16px;
      left: 11px;
      height: 22px;
      width: 33px;
      background-image: url("data:image/svg+xml,%3Csvg width='33' height='22' viewBox='0 0 33 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M32.3704 1.35683L31.0098 0L11.5739 19.2863L1.95311 9.69163L0.59259 11.0485L10.2134 20.6432L11.5739 22L13.0316 20.6432L32.3704 1.35683Z' fill='black' /%3E%3C/svg%3E");
    }
  }

  @media ${device.desktop} {
    font-size: 19px;
    min-height: 52px;
    padding-left: 81px;

    &::before {
      width: 52px;
      height: 52px;
    }

    &::after {
      top: 16px;
      left: 11px;
      height: 22px;
      width: 33px;
      background-image: url("data:image/svg+xml,%3Csvg width='33' height='22' viewBox='0 0 33 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M32.3704 1.35683L31.0098 0L11.5739 19.2863L1.95311 9.69163L0.59259 11.0485L10.2134 20.6432L11.5739 22L13.0316 20.6432L32.3704 1.35683Z' fill='black' /%3E%3C/svg%3E");
    }
  }
`;

export const TextFieldTitle = styled("p")`
  padding-bottom: 7px;
`;

export const RadioContainer = styled("div")`
  display: flex;
  align-items: center;
  min-height: 42px;
  margin-bottom: 12px;

  &:last-of-type {
    margin-bottom: 0px;
  }

  @media ${device.tablet} and ${device.maxTablet} {
    margin-bottom: 0;
  }

  @media ${device.desktop} {
    margin-bottom: 0;
  }
`;

export const TextFieldContainer = styled("div")`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-height: 70px;
  width: 100%;
  margin-bottom: 22px;

  @media ${device.tablet} and ${device.maxTablet} {
    min-height: 52px;
    margin-bottom: 24px;
  }

  @media ${device.desktop} {
    min-height: 52px;
    margin-bottom: 24px;
  }

  &:last-of-type {
    margin-bottom: 0px;
  }
`;

export const TextAreaContainer = styled("div")`
  border: 2px solid var(--dark-grey);

  &:hover {
    border: 2px solid var(--teal);
  }

  & textarea {
    display: block;

    min-height: 142px;
    width: 100%;
    padding: 17px;
    border: none;
    outline: none;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 17px;

    line-height: 18px;
    color: var(--black);
  }
`;

export const TextFieldLabel = styled("label").withConfig({
  shouldForwardProp: (prop) => prop !== "hasIcon",
})<{ hasIcon: boolean }>`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-height: 70px;
  width: 100%;

  font-family: var(--font-family);
  font-weight: 700;
  font-size: 17px;

  line-height: 18px;
  color: var(--black);

  & input {
    min-height: 52px;
    width: 100%;
    border: none;
    padding: 0;
    padding-right: ${({ hasIcon }) => (hasIcon ? "42px" : "0px")};
    border-bottom: 2px solid var(--black);
    outline: none;

    &::placeholder {
      opacity: 0.3;
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 17px;

      line-height: 18px;
      color: #000;
    }
  }

  &:hover input {
    border-bottom: 2px solid var(--teal);
  }

  & svg {
    opacity: 0.2;
  }

  &:hover svg {
    color: var(--teal);
    opacity: 1;
  }

  @media ${device.tablet} and ${device.maxTablet} {
    flex-direction: row;
    align-items: center;
    gap: 24px;
    min-height: 52px;

    & input {
      padding-left: 16px;
    }
  }

  @media ${device.desktop} {
    flex-direction: row;
    align-items: center;
    gap: 24px;
    min-height: 52px;

    & input {
      padding-left: 16px;
    }
  }
`;

export const Button = styled("button")`
  height: 52px;
  width: 100%;
  border: 2px solid var(--dark-grey);

  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;

  line-height: 20px;
  text-transform: uppercase;
  text-align: center;
  color: var(--dark-grey);
  cursor: pointer;

  &:hover {
    background-color: var(--dark-grey);
    color: var(--white);
  }

  &:active {
    background-color: var(--dark-grey);
    color: var(--dim-light);
  }
`;
