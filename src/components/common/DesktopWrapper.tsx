import { FC, ReactNode } from "react";

import { resolutions } from "../../helpers";
import useMediaQuery from "../../hooks/useMediaQuery";

interface DesktopWrapperProps {
  children: ReactNode;
}

const DesktopWrapper: FC<DesktopWrapperProps> = ({ children }) => {
  const isMobileResolution = useMediaQuery(resolutions.desktop);

  if (isMobileResolution) {
    return <>{children}</>;
  }

  return null;
};

export default DesktopWrapper;
