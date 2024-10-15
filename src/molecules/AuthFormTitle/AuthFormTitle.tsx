//styles
import styles from "./styles.module.scss";

interface AuthFormTitleProps {}

const AuthFormTitle: React.FC<AuthFormTitleProps> = () => {
  return (
    <div className={styles["title-block"]}>
      <h2 className={styles.title}>Ласкаво просимо!</h2>
      <p className={styles.subtitle}>
        Увійшовши або зареєструвавшись у своєму обліковому записі, ви отримаєте
        доступ до всіх функції
      </p>
    </div>
  );
};

export default AuthFormTitle;
