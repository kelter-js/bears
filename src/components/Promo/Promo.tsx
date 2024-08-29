import { useMemo } from "react";
import { PROMO_ITEMS } from "../../constants";
import AdaptiveWrapper from "../common/AdaptiveWrapper";
import Typography from "../common/Typography";
import PromoItem from "./components/PromoItem";
import { Icon } from "../Icon";
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
    <section>
      <S.PromoContainer>
        <Typography className="promo-text" variant="h1">
          Милые штуки <br /> ручной <br /> работы для дома
        </Typography>

        <AdaptiveWrapper isMobile>
          <S.PromoImage alt="promo title" src="/image/hero-mobile.jpg" />
        </AdaptiveWrapper>

        <AdaptiveWrapper isTablet isDesktop>
          <S.PromoImage alt="promo title" src="/image/hero-desktop.jpg" />
        </AdaptiveWrapper>
      </S.PromoContainer>

      <S.PromoItemsContainer>{promoItems}</S.PromoItemsContainer>
    </section>
  );
};
