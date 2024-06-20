import { FC, ReactNode } from "react";

import { TypographyVariants } from "../../types";
import { getTextComponent } from "../../helpers";

interface TypographyProps {
  variant?: TypographyVariants;
  children?: ReactNode;
  className?: string;
}

const Typography: FC<TypographyProps> = ({ variant, children, className }) => {
  const TextElement = getTextComponent(variant);

  return <TextElement className={className}>{children}</TextElement>;
};

export default Typography;
