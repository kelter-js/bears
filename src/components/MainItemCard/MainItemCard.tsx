import Typography from "../common/Typography";
import { Icon } from "../Icon";
import * as S from "./MainItemCard.styled";

export const MainItemCard = () => {
  return (
    <S.Container>
      <S.Content>
        <S.HeaderContainer>
          <Typography className="item-header" variant="h2">
            Вязаные корзинки
          </Typography>

          <Typography className="item-label" variant="h3">
            товар недели
          </Typography>
        </S.HeaderContainer>

        <Typography className="item-description">
          Экологически чистая пряжа, ручная работа. Доступны в шести расцветках,
          и трех размерах.
        </Typography>

        <S.List>
          <S.ItemProperty>
            <Typography className="item-property property-name">
              Цвет:
            </Typography>
            <Typography className="item-property">«Тиффани»/серый</Typography>
          </S.ItemProperty>
          <S.ItemProperty>
            <Typography className="item-property property-name">
              Диаметр:
            </Typography>
            <Typography className="item-property">25 см</Typography>
          </S.ItemProperty>
          <S.ItemProperty>
            <Typography className="item-property property-name">
              Высота:
            </Typography>
            <Typography className="item-property">15 см</Typography>
          </S.ItemProperty>
        </S.List>

        <img src="/image/triple-set-mobile.jpg" />

        <Typography className="item-price">Цена: 990 руб.</Typography>

        <S.BuyButton>заказать</S.BuyButton>
      </S.Content>
      <Icon iconPath={`/icons/page-pattern-mobile.svg`} />
    </S.Container>
  );
};
