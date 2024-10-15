import type { FC } from "react";

//styles
import styles from "./styles.module.scss";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return <header className={styles.header}></header>;
};

export default Header;
