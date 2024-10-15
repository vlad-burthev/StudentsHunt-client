import type { FC } from "react";

//styles
import styles from "./styles.module.scss";

interface AuthTemplateProps {
  children: React.ReactElement;
}

const AuthTemplate: FC<AuthTemplateProps> = ({ children }) => {
  return <div className={styles.template}>{children}</div>;
};

export default AuthTemplate;
