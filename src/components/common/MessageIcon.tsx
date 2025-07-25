import { FC } from "react";
import { IconProps } from "../Icon/Icon";

export const MessageIcon: FC<IconProps> = ({ className }) => (
  <svg
    width="32"
    height="21"
    viewBox="0 0 32 21"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M28 0H4C1.8 0 0 1.8 0 4V17C0 19.2 1.8 21 4 21H28C30.2 21 32 19.2 32 17V4C32 1.8 30.2 0 28 0ZM2 5.3L9 10.6L2 15.9V5.3ZM30 17C30 18.1 29.1 19 28 19H4C2.9 19 2 18.1 2 17L9.8 11.1L14.2 14.4C14.7 14.8 15.4 15 16 15C16.6 15 17.3 14.8 17.8 14.4L22.2 11.1L30 17ZM30 15.8L23 10.5L30 5.2V15.8ZM17.2 13.6C16.8 13.9 16.4 14 16 14C15.6 14 15.1 13.9 14.8 13.6L10.7 10.5L9.9 9.9L2 4C2 2.9 2.9 2 4 2H28C29.1 2 30 2.9 30 4L17.2 13.6Z"
      fill="currentColor"
    />
  </svg>
);
