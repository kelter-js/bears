import { FC } from "react";

import { PromoItemProps } from "../../../types";
import { Typography } from "../../common/Typography";
import * as S from "./PromoItem.styled";

const PromoItem: FC<PromoItemProps> = ({ description, icon }) => (
  <S.Container>
    <Typography className="promoDescription">{description}</Typography>
    {icon}
  </S.Container>
);

export default PromoItem;
