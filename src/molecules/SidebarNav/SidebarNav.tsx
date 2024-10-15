import type { FC } from "react";
//components
import SidebarLinks from "./SidebarLinks/SidebarLinks";
//styles
import styles from "./styles.module.scss";
//icons
import StatisticIcon from "@/assets/icons/statistic.svg?react";
import VacancyIcon from "@/assets/icons/vacancy.svg?react";

interface SidebarNavProps {}

const SidebarNav: FC<SidebarNavProps> = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles["nav-list"]}>
        <SidebarLinks to="">
          <span>
            <StatisticIcon />
          </span>
          <span>Компанії</span>
        </SidebarLinks>

        <SidebarLinks to="">
          <span>
            <VacancyIcon />
          </span>
          <span>Вакансії</span>
        </SidebarLinks>

        <SidebarLinks to="">
          <span>
            <StatisticIcon />
          </span>
          <span>Універститети</span>
        </SidebarLinks>
      </ul>
    </nav>
  );
};

export default SidebarNav;
