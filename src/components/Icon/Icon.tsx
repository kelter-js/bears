import { FC } from "react";

interface IconProps {
  iconPath?: string;
  iconName?: string;
  className?: string;
}

export const Icon: FC<IconProps> = ({ iconPath, iconName, className }) => (
  <img src={iconPath ?? iconName} className={className ?? "svg-icon"} />
);
