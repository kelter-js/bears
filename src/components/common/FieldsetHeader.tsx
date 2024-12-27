import { FC } from "react";

import { FieldsetHeaderProps } from "./types";
import Typography from "./Typography";
import * as S from "./index.styled";

const FieldsetHeader: FC<FieldsetHeaderProps> = ({ title }) => (
  <S.FieldsetHeaderContainer>
    <Typography className="fieldset-header">{title}</Typography>
    <S.FieldsetHeaderFiller />
  </S.FieldsetHeaderContainer>
);

export default FieldsetHeader;
