import styled from "styled-components";

export const Container = styled("section")`
  display: flex;
  flex-direction: column;
  padding: 25px 30px 23px 30px;
  background-color: var(--darkest-grey);
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
`;

export const ContactsContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 182px;
  margin: 0 auto;

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
`;
