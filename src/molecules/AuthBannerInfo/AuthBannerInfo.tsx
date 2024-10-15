//styles
import styles from "./styles.module.scss";
//icons
import LogoIcon from "@/assets/icons/logo.svg?react";

interface AuthBannerInfoProps {}

const AuthBannerInfo: React.FC<AuthBannerInfoProps> = () => {
  return (
    <div className={styles["info"]}>
      <LogoIcon />

      <h3>Ваша кар'єра гарантована на нашій платформі</h3>
      <p>
        Розпочніть свою нову кар'єру з нами, скориставшись послугами, які ми
        надаємо.
      </p>
    </div>
  );
};

export default AuthBannerInfo;
