import { FC, ReactNode } from "react";

import { resolutions } from "../../helpers";
import useMediaQuery from "../../hooks/useMediaQuery";

interface AdaptiveWrapperProps {
  children: ReactNode;
  renderResolutions: {
    mobile?: boolean;
    tablet?: boolean;
    desktop?: boolean;
  };
}

const AdaptiveWrapper: FC<AdaptiveWrapperProps> = ({
  children,
  renderResolutions,
}) => {
  const isDesktopResolution = useMediaQuery(resolutions.desktop);
  const isTabletResolution = useMediaQuery(resolutions.tablet);
  const isMobileResolution = useMediaQuery(resolutions.mobile);

  if (isDesktopResolution && renderResolutions.desktop) {
    return <>{children}</>;
  }

  if (isTabletResolution && renderResolutions.tablet && !isMobileResolution) {
    return <>{children}</>;
  }

  if (isMobileResolution && renderResolutions.mobile) {
    return <>{children}</>;
  }

  return null;
};

export default AdaptiveWrapper;
