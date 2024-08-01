import { FC } from "react";

interface IconProps {
  iconPath?: string;
  iconName?: string;
}

export const Icon: FC<IconProps> = ({ iconPath, iconName }) => (
  <img src={iconPath ?? iconName} className="svg-icon" />
);
