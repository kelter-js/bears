import { ReactNode } from "react";
import { TypographyVariants } from "../../types";

export interface AdaptiveWrapperProps {
  children: ReactNode;
  isMobile?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
}

export interface TypographyProps {
  variant?: TypographyVariants;
  children?: ReactNode;
  className?: string;
}

export interface FieldsetHeaderProps {
  title: string;
  customPosition?: number;
}

export interface RadioButtonProps {
  name: string;
  title: string;
  value: string;
}

export interface CheckboxProps {
  name: string;
  title: string;
}

export interface TextFieldProps {
  name: string;
  title?: string;
  placeholder: string;
  icon?: JSX.Element;
  required?: boolean;
  type?: string;
}

export interface TextAreaProps {
  name: string;
  placeholder: string;
  required?: boolean;
}

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}
