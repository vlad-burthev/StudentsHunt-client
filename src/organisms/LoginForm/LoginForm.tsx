//components
import UIButton from "@/atoms/UIButton/UIButton";
import { UIInput } from "@/atoms/UIInput/UIInput";
import AuthFormTitle from "@/molecules/AuthFormTitle/AuthFormTitle";
import AuthToggle from "@/molecules/AuthToggle/AuthToggle";

//styles
import styles from "./styles.module.scss";

//icons
import MailIcon from "@/assets/icons/mail.svg?react";
import LockIcon from "@/assets/icons/lock.svg?react";
import { useForm } from "react-hook-form";
import { routes } from "@/routes/routes";
import { useLocation } from "react-router-dom";
import { useLoginMutation } from "@/api/userApi/userApi";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const { pathname } = useLocation();
  const endpoint = pathname.split("/").pop();
  const [login, { data, error, isError, isSuccess, isLoading }] =
    useLoginMutation();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log("go");
    await login({ authData: data, endpoint });
  };

  console.log(data, error, isError, isSuccess, isLoading);

  return (
    <form className={styles.from} onSubmit={handleSubmit(onSubmit)}>
      <AuthFormTitle />

      <UIInput
        type="email"
        blockStyle={styles["input-block"]}
        label="Корпоративна пошта"
        placeholder="example@studnetshunt.com"
        svgIcon={<MailIcon />}
        {...register("email")}
      />
      <UIInput
        type="password"
        isPassword={true}
        label="Пароль"
        placeholder="більше 6 символів"
        svgIcon={<LockIcon />}
        blockStyle={styles["input-block"]}
        {...register("password")}
      />

      <UIButton
        addedStyles={styles["submit-btn"]}
        variant="success"
        type="submit"
      >
        Авторизуватись
      </UIButton>

      <AuthToggle
        text="Ще не зареєстровані?"
        link="Створіть акаунт"
        path={routes.reg + "/" + pathname.split("/")[2]}
      />
    </form>
  );
};

export default LoginForm;
