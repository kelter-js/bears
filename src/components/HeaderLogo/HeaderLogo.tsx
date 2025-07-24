import { AdaptiveWrapper } from "../common/AdaptiveWrapper";
import { Icon } from "../Icon";

export const HeaderLogo = () => (
  <>
    <AdaptiveWrapper isMobile>
      <Icon iconPath="/icons/logo-mobile.svg" />
    </AdaptiveWrapper>

    <AdaptiveWrapper isTablet>
      <Icon iconPath="/icons/logo-tablet.svg" />
    </AdaptiveWrapper>

    <AdaptiveWrapper isDesktop>
      <Icon iconPath="/icons/logo-desktop.svg" />
    </AdaptiveWrapper>
  </>
);
