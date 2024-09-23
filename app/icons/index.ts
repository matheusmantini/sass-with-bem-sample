import { FC } from "react";
import { ClickIcon } from "./click-icon";
import { PhoneIcon } from "./phone-icon";

interface IconProps {
  fillColor?: string;
  strokeColor?: string;
}

const icons: Record<string, FC<IconProps>> = {
  ClickIcon,
  PhoneIcon,
};

export default icons;
