import styled from "styled-components";

export const FieldsetHeaderContainer = styled("div")`
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
`;

export const FieldsetHeaderFiller = styled("div")`
  height: 1px;
  width: 100%;
  margin-left: 15px;
  background-color: var(--teal);
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
`;

export const RadioContainer = styled("div")`
  display: flex;
  align-items: center;
  min-height: 42px;
  margin-bottom: 12px;

  &:last-of-type {
    margin-bottom: 0px;
  }
`;

export const TextFieldContainer = styled("div")`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-height: 70px;
  width: 100%;
  margin-bottom: 22px;

  &:last-of-type {
    margin-bottom: 0px;
  }
`;

export const TextAreaContainer = styled("div")`
  border: 2px solid var(--dark-grey);

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
`;
