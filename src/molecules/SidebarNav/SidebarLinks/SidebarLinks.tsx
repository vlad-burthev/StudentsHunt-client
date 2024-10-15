import React, { type FC } from "react";
import { NavLink } from "react-router-dom";

//styles
import styles from "./styles.module.scss";

interface SidebarLinksProps {
  children: React.ReactNode;
  to: string;
}

const SidebarLinks: FC<SidebarLinksProps> = ({ children, to }) => {
  return (
    <li className={styles.item}>
      <NavLink to={to} className={styles["item-link"]}>
        {children}
      </NavLink>
    </li>
  );
};

export default SidebarLinks;
