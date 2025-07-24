import styled from "styled-components";
import { device } from "../../helpers";

export const LogoContainer = styled("div")`
  @media ${device.desktop} {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-right: 101px;
  }
`;
