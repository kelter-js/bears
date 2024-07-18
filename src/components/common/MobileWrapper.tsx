import { FC, ReactNode } from "react";

import { resolutions } from "../../helpers";
import useMediaQuery from "../../hooks/useMediaQuery";

interface MobileWrapperProps {
  children: ReactNode;
}

const MobileWrapper: FC<MobileWrapperProps> = ({ children }) => {
  const isMobileResolution = useMediaQuery(resolutions.mobile);

  if (isMobileResolution) {
    return <>{children}</>;
  }

  return null;
};

export default MobileWrapper;
