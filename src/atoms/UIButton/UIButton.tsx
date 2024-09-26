import type { ButtonHTMLAttributes, FC } from "react";

//styles
import styles from "./styles.module.scss";
import clsx from "clsx";

interface UIButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "success";
  addedStyles?: string;
}

const UIButton: FC<UIButtonProps> = ({
  type,
  children,
  variant = "success",
  addedStyles,
}) => {
  return (
    <button
      className={clsx(styles["button"], styles[variant], addedStyles)}
      type={type}
    >
      {children}
    </button>
  );
};

export default UIButton;
