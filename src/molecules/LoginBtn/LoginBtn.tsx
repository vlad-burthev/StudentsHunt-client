import type { FC } from "react";
import { Link } from "react-router-dom";

//styles
import styles from "./styles.module.scss";
//icons
import { motion } from "framer-motion";
import { routes } from "@/routes/routes";

interface LoginBtnProps {}

const LoginBtn: FC<LoginBtnProps> = () => {
  const list = {
    hidden: { opacity: 0, height: 0 }, // Скрытый список
    visible: {
      opacity: 1,
      height: "auto",
    },
  };

  return (
    <motion.div
      className={styles.btnWrapper}
      initial="hidden"
      whileHover="visible" // Анимация при наведении
    >
      <motion.button initial="hidden" className={styles.btn}>
        <span className={styles.text}>Увійти</span>
      </motion.button>

      <motion.ul variants={list} className={styles.list}>
        <motion.li className={styles.item}>
          <Link className={styles["item-link"]} to={routes.studentLogin}>
            Студент
          </Link>
        </motion.li>
        <motion.li className={styles.item}>
          <Link className={styles["item-link"]} to={routes.recruiterLogin}>
            Рекрутер
          </Link>
        </motion.li>
        <motion.li className={styles.item}>
          <Link className={styles["item-link"]} to={routes.companyLogin}>
            Компанія
          </Link>
        </motion.li>
        <motion.li className={styles.item}>
          <Link className={styles["item-link"]} to={routes.universityLogin}>
            Університет
          </Link>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default LoginBtn;
