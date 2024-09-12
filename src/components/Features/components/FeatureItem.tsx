import { FC } from "react";

import { FeatureItemProps } from "../../../types";
import Typography from "../../common/Typography";
import * as S from "../Features.styled";

const FeatureItem: FC<FeatureItemProps> = ({ title, icon }) => (
  <S.Feature>
    {icon}
    <Typography variant="h3" className="feature-title">
      {title}
    </Typography>
  </S.Feature>
);

export default FeatureItem;
