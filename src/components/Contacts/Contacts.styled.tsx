import styled from "styled-components";

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

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 179px;
      height: 1px;
      background-color: var(--teal);
    }
  }
`;

export const ContactMetaContainer = styled("div")`
  display: flex;
  justify-content: space-between;
`;
