import { AdaptiveWrapper } from "../common/AdaptiveWrapper";
import { Typography } from "../common/Typography";
import { PromoDetails } from "./PromoDetails";
import { Icon } from "../Icon";

import * as S from "./MainItemCard.styled";

export const MainItemCard = () => (
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

      <AdaptiveWrapper isMobile>
        <PromoDetails />
      </AdaptiveWrapper>

      <AdaptiveWrapper isTablet isDesktop>
        <S.DetailsContainer>
          <PromoDetails />
        </S.DetailsContainer>
      </AdaptiveWrapper>
    </S.Content>

    <AdaptiveWrapper isMobile>
      <Icon iconPath={`/icons/page-pattern-mobile.svg`} />
    </AdaptiveWrapper>

    <AdaptiveWrapper isTablet isDesktop>
      <Icon
        className="main-item-pattern"
        iconPath={`/icons/page-pattern-tablet.svg`}
      />
    </AdaptiveWrapper>
  </S.Container>
);
