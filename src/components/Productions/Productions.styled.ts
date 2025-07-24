import styled from "styled-components";
import { device } from "../../helpers";

export const Container = styled("section")`
  padding: 30px;

  @media ${device.tablet} and ${device.maxTablet} {
    padding: 67px 50px 53px 50px;
  }

  @media ${device.desktop} {
    display: flex;
    justify-content: center;
    gap: 52px;
    padding: 111px 50px 0px 50px;
    margin-bottom: 57px;
  }
`;
