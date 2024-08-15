import AdaptiveWrapper from "../common/AdaptiveWrapper";
import { Icon } from "../Icon";

export const HeaderLogo = () => (
  <>
    <AdaptiveWrapper renderResolutions={{ mobile: true }}>
      <Icon iconPath={`/icons/logo-mobile.svg`} />
    </AdaptiveWrapper>

    <AdaptiveWrapper renderResolutions={{ tablet: true }}>
      <Icon iconPath={`/icons/logo-tablet.svg`} />
    </AdaptiveWrapper>

    <AdaptiveWrapper renderResolutions={{ desktop: true }}>
      <Icon iconPath={`/icons/logo-desktop.svg`} />
    </AdaptiveWrapper>
  </>
);
