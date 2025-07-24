import { FC } from "react";

import { TypographyProps } from "./types";
import { getTextComponent } from "../../helpers";

export const Typography: FC<TypographyProps> = ({
  variant,
  children,
  className,
}) => {
  const TextElement = getTextComponent(variant);

  return <TextElement className={className}>{children}</TextElement>;
};
