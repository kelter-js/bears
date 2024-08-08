import { FC } from "react";

import { IconButtonProps } from "../../types";
import * as S from "./IconButton.styled";

export const IconButton: FC<IconButtonProps> = ({
  onClick,
  className,
  children,
}) => (
  <S.IconButton className={className} onClick={onClick}>
    {children}
  </S.IconButton>
);
