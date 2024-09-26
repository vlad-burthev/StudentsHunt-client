//components
import LoginForm from "@/organisms/LoginForm/LoginForm";
import AuthBanner from "@/organisms/AuthBanner/AuthBanner";

//styles
import styles from "./styles.module.scss";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.template}>
          <LoginForm />
          <AuthBanner />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
