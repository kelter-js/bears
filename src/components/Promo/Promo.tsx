import { useMemo } from "react";

import { AdaptiveWrapper } from "../common/AdaptiveWrapper";
import { Typography } from "../common/Typography";
import { PROMO_ITEMS } from "../../constants";
import { Icon } from "../Icon";
import PromoItem from "./components/PromoItem";
import * as S from "./Promo.styled";

export const Promo = () => {
  const promoItems = useMemo(
    () =>
      PROMO_ITEMS.map(({ description, id, pathIcon, className }) => (
        <PromoItem
          key={id}
          description={description}
          icon={
            <S.IconContainer>
              <Icon iconName={pathIcon} className={className} />
            </S.IconContainer>
          }
        />
      )),
    []
  );

  return (
    <S.Container>
      <S.PromoContainer>
        <Typography className="promo-text" variant="h1">
          Милые штуки{" "}
          <AdaptiveWrapper isMobile>
            <br />
          </AdaptiveWrapper>
          ручной{" "}
          <AdaptiveWrapper isTablet isDesktop>
            <br />
          </AdaptiveWrapper>
          <AdaptiveWrapper isMobile>
            <br />
          </AdaptiveWrapper>
          работы для дома
        </Typography>

        <AdaptiveWrapper isMobile>
          <S.PromoImage alt="promo title" src="/image/hero-mobile.jpg" />
        </AdaptiveWrapper>

        <AdaptiveWrapper isTablet>
          <S.PromoImage alt="promo title" src="/image/hero-tablet.jpg" />
        </AdaptiveWrapper>

        <AdaptiveWrapper isDesktop>
          <S.PromoImage alt="promo title" src="/image/hero-desktop.jpg" />
        </AdaptiveWrapper>
      </S.PromoContainer>

      <S.PromoItemsContainer>{promoItems}</S.PromoItemsContainer>

      <AdaptiveWrapper isTablet isDesktop>
        <S.Pattern alt="pattern" src="/icons/page-pattern-filled-tablet.svg" />
      </AdaptiveWrapper>
    </S.Container>
  );
};
