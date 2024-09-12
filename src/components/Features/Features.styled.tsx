import styled from "styled-components";

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
`;
