import styled from "styled-components";
import { device } from "../../helpers";
import { Button } from "../common/Button";

export const Container = styled("section")`
  display: flex;
  flex-direction: column;
  padding-bottom: 39px;

  @media ${device.desktop} {
    position: relative;
    width: 100%;
    min-width: 527px;
    padding-bottom: 0;
  }
`;

export const MapContainer = styled("div")`
  position: relative;
  display: block;

  & .map-pin {
    position: absolute;
    top: 145px;
    left: 138px;
  }

  @media ${device.tablet} and ${device.maxTablet} {
    margin: 0 auto;

    & .map-pin {
      top: 139px;
      left: 363px;
    }
  }
`;

export const SendMessageButton = styled(Button)`
  margin: 0 auto;
  margin-top: 42px;
  width: 230px;
  @media ${device.desktop} {
    position: absolute;
    bottom: 0;
    left: -334px;
    height: 52px;
    min-width: 230px;
    margin-top: 0;
    padding: 16px 27px;
  }
`;
