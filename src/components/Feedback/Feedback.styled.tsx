import styled from "styled-components";

import { Button } from "../common/Button";
import { device } from "../../helpers";

export const Container = styled("section")`
  position: relative;
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
    font-size: 17px;
    color: var(--dark-grey);
  }

  & .feedback-pattern {
    margin-top: 45px;
    margin-left: -30px;
  }

  @media ${device.tablet} and ${device.maxTablet} {
    margin-top: 82px;
    padding: 0 50px;
    padding-top: 82.5px;
    padding-bottom: 132px;

    & .feedback-image {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }

    & .feedback-title {
      margin-bottom: 38.5px;
      font-size: 43px;
      line-height: 50px;
    }

    & .feedback-text {
      font-size: 17px;
      line-height: 30px;
    }

    & .feedback-author-name {
      font-size: 18px;
      line-height: 24px;
    }

    & .feedback-pattern {
      position: absolute;
      bottom: 0;
      left: 0;
      margin-top: 0;
      margin-left: 0;
    }
  }

  @media ${device.desktop} {
    margin-top: 90px;

    padding: 0 50px;
    padding-top: 78px;
    padding-bottom: 201px;

    & .feedback-image {
      position: absolute;
      top: 0;
      left: 50px;
      z-index: -1;
    }

    & .feedback-title {
      margin-bottom: 35px;
      margin-left: 174px;
      font-size: 53px;
      line-height: 57px;
    }

    & .feedback-text {
      display: block;
      margin-left: 174px;
      font-size: 17px;
      line-height: 30px;
    }

    & .feedback-author-name {
      font-size: 18px;
      line-height: 24px;
    }

    & .feedback-pattern {
      position: absolute;
      bottom: 0;
      left: 50px;
      width: calc(100% - 100px);
      margin-top: 0;
      margin-left: 0;
    }
  }
`;

export const AuthorContainer = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 33px;

  @media ${device.tablet} and ${device.maxTablet} {
    margin-top: 61px;
  }

  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
    margin-left: 174px;
    margin-top: 44px;
  }
`;

export const ControlContainer = styled("div")`
  display: flex;
  width: 100%;
  margin-top: 30px;
  border: 1px solid var(--grey-shadow);

  @media ${device.tablet} and ${device.maxTablet} {
    position: absolute;
    right: 69px;
    bottom: 147px;
    width: 137px;
    margin-top: 0;
    border: none;
  }

  @media ${device.desktop} {
    position: absolute;
    right: 69px;
    bottom: 201px;
    width: 137px;
    margin-top: 0;
    border: none;
  }
`;

export const Control = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  width: 100%;
  border: none;
  cursor: pointer;

  & .control-left {
    transform: rotate(180deg);

    &:hover {
      opacity: 0.6;
    }

    &:active {
      opacity: 0.3;
    }
  }

  &:last-of-type {
    border-left: 1px solid var(--grey-shadow);

    &:hover {
      opacity: 0.6;
    }

    &:active {
      opacity: 0.3;
    }
  }

  @media ${device.tablet} and ${device.maxTablet} {
    height: 26px;
    padding: 0;
    padding-right: 18.5px;

    &:last-of-type {
      border-left: none;
      padding-right: 0px;
      padding-left: 18.5px;
    }
  }

  @media ${device.desktop} {
    &:last-of-type {
      border-left: none;
      padding-right: 0px;
      padding-left: 18.5px;
    }
  }
`;

export const SendFeedbackButton = styled(Button)`
  @media ${device.tablet} and ${device.maxTablet} {
    position: absolute;
    top: 79px;
    right: 50px;
    width: 175px;
    margin-top: 0;
  }

  @media ${device.desktop} {
    position: absolute;
    top: 79px;
    right: 50px;
    width: 175px;
    margin-top: 0;
  }
`;
