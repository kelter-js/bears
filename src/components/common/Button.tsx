import { FC } from "react";

import { ButtonProps } from "./types";
import * as S from "./index.styled";

export const Button: FC<ButtonProps> = ({ children, className, type }) => (
  <S.Button className={className} type={type}>
    {children}
  </S.Button>
);
