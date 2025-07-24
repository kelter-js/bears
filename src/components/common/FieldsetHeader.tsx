import { FC } from "react";

import { FieldsetHeaderProps } from "./types";
import { Typography } from "./Typography";
import * as S from "./index.styled";

export const FieldsetHeader: FC<FieldsetHeaderProps> = ({
  title,
  customPosition,
}) => (
  <S.FieldsetHeaderContainer customPosition={customPosition}>
    <Typography className="fieldset-header">{title}</Typography>
    <S.FieldsetHeaderFiller />
  </S.FieldsetHeaderContainer>
);
