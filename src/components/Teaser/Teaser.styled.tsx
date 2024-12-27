import styled from "styled-components";

export const Container = styled("section")`
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
`;
