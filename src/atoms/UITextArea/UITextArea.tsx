import { forwardRef } from "react";

//styles
import styles from "./styles.module.scss";

//types
import { UITextAreaProps } from "../types";
import clsx from "clsx";

export const UITextArea = forwardRef<HTMLTextAreaElement, UITextAreaProps>(
  ({ label, id, blockStyle, ...props }, ref) => {
    return (
      <div className={clsx(styles["textarea-wrapper"], blockStyle)}>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        <textarea className={styles.textarea} id={id} ref={ref} {...props} />
      </div>
    );
  }
);
