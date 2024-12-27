import { FC } from "react";

import { resolutions } from "../../helpers";
import { AdaptiveWrapperProps } from "./types";
import useMediaQuery from "../../hooks/useMediaQuery";

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
