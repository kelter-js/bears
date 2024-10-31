import styled from "styled-components";

export const Container = styled("section")`
  padding: 0 30px 58px 30px;
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--grey-shadow);
`;

export const Title = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 21.5px;
  margin-bottom: 26.5px;
  padding-left: 31px;
  padding-right: 31px;

  & .process-title {
    margin-left: 25px;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 17px;

    line-height: 24px;
    color: var(--black);
  }
`;

export const Media = styled("div")`
  position: relative;

  & .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Description = styled("div")`
  margin-top: 35px;
  margin-bottom: 41px;
  padding-left: 34px;
  padding-right: 31px;

  & .process-description {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 13px;

    line-height: 24px;
    color: var(--dark-grey);
  }
`;

export const OrderButton = styled("button")`
  height: 52px;
  min-width: 192px;
  margin: 0 auto;
  margin-bottom: 33px;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;
  border: 2px solid var(--dark-grey);

  line-height: 16px;
  text-transform: uppercase;
  text-align: center;
  color: var(--dark-grey);
  cursor: pointer;
`;
