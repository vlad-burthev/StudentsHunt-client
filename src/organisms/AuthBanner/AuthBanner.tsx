import AuthBannerInfo from "@/molecules/AuthBannerInfo/AuthBannerInfo";

//styles
import styles from "./styles.module.scss";

interface AuthBannerProps {}

const AuthBanner: React.FC<AuthBannerProps> = () => {
  return (
    <div className={styles.banner}>
      <AuthBannerInfo />
    </div>
  );
};

export default AuthBanner;
