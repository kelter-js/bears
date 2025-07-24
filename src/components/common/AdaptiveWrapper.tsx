import { FC } from "react";

import { AdaptiveWrapperProps } from "./types";
import { useGetResolution } from "../../hooks/useGetResolutions";

export const AdaptiveWrapper: FC<AdaptiveWrapperProps> = ({
  children,
  isTablet,
  isDesktop,
  isMobile,
}) => {
  const { desktop, tablet, mobile } = useGetResolution();

  if (desktop && isDesktop) {
    return <>{children}</>;
  }

  if (tablet && isTablet && !mobile) {
    return <>{children}</>;
  }

  if (mobile && isMobile) {
    return <>{children}</>;
  }

  return null;
};
