import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
import icons from "@/app/icons";

interface ButtonProps {
  label: string;
  hasIcon?: boolean;
  iconName?: string;
  outlined?: boolean;
  rounded?: boolean;
  size?: "small" | "medium" | "large";
  clicked?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  hasIcon,
  iconName = "ClickIcon",
  outlined,
  rounded,
  size = "medium",
  clicked,
  onClick,
}) => {
  const buttonClass = classNames(styles.button, {
    [styles["button--outlined"]]: outlined,
    [styles["button--rounded"]]: rounded,
    [styles[`button--${size}`]]: size,
    [styles["button--clicked"]]: clicked,
  });

  const SelectedIcon = iconName && icons[iconName];

  return (
    <button className={buttonClass} onClick={onClick}>
      {hasIcon && SelectedIcon ? (
        <>
          <SelectedIcon />
          {label}
        </>
      ) : (
        label
      )}
    </button>
  );
};
