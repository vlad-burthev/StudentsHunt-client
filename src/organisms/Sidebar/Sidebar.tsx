import type { FC } from "react";

//styles
import styles from "./styles.module.scss";
//images
import LogoImage from "@/assets/icons/logo.svg?react";
//routes
import { routes } from "@/routes/routes";
import { Link } from "react-router-dom";
import SidebarNav from "@/molecules/SidebarNav/SidebarNav";
import LoginBtn from "@/molecules/LoginBtn/LoginBtn";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.container}>
        <Link to={routes.home}>
          <LogoImage />
        </Link>

        <SidebarNav />

        <div>
          <LoginBtn />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
