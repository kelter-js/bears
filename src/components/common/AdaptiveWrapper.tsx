import { FC, ReactNode } from "react";

import { resolutions } from "../../helpers";
import useMediaQuery from "../../hooks/useMediaQuery";

interface AdaptiveWrapperProps {
  children: ReactNode;
  isMobile?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
}

const AdaptiveWrapper: FC<AdaptiveWrapperProps> = ({
  children,
  isTablet,
  isDesktop,
  isMobile,
}) => {
  const isDesktopResolution = useMediaQuery(resolutions.desktop);
  const isTabletResolution = useMediaQuery(resolutions.tablet);
  const isMobileResolution = useMediaQuery(resolutions.mobile);

  if (isDesktopResolution && isDesktop) {
    return <>{children}</>;
  }

  if (isTabletResolution && isTablet && !isMobileResolution) {
    return <>{children}</>;
  }

  if (isMobileResolution && isMobile) {
    return <>{children}</>;
  }

  return null;
};

export default AdaptiveWrapper;
