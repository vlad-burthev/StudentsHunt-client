import { forwardRef, useState } from "react";
import clsx from "clsx";
import { InputMask } from "@react-input/mask";

// icons
import CloseEyeIcon from "../images/eye-close.svg?react";
import OpenEyeIcon from "../images/eye-open.svg?react";
import PhoneIcone from "@/assets/icons/phone.svg?react";
// styles
import styles from "./styles.module.scss";
//types
import { UIFileInputProps, UIInputProps, UIPhoneInputProps } from "../types";

export const UIInput = forwardRef<HTMLInputElement, UIInputProps>(
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

export const UIPhoneInput = forwardRef<HTMLInputElement, UIPhoneInputProps>(
  ({ label, labelStyle, svgIcon, ...props }, ref) => {
    return (
      <label className={styles.phoneInput}>
        {label && (
          <span className={clsx(styles["input-label"], labelStyle)}>
            {label}
          </span>
        )}
        <div className={styles["input-wrapper"]}>
          <span className={styles["input-icon"]}>
            <PhoneIcone />
          </span>

          <InputMask
            ref={ref}
            className={styles.input}
            id="phone"
            mask="+38 (___) ___-__-__"
            placeholder="+380 (__) ___-__-__"
            replacement={{ _: /\d/ }}
            {...props}
          />
        </div>
      </label>
    );
  }
);

export const UIFileInput = forwardRef<HTMLInputElement, UIFileInputProps>(
  ({ multiple = false, label, onChange, ...props }, ref) => {
    const [fileNames, setFileNames] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const maxFiles = 5; // Максимум 5 файлов
    const maxSize = 5 * 1024 * 1024; // Максимум 5 МБ на файл

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;

      if (!files) return;

      // Проверка количества файлов
      if (files.length > maxFiles) {
        setError(`Можно загрузить не более ${maxFiles} файлов.`);
        setFileNames("");
        return;
      }

      // Проверка размера каждого файла
      const oversizedFiles = Array.from(files).filter(
        (file) => file.size > maxSize
      );
      if (oversizedFiles.length > 0) {
        setError(`Каждый файл должен быть не более 5 МБ.`);
        setFileNames("");
        return;
      }

      // Если нет ошибок, сбрасываем состояние ошибки
      setError(null);

      // Сохраняем имена файлов
      const names = Array.from(files)
        .map((file) => file.name)
        .join(", ");
      setFileNames(names);

      // Вызов кастомного onChange (если передан), чтобы синхронизировать с react-hook-form
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <div className={styles.fileInputContainer}>
        <div className={styles["input-label"]}>{label}</div>
        <label className={styles.customLabel}>
          Завантажити (макс. 5мб)
          <input
            className={styles.input}
            type="file"
            multiple={multiple}
            onChange={handleChange}
            ref={ref} // передаем ref
            style={{ display: "none" }}
            {...props}
          />
        </label>
        <span className={styles.fileName}>
          {fileNames || (error ? error : "Файл не обрано")}
        </span>
      </div>
    );
  }
);
