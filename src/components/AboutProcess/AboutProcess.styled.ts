import styled from "styled-components";
import { device } from "../../helpers";
import { Button } from "../common/Button";

export const Container = styled("section")`
  padding: 0 30px 58px 30px;

  @media ${device.tablet} and ${device.maxTablet} {
    padding: 0 50px 64px 50px;
  }

  @media ${device.desktop} {
    position: relative;
    height: 455px;
    max-width: 1050px;
    margin: 0 auto;
    margin-bottom: 105px;
    padding: 0;
  }
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--grey-shadow);

  @media ${device.tablet} and ${device.maxTablet} {
    position: relative;
    height: 743px;
    justify-content: flex-end;
    align-items: flex-start;
  }

  @media ${device.desktop} {
    height: 455px;
    width: 367px;
    margin-left: auto;
    padding: 47px 36px 60px 79px;
  }
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

  @media ${device.tablet} and ${device.maxTablet} {
    margin-top: 41px;
    margin-bottom: 0px;
    padding-left: 42px;

    & .process-title {
      font-size: 20px;
    }
  }

  @media ${device.desktop} {
    flex-direction: column;
    gap: 27px;
    padding: 0;
    margin: 0;
    margin-bottom: 27.5px;

    & .cam {
      height: 22px;
      width: 32px;
    }

    & .process-title {
      width: 178px;
      margin-left: 0;
      font-size: 20px;
      line-height: 24px;
    }
  }
`;

export const Media = styled("div")`
  position: relative;

  @media ${device.mobile} and ${device.maxMobile} {
    & img {
      margin: 0 auto;
    }
  }

  & .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & .play-icon:hover {
    transform: translate(-50%, -50%) scale(1.2);
  }

  & .play-icon:active {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.3;
  }

  @media ${device.tablet} and ${device.maxTablet} {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }

  @media ${device.desktop} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 683px;
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

  @media ${device.tablet} and ${device.maxTablet} {
    margin-top: 24.5px;
    margin-bottom: 40.5px;
    padding-left: 40px;
    padding-right: 17px;

    & .process-description {
      font-size: 15px;
      line-height: 30px;
    }
  }

  @media ${device.desktop} {
    margin: 0;
    margin-bottom: 51.5px;
    padding: 0;
    & .process-description {
      font-size: 15px;
      line-height: 30px;
    }
  }
`;

export const OrderButton = styled(Button)`
  min-width: 192px;
  margin: 0 auto;
  margin-bottom: 33px;

  @media ${device.tablet} and ${device.maxTablet} {
    width: calc(100% - 84px);
    margin: 0 42px;
    margin-bottom: 46px;
  }

  @media ${device.desktop} {
    margin: 0;
  }
`;
