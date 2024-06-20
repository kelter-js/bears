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
