//styles
import styles from "./styles.module.scss";

interface AuthFormTitleProps {}

const AuthFormTitle: React.FC<AuthFormTitleProps> = () => {
  return (
    <div className={styles["title-block"]}>
      <h2 className={styles.title}>Hi There, Welcome!</h2>
      <p className={styles.subtitle}>
        By sign in or sign up with your account, you can get all features here.
      </p>
    </div>
  );
};

export default AuthFormTitle;
