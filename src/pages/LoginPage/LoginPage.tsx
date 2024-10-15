//components
import LoginForm from "@/organisms/LoginForm/LoginForm";
import AuthBanner from "@/organisms/AuthBanner/AuthBanner";

//styles
import styles from "./styles.module.scss";
import AuthTemplate from "@/templates/AuthTemplate/AuthTemplate";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <AuthTemplate>
          <>
            <LoginForm />
            <AuthBanner />
          </>
        </AuthTemplate>
      </div>
    </main>
  );
};

export default LoginPage;
