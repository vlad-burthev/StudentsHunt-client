import { forwardRef, useState, type InputHTMLAttributes } from "react";
import clsx from "clsx";

// icons
import CloseEyeIcon from "../images/eye-close.svg?react";
import OpenEyeIcon from "../images/eye-open.svg?react";

// styles
import styles from "./styles.module.scss";

interface UIInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputStyle?: string;
  labelStyle?: string;
  blockStyle?: string;
  svgIcon?: React.ReactElement;
  isPassword?: boolean;
}

const UIInput = forwardRef<HTMLInputElement, UIInputProps>(
  (
    {
      label,
      placeholder,
      type = "text",
      inputStyle,
      labelStyle,
      svgIcon,
      isPassword = false,
      blockStyle,
      ...props
    },
    ref
  ) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
      <label className={clsx(styles["input-block"], blockStyle)}>
        {label && (
          <span className={clsx(styles["input-label"], labelStyle)}>
            {label}
          </span>
        )}

        <div className={styles["input-wrapper"]}>
          {svgIcon && <span className={styles["input-icon"]}>{svgIcon}</span>}

          <input
            ref={ref}
            className={clsx(styles["input"], inputStyle)}
            placeholder={placeholder}
            type={isPassword ? (isShowPassword ? "text" : "password") : type}
            {...props}
          />

          {isPassword && (
            <span
              className={styles["password-toggle"]}
              onClick={() => setIsShowPassword((prev) => !prev)}
            >
              {isShowPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
            </span>
          )}
        </div>
      </label>
    );
  }
);

export default UIInput;
