import { ReactNode, MouseEvent } from "react";

export type TypographyVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TypographyElementProps {
  children?: ReactNode;
  className?: string;
}

export interface IconButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children?: ReactNode;
}

interface ItemData {
  pathIcon: string;
  className: string;
  id: number;
}

export interface PromoData extends ItemData {
  description: string;
}

export interface FeatureData extends ItemData {
  title: string;
}

export interface PromoItemProps {
  description: string;
  icon: JSX.Element;
}

export interface FeatureItemProps {
  title: string;
  icon: JSX.Element;
}
