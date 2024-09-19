import styled from "styled-components";

export const Container = styled("section")`
  margin-top: 58px;
  padding: 0 30px;

  & .feedback-title,
  & .feedback-text,
  & .feedback-author-tag {
    font-family: var(--font-family);
    line-height: 30px;
  }

  & .feedback-title {
    margin-bottom: 14px;

    font-weight: 700;
    font-size: 25px;

    color: var(--black);
  }

  & .feedback-text {
    font-weight: 400;
    font-size: 15px;

    color: var(--dark-grey);
  }

  & .feedback-author-name {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 17px;

    line-height: 24px;
    color: var(--black);
  }

  & .feedback-author-tag {
    font-weight: 400;

    color: var(--dark-grey);
  }

  & .feedback-pattern {
    margin-top: 45px;
    margin-left: -30px;
  }
`;

export const AuthorContainer = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 33px;
`;

export const ControlContainer = styled("div")`
  display: flex;
  width: 100%;
  margin-top: 30px;
  border: 1px solid var(--grey-shadow);
`;

export const Control = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  width: 100%;
  border: none;

  & .control-left {
    transform: rotate(180deg);
  }

  &:last-of-type {
    border-left: 1px solid var(--grey-shadow);
  }
`;

export const SendFeedbackButton = styled("button")`
  height: 52px;
  width: 100%;
  margin-top: 38px;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;

  line-height: 20px;
  text-transform: uppercase;
  text-align: center;
  color: var(--dark-grey);
`;
