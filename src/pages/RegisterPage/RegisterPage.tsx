//components
import RegistrationForm from "@/organisms/RegistrationForm/RegistrationForm";
import AuthBanner from "@/organisms/AuthBanner/AuthBanner";

//styles
import styles from "./styles.module.scss";
import AuthTemplate from "@/templates/AuthTemplate/AuthTemplate";

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <AuthTemplate>
          <>
            <AuthBanner />
            <RegistrationForm />
          </>
        </AuthTemplate>
      </div>
    </div>
  );
};

export default RegisterPage;
