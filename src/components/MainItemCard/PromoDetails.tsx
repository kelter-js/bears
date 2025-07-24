import { AdaptiveWrapper } from "../common/AdaptiveWrapper";
import { Typography } from "../common/Typography";
import { Button } from "../common/Button";
import * as S from "./MainItemCard.styled";

export const PromoDetails = () => (
  <S.DataContainer>
    <Typography className="item-description">
      Экологически чистая пряжа, ручная работа. Доступны в шести
      <AdaptiveWrapper isDesktop>
        <br />
      </AdaptiveWrapper>{" "}
      расцветках, и трех размерах.
    </Typography>

    <S.List>
      <S.ItemProperty>
        <Typography className="item-property property-name">Цвет:</Typography>
        <Typography className="item-property">«Тиффани»/серый</Typography>
      </S.ItemProperty>
      <S.ItemProperty>
        <Typography className="item-property property-name">
          Диаметр:
        </Typography>
        <Typography className="item-property">25 см</Typography>
      </S.ItemProperty>
      <S.ItemProperty>
        <Typography className="item-property property-name">Высота:</Typography>
        <Typography className="item-property">15 см</Typography>
      </S.ItemProperty>
    </S.List>

    <AdaptiveWrapper isMobile>
      <img src="/image/triple-set-mobile.jpg" />
    </AdaptiveWrapper>

    <AdaptiveWrapper isTablet>
      <img src="/image/triple-set-tablet.jpg" />
    </AdaptiveWrapper>

    <AdaptiveWrapper isDesktop>
      <img src="/image/triple-set-desktop.jpg" />
    </AdaptiveWrapper>

    <Typography className="item-price">Цена: 990 руб.</Typography>

    <Button>заказать</Button>
  </S.DataContainer>
);
