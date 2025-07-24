import { resolutions } from "../helpers";
import useMediaQuery from "./useMediaQuery";

export const useGetResolution = () => {
  const desktop = useMediaQuery(resolutions.desktop);
  const tablet = useMediaQuery(resolutions.tablet);
  const mobile = useMediaQuery(resolutions.mobile);

  return {
    desktop,
    tablet,
    mobile,
  };
};
