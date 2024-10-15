import { Outlet } from "react-router-dom";

//styles
import styles from "./styles.module.scss";
import Header from "@/organisms/Header/Header";
import Sidebar from "@/organisms/Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />

      <div className={styles.content}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
