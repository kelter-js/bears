import { FC } from "react";
import { TypographyVariants, TypographyElementProps } from "../types";

export const getTextComponent = (
  variant?: TypographyVariants
): FC<TypographyElementProps> => {
  switch (variant) {
    case "h1":
      return ({ children, className }) => (
        <h1 className={className}>{children}</h1>
      );

    case "h2":
      return ({ children, className }) => (
        <h2 className={className}>{children}</h2>
      );

    case "h3":
      return ({ children, className }) => (
        <h3 className={className}>{children}</h3>
      );

    case "h4":
      return ({ children, className }) => (
        <h4 className={className}>{children}</h4>
      );

    case "h5":
      return ({ children, className }) => (
        <h5 className={className}>{children}</h5>
      );

    case "h6":
      return ({ children, className }) => (
        <h6 className={className}>{children}</h6>
      );

    default:
      return ({ children, className }) => (
        <span className={className}>{children}</span>
      );
  }
};

const size = {
  mobile: "320px",
  maxMobile: "767px",
  tablet: "768px",
  maxTablet: "1149px",
  desktop: "1150px",
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  maxMobile: `(max-width: ${size.tablet})`,
  tablet: `(min-width: ${size.tablet})`,
  maxTablet: `(max-width: ${size.maxTablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const resolutions = {
  mobile: `${device.mobile} and ${device.maxMobile}`,
  tablet: `${device.tablet} and ${device.maxTablet}`,
  desktop: `${device.desktop}`,
};
