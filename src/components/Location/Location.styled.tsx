import styled from "styled-components";

export const Container = styled("section")`
  display: flex;
  flex-direction: column;
  padding-bottom: 39px;
`;

export const MapContainer = styled("div")`
  position: relative;
  display: block;

  & .map-pin {
    position: absolute;
    top: 145px;
    left: 138px;
  }
`;

export const SendMessageButton = styled("button")`
  margin: 0 auto;
  margin-top: 42px;
  padding: 16px 38px 16px 38px;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;

  line-height: 20px;
  text-transform: uppercase;
  text-align: center;
  color: var(--dark-grey);
  border: 2px solid var(--dark-grey);
`;
