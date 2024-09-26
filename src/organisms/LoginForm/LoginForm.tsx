//components
import UIButton from "@/atoms/UIButton/UIButton";
import UIInput from "@/atoms/UIInput/UIInput";
import AuthFormTitle from "@/molecules/AuthFormTitle/AuthFormTitle";
import AuthToggle from "@/molecules/AuthToggle/AuthToggle";

//styles
import styles from "./styles.module.scss";

//icons
import MailIcon from "@/assets/icons/mail.svg?react";
import LockIcon from "@/assets/icons/lock.svg?react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { routers } from "@/Routes/routes";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form className={styles.from} onSubmit={handleSubmit(onSubmit)}>
      <AuthFormTitle />

      <UIInput
        blockStyle={styles["input-block"]}
        label="Email Address"
        svgIcon={<MailIcon />}
        {...register("firstName", { required: true, maxLength: 20 })}
      />
      <UIInput
        isPassword={true}
        label="Password"
        svgIcon={<LockIcon />}
        blockStyle={styles["input-block"]}
      />

      <UIButton
        addedStyles={styles["submit-btn"]}
        variant="success"
        type="submit"
      >
        Login
      </UIButton>

      <AuthToggle
        text="Not registered yet?"
        link="Create an account"
        path={routers.home}
      />
    </form>
  );
};

export default LoginForm;
