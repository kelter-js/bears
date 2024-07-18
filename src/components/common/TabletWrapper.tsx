import { FC, ReactNode } from "react";

import { resolutions } from "../../helpers";
import useMediaQuery from "../../hooks/useMediaQuery";

interface TabletWrapperProps {
  children: ReactNode;
}

const TabletWrapper: FC<TabletWrapperProps> = ({ children }) => {
  const isMobileResolution = useMediaQuery(resolutions.tablet);

  if (isMobileResolution) {
    return <>{children}</>;
  }

  return null;
};

export default TabletWrapper;
