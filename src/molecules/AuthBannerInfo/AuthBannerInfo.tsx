//styles
import styles from "./styles.module.scss";
//icons
import LogoIcon from "@/assets/icons/logo.svg?react";

interface AuthBannerInfoProps {}

const AuthBannerInfo: React.FC<AuthBannerInfoProps> = () => {
  return (
    <div className={styles["info"]}>
      <LogoIcon />
      <h3>Your career is guaranteed on our platform job provider</h3>
      <p>
        Let’s start your new career with us by using the services we provide.
      </p>
    </div>
  );
};

export default AuthBannerInfo;
