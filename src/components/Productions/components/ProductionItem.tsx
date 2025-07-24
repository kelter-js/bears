import { FC } from "react";

import { CatalogItemData } from "../../../types";
import { Typography } from "../../common/Typography";
import { CartIcon } from "../../common/CartIcon";
import * as S from "./ProductionItem.styled";

export const ProductionItem: FC<Omit<CatalogItemData, "id">> = ({
  imagePath,
  title,
  description,
  price,
}) => (
  <S.Container>
    <img alt={`description for ${title}`} src={imagePath} />

    <S.ContentContainer className="content-container">
      <S.TitleContainer>
        <Typography className="title">{title}</Typography>
        <Typography className="description">{description}</Typography>
      </S.TitleContainer>

      <S.BuyContainer>
        <S.Divider />

        <S.PriceContainer>
          <Typography className="price">{price}</Typography>

          <button className="buy-button" onClick={() => {}}>
            <CartIcon className="buy-icon" />
          </button>
        </S.PriceContainer>
      </S.BuyContainer>
    </S.ContentContainer>
  </S.Container>
);
