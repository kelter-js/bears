import { FC } from "react";

import { CatalogItemData } from "../../../types";
import Typography from "../../common/Typography";
import { Icon } from "../../Icon";
import * as S from "./ProductionItem.styled";

export const ProductionItem: FC<Omit<CatalogItemData, "id">> = ({
  imagePath,
  title,
  description,
  price,
}) => (
  <S.Container>
    <img alt={`description for ${title}`} src={imagePath} />

    <S.ContentContainer>
      <S.TitleContainer>
        <Typography className="title">{title}</Typography>
        <Typography className="description">{description}</Typography>
      </S.TitleContainer>

      <S.Divider />

      <S.PriceContainer>
        <Typography className="price">{price}</Typography>

        <button className="buy-button" onClick={() => {}}>
          <Icon iconPath={`/icons/cart.svg`} className="buy-icon" />
        </button>
      </S.PriceContainer>
    </S.ContentContainer>
  </S.Container>
);
