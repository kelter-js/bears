import styled from "styled-components";

export const Container = styled("section")`
  padding: 17px 30px 55px 30px;

  & .form-description {
    display: block;
    margin-bottom: 29px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 13px;

    line-height: 24px;
    color: var(--dark-grey);
  }

  & .form-annotation {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;

    line-height: 16px;
    color: var(--dark-grey);
  }

  & .create-order-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 52px;
    width: 100%;
    margin-top: 30px;

    border: 2px solid var(--dark-grey);

    font-family: var(--font-family);
    font-weight: 700;
    font-size: 17px;

    line-height: 16px;
    text-transform: uppercase;
    text-align: center;
    color: var(--dark-grey);
  }
`;

export const TypeFieldset = styled("div")`
  margin-top: 30px;
  margin-bottom: 31px;
`;

export const ColorFieldset = styled("div")`
  margin-top: 25px;
  margin-bottom: 33px;
`;

export const MainInfoContainer = styled("div")`
  margin-top: 28.85px;
  margin-bottom: 34.5px;
`;

export const CredentialsFieldContainer = styled("div")`
  margin-top: 4.5px;
  margin-bottom: 34.5px;

  & .phone-icon,
  & .email-icon {
    position: absolute;
    top: 11px;
    right: 11px;
  }

  & .email-icon {
    top: 16px;
    right: 3px;
  }
`;

export const FeedbackContainer = styled("div")`
  margin-top: 22.5px;
  margin-bottom: 17px;
`;
