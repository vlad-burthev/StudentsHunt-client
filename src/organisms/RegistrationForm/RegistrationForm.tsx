import { UIFileInput, UIInput, UIPhoneInput } from "@/atoms/UIInput/UIInput";
import AuthFormTitle from "@/molecules/AuthFormTitle/AuthFormTitle";
import UIButton from "@/atoms/UIButton/UIButton";

//styles
import styles from "./styles.module.scss";

//icons
import MailIcon from "@/assets/icons/mail.svg?react";
import LockIcon from "@/assets/icons/lock.svg?react";
import SafetyIcon from "@/assets/icons/safety.svg?react";
import WWWIcon from "@/assets/icons/www.svg?react";
import { useForm } from "react-hook-form";
import { UITextArea } from "@/atoms/UITextArea/UITextArea";
import { useRedgistrationMutation } from "@/api/userApi/userApi";
import { useLocation } from "react-router-dom";

interface RegistrationFormProps {}

const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  const { register, handleSubmit } = useForm();
  const [registration, { error, isError, isLoading, isSuccess }] =
    useRedgistrationMutation();
  const { pathname } = useLocation();
  const endpoint = pathname.split("/").pop();

  const onSubmit = async (data: any) => {
    const formData = new FormData();

    formData.append("email", data?.email);
    formData.append("password", data?.password);
    formData.append("phone", data?.phone);
    formData.append("site", data?.site);
    formData.append("egrpouCode", data?.egrpou);
    formData.append("about", data?.about);

    // Обработка файлов отдельно
    if (data.avatar && data.avatar[0]) {
      formData.append("avatar", data.avatar[0]);
    }
    if (data.photos) {
      Array.from(data.photos as FileList).forEach((file) => {
        formData.append("photos", file);
      });
    }

    await registration({ regData: formData, endpoint });
  };

  console.log(error, isError, isLoading, isSuccess);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <AuthFormTitle />
      <div className={styles["input-template"]}>
        <UIInput
          {...register("email")}
          type="email"
          label="Корпоративна пошта"
          placeholder="example@studentshunt.com"
          svgIcon={<MailIcon />}
        />
        <UIInput
          {...register("password")}
          type="password"
          isPassword={true}
          label="Пароль"
          placeholder="більше 6 символів"
          svgIcon={<LockIcon />}
        />

        <UIPhoneInput {...register("phone")} label="Телефон" />

        <UIInput
          {...register("egrpou")}
          type="text"
          label="Код ЄДРПОУ"
          placeholder="12345678"
          svgIcon={<SafetyIcon />}
        />
        <UIInput
          {...register("site")}
          type="text"
          label="Адреса сайту"
          placeholder="http://studentsHunt"
          svgIcon={<WWWIcon />}
        />

        <UITextArea
          blockStyle={styles["textarea-block"]}
          {...register("about")}
          id="about"
          name="about"
          label="Про компанію"
          placeholder="Наша компанія створює ПЗ для ..."
        />

        <UIFileInput
          {...register("avatar", {
            onChange: () => {},
          })}
          multiple={false}
          name="avatar"
          label="Лого компанії"
        />

        <UIFileInput
          {...register("photos")}
          label="Фото компанії (до 5)"
          multiple={true}
          name="photos"
        />
      </div>
      <UIButton
        addedStyles={styles["submit-btn"]}
        type="submit"
        variant="success"
      >
         Зареєструватись
      </UIButton>
    </form>
  );
};

export default RegistrationForm;
