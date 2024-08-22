import AdaptiveWrapper from "../common/AdaptiveWrapper";
import Typography from "../common/Typography";
import * as S from "./Promo.styled";

export const Promo = () => (
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
  </section>
);
