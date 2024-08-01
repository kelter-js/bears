import TabletWrapper from "../common/TabletWrapper";
import MobileWrapper from "../common/MobileWrapper";
import DesktopWrapper from "../common/DesktopWrapper";
import { Icon } from "../Icon";

export const HeaderLogo = () => (
  <>
    <MobileWrapper>
      <Icon iconPath={`/icons/logo-mobile.svg`} />
    </MobileWrapper>

    <TabletWrapper>
      <Icon iconPath={`/icons/logo-tablet.svg`} />
    </TabletWrapper>

    <DesktopWrapper>
      <Icon iconPath={`/icons/logo-desktop.svg`} />
    </DesktopWrapper>
  </>
);
